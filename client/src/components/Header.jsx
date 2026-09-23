import React, { useState, useEffect } from 'react';
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
  Eye,
  Package,
  Wrench,
  Flame,
  Trophy,
  FileSpreadsheet,
  Moon,
  Sun,
  PenTool,
  Truck,
  BookOpen,
  GraduationCap,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getUserLevel } from '../mockData';
import NotificationCenter, { NotificationBell } from './NotificationCenter';

export default function Header({ activeTab, setActiveTab, onOpenAuthModal, onOpenNewProjectModal, onOpenProfileModal }) {
  const { currentUser } = useAuth();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('carrot_pcb_theme') === 'dark';
    }
    return false;
  });

  // 다크 모드 초기화
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('carrot_pcb_theme', next ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  // 안읽은 알림 수 가져오기
  useEffect(() => {
    if (currentUser) {
      fetch(`/api/notifications?userId=${currentUser.id}`)
        .then(r => r.json())
        .then(data => setUnreadCount(data.filter(n => !n.isRead).length))
        .catch(() => {});
    }
  }, [currentUser, isNotifOpen]);

  const userLevel = currentUser ? getUserLevel(currentUser.solderingTemp) : null;

  // 1번째 줄 메뉴 (홈 제거 -> 로고가 홈 역할 수행, 9개 탭)
  const navItemsRow1 = [
    { id: 'workspace', label: '작업실', icon: Layers },
    { id: 'tools', label: '설계 계산기', icon: Calculator },
    { id: 'gerber', label: '거버 뷰어', icon: Eye },
    { id: 'notepad', label: '회로 스케치', icon: PenTool },
    { id: 'bom', label: 'BOM 관리', icon: FileSpreadsheet },
    { id: 'orders', label: '발주 트래커', icon: Truck },
    { id: 'market', label: '나눔 & 공구', icon: Package },
    { id: 'equipment', label: '공유 장비', icon: Wrench },
    { id: 'calendar', label: '일정 & 밋업', icon: Calendar },
  ];

  // 2번째 줄 메뉴 (커뮤니티·소통·지식 6개)
  const navItemsRow2 = [
    { id: 'board', label: '커뮤니티', icon: MessageSquare },
    { id: 'chat', label: '실시간 채팅', icon: MessagesSquare },
    { id: 'challenge', label: '챌린지', icon: Trophy },
    { id: 'wiki', label: '지식 위키', icon: BookOpen },
    { id: 'mentoring', label: '멘토링', icon: GraduationCap },
    { id: 'stats', label: '활동 통계', icon: TrendingUp },
  ];

  return (
    <header className="header-bar">
      <div className="header-container">
        {/* 좌측: 두 줄에 걸친 로고 (클릭 시 홈으로 이동) */}
        <div 
          className="logo-container" 
          onClick={() => setActiveTab('dashboard')} 
          style={{ cursor: 'pointer' }}
          title="당근 PCB 메이커스 홈으로 이동"
          role="button"
          tabIndex={0}
        >
          <div className="logo-icon-box">
            <span className="carrot-emoji">🥕</span>
            <Cpu className="pcb-icon" size={18} />
          </div>
          <div className="logo-text-col">
            <div className="logo-brand-main">당근 PCB</div>
            <div className="logo-brand-badge">메이커스</div>
          </div>
        </div>

        {/* 우측: 2개 줄로 구성된 네비게이션 및 액션 영역 */}
        <div className="header-nav-columns">
          {/* Row 1: 1차 메뉴 10개 */}
          <div className="header-nav-row header-nav-row-1">
            <nav className="nav-menu">
              {navItemsRow1.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`nav-btn ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Row 2: 2차 메뉴 6개 + 계정정보, 계정전환, 작업등록, 관리자화면 등 */}
          <div className="header-nav-row header-nav-row-2">
            <nav className="nav-menu">
              {navItemsRow2.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`nav-btn ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* 아래 라인 우측 액션들: 작업등록, 계정정보, 계정전환, 알림, 다크모드, 관리자화면 */}
            <div className="bottom-row-actions">
              <button 
                className="quick-add-btn"
                onClick={onOpenNewProjectModal}
                title="새 작업물 등록"
              >
                <PlusCircle size={15} />
                <span>작업 등록</span>
              </button>

              {currentUser ? (
                <div className="user-profile-widget">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="user-avatar"
                    onClick={onOpenProfileModal}
                    style={{ cursor: 'pointer' }}
                    title="메이커 프로필 & 뱃지 도감 보기"
                    onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                  />
                  <div className="user-info-text" onClick={onOpenProfileModal} style={{ cursor: 'pointer' }}>
                    <span className="user-name">{currentUser.name?.replace(/\s*\(운영진\)\s*/g, '')}</span>
                    <span className={`user-role-badge ${currentUser.role}`}>
                      ({currentUser.role === 'admin' ? '운영진 👑' : '정회원 🌱'})
                    </span>
                  </div>

                  {/* Soldering Temperature Pill Button */}
                  <button 
                    className="temp-pill-btn"
                    onClick={onOpenProfileModal}
                    title="당근 납땜 온도 & 뱃지 도감 열기"
                  >
                    {userLevel && <span className="level-icon">{userLevel.icon}</span>}
                    <Flame size={13} className="temp-flame-icon" />
                    <span>{Number(currentUser.solderingTemp || 36.5).toFixed(1)}℃</span>
                  </button>

                  <button 
                    className="switch-account-btn"
                    onClick={onOpenAuthModal}
                    title="계정 간편 전환 / 회원가입"
                  >
                    <RefreshCw size={13} />
                    <span>계정 전환</span>
                  </button>
                </div>
              ) : (
                <button className="btn-primary" onClick={onOpenAuthModal}>
                  <LogIn size={15} />
                  <span>로그인 / 등록</span>
                </button>
              )}

              {/* 알림 벨 */}
              <div style={{ position: 'relative' }}>
                <NotificationBell unreadCount={unreadCount} onClick={() => setIsNotifOpen(!isNotifOpen)} />
                <NotificationCenter isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} onNavigate={(tab) => setActiveTab(tab)} />
              </div>

              {/* 다크 모드 토글 */}
              <button className="dark-toggle-btn" onClick={toggleDarkMode} title={isDark ? '라이트 모드' : '다크 모드'}>
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* 맨 오른쪽: 관리자 화면 ADMIN 버튼 */}
              <button
                className={`admin-entry-btn ${activeTab === 'admin' ? 'active' : ''}`}
                onClick={() => setActiveTab('admin')}
                title="운영진 관리자 화면"
              >
                <ShieldCheck size={15} />
                <span>관리자 화면</span>
                <span className="admin-pill-tag">ADMIN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .header-bar {
          background: var(--bg-card, #ffffff);
          border-bottom: 1px solid var(--border);
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .header-container {
          max-width: 1480px;
          margin: 0 auto;
          padding: 0.55rem 1.25rem 0.5rem;
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }
        /* 좌측: 두 줄에 걸쳐서 안정적인 모습으로 공간을 갖는 로고 */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.35rem 1.1rem 0.35rem 0.2rem;
          border-right: 1.5px solid var(--border, #E2E8F0);
          flex-shrink: 0;
          user-select: none;
          transition: opacity 0.15s ease;
        }
        .logo-container:hover {
          opacity: 0.95;
        }
        .logo-container:hover .logo-icon-box {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(255, 111, 15, 0.25);
        }
        .logo-container:hover .logo-brand-main {
          color: var(--primary, #FF6F0F);
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
          box-shadow: 0 2px 5px rgba(255, 111, 15, 0.12);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .carrot-emoji {
          font-size: 1.7rem;
        }
        .pcb-icon {
          position: absolute;
          bottom: -3px;
          right: -3px;
          color: var(--pcb-green, #10B981);
          background: white;
          border-radius: 50%;
          padding: 2px;
          border: 1.5px solid #CCFBF1;
        }
        .logo-text-col {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .logo-brand-main {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--text-main, #0F172A);
          letter-spacing: -0.02em;
          white-space: nowrap;
          line-height: 1.1;
          transition: color 0.15s ease;
        }
        .logo-brand-badge {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--primary, #FF6F0F);
          background: var(--primary-light, #FFF2E8);
          padding: 2px 8px;
          border-radius: 6px;
          width: fit-content;
          border: 1px solid #FFD8BE;
          letter-spacing: 0.08em;
          line-height: 1.25;
        }
        /* 우측: 2개 줄로 구성된 네비게이션 컬럼 */
        .header-nav-columns {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 0;
        }
        .header-nav-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
        }
        .header-nav-row-1 {
          justify-content: flex-start;
        }
        .header-nav-row-2 {
          justify-content: space-between;
          padding-top: 0.35rem;
          border-top: 1px dashed var(--border, #F1F5F9);
        }
        .bottom-row-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-left: auto;
          flex-shrink: 0;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--bg-sub, #F8FAFC);
          padding: 0.25rem 0.35rem;
          border-radius: 10px;
          border: 1px solid var(--border, #E2E8F0);
          flex-shrink: 1;
          white-space: nowrap;
          overflow-x: auto;
        }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-main, #475569);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .nav-btn span {
          white-space: nowrap;
          word-break: keep-all;
          display: inline-block;
          font-size: 0.92rem;
          font-weight: 700;
        }
        .nav-btn:hover {
          color: var(--primary);
          background: var(--bg-card, #FFFFFF);
        }
        .nav-btn.active {
          background: var(--bg-card, #FFFFFF);
          color: var(--primary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
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
        .temp-pill-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          color: #EA580C;
          border: 1px solid #FED7AA;
          padding: 0.25rem 0.6rem;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 1px 3px rgba(234, 88, 12, 0.1);
        }
        .temp-pill-btn:hover {
          background: #EA580C;
          color: white;
          border-color: #EA580C;
        }
        .temp-flame-icon {
          color: #EA580C;
        }
        .temp-pill-btn:hover .temp-flame-icon {
          color: white;
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
        .admin-entry-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #F5F3FF;
          color: #6D28D9;
          border: 1.5px solid #DDD6FE;
          padding: 0.45rem 0.85rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .admin-entry-btn:hover {
          background: #7C3AED;
          color: white;
          border-color: #7C3AED;
        }
        .admin-entry-btn.active {
          background: #7C3AED;
          color: white;
          border-color: #6D28D9;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.25);
        }
        .admin-pill-tag {
          background: #EDE9FE;
          color: #6D28D9;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .admin-entry-btn:hover .admin-pill-tag,
        .admin-entry-btn.active .admin-pill-tag {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }
        .level-icon {
          font-size: 0.85rem;
          line-height: 1;
        }
        .dark-toggle-btn {
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
        .dark-toggle-btn:hover {
          color: #F59E0B;
          border-color: #F59E0B;
          background: #FFFBEB;
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
