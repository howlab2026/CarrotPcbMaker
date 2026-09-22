import React from 'react';
import { 
  Cpu, 
  Home, 
  Layers, 
  Calendar, 
  MessageSquare, 
  MessagesSquare, 
  ShieldCheck, 
  RefreshCw, 
  LogIn, 
  Sparkles,
  PlusCircle,
  Calculator,
  Eye
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header({ activeTab, setActiveTab, onOpenAuthModal, onOpenNewProjectModal }) {
  const { currentUser } = useAuth();

  const navItems = [
    { id: 'dashboard', label: '홈', icon: Home },
    { id: 'workspace', label: '작업실 & 갤러리', icon: Layers },
    { id: 'tools', label: '설계 계산기', icon: Calculator },
    { id: 'gerber', label: '거버 뷰어', icon: Eye },
    { id: 'calendar', label: '일정 & 밋업', icon: Calendar },
    { id: 'board', label: '커뮤니티 게시판', icon: MessageSquare },
    { id: 'chat', label: '실시간 채팅', icon: MessagesSquare },
  ];

  if (currentUser?.role === 'admin') {
    navItems.push({ id: 'admin', label: '관리자 화면', icon: ShieldCheck, isAdmin: true });
  }

  return (
    <header className="header-bar">
      <div className="header-container">
        {/* Top Row: Logo & Large Navigation Tabs (1.5x) */}
        <div className="header-top-row">
          <div className="logo-group" onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon-box">
              <span className="carrot-emoji">🥕</span>
              <Cpu className="pcb-icon" size={20} />
            </div>
            <div className="logo-text-col">
              <div className="logo-line-1">당근 PCB</div>
              <div className="logo-line-2">메이커스</div>
            </div>
          </div>

          {/* Navigation Tabs (1.5x larger icon and text) */}
          <nav className="nav-menu">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-btn ${isActive ? 'active' : ''} ${item.isAdmin ? 'admin-nav-btn' : ''}`}
                >
                  <Icon size={26} />
                  <span>{item.label}</span>
                  {item.isAdmin && <span className="admin-pill">ADMIN</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Row: Right-aligned Actions ("작업 등록", "사용자 정보", "계정 전환") */}
        <div className="header-bottom-row">
          <div className="header-actions">
            <button 
              className="quick-add-btn"
              onClick={onOpenNewProjectModal}
              title="새 작업물 등록"
            >
              <PlusCircle size={16} />
              <span>작업 등록</span>
            </button>

            {currentUser ? (
              <div className="user-profile-widget">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="user-avatar"
                  onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                />
                <div className="user-info-text">
                  <span className="user-name">{currentUser.name?.replace(/\s*\(운영진\)\s*/g, '')}</span>
                  <span className={`user-role-badge ${currentUser.role}`}>
                    ({currentUser.role === 'admin' ? '운영진 👑' : '정회원 🌱'})
                  </span>
                </div>
                <button 
                  className="switch-account-btn"
                  onClick={onOpenAuthModal}
                  title="계정 간편 전환 / 회원가입"
                >
                  <RefreshCw size={14} />
                  <span>계정 전환</span>
                </button>
              </div>
            ) : (
              <button className="btn-primary" onClick={onOpenAuthModal}>
                <LogIn size={16} />
                <span>로그인 / 등록</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .header-bar {
          background: #ffffff;
          border-bottom: 1px solid var(--border);
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.85rem 1.25rem 0.55rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .header-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .header-bottom-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-top: 0.45rem;
          border-top: 1px solid #F1F5F9;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          user-select: none;
          flex-shrink: 0;
        }
        .logo-icon-box {
          position: relative;
          width: 50px;
          height: 50px;
          background: #FFF2E8;
          border: 1.5px solid #FFD8BE;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carrot-emoji {
          font-size: 1.6rem;
        }
        .pcb-icon {
          position: absolute;
          bottom: -3px;
          right: -3px;
          color: var(--pcb-green);
          background: white;
          border-radius: 50%;
          padding: 2px;
          border: 1px solid #CCFBF1;
        }
        .logo-text-col {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .logo-line-1 {
          font-size: 1.18rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          white-space: nowrap;
          word-break: keep-all;
        }
        .logo-line-2 {
          font-size: 1.02rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.01em;
          white-space: nowrap;
          word-break: keep-all;
        }
        /* 1.5x larger Navigation Tabs */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #F8FAFC;
          padding: 0.4rem;
          border-radius: 16px;
          border: 1px solid var(--border);
          flex-shrink: 0;
          white-space: nowrap;
          overflow-x: auto;
        }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.25rem;
          border-radius: 12px;
          font-size: 1.25rem;
          font-weight: 700;
          color: #475569;
          transition: all 0.15s ease;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .nav-btn span {
          white-space: nowrap;
          word-break: keep-all;
          display: inline-block;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .nav-btn:hover {
          color: var(--primary);
          background: #FFFFFF;
        }
        .nav-btn.active {
          background: #FFFFFF;
          color: var(--primary);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
        }
        .admin-nav-btn {
          color: #7C3AED;
        }
        .admin-nav-btn.active {
          color: #6D28D9;
        }
        .admin-pill {
          background: #EDE9FE;
          color: #6D28D9;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        /* Actions (Bottom Row, Right Aligned) */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .quick-add-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary-light);
          color: var(--primary-dark);
          border: 1px solid rgba(255, 111, 15, 0.25);
          padding: 0.5rem 0.95rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .quick-add-btn span {
          white-space: nowrap;
          word-break: keep-all;
        }
        .quick-add-btn:hover {
          background: var(--primary);
          color: white;
        }
        .user-profile-widget {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: #F8FAFC;
          padding: 0.35rem 0.7rem 0.35rem 0.45rem;
          border-radius: 30px;
          border: 1px solid var(--border);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #FFD8BE;
          flex-shrink: 0;
        }
        .user-info-text {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          line-height: 1;
        }
        .user-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1E293B;
          white-space: nowrap;
          word-break: keep-all;
        }
        .user-role-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748B;
          white-space: nowrap;
          word-break: keep-all;
        }
        .user-role-badge.admin {
          color: #EA580C;
        }
        .switch-account-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 0.35rem 0.65rem;
          border-radius: 16px;
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .switch-account-btn span {
          white-space: nowrap;
          word-break: keep-all;
        }
        .switch-account-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        @media (max-width: 1080px) {
          .header-top-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-menu {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>
    </header>
  );
}
