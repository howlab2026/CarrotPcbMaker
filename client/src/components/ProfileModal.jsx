import React from 'react';
import { 
  Flame, 
  Award, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  HelpCircle, 
  X, 
  Layers, 
  Clock, 
  ArrowUpRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BADGES_METADATA, LEVEL_SYSTEM, getUserLevel } from '../mockData';

export default function ProfileModal({ isOpen, onClose }) {
  const { currentUser } = useAuth();

  if (!isOpen || !currentUser) return null;

  const userTemp = Number(currentUser.solderingTemp || 36.5);
  // Calculate percentage between 36.5 and 99.9
  const minTemp = 36.5;
  const maxTemp = 99.9;
  const tempPercent = Math.min(100, Math.max(0, ((userTemp - minTemp) / (maxTemp - minTemp)) * 100));

  const levelInfo = getUserLevel(userTemp);
  const userBadges = currentUser.badges || ['sprout_maker'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content profile-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-title-box">
            <span className="modal-emoji">🌡️</span>
            <h3>당근 납땜 온도 & 메이커 프로필</h3>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body profile-body">
          {/* User Card */}
          <div className="profile-user-hero">
            <div className="hero-avatar-wrap">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="hero-avatar"
                onError={e => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
              />
              <span className="hero-role-badge">
                {currentUser.role === 'admin' ? '운영진 👑' : '정회원 🌱'}
              </span>
            </div>

            <div className="hero-info">
              <h2 className="hero-name">{currentUser.name}</h2>
              <p className="hero-bio">{currentUser.bio}</p>
              <div className="hero-tags">
                {(currentUser.tags || []).map((t, idx) => (
                  <span key={idx} className="hero-tag">#{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Soldering Temperature Gauge */}
          <div className="temp-gauge-card">
            <div className="temp-header">
              <div className="temp-label-group">
                <Flame size={24} className="temp-flame-icon" />
                <span className="temp-label">당근 납땜 온도</span>
              </div>
              <div className="temp-number-box">
                <span className="temp-degrees">{userTemp.toFixed(1)}℃</span>
                <span className="temp-level-badge" style={{ background: levelInfo.color }}>
                  {levelInfo.title}
                </span>
              </div>
            </div>

            {/* Gauge bar */}
            <div className="temp-bar-track">
              <div 
                className="temp-bar-fill" 
                style={{ width: `${Math.max(5, tempPercent)}%` }}
              >
                <span className="temp-thumb-flame">🔥</span>
              </div>
            </div>

            <div className="temp-scale-marks">
              <span>36.5℃ (기본)</span>
              <span>45.0℃ (열정)</span>
              <span>65.0℃ (장인)</span>
              <span>99.9℃ (마스터)</span>
            </div>

            <p className="temp-desc-sub">{levelInfo.desc}</p>
          </div>

          {/* How to boost temp tips */}
          <div className="temp-boost-guide">
            <h4 className="guide-title">
              <TrendingUp size={16} /> 납땜 온도를 올리는 방법
            </h4>
            <div className="boost-items-grid">
              <div className="boost-item">
                <span className="boost-badge">+1.5℃</span>
                <span className="boost-desc">🚨 회로 SOS 버그 해결책 채택받기</span>
              </div>
              <div className="boost-item">
                <span className="boost-badge">+0.8℃</span>
                <span className="boost-desc">🗺️ 내 고가 계측기/공구 이웃과 공유하기</span>
              </div>
              <div className="boost-item">
                <span className="boost-badge">+0.5℃</span>
                <span className="boost-desc">📦 남는 PCB 나눔 및 부품 묶음공구 주최</span>
              </div>
              <div className="boost-item">
                <span className="boost-badge">+0.5℃</span>
                <span className="boost-desc">☕ 정기 오프라인 납땜 워크숍 참석</span>
              </div>
            </div>
          </div>

          {/* 6단계 메이커 등급 체계 */}
          <div className="levels-tier-section">
            <h4 className="guide-title">
              <Award size={16} /> 당근 PCB 메이커스 6단계 등급 체계
            </h4>
            <div className="levels-tier-grid">
              {LEVEL_SYSTEM.map(lvl => {
                const isCurrent = levelInfo.level === lvl.level;
                return (
                  <div key={lvl.level} className={`level-tier-pill ${isCurrent ? 'current' : ''}`}>
                    <span className="lvl-icon">{lvl.icon}</span>
                    <div className="lvl-info">
                      <span className="lvl-name">Lv.{lvl.level} {lvl.title.replace(/^[^ ]+ /, '')}</span>
                      <span className="lvl-range">{lvl.minTemp} ~ {lvl.maxTemp}℃</span>
                    </div>
                    {isCurrent && <span className="lvl-now-badge">현재 등급</span>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Badges Showcase */}
          <div className="badges-section">
            <div className="badges-section-header">
              <Award size={18} color="#FF6F0F" />
              <h4>메이커 업적 뱃지 ({userBadges.length} / {Object.keys(BADGES_METADATA).length})</h4>
            </div>

            <div className="badges-grid">
              {Object.values(BADGES_METADATA).map(badge => {
                const isUnlocked = userBadges.includes(badge.id);

                return (
                  <div 
                    key={badge.id} 
                    className={`badge-card ${isUnlocked ? 'unlocked' : 'locked'}`}
                  >
                    <div className="badge-icon-box" style={{ borderColor: isUnlocked ? badge.color : '#CBD5E1' }}>
                      {isUnlocked ? (
                        <CheckCircle2 size={22} color={badge.color} />
                      ) : (
                        <Lock size={20} color="#94A3B8" />
                      )}
                    </div>
                    <div className="badge-text-box">
                      <div className="badge-name">{badge.name}</div>
                      <div className="badge-desc">{badge.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-primary" style={{ width: '100%' }} onClick={onClose}>
            확인
          </button>
        </div>
      </div>

      <style>{`
        .profile-modal {
          max-width: 620px;
        }
        .header-title-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .modal-emoji {
          font-size: 1.4rem;
        }
        .profile-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profile-user-hero {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.25rem;
        }
        .hero-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .hero-avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2.5px solid #FFD8BE;
          object-fit: cover;
        }
        .hero-role-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          background: #0F172A;
          color: white;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.15rem 0.45rem;
          border-radius: 10px;
          white-space: nowrap;
        }
        .hero-info {
          flex: 1;
        }
        .hero-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.25rem;
        }
        .hero-bio {
          font-size: 0.86rem;
          color: #475569;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }
        .hero-tags {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .hero-tag {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
        }
        /* Temperature Gauge */
        .temp-gauge-card {
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          border: 1.5px solid #FED7AA;
          border-radius: 14px;
          padding: 1.25rem;
        }
        .temp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }
        .temp-label-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .temp-flame-icon {
          color: #EA580C;
        }
        .temp-label {
          font-size: 1.05rem;
          font-weight: 800;
          color: #9A3412;
        }
        .temp-number-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .temp-degrees {
          font-size: 1.45rem;
          font-weight: 900;
          color: #EA580C;
          letter-spacing: -0.02em;
        }
        .temp-level-badge {
          color: white;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
        }
        .temp-bar-track {
          width: 100%;
          height: 12px;
          background: #FED7AA;
          border-radius: 9999px;
          position: relative;
          overflow: visible;
          margin-bottom: 0.5rem;
        }
        .temp-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981 0%, #F59E0B 40%, #EA580C 75%, #DC2626 100%);
          border-radius: 9999px;
          position: relative;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .temp-thumb-flame {
          position: absolute;
          right: -8px;
          top: -12px;
          font-size: 1.1rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        .temp-scale-marks {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 700;
          color: #9A3412;
          margin-bottom: 0.5rem;
        }
        .temp-desc-sub {
          font-size: 0.82rem;
          color: #C2410C;
          margin-top: 0.25rem;
          font-weight: 600;
        }
        /* Boost tips */
        .temp-boost-guide {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem;
        }
        .guide-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #1E293B;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.75rem;
        }
        .boost-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0.5rem;
        }
        .boost-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #F8FAFC;
          padding: 0.45rem 0.65rem;
          border-radius: 8px;
          border: 1px solid #F1F5F9;
        }

        /* 6단계 등급 체계 스타일 */
        .levels-tier-section {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem;
        }
        .levels-tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }
        .level-tier-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 0.5rem;
          position: relative;
        }
        .level-tier-pill.current {
          background: #FFF2E8;
          border-color: #FF6F0F;
          box-shadow: 0 0 0 1px #FF6F0F;
        }
        .lvl-icon {
          font-size: 1.25rem;
        }
        .lvl-info {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .lvl-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1E293B;
        }
        .lvl-range {
          font-size: 0.72rem;
          color: #64748B;
        }
        .lvl-now-badge {
          position: absolute;
          top: -6px;
          right: 6px;
          background: #FF6F0F;
          color: #FFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 5px;
          border-radius: 4px;
        }
        .boost-badge {
          background: #FEF3C7;
          color: #D97706;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 0.15rem 0.4rem;
          border-radius: 6px;
          white-space: nowrap;
        }
        .boost-desc {
          font-size: 0.8rem;
          color: #334155;
          font-weight: 600;
        }
        /* Badges */
        .badges-section {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem;
        }
        .badges-section-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.85rem;
        }
        .badges-section-header h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0F172A;
        }
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 0.75rem;
        }
        .badge-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          border: 1.5px solid var(--border);
          transition: all 0.15s ease;
        }
        .badge-card.unlocked {
          background: #FFFFFF;
          border-color: #FED7AA;
          box-shadow: 0 2px 6px rgba(255, 111, 15, 0.08);
        }
        .badge-card.locked {
          background: #F8FAFC;
          opacity: 0.6;
        }
        .badge-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          flex-shrink: 0;
        }
        .badge-text-box {
          flex: 1;
        }
        .badge-name {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.15rem;
        }
        .badge-desc {
          font-size: 0.75rem;
          color: #64748B;
          line-height: 1.35;
        }
      `}</style>
    </div>
  );
}
