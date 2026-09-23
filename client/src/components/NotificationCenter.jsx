import React, { useState, useEffect, useRef } from 'react';
import { Bell, Check, CheckCheck, MessageSquare, Heart, Package, Calendar, Award, X, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NOTIF_ICONS = {
  comment: { icon: MessageSquare, color: '#3B82F6', bg: '#EFF6FF' },
  like: { icon: Heart, color: '#EC4899', bg: '#FDF2F8' },
  market_join: { icon: Package, color: '#F59E0B', bg: '#FFFBEB' },
  event_reminder: { icon: Calendar, color: '#10B981', bg: '#ECFDF5' },
  sos_accepted: { icon: Award, color: '#8B5CF6', bg: '#F5F3FF' }
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return '방금 전';
  if (mins < 60) return `${mins}분 전`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
}

export default function NotificationCenter({ isOpen, onClose, onNavigate }) {
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen && currentUser) {
      fetchNotifications();
    }
  }, [isOpen, currentUser]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const fetchNotifications = async () => {
    try {
      const res = await fetch(`/api/notifications?userId=${currentUser.id}`);
      if (res.ok) setNotifications(await res.json());
    } catch (e) { console.error(e); }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = async (notifId) => {
    await fetch(`/api/notifications/${notifId}/read`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
    setNotifications(prev => prev.map(n => n.id === notifId ? { ...n, isRead: true } : n));
  };

  const markAllRead = async () => {
    await fetch('/api/notifications/read-all', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: currentUser.id }) });
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleNotifClick = (notif) => {
    markAsRead(notif.id);
    if (onNavigate) {
      const tabMap = { project: 'workspace', post: 'board', market: 'market', event: 'calendar' };
      onNavigate(tabMap[notif.targetType] || 'dashboard');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="notif-panel" ref={panelRef}>
      <div className="notif-header">
        <h4>🔔 알림</h4>
        <div className="notif-header-actions">
          {unreadCount > 0 && (
            <button className="notif-read-all-btn" onClick={markAllRead}>
              <CheckCheck size={14} /> 모두 읽음
            </button>
          )}
          <button className="notif-close-btn" onClick={onClose}><X size={16} /></button>
        </div>
      </div>

      <div className="notif-list">
        {notifications.length === 0 ? (
          <div className="notif-empty">
            <Bell size={32} strokeWidth={1.5} />
            <p>새로운 알림이 없습니다</p>
          </div>
        ) : (
          notifications.map(notif => {
            const meta = NOTIF_ICONS[notif.type] || NOTIF_ICONS.comment;
            const Icon = meta.icon;
            return (
              <div
                key={notif.id}
                className={`notif-item ${!notif.isRead ? 'unread' : ''}`}
                onClick={() => handleNotifClick(notif)}
              >
                <div className="notif-icon-box" style={{ background: meta.bg }}>
                  <Icon size={16} style={{ color: meta.color }} />
                </div>
                <div className="notif-content">
                  <div className="notif-title">{notif.title}</div>
                  <div className="notif-message">{notif.message}</div>
                  <div className="notif-time">{timeAgo(notif.createdAt)}</div>
                </div>
                {!notif.isRead && <div className="notif-unread-dot" />}
              </div>
            );
          })
        )}
      </div>

      <style>{`
        .notif-panel {
          position: absolute;
          top: 100%;
          right: 0;
          width: 380px;
          max-height: 480px;
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          animation: notifSlideIn 0.2s ease;
        }
        @keyframes notifSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .notif-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border);
        }
        .notif-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main, #0F172A);
        }
        .notif-header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .notif-read-all-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }
        .notif-read-all-btn:hover { background: var(--primary-light, #FFF2E8); }
        .notif-close-btn {
          color: var(--text-muted, #64748B);
          padding: 0.25rem;
          border-radius: 6px;
        }
        .notif-close-btn:hover { background: var(--bg-subtle, #F1F5F9); }
        .notif-list {
          overflow-y: auto;
          flex: 1;
        }
        .notif-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          color: var(--text-sub, #94A3B8);
          gap: 0.75rem;
        }
        .notif-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          cursor: pointer;
          transition: background 0.15s;
          position: relative;
        }
        .notif-item:hover { background: var(--bg-subtle, #F1F5F9); }
        .notif-item.unread { background: #FFFBF5; }
        .notif-item.unread:hover { background: #FFF5EB; }
        .notif-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .notif-content { flex: 1; min-width: 0; }
        .notif-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main, #0F172A);
        }
        .notif-message {
          font-size: 0.78rem;
          color: var(--text-muted, #64748B);
          margin-top: 0.15rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .notif-time {
          font-size: 0.7rem;
          color: var(--text-sub, #94A3B8);
          margin-top: 0.25rem;
        }
        .notif-unread-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
          margin-top: 0.4rem;
        }
      `}</style>
    </div>
  );
}

export function NotificationBell({ unreadCount, onClick }) {
  return (
    <button className="notif-bell-btn" onClick={onClick} title="알림">
      <Bell size={18} />
      {unreadCount > 0 && (
        <span className="notif-bell-badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
      )}
      <style>{`
        .notif-bell-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          color: var(--text-muted, #64748B);
          background: var(--bg-subtle, #F1F5F9);
          border: 1px solid var(--border);
          transition: all 0.15s;
        }
        .notif-bell-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: var(--primary-light, #FFF2E8);
        }
        .notif-bell-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          min-width: 18px;
          height: 18px;
          background: #EF4444;
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          border: 2px solid var(--bg-card, white);
          line-height: 1;
        }
      `}</style>
    </button>
  );
}
