import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Workspace from './components/Workspace';
import CalendarView from './components/CalendarView';
import BoardView from './components/BoardView';
import ChatView from './components/ChatView';
import AdminPanel from './components/AdminPanel';
import AuthModal from './components/AuthModal';
import NewProjectModal from './components/NewProjectModal';

function MainApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const { currentUser } = useAuth();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleProjectCreated = (newProject) => {
    handleTabChange('workspace');
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onOpenNewProjectModal={() => setIsNewProjectModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'dashboard' && (
          <Dashboard 
            setActiveTab={handleTabChange} 
            onOpenNewProject={() => setIsNewProjectModalOpen(true)}
          />
        )}
        {activeTab === 'workspace' && (
          <Workspace 
            onOpenNewProject={() => setIsNewProjectModalOpen(true)}
          />
        )}
        {activeTab === 'calendar' && <CalendarView />}
        {activeTab === 'board' && <BoardView />}
        {activeTab === 'chat' && <ChatView />}
        {activeTab === 'admin' && (
          currentUser?.role === 'admin' ? (
            <AdminPanel onNavigateToBoard={() => handleTabChange('board')} />
          ) : (
            <div className="empty-state-box">
              <div className="empty-icon">🔒</div>
              <h3>관리자(운영진) 전용 페이지입니다</h3>
              <p>우측 상단의 '계정 전환' 버튼을 눌러 <strong>당근마스터 (운영진)</strong> 계정으로 전환해주세요.</p>
              <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={() => setIsAuthModalOpen(true)}>
                운영진 계정으로 전환하기
              </button>
            </div>
          )
        )}
      </main>

      {/* Footer */}
      <footer className="footer-bar">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-logo">🥕 당근 PCB 메이커스</span>
            <p className="footer-desc">
              당근마켓 이웃들과 함께하는 오픈 하드웨어 & 회로 설계 자작 커뮤니티 플랫폼
            </p>
          </div>
          <div className="footer-links">
            <button onClick={() => setActiveTab('dashboard')}>홈</button>
            <button onClick={() => setActiveTab('workspace')}>작업 보관함</button>
            <button onClick={() => setActiveTab('calendar')}>모임 일정</button>
            <button onClick={() => setActiveTab('board')}>게시판</button>
            <button onClick={() => setActiveTab('chat')}>실시간 채팅</button>
            <button onClick={() => setIsAuthModalOpen(true)}>계정 전환 / 등록</button>
          </div>
          <div className="footer-copy">
            © 2026 Carrot PCB Makers Club. All rights reserved. Designed for local hardware enthusiasts.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      <NewProjectModal 
        isOpen={isNewProjectModalOpen} 
        onClose={() => setIsNewProjectModalOpen(false)}
        onProjectCreated={handleProjectCreated}
      />

      <style>{`
        .footer-bar {
          background: #FFFFFF;
          border-top: 1px solid var(--border);
          margin-top: auto;
          padding: 2.5rem 1.5rem;
        }
        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }
        .footer-logo {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0F172A;
        }
        .footer-desc {
          font-size: 0.85rem;
          color: #64748B;
          margin-top: 0.25rem;
        }
        .footer-links {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-links button {
          font-size: 0.85rem;
          color: #475569;
          font-weight: 600;
        }
        .footer-links button:hover {
          color: var(--primary);
        }
        .footer-copy {
          font-size: 0.75rem;
          color: #94A3B8;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
