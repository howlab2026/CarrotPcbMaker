import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Users, 
  Layers, 
  Calendar, 
  MessageSquare, 
  ArrowRight, 
  Heart, 
  MapPin, 
  Clock, 
  CheckCircle,
  PlusCircle,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard({ setActiveTab, onOpenNewProject }) {
  const { currentUser, users } = useAuth();
  const [stats, setStats] = useState(null);
  const [recentProjects, setRecentProjects] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [latestNotice, setLatestNotice] = useState(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [statsRes, prjRes, evtRes, postRes] = await Promise.all([
          fetch('/api/stats'),
          fetch('/api/projects?publicOnly=true'),
          fetch('/api/events'),
          fetch('/api/posts?boardType=notice')
        ]);

        if (statsRes.ok) setStats(await statsRes.json());
        if (prjRes.ok) {
          const prjs = await prjRes.json();
          setRecentProjects(prjs.slice(0, 3));
        }
        if (evtRes.ok) {
          const evts = await evtRes.json();
          if (evts.length > 0) setUpcomingEvent(evts[0]);
        }
        if (postRes.ok) {
          const posts = await postRes.json();
          if (posts.length > 0) setLatestNotice(posts[0]);
        }
      } catch (err) {
        console.error('Dashboard data load error:', err);
      }
    };
    loadDashboardData();
  }, []);

  return (
    <div className="dashboard-container fade-in">
      {/* Hero Welcome Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="hero-pill-dot" />
            <span>우리 동네 하드웨어 메이커들의 아지트</span>
          </div>
          <h1 className="hero-title">
            당근에서 만난 이웃들과 함께<br />
            <span className="hero-highlight">나만의 PCB 회로를 설계하고 제작하세요</span>
          </h1>
          <p className="hero-subtitle">
            회로도 검토, 4층 기판 아트웍, 부품 공동구매, 오프라인 SMD 납땜 워크숍까지!<br />
            초보 메이커부터 현업 하드웨어 엔지니어까지 함께 배우고 성장하는 당근 PCB 모임입니다.
          </p>

          <div className="hero-cta-buttons">
            <button className="btn-primary hero-btn" onClick={onOpenNewProject}>
              <PlusCircle size={18} />
              <span>내 PCB 작업 등록하기</span>
            </button>
            <button className="btn-secondary hero-btn-sub" onClick={() => setActiveTab('workspace')}>
              <Layers size={18} />
              <span>공유 갤러리 둘러보기</span>
            </button>
            <button className="btn-secondary hero-btn-sub" onClick={() => setActiveTab('chat')}>
              <MessageSquare size={18} />
              <span>실시간 채팅 참여</span>
            </button>
          </div>
        </div>

        <div className="hero-art-side">
          <div className="circuit-box">
            <div className="circuit-chip">
              <span className="chip-name">RP2040 / ESP32</span>
              <div className="chip-pins-top" />
              <div className="chip-pins-bottom" />
            </div>
            <div className="circuit-badge-status">
              <span className="pulse-dot" /> 당근 PCB Lab Live
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Highlights */}
      <div className="stats-highlight-grid">
        <div className="stat-item-box" onClick={() => setActiveTab('admin')}>
          <div className="stat-icon-wrapper orange">
            <Users size={22} />
          </div>
          <div className="stat-text-meta">
            <span className="stat-num">{stats?.totalMembers || users.length}명</span>
            <span className="stat-label">활동 모임 회원</span>
          </div>
        </div>

        <div className="stat-item-box" onClick={() => setActiveTab('workspace')}>
          <div className="stat-icon-wrapper green">
            <Cpu size={22} />
          </div>
          <div className="stat-text-meta">
            <span className="stat-num">{stats?.totalProjects || 3}개</span>
            <span className="stat-label">진행 중인 PCB 프로젝트</span>
          </div>
        </div>

        <div className="stat-item-box" onClick={() => setActiveTab('calendar')}>
          <div className="stat-icon-wrapper blue">
            <Calendar size={22} />
          </div>
          <div className="stat-text-meta">
            <span className="stat-num">{stats?.upcomingEvents || 3}건</span>
            <span className="stat-label">예정된 오프라인 밋업</span>
          </div>
        </div>

        <div className="stat-item-box" onClick={() => setActiveTab('board')}>
          <div className="stat-icon-wrapper purple">
            <MessageSquare size={22} />
          </div>
          <div className="stat-text-meta">
            <span className="stat-num">{stats?.totalPosts || 5}개</span>
            <span className="stat-label">지식 공유 & 건의 게시글</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Upcoming Event & Notice */}
      <div className="dashboard-columns-2">
        {/* Left: Upcoming Event Highlight Card */}
        {upcomingEvent && (
          <div className="dashboard-card event-highlight-card">
            <div className="dash-card-header">
              <div className="dash-card-badge-row">
                <span className="badge badge-orange dash-long-badge">
                  ⏰ D-Day 임박 모임
                </span>
                <button className="link-arrow-btn" onClick={() => setActiveTab('calendar')}>
                  <span>전체 일정</span>
                  <ChevronRight size={15} />
                </button>
              </div>
              <h3 className="dash-card-title">{upcomingEvent.title}</h3>
            </div>

            <p className="dash-event-desc">{upcomingEvent.description}</p>

            <div className="dash-event-details">
              <div className="dash-detail-row">
                <Calendar size={16} className="text-orange" />
                <span>{upcomingEvent.date} ({upcomingEvent.time})</span>
              </div>
              <div className="dash-detail-row">
                <MapPin size={16} className="text-orange" />
                <span>{upcomingEvent.location}</span>
              </div>
              <div className="dash-detail-row">
                <Users size={16} className="text-orange" />
                <span>
                  참석 신청 인원: <strong>{upcomingEvent.attendees?.length || 0}</strong> / {upcomingEvent.maxAttendees}명
                </span>
              </div>
            </div>

            <div className="dash-event-action-bar">
              <button className="btn-primary" onClick={() => setActiveTab('calendar')}>
                <span>참가 신청 현황 확인하기</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Right: Latest Notice Card */}
        {latestNotice && (
          <div className="dashboard-card notice-highlight-card">
            <div className="dash-card-header">
              <div className="dash-card-badge-row">
                <span className="badge badge-purple dash-long-badge">
                  📢 운영진 필독 공지
                </span>
                <button className="link-arrow-btn" onClick={() => setActiveTab('board')}>
                  <span>전체 게시판</span>
                  <ChevronRight size={15} />
                </button>
              </div>
              <h3 className="dash-card-title">{latestNotice.title}</h3>
            </div>

            <p className="dash-notice-preview">
              {latestNotice.content.slice(0, 180)}...
            </p>

            <div className="dash-notice-footer">
              <div className="dash-author-meta">
                <img 
                  src={latestNotice.authorAvatar} 
                  alt={latestNotice.authorName} 
                  className="author-avatar-xs"
                  onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/identicon/svg?seed=admin'; }}
                />
                <span>{latestNotice.authorName}</span>
                <span className="post-date">
                  {new Date(latestNotice.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
              <button className="read-more-btn" onClick={() => setActiveTab('board')}>
                전문 읽기 →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Featured Projects Showcase Preview */}
      <div className="dash-projects-section">
        <div className="dash-section-header">
          <div>
            <h3 className="dash-section-title">✨ 이웃 메이커들의 최신 공개 PCB 작업물</h3>
            <p className="dash-section-sub">
              회원들이 직접 기획하고 배선한 회로도를 감상하고 피드백을 나눠보세요.
            </p>
          </div>
          <button className="link-arrow-btn" onClick={() => setActiveTab('workspace')}>
            모든 작업물 보기 <ChevronRight size={16} />
          </button>
        </div>

        <div className="dash-projects-grid">
          {recentProjects.map(p => (
            <div 
              key={p.id} 
              className="dash-project-card"
              onClick={() => setActiveTab('workspace')}
            >
              <div className="dash-project-img-box">
                <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'} alt={p.title} />
                <span className="dash-status-badge">{p.status}</span>
              </div>
              <div className="dash-project-info">
                <div className="dash-project-author">
                  <img src={p.userAvatar} alt={p.userName} />
                  <span>{p.userName}</span>
                </div>
                <h4 className="dash-prj-title">{p.title}</h4>
                <div className="dash-prj-footer">
                  <span className="dash-like-badge">
                    <Heart size={13} fill="#FF6F0F" color="#FF6F0F" /> {p.likes || 0}
                  </span>
                  <span className="dash-cmt-count">
                    댓글 {p.comments?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-banner {
          background: linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 60%, #F0FDFA 100%);
          border: 1px solid #FFEDD5;
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 10px 30px -10px rgba(255, 111, 15, 0.12);
        }
        @media (max-width: 900px) {
          .hero-banner {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
          }
          .hero-art-side {
            display: none;
          }
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFE8D6;
          color: var(--primary-dark);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        .hero-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
        }
        .hero-title {
          font-size: 2.1rem;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .hero-highlight {
          color: var(--primary);
        }
        .hero-subtitle {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-btn {
          padding: 0.75rem 1.4rem;
          font-size: 0.95rem;
        }
        .hero-btn-sub {
          padding: 0.75rem 1.25rem;
          font-size: 0.92rem;
        }
        /* Circuit Graphic */
        .circuit-box {
          background: #0F172A;
          border-radius: var(--radius-lg);
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.25);
          border: 2px solid #1E293B;
        }
        .circuit-chip {
          background: #1E293B;
          border: 1.5px solid #0D9488;
          color: #A7F3D0;
          font-family: var(--font-mono);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          box-shadow: 0 0 25px rgba(13, 148, 136, 0.3);
        }
        .circuit-badge-status {
          position: absolute;
          bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #6EE7B7;
          font-size: 0.78rem;
          font-weight: 600;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10B981;
        }
        /* Stats Grid */
        .stats-highlight-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .stat-item-box {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: var(--shadow-sm);
        }
        .stat-item-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-icon-wrapper.orange { background: #FFF2E8; color: var(--primary); }
        .stat-icon-wrapper.green { background: #CCFBF1; color: var(--pcb-green); }
        .stat-icon-wrapper.blue { background: #EFF6FF; color: #2563EB; }
        .stat-icon-wrapper.purple { background: #F3E8FF; color: #7C3AED; }
        .stat-text-meta {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-size: 1.4rem;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.2;
        }
        .stat-label {
          font-size: 0.82rem;
          color: #64748B;
          font-weight: 600;
        }
        /* Dashboard 2-Columns */
        .dashboard-columns-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 960px) {
          .dashboard-columns-2 {
            grid-template-columns: 1fr;
          }
        }
        .dashboard-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
        }
        .dash-card-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }
        .dash-card-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.65rem;
        }
        .dash-long-badge {
          min-width: 220px;
          padding: 0.35rem 1.25rem;
          font-size: 0.82rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          white-space: nowrap;
          border-radius: 9999px;
        }
        .dash-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
        }
        .link-arrow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #64748B;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .link-arrow-btn span {
          white-space: nowrap;
          word-break: keep-all;
        }
        .link-arrow-btn:hover {
          color: var(--primary);
        }
        .dash-event-desc, .dash-notice-preview {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .dash-event-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }
        .dash-detail-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.83rem;
          color: #334155;
        }
        .text-orange {
          color: var(--primary);
        }
        .dash-event-action-bar {
          margin-top: auto;
        }
        .dash-notice-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          border-top: 1px solid #F1F5F9;
          padding-top: 0.75rem;
        }
        .dash-author-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #334155;
          font-weight: 600;
        }
        .author-avatar-xs {
          width: 22px;
          height: 22px;
          border-radius: 50%;
        }
        .read-more-btn {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary);
        }
        /* Projects Section */
        .dash-projects-section {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
        }
        .dash-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .dash-section-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
        }
        .dash-section-sub {
          font-size: 0.88rem;
          color: #64748B;
          margin-top: 0.2rem;
        }
        .dash-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
        }
        .dash-project-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
        }
        .dash-project-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .dash-project-img-box {
          position: relative;
          height: 150px;
          background: #0F172A;
        }
        .dash-project-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dash-status-badge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          background: rgba(15, 23, 42, 0.8);
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .dash-project-info {
          padding: 1rem;
        }
        .dash-project-author {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #64748B;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        .dash-project-author img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .dash-prj-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .dash-prj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94A3B8;
        }
        .dash-like-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 700;
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}
