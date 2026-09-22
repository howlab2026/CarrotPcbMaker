import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  UserCheck, 
  Ban, 
  MessageSquare, 
  TrendingUp, 
  Layers, 
  Award,
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminPanel({ onNavigateToBoard }) {
  const { currentUser, users, refreshUsers } = useAuth();
  const [activeTab, setActiveTab] = useState('users'); // 'users' | 'suggestions' | 'stats'
  const [stats, setStats] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [savingUserId, setSavingUserId] = useState(null);

  // Fetch stats and suggestions
  const loadAdminData = async () => {
    try {
      const [statsRes, suggRes] = await Promise.all([
        fetch('/api/stats'),
        fetch('/api/posts?boardType=suggestion')
      ]);
      if (statsRes.ok) setStats(await statsRes.json());
      if (suggRes.ok) setSuggestions(await suggRes.json());
    } catch (err) {
      console.error('Failed to load admin data:', err);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    setSavingUserId(userId);
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) {
        await refreshUsers();
      }
    } catch (err) {
      console.error('Failed to update role:', err);
    } finally {
      setSavingUserId(null);
    }
  };

  const handleSuggestionStatusChange = async (postId, newStatus, currentAdminResponse) => {
    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setSuggestions(prev => prev.map(s => s.id === postId ? { ...s, status: newStatus } : s));
      }
    } catch (err) {
      console.error('Failed to update suggestion status:', err);
    }
  };

  const filteredUsers = users.filter(u => {
    if (!userSearch.trim()) return true;
    const q = userSearch.toLowerCase();
    return u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q) || u.bio?.toLowerCase().includes(q);
  });

  return (
    <div className="admin-container fade-in">
      {/* Top Banner */}
      <div className="admin-header">
        <div className="admin-title-group">
          <div className="admin-badge-icon">
            <ShieldCheck size={28} color="#6D28D9" />
          </div>
          <div>
            <h2 className="section-title">당근 PCB 메이커스 운영진 관리자 센터</h2>
            <p className="section-desc">회원 권한 관리, 건의사항 검토 및 모임 통계 현황을 관리합니다.</p>
          </div>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="admin-nav-bar">
        <button 
          className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={17} />
          <span>회원 관리 ({users.length}명)</span>
        </button>
        <button 
          className={`admin-tab-btn ${activeTab === 'suggestions' ? 'active' : ''}`}
          onClick={() => setActiveTab('suggestions')}
        >
          <MessageSquare size={17} />
          <span>건의사항 처리 ({suggestions.length}건)</span>
        </button>
        <button 
          className={`admin-tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          <TrendingUp size={17} />
          <span>모임 활동 지표 & 통계</span>
        </button>
      </div>

      {/* TAB 1: User Management */}
      {activeTab === 'users' && (
        <div className="admin-card">
          <div className="card-top-action">
            <h3 className="card-heading">클럽 회원 목록 및 등급 권한 조정</h3>
            <div className="user-search-wrapper">
              <Search size={16} className="search-icon" />
              <input 
                type="text" 
                placeholder="회원 이름, 아이디 검색..."
                value={userSearch}
                onChange={e => setUserSearch(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="users-admin-table">
            <div className="users-table-head">
              <span>회원 프로필</span>
              <span>아이디</span>
              <span>관심 분야</span>
              <span>가입일</span>
              <span>현재 등급</span>
              <span>권한 관리</span>
            </div>

            {filteredUsers.map(user => (
              <div key={user.id} className="user-row-item">
                <div className="user-avatar-name-cell">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="admin-user-avatar"
                    onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=user'; }}
                  />
                  <div>
                    <div className="table-user-name">{user.name}</div>
                    <div className="table-user-bio">{user.bio}</div>
                  </div>
                </div>

                <div className="table-cell font-mono">@{user.username}</div>

                <div className="table-cell tags-cell">
                  {user.tags?.map((t, idx) => (
                    <span key={idx} className="admin-tag-pill">#{t}</span>
                  ))}
                </div>

                <div className="table-cell">
                  {new Date(user.createdAt).toLocaleDateString('ko-KR')}
                </div>

                <div className="table-cell">
                  {user.role === 'admin' ? (
                    <span className="badge badge-purple"><ShieldCheck size={12} /> 운영진</span>
                  ) : user.role === 'suspended' ? (
                    <span className="badge badge-gray" style={{ color: '#DC2626' }}><Ban size={12} /> 이용정지</span>
                  ) : (
                    <span className="badge badge-green"><UserCheck size={12} /> 정회원</span>
                  )}
                </div>

                <div className="table-cell actions-cell">
                  <select 
                    className="role-select"
                    value={user.role}
                    disabled={savingUserId === user.id || user.id === currentUser?.id}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  >
                    <option value="member">정회원</option>
                    <option value="admin">운영진 (Admin)</option>
                    <option value="suspended">활동 정지</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Suggestions Manager */}
      {activeTab === 'suggestions' && (
        <div className="admin-card">
          <div className="card-top-action">
            <h3 className="card-heading">회원 건의사항 통합 처리 데스크</h3>
          </div>

          <div className="suggestions-admin-list">
            {suggestions.length === 0 ? (
              <p className="no-data">등록된 건의사항이 없습니다.</p>
            ) : (
              suggestions.map(sugg => (
                <div key={sugg.id} className="sugg-admin-card">
                  <div className="sugg-admin-top">
                    <div className="sugg-author-info">
                      <span className="sugg-author">{sugg.authorName}님의 건의</span>
                      <span className="sugg-date">{new Date(sugg.createdAt).toLocaleDateString('ko-KR')}</span>
                    </div>
                    <div className="sugg-status-selector">
                      <label>처리 상태:</label>
                      <select 
                        className="form-select status-select-sm"
                        value={sugg.status || '접수'}
                        onChange={(e) => handleSuggestionStatusChange(sugg.id, e.target.value, sugg.adminResponse)}
                      >
                        <option value="접수">접수 (Received)</option>
                        <option value="검토중">검토중 (In Review)</option>
                        <option value="반영완료">반영완료 (Done)</option>
                      </select>
                    </div>
                  </div>

                  <h4 className="sugg-title">{sugg.title}</h4>
                  <p className="sugg-content">{sugg.content}</p>

                  {sugg.adminResponse && (
                    <div className="sugg-current-reply">
                      <strong>현재 등록된 운영진 답변:</strong> {sugg.adminResponse}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: Community Stats */}
      {activeTab === 'stats' && (
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-card-label">전체 등록 회원</span>
            <div className="stat-card-value">{stats?.totalMembers || users.length}명</div>
            <span className="stat-card-desc">당근 모임 회원 가입수</span>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">누적 등록 PCB 프로젝트</span>
            <div className="stat-card-value">{stats?.totalProjects || 0}개</div>
            <span className="stat-card-desc">회원 개인 작업실 보관함 포함</span>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">전체 공개 갤러리 공유작</span>
            <div className="stat-card-value">{stats?.publicProjects || 0}개</div>
            <span className="stat-card-desc">피어 리뷰 진행 중</span>
          </div>

          <div className="stat-card">
            <span className="stat-card-label">게시판 작성글</span>
            <div className="stat-card-value">{stats?.totalPosts || 0}개</div>
            <span className="stat-card-desc">5대 게시판 누적 글 수</span>
          </div>
        </div>
      )}

      <style>{`
        .admin-header {
          margin-bottom: 1.5rem;
        }
        .admin-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .admin-badge-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #EDE9FE;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-nav-bar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          background: white;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .admin-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.65rem 1.1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
        }
        .admin-tab-btn:hover {
          color: #6D28D9;
          background: #F5F3FF;
        }
        .admin-tab-btn.active {
          background: #6D28D9;
          color: white;
        }
        .admin-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .card-top-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .card-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
        }
        .user-search-wrapper {
          position: relative;
          min-width: 250px;
        }
        .users-admin-table {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
        }
        .users-table-head {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr 1fr;
          padding: 0.75rem 1rem;
          background: #F8FAFC;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748B;
          border-bottom: 1px solid var(--border);
        }
        .user-row-item {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr 1fr;
          padding: 0.9rem 1rem;
          border-bottom: 1px solid #F1F5F9;
          align-items: center;
          font-size: 0.85rem;
        }
        .user-row-item:hover {
          background: #FAFBFD;
        }
        .user-avatar-name-cell {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .admin-user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }
        .table-user-name {
          font-weight: 700;
          color: #1E293B;
        }
        .table-user-bio {
          font-size: 0.75rem;
          color: #94A3B8;
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tags-cell {
          display: flex;
          gap: 0.25rem;
          flex-wrap: wrap;
        }
        .admin-tag-pill {
          font-size: 0.72rem;
          color: #0D9488;
          background: #F0FDFA;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .role-select {
          padding: 0.35rem 0.6rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          font-size: 0.8rem;
          background: white;
        }
        .role-select:focus {
          border-color: #6D28D9;
          outline: none;
        }
        .suggestions-admin-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sugg-admin-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }
        .sugg-admin-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .sugg-author {
          font-weight: 700;
          color: #1E293B;
          font-size: 0.88rem;
        }
        .sugg-date {
          font-size: 0.75rem;
          color: #94A3B8;
          margin-left: 0.5rem;
        }
        .sugg-status-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
        }
        .status-select-sm {
          padding: 0.3rem 0.5rem;
          font-size: 0.8rem;
          width: auto;
        }
        .sugg-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.3rem;
        }
        .sugg-content {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.5;
        }
        .sugg-current-reply {
          margin-top: 0.75rem;
          background: #FFF7ED;
          border-left: 3px solid #EA580C;
          padding: 0.6rem 0.85rem;
          border-radius: 0 6px 6px 0;
          font-size: 0.85rem;
          color: #7C2D12;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .stat-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .stat-card-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748B;
        }
        .stat-card-value {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--primary);
          margin: 0.4rem 0;
        }
        .stat-card-desc {
          font-size: 0.78rem;
          color: #94A3B8;
        }
      `}</style>
    </div>
  );
}
