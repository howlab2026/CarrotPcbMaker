import React, { useState } from 'react';
import { X, UserCheck, LogIn, UserPlus, Sparkles, Shield, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { currentUser, users, quickSwitchUser, login, register } = useAuth();
  const [activeTab, setActiveTab] = useState('switch'); // 'switch' | 'login' | 'register'
  
  // Login form state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regBio, setRegBio] = useState('');
  const [regTags, setRegTags] = useState('KiCad, 아두이노, 2층기판');
  const [regAvatar, setRegAvatar] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await login(loginUsername, loginPassword);
      setSuccess('성공적으로 로그인되었습니다!');
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const tagsArray = regTags.split(',').map(t => t.trim()).filter(Boolean);
      await register({
        username: regUsername,
        password: regPassword,
        name: regName,
        bio: regBio,
        tags: tagsArray,
        avatar: regAvatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(regUsername)}`
      });
      setSuccess('회원가입이 완료되어 자동 로그인되었습니다! 환영합니다 🥕');
      setTimeout(() => {
        onClose();
      }, 600);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="auth-header-title">
            <span className="auth-carrot-badge">🥕</span>
            <h3>당근 PCB 메이커스 회원 센터</h3>
          </div>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        {/* Tab switcher */}
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${activeTab === 'switch' ? 'active' : ''}`}
            onClick={() => { setActiveTab('switch'); setError(''); }}
          >
            <Sparkles size={16} />
            <span>원클릭 계정 전환</span>
          </button>
          <button 
            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setError(''); }}
          >
            <UserPlus size={16} />
            <span>신규 회원 등록</span>
          </button>
          <button 
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setError(''); }}
          >
            <LogIn size={16} />
            <span>기존 로그인</span>
          </button>
        </div>

        <div className="modal-body">
          {error && <div className="auth-alert error">{error}</div>}
          {success && <div className="auth-alert success">{success}</div>}

          {/* TAB 1: Quick Demo Switcher */}
          {activeTab === 'switch' && (
            <div className="quick-switch-section">
              <p className="quick-switch-desc">
                다양한 회원의 시각(운영진, 회로 엔지니어, 초보 메이커 등)으로 기능을 즉시 테스트할 수 있는 원클릭 데모 계정 전환 기능입니다.
              </p>

              <div className="user-cards-grid">
                {users.map(u => {
                  const isCurrent = currentUser?.id === u.id;
                  return (
                    <div 
                      key={u.id}
                      className={`user-card-item ${isCurrent ? 'current-active' : ''}`}
                      onClick={() => {
                        quickSwitchUser(u);
                        onClose();
                      }}
                    >
                      <div className="user-card-top">
                        <img 
                          src={u.avatar} 
                          alt={u.name} 
                          className="user-card-avatar"
                          onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=avatar'; }}
                        />
                        <div className="user-card-meta">
                          <div className="user-card-name-row">
                            <span className="user-card-name">{u.name}</span>
                            {u.role === 'admin' ? (
                              <span className="badge badge-orange"><Shield size={12} /> 관리자</span>
                            ) : (
                              <span className="badge badge-green"><User size={12} /> {u.tags?.[0] || '정회원'}</span>
                            )}
                          </div>
                          <span className="user-card-id">@{u.username}</span>
                        </div>
                      </div>
                      <p className="user-card-bio">{u.bio}</p>
                      <div className="user-card-footer">
                        <span className="user-card-tags">
                          {u.tags?.map((t, idx) => (
                            <span key={idx} className="mini-tag">#{t}</span>
                          ))}
                        </span>
                        {isCurrent ? (
                          <span className="current-badge"><UserCheck size={14} /> 현재 접속 중</span>
                        ) : (
                          <span className="select-badge">클릭하여 전환 →</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Register New User */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="auth-form">
              <div className="form-group">
                <label className="form-label">아이디 (ID) *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={regUsername} 
                  onChange={e => setRegUsername(e.target.value)}
                  placeholder="예: pcb_newbie" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">비밀번호 *</label>
                <input 
                  type="password" 
                  className="form-input" 
                  value={regPassword} 
                  onChange={e => setRegPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">닉네임 / 활동명 *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={regName} 
                  onChange={e => setRegName(e.target.value)}
                  placeholder="예: 역삼동 납땜마스터" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">관심 분야 (쉼표로 구분)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={regTags} 
                  onChange={e => setRegTags(e.target.value)}
                  placeholder="예: KiCad, ESP32, 4층기판, SMPS" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">자기소개 / 모임 가입 인사</label>
                <textarea 
                  className="form-textarea" 
                  rows={2}
                  value={regBio} 
                  onChange={e => setRegBio(e.target.value)}
                  placeholder="관심있는 하드웨어 프로젝트나 모임에서 하고 싶은 활동을 적어주세요." 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <UserPlus size={18} />
                <span>당근 PCB 모임 가입 완료</span>
              </button>
            </form>
          )}

          {/* TAB 3: Login */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="auth-form">
              <div className="form-group">
                <label className="form-label">아이디</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={loginUsername} 
                  onChange={e => setLoginUsername(e.target.value)}
                  placeholder="아이디 (예: admin, circuit_pro, rookie_maker)" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">비밀번호</label>
                <input 
                  type="password" 
                  className="form-input" 
                  value={loginPassword} 
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder="기본 비밀번호: 123" 
                  required 
                />
              </div>

              <div className="login-tip">
                💡 팁: 데모 계정들의 비밀번호는 모두 <code>123</code> 입니다.
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <LogIn size={18} />
                <span>로그인</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .auth-modal-box {
          max-width: 620px;
        }
        .auth-header-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .auth-carrot-badge {
          font-size: 1.3rem;
        }
        .close-btn {
          color: #94A3B8;
          padding: 0.25rem;
          border-radius: 6px;
        }
        .close-btn:hover {
          color: #0F172A;
          background: #F1F5F9;
        }
        .auth-tabs {
          display: flex;
          border-bottom: 1px solid var(--border);
          background: #F8FAFC;
        }
        .auth-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.85rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #64748B;
          border-bottom: 2px solid transparent;
        }
        .auth-tab.active {
          color: var(--primary);
          background: white;
          border-bottom-color: var(--primary);
        }
        .auth-alert {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 500;
        }
        .auth-alert.error {
          background: #FEF2F2;
          color: #B91C1C;
          border: 1px solid #FECACA;
        }
        .auth-alert.success {
          background: #ECFDF5;
          color: #047857;
          border: 1px solid #A7F3D0;
        }
        .quick-switch-desc {
          font-size: 0.88rem;
          color: #64748B;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .user-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .user-card-item {
          background: #FFFFFF;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .user-card-item:hover {
          border-color: var(--primary);
          background: #FFFBF7;
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        .user-card-item.current-active {
          border-color: var(--primary);
          background: #FFF7F0;
        }
        .user-card-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .user-card-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FED7AA;
        }
        .user-card-meta {
          flex: 1;
        }
        .user-card-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .user-card-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #1E293B;
        }
        .user-card-id {
          font-size: 0.75rem;
          color: #94A3B8;
        }
        .user-card-bio {
          font-size: 0.83rem;
          color: #475569;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }
        .user-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px dashed #E2E8F0;
          padding-top: 0.5rem;
        }
        .mini-tag {
          font-size: 0.72rem;
          color: #0D9488;
          background: #F0FDFA;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          margin-right: 0.3rem;
          font-weight: 500;
        }
        .current-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .select-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748B;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .login-tip {
          font-size: 0.8rem;
          color: #64748B;
          background: #F8FAFC;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .login-tip code {
          background: #E2E8F0;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          font-family: var(--font-mono);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
