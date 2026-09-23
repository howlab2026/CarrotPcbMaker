import React, { useState, useEffect } from 'react';
import { Trophy, Clock, Users, ThumbsUp, Plus, Upload, Calendar, Star, ArrowRight, Award, CheckCircle2, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function daysRemaining(endDate) {
  const diff = new Date(endDate) - new Date();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function ChallengeView() {
  const { currentUser } = useAuth();
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [submitForm, setSubmitForm] = useState({ title: '', description: '', image: '' });
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => { fetchChallenges(); }, []);

  const fetchChallenges = async () => {
    try {
      const res = await fetch('/api/challenges');
      if (res.ok) setChallenges(await res.json());
    } catch (e) { console.error(e); }
  };

  const handleSubmit = async () => {
    if (!selectedChallenge || !currentUser || !submitForm.title.trim()) return;
    try {
      const res = await fetch(`/api/challenges/${selectedChallenge.id}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          title: submitForm.title,
          description: submitForm.description,
          image: submitForm.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
        })
      });
      if (res.ok) {
        setShowSubmitForm(false);
        setSubmitForm({ title: '', description: '', image: '' });
        fetchChallenges();
      }
    } catch (e) { console.error(e); }
  };

  const handleVote = async (chalId, subId) => {
    if (!currentUser) return;
    try {
      await fetch(`/api/challenges/${chalId}/vote/${subId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id })
      });
      fetchChallenges();
    } catch (e) { console.error(e); }
  };

  const filtered = challenges.filter(c => activeFilter === 'all' || c.status === activeFilter);
  const statusLabels = { active: '진행중', upcoming: '예정', ended: '종료' };
  const statusColors = { active: '#10B981', upcoming: '#3B82F6', ended: '#94A3B8' };

  return (
    <div className="challenge-view fade-in">
      <div className="challenge-header-section">
        <div className="challenge-title-box">
          <Trophy size={28} style={{ color: '#F59E0B' }} />
          <div>
            <h2>🏆 주간 챌린지 & 콘테스트</h2>
            <p>매주 다양한 PCB 설계 챌린지에 참여하고 메이커 온도를 올려보세요!</p>
          </div>
        </div>
      </div>

      <div className="challenge-filters">
        {[{ key: 'all', label: '전체' }, { key: 'active', label: '🔥 진행중' }, { key: 'upcoming', label: '📅 예정' }, { key: 'ended', label: '🏁 종료' }].map(f => (
          <button key={f.key} className={`filter-chip ${activeFilter === f.key ? 'active' : ''}`} onClick={() => setActiveFilter(f.key)}>{f.label}</button>
        ))}
      </div>

      <div className="challenge-grid">
        {filtered.map(chal => {
          const days = daysRemaining(chal.endDate);
          const isActive = chal.status === 'active';
          const totalVotes = chal.submissions.reduce((s, sub) => s + sub.votes, 0);
          return (
            <div key={chal.id} className={`challenge-card ${chal.status}`} onClick={() => setSelectedChallenge(selectedChallenge?.id === chal.id ? null : chal)}>
              <div className="chal-card-top">
                <span className="chal-status-badge" style={{ background: statusColors[chal.status] + '20', color: statusColors[chal.status] }}>
                  {statusLabels[chal.status]}
                </span>
                {isActive && <span className="chal-dday">D-{days}</span>}
              </div>
              <h3>{chal.title}</h3>
              <p className="chal-desc">{chal.description}</p>
              <div className="chal-meta">
                <span><Calendar size={14} /> {formatDate(chal.startDate)} ~ {formatDate(chal.endDate)}</span>
                <span><Users size={14} /> {chal.submissions.length}팀 참여</span>
                <span><ThumbsUp size={14} /> {totalVotes}표</span>
              </div>
              <div className="chal-prize">
                <Award size={14} /> {chal.prize}
              </div>
            </div>
          );
        })}
      </div>

      {/* 챌린지 상세 & 제출물 */}
      {selectedChallenge && (
        <div className="challenge-detail-section">
          <div className="chal-detail-header">
            <h3>{selectedChallenge.title}</h3>
            {selectedChallenge.status === 'active' && currentUser && (
              <button className="btn-primary" onClick={() => setShowSubmitForm(true)}>
                <Upload size={16} /> 작품 제출
              </button>
            )}
          </div>

          <div className="chal-rules-box">
            <h4>📋 참가 규칙</h4>
            <div className="chal-rules-content">
              {selectedChallenge.rules.split('\\n').map((rule, i) => (
                <div key={i} className="chal-rule-item">
                  <CheckCircle2 size={14} style={{ color: '#10B981' }} /> {rule}
                </div>
              ))}
            </div>
          </div>

          <h4 className="submissions-title">🎨 제출 작품 ({selectedChallenge.submissions.length})</h4>
          <div className="submissions-grid">
            {selectedChallenge.submissions.length === 0 ? (
              <div className="empty-submissions">아직 제출된 작품이 없습니다. 첫 번째 참가자가 되어보세요!</div>
            ) : (
              [...selectedChallenge.submissions].sort((a, b) => b.votes - a.votes).map((sub, idx) => {
                const hasVoted = currentUser && sub.votedUsers?.includes(currentUser.id);
                return (
                  <div key={sub.id} className="submission-card">
                    {idx === 0 && <div className="rank-badge gold">🥇</div>}
                    {idx === 1 && <div className="rank-badge silver">🥈</div>}
                    {idx === 2 && <div className="rank-badge bronze">🥉</div>}
                    <div className="sub-image" style={{ backgroundImage: `url(${sub.image})` }} />
                    <div className="sub-info">
                      <div className="sub-author">
                        <img src={sub.userAvatar} alt="" onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }} />
                        <span>{sub.userName}</span>
                      </div>
                      <h4>{sub.title}</h4>
                      <p>{sub.description}</p>
                      <div className="sub-actions">
                        <button className={`vote-btn ${hasVoted ? 'voted' : ''}`} onClick={(e) => { e.stopPropagation(); handleVote(selectedChallenge.id, sub.id); }}>
                          <ThumbsUp size={14} /> {sub.votes}표 {hasVoted ? '(투표함)' : '투표'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* 제출 폼 모달 */}
      {showSubmitForm && (
        <div className="modal-overlay" onClick={() => setShowSubmitForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: 520 }}>
            <div className="modal-header">
              <h3>🎯 작품 제출</h3>
              <button onClick={() => setShowSubmitForm(false)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">작품 제목 *</label>
                <input className="form-input" value={submitForm.title} onChange={e => setSubmitForm(p => ({ ...p, title: e.target.value }))} placeholder="예: 초미니 ESP32-C3 보드 (18mm x 24mm)" />
              </div>
              <div className="form-group">
                <label className="form-label">설명</label>
                <textarea className="form-textarea" rows={3} value={submitForm.description} onChange={e => setSubmitForm(p => ({ ...p, description: e.target.value }))} placeholder="설계 포인트, 사용 기술 등을 설명해주세요" />
              </div>
              <div className="form-group">
                <label className="form-label">이미지 URL</label>
                <input className="form-input" value={submitForm.image} onChange={e => setSubmitForm(p => ({ ...p, image: e.target.value }))} placeholder="기판 사진 또는 3D 렌더링 URL" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowSubmitForm(false)}>취소</button>
              <button className="btn-primary" onClick={handleSubmit} disabled={!submitForm.title.trim()}>제출하기</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .challenge-view { max-width: 1100px; margin: 0 auto; }
        .challenge-header-section { margin-bottom: 1.5rem; }
        .challenge-title-box { display: flex; align-items: flex-start; gap: 1rem; }
        .challenge-title-box h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-main, #0F172A); margin: 0; }
        .challenge-title-box p { font-size: 0.9rem; color: var(--text-muted, #64748B); margin-top: 0.25rem; }
        .challenge-filters { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .filter-chip {
          padding: 0.45rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;
          background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); color: var(--text-muted, #64748B); cursor: pointer;
        }
        .filter-chip.active { background: var(--primary); color: white; border-color: var(--primary); }
        .challenge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.25rem; margin-bottom: 2rem; }
        .challenge-card {
          background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
          cursor: pointer; transition: all 0.2s;
        }
        .challenge-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .challenge-card.active { border-color: #10B981; border-width: 2px; }
        .chal-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
        .chal-status-badge { padding: 0.2rem 0.65rem; border-radius: 12px; font-size: 0.75rem; font-weight: 700; }
        .chal-dday { font-size: 0.85rem; font-weight: 800; color: #DC2626; }
        .challenge-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--text-main, #0F172A); margin-bottom: 0.5rem; line-height: 1.4; }
        .chal-desc { font-size: 0.85rem; color: var(--text-muted, #64748B); line-height: 1.5; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .chal-meta { display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.78rem; color: var(--text-sub, #94A3B8); margin-bottom: 0.75rem; }
        .chal-meta span { display: flex; align-items: center; gap: 0.3rem; }
        .chal-prize { display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; font-weight: 600; color: #F59E0B; background: #FFFBEB; padding: 0.4rem 0.75rem; border-radius: 8px; border: 1px solid #FEF3C7; }
        .challenge-detail-section { background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; }
        .chal-detail-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .chal-detail-header h3 { font-size: 1.2rem; font-weight: 800; }
        .chal-rules-box { background: var(--bg-subtle, #F8FAFC); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; }
        .chal-rules-box h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.75rem; }
        .chal-rule-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted, #64748B); padding: 0.3rem 0; }
        .submissions-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; }
        .submissions-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
        .empty-submissions { text-align: center; padding: 2rem; color: var(--text-sub, #94A3B8); font-size: 0.9rem; grid-column: 1 / -1; }
        .submission-card {
          background: var(--bg-subtle, #F8FAFC); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; position: relative;
        }
        .rank-badge { position: absolute; top: 0.75rem; left: 0.75rem; font-size: 1.3rem; z-index: 1; background: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        .sub-image { height: 160px; background-size: cover; background-position: center; background-color: var(--bg-subtle, #E2E8F0); }
        .sub-info { padding: 1rem; }
        .sub-author { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .sub-author img { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; }
        .sub-author span { font-size: 0.8rem; font-weight: 600; color: var(--text-muted, #64748B); }
        .sub-info h4 { font-size: 0.92rem; font-weight: 700; color: var(--text-main, #0F172A); margin-bottom: 0.35rem; }
        .sub-info p { font-size: 0.8rem; color: var(--text-muted, #64748B); line-height: 1.4; margin-bottom: 0.75rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .vote-btn {
          display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.85rem; border-radius: 8px;
          font-size: 0.8rem; font-weight: 600; background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); color: var(--text-muted, #64748B); cursor: pointer;
        }
        .vote-btn:hover { border-color: var(--primary); color: var(--primary); }
        .vote-btn.voted { background: var(--primary-light, #FFF2E8); color: var(--primary); border-color: var(--primary); }
        .sub-actions { display: flex; gap: 0.5rem; }
      `}</style>
    </div>
  );
}
