import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  MessageSquare, 
  Flame, 
  Award, 
  Plus, 
  CheckCircle2, 
  Sparkles, 
  X,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getUserLevel } from '../mockData';

export default function MentoringView({ onNavigateToChat }) {
  const { currentUser } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // 멘토 등록 폼
  const [form, setForm] = useState({
    title: '',
    tags: '',
    message: ''
  });

  const userTemp = Number(currentUser?.solderingTemp || 36.5);
  const canBeMentor = userTemp >= 50.0;

  const fetchSessions = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/mentoring');
      const data = await res.json();
      setSessions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // 멘티 신청
  const handleApplyMentee = async (session) => {
    if (!currentUser) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    if (session.mentorId === currentUser.id) {
      alert('자신이 개설한 멘토링에는 멘티로 신청할 수 없습니다.');
      return;
    }

    try {
      const res = await fetch(`/api/mentoring/${session.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'active',
          menteeId: currentUser.id,
          menteeName: currentUser.name,
          sessionsCount: (session.sessionsCount || 0) + 1
        })
      });

      if (res.ok) {
        setSessions(prev => prev.map(s => s.id === session.id ? {
          ...s,
          status: 'active',
          menteeId: currentUser.id,
          menteeName: currentUser.name,
          sessionsCount: (s.sessionsCount || 0) + 1
        } : s));
        showToast('멘토링 매칭이 성사되었습니다! 🎉');
        if (onNavigateToChat) {
          setTimeout(() => onNavigateToChat(session.mentorId), 1000);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 멘토 프로그램 개설
  const handleCreateMentorProgram = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.message.trim()) {
      alert('제목과 안내 메시지를 입력해주세요.');
      return;
    }

    try {
      const tagsArray = form.tags
        .split(',')
        .map(t => t.trim().replace(/^#/, ''))
        .filter(Boolean);

      const payload = {
        mentorId: currentUser.id,
        mentorName: currentUser.name,
        mentorTemp: currentUser.solderingTemp || 50.0,
        mentorTags: tagsArray.length > 0 ? tagsArray : ['회로설계'],
        title: form.title,
        message: form.message
      };

      const res = await fetch('/api/mentoring', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setIsModalOpen(false);
        setForm({ title: '', tags: '', message: '' });
        fetchSessions();
        showToast('멘토 프로그램이 등록되었습니다! 🎓');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mentoring-view">
      <div className="mentoring-header">
        <div>
          <h2 className="page-title">
            <span className="title-emoji">🎓</span> 메이커 멘토링 매칭
          </h2>
          <p className="page-desc">
            고수 메이커에게 1:1로 아트웍 검토와 디버깅 코칭을 받고, 함께 성장하는 온·오프라인 멘토링 프로그램입니다.
          </p>
        </div>

        <div className="header-actions">
          {toastMsg && <span className="toast-badge">{toastMsg}</span>}
          {canBeMentor ? (
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={16} /> 멘토 등록하기
            </button>
          ) : (
            <div className="mentor-qualify-tip">
              <Flame size={14} color="#EA580C" />
              <span>온도 50℃ 이상 시 멘토 개설 가능 (현재 {userTemp.toFixed(1)}℃)</span>
            </div>
          )}
        </div>
      </div>

      {/* 멘토링 안내 배너 */}
      <div className="mentoring-info-banner">
        <div className="banner-col">
          <div className="banner-icon-box">🌱</div>
          <div>
            <h4>초보 메이커 (멘티)</h4>
            <p>설계한 거버 파일이나 회로도 검토, 에러 트러블슈팅을 1:1로 질문하세요.</p>
          </div>
        </div>
        <div className="banner-divider" />
        <div className="banner-col">
          <div className="banner-icon-box">⚡</div>
          <div>
            <h4>경험 메이커 (멘토)</h4>
            <p>납땜 온도 50℃ 이상 회원이 노하우를 전수하며, 완료 시 온도 +2℃와 멘토 뱃지 수여!</p>
          </div>
        </div>
      </div>

      {/* 멘토링 목록 */}
      <div className="sessions-list-section">
        <h3 className="section-title">
          <Users size={18} /> 개설된 멘토링 프로그램 ({sessions.length})
        </h3>

        {loading ? (
          <div className="loading-state">멘토링 목록을 불러오는 중입니다...</div>
        ) : sessions.length === 0 ? (
          <div className="empty-state">
            <GraduationCap size={48} color="#CBD5E1" />
            <p>현재 등록된 멘토링 프로그램이 없습니다.</p>
          </div>
        ) : (
          <div className="sessions-grid">
            {sessions.map(s => {
              const mentorLevel = getUserLevel(s.mentorTemp);
              const isMySession = s.mentorId === currentUser?.id;
              const isMatched = s.status === 'active';

              return (
                <div key={s.id} className={`session-card ${isMatched ? 'matched' : ''}`}>
                  <div className="session-top">
                    <div className="mentor-profile-group">
                      <div className="mentor-avatar-badge">
                        <span className="mentor-emoji">👨‍🔧</span>
                      </div>
                      <div className="mentor-info">
                        <span className="mentor-name">{s.mentorName}</span>
                        <div className="mentor-temp-tag">
                          <Flame size={12} color="#FF6F0F" />
                          <span>{Number(s.mentorTemp).toFixed(1)}℃ ({mentorLevel.title})</span>
                        </div>
                      </div>
                    </div>

                    <span className={`status-pill ${isMatched ? 'active' : 'recruiting'}`}>
                      {isMatched ? '진행중 (매칭완료)' : '멘티 모집중'}
                    </span>
                  </div>

                  <h4 className="session-title">{s.title}</h4>
                  <p className="session-msg">{s.message}</p>

                  <div className="session-tags">
                    {(s.mentorTags || []).map((t, idx) => (
                      <span key={idx} className="tag-chip">#{t}</span>
                    ))}
                  </div>

                  {isMatched && (
                    <div className="matched-info-box">
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>멘티: <strong>{s.menteeName}</strong> 메이커 매칭 완료</span>
                    </div>
                  )}

                  <div className="session-footer">
                    <span className="session-count">진행 세션: {s.sessionsCount || 0}회</span>

                    {isMatched ? (
                      <button 
                        className="btn-chat"
                        onClick={() => onNavigateToChat && onNavigateToChat(isMySession ? s.menteeId : s.mentorId)}
                      >
                        <MessageSquare size={14} /> 1:1 대화방
                      </button>
                    ) : (
                      <button 
                        className="btn-apply"
                        onClick={() => handleApplyMentee(s)}
                        disabled={isMySession}
                      >
                        {isMySession ? '내가 개설한 멘토링' : '멘티 신청하기'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 멘토 등록 모달 */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <GraduationCap size={20} color="#FF6F0F" />
                <h3>새 멘토 프로그램 개설</h3>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateMentorProgram} className="modal-form">
              <div className="form-group">
                <label>멘토링 주제 *</label>
                <input
                  type="text"
                  placeholder="예: 초보자를 위한 4층 기판 KiCad 라우팅 & DRC 검토"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>전문 분야 태그 (쉼표로 구분)</label>
                <input
                  type="text"
                  placeholder="예: KiCad, 전원회로, BGA, 노이즈대책"
                  value={form.tags}
                  onChange={e => setForm({ ...form, tags: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>멘티에게 전하는 말 / 멘토링 방식 *</label>
                <textarea
                  rows="4"
                  placeholder="예: 설계하신 회로도/거버를 함께 검토하고, 질문에 답변해 드립니다. 온라인 당근 채팅 또는 오프라인 밋업에서 진행 가능합니다."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary">
                  멘토 프로그램 등록
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .mentoring-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .mentoring-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .toast-badge {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid #A7F3D0;
        }

        .mentor-qualify-tip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFF2E8;
          color: #C2410C;
          border: 1px solid #FFD8BE;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .mentoring-info-banner {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .banner-col {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .banner-icon-box {
          font-size: 1.75rem;
        }

        .banner-col h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          margin-bottom: 0.25rem;
        }

        .banner-col p {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          line-height: 1.4;
        }

        .banner-divider {
          width: 1px;
          background: var(--border, #E2E8F0);
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .sessions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 1.25rem;
        }

        .session-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .session-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px -2px rgba(0,0,0,0.06);
        }

        .session-card.matched {
          border-color: #86EFAC;
          background: #F0FDF4;
        }

        .session-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mentor-profile-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .mentor-avatar-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--primary-light, #FFF2E8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .mentor-info {
          display: flex;
          flex-direction: column;
        }

        .mentor-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
        }

        .mentor-temp-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
          font-weight: 600;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .status-pill.recruiting {
          background: #EFF6FF;
          color: #2563EB;
        }

        .status-pill.active {
          background: #DCFCE7;
          color: #15803D;
        }

        .session-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          line-height: 1.4;
        }

        .session-msg {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          line-height: 1.5;
          flex: 1;
        }

        .session-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .tag-chip {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-main, #475569);
          background: var(--bg-sub, #F8FAFC);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border, #E2E8F0);
        }

        .matched-info-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFFFFF;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #BBF7D0;
          font-size: 0.8rem;
          color: #166534;
        }

        .session-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border, #F1F5F9);
        }

        .session-count {
          font-size: 0.8rem;
          color: var(--text-muted, #64748B);
        }

        .btn-apply {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-apply:disabled {
          background: #E2E8F0;
          color: #94A3B8;
          cursor: not-allowed;
        }

        .btn-chat {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #2563EB;
          color: #FFF;
          border: none;
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-container {
          background: var(--bg-card, #FFFFFF);
          border-radius: 14px;
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border, #E2E8F0);
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
        }

        .modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main, #334155);
        }

        .form-group input, .form-group textarea {
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 8px;
          padding: 0.55rem 0.75rem;
          font-size: 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-main, #1E293B);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-primary {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary {
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #334155);
          border: 1px solid var(--border, #E2E8F0);
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mentoring-info-banner {
            flex-direction: column;
            gap: 1rem;
          }
          .banner-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
