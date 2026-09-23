import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Flame, 
  Calendar, 
  Award, 
  BarChart3, 
  PieChart, 
  Activity, 
  Layers, 
  MessageSquare, 
  Package, 
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getUserLevel } from '../mockData';

export default function StatsView() {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(d => {
        setStats(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // GitHub 잔디 히트맵 시뮬레이션 데이터 (최근 26주 = 약 182일)
  const generateHeatmapDays = () => {
    const days = [];
    const today = new Date();
    // 26주 * 7일 = 182일
    for (let i = 181; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      
      // 랜덤 활동 수치 (특정 날짜는 높은 수치)
      const dayOfWeek = d.getDay();
      let count = 0;
      const seed = (d.getFullYear() * 1000 + d.getMonth() * 100 + d.getDate()) % 17;
      if (seed === 0 || seed === 3 || seed === 7) count = 3 + (seed % 4);
      else if (seed === 2 || seed === 8 || seed === 11) count = 1 + (seed % 3);
      else if (dayOfWeek === 6 || dayOfWeek === 0) count = (seed % 5);

      let level = 0;
      if (count >= 5) level = 4;
      else if (count >= 3) level = 3;
      else if (count >= 2) level = 2;
      else if (count >= 1) level = 1;

      days.push({
        date: dateStr,
        count,
        level,
        dayOfWeek
      });
    }
    return days;
  };

  const heatmapDays = generateHeatmapDays();
  const totalContributions = heatmapDays.reduce((sum, d) => sum + d.count, 0);

  // 상위 랭커 명예의 전당 (Mock)
  const topMakers = [
    { rank: 1, name: '당근마스터 (운영진)', temp: 85.5, projects: 12, badges: 6, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
    { rank: 2, name: '회로도장인', temp: 68.0, projects: 8, badges: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    { rank: 3, name: '아트웍요정', temp: 62.5, projects: 7, badges: 4, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
    { rank: 4, name: '메이커꿈나무', temp: 42.0, projects: 3, badges: 2, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80' },
    { rank: 5, name: 'SMT장인김씨', temp: 39.5, projects: 2, badges: 2, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' }
  ];

  return (
    <div className="stats-view">
      <div className="stats-header">
        <div>
          <h2 className="page-title">
            <span className="title-emoji">📈</span> 활동 히트맵 & 통계 분석
          </h2>
          <p className="page-desc">
            내가 설계하고 소통한 자작 활동의 발자취를 잔디 히트맵과 통계 차트로 확인하세요.
          </p>
        </div>
      </div>

      {/* 종합 요약 카드 */}
      <div className="summary-cards-grid">
        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#FFF2E8', color: '#FF6F0F' }}>
            <Activity size={24} />
          </div>
          <div className="summary-data">
            <span className="data-val">{totalContributions}회</span>
            <span className="data-lbl">최근 6개월 총 활동</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#ECFDF5', color: '#10B981' }}>
            <Flame size={24} />
          </div>
          <div className="summary-data">
            <span className="data-val">+{((currentUser?.solderingTemp || 36.5) - 36.5).toFixed(1)}℃</span>
            <span className="data-lbl">누적 납땜 온도 상승치</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#EFF6FF', color: '#3B82F6' }}>
            <Calendar size={24} />
          </div>
          <div className="summary-data">
            <span className="data-val">14일</span>
            <span className="data-lbl">최장 연속 활동 스트릭</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#F5F3FF', color: '#8B5CF6' }}>
            <Award size={24} />
          </div>
          <div className="summary-data">
            <span className="data-val">{currentUser?.badges?.length || 2}개</span>
            <span className="data-lbl">획득한 업적 뱃지</span>
          </div>
        </div>
      </div>

      {/* GitHub 잔디 활동 히트맵 카드 */}
      <div className="heatmap-card">
        <div className="heatmap-card-header">
          <div className="heatmap-title-wrap">
            <Calendar size={18} color="#FF6F0F" />
            <h3 className="heatmap-title">메이커 활동 잔디 히트맵 (최근 26주)</h3>
          </div>
          <div className="heatmap-legend">
            <span className="legend-text">적음</span>
            <span className="legend-cell level-0" />
            <span className="legend-cell level-1" />
            <span className="legend-cell level-2" />
            <span className="legend-cell level-3" />
            <span className="legend-cell level-4" />
            <span className="legend-text">많음</span>
          </div>
        </div>

        <div className="heatmap-grid-container">
          <div className="heatmap-grid">
            {heatmapDays.map((d, idx) => (
              <div
                key={idx}
                className={`heatmap-cell level-${d.level}`}
                title={`${d.date}: 활동 ${d.count}건`}
                onClick={() => setSelectedCell(d)}
              />
            ))}
          </div>
        </div>

        {selectedCell && (
          <div className="selected-cell-info">
            <Sparkles size={14} color="#FF6F0F" />
            <span>
              <strong>{selectedCell.date}</strong>: 회로 설계, 커뮤니티 소통 등 <strong>{selectedCell.count}건</strong>의 메이커 활동 기록
            </span>
          </div>
        )}
      </div>

      {/* 활동 분류 및 명예의 전당 2단 구성 */}
      <div className="stats-bottom-row">
        {/* 활동 유형별 분석 차트 */}
        <div className="breakdown-card">
          <h3 className="card-heading">
            <PieChart size={18} /> 활동 유형별 기여 분포
          </h3>

          <div className="category-bars-list">
            <div className="bar-item">
              <div className="bar-meta">
                <span className="bar-name">🛠️ PCB 회로 설계 & 갤러리 등록</span>
                <span className="bar-val">38%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '38%', background: '#FF6F0F' }} />
              </div>
            </div>

            <div className="bar-item">
              <div className="bar-meta">
                <span className="bar-name">💬 커뮤니티 글/댓글 & 회로 SOS 답변</span>
                <span className="bar-val">32%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '32%', background: '#10B981' }} />
              </div>
            </div>

            <div className="bar-item">
              <div className="bar-meta">
                <span className="bar-name">📦 부품 나눔 & 해외 기판 발주</span>
                <span className="bar-val">18%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '18%', background: '#3B82F6' }} />
              </div>
            </div>

            <div className="bar-item">
              <div className="bar-meta">
                <span className="bar-name">☕ 오프라인 밋업 & 납땜 워크숍 참석</span>
                <span className="bar-val">12%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '12%', background: '#8B5CF6' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 상위 랭커 명예의 전당 */}
        <div className="leaderboard-card">
          <h3 className="card-heading">
            <Award size={18} /> 당근 PCB 메이커스 명예의 전당
          </h3>

          <div className="leaderboard-list">
            {topMakers.map(maker => {
              const lvl = getUserLevel(maker.temp);

              return (
                <div key={maker.rank} className="leaderboard-item">
                  <div className={`rank-badge rank-${maker.rank}`}>
                    {maker.rank === 1 ? '🥇' : maker.rank === 2 ? '🥈' : maker.rank === 3 ? '🥉' : maker.rank}
                  </div>

                  <img 
                    src={maker.avatar} 
                    alt={maker.name} 
                    className="maker-avatar"
                    onError={e => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                  />

                  <div className="maker-details">
                    <span className="maker-name">{maker.name}</span>
                    <span className="maker-level-title">{lvl.title} · 프로젝트 {maker.projects}개</span>
                  </div>

                  <div className="maker-temp-box">
                    <Flame size={14} color="#EA580C" />
                    <span>{maker.temp.toFixed(1)}℃</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .stats-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .stats-header {
          margin-bottom: 1.5rem;
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

        .summary-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .summary-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .summary-icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .summary-data {
          display: flex;
          flex-direction: column;
        }

        .data-val {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .data-lbl {
          font-size: 0.8rem;
          color: var(--text-muted, #64748B);
        }

        .heatmap-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 14px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .heatmap-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .heatmap-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heatmap-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .legend-text {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
        }

        .legend-cell {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .heatmap-grid-container {
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .heatmap-grid {
          display: grid;
          grid-template-rows: repeat(7, 14px);
          grid-auto-flow: column;
          grid-auto-columns: 14px;
          gap: 4px;
          width: fit-content;
        }

        .heatmap-cell {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        .heatmap-cell:hover {
          transform: scale(1.3);
          outline: 1px solid var(--text-main, #334155);
        }

        .level-0 { background: #F1F5F9; }
        .level-1 { background: #FFD8BE; }
        .level-2 { background: #FFAA7A; }
        .level-3 { background: #FF6F0F; }
        .level-4 { background: #C2410C; }

        .selected-cell-info {
          margin-top: 1rem;
          padding: 0.6rem 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-main, #334155);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stats-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .breakdown-card, .leaderboard-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 14px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .card-heading {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .category-bars-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
        }

        .bar-val {
          font-weight: 700;
          color: var(--primary, #FF6F0F);
        }

        .bar-track {
          height: 8px;
          background: var(--bg-sub, #F1F5F9);
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .leaderboard-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.8rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 10px;
        }

        .rank-badge {
          font-size: 0.95rem;
          font-weight: 800;
          min-width: 24px;
          text-align: center;
        }

        .maker-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }

        .maker-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .maker-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
        }

        .maker-level-title {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
        }

        .maker-temp-box {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.85rem;
          font-weight: 800;
          color: #EA580C;
          background: #FFF2E8;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }

        @media (max-width: 1024px) {
          .summary-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-bottom-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .summary-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
