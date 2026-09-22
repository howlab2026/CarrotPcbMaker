import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Users, 
  Plus, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CalendarView() {
  const { currentUser, users } = useAuth();
  const [events, setEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('2026-10');
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  
  // New event form state
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('정기밋업');
  const [newDate, setNewDate] = useState('2026-10-17');
  const [newTime, setNewTime] = useState('14:00 ~ 17:00');
  const [newLocation, setNewLocation] = useState('당근 메이커스페이스 2층');
  const [newDesc, setNewDesc] = useState('');
  const [newMax, setNewMax] = useState(15);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
      }
    } catch (err) {
      console.error('Failed to fetch events:', err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRSVP = async (eventId) => {
    if (!currentUser) return;
    try {
      const res = await fetch(`/api/events/${eventId}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id })
      });
      if (res.ok) {
        const updated = await res.json();
        setEvents(prev => prev.map(e => e.id === eventId ? updated : e));
      } else {
        const err = await res.json();
        alert(err.error || '참가 신청에 실패했습니다.');
      }
    } catch (err) {
      console.error('RSVP error:', err);
    }
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDate) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle.trim(),
          type: newType,
          date: newDate,
          time: newTime,
          location: newLocation,
          description: newDesc,
          maxAttendees: newMax
        })
      });
      if (res.ok) {
        const created = await res.json();
        setEvents(prev => [...prev, created]);
        setIsNewEventModalOpen(false);
        setNewTitle('');
        setNewDesc('');
      }
    } catch (err) {
      console.error('Failed to create event:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTypeBadgeClass = (type) => {
    switch (type) {
      case '정기밋업': return 'badge-orange';
      case '공동구매': return 'badge-green';
      case '온라인리뷰': return 'badge-blue';
      default: return 'badge-purple';
    }
  };

  return (
    <div className="calendar-container fade-in">
      <div className="calendar-header">
        <div>
          <h2 className="section-title">
            <span className="title-icon">📅</span> 모임 일정 & 오프라인 밋업
          </h2>
          <p className="section-desc">
            당근 PCB 설계 모임의 정기 오프라인 납땜 워크숍, 기판 품평회, 해외 묶음 발주 일정을 확인하고 참가하세요.
          </p>
        </div>
        <button className="btn-primary" onClick={() => setIsNewEventModalOpen(true)}>
          <Plus size={18} />
          <span>새 모임/일정 개설</span>
        </button>
      </div>

      <div className="calendar-content-layout">
        {/* Events Cards List */}
        <div className="events-cards-list">
          <div className="list-title-row">
            <h3>다가오는 모임 & 밋업 목록 ({events.length})</h3>
            <span className="badge badge-orange">참가 신청 실시간 접수 중</span>
          </div>

          <div className="event-cards-grid">
            {events.map(event => {
              const isAttending = event.attendees?.includes(currentUser?.id);
              const isFull = event.attendees?.length >= event.maxAttendees;

              return (
                <div key={event.id} className="event-item-card">
                  <div className="event-top-row">
                    <span className={`badge ${getTypeBadgeClass(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="event-status-tag">
                      {isFull ? '정원 마감' : '신청 가능'}
                    </span>
                  </div>

                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-desc">{event.description}</p>

                  <div className="event-info-table">
                    <div className="info-row">
                      <CalendarIcon size={15} className="info-icon" />
                      <span>{event.date}</span>
                    </div>
                    <div className="info-row">
                      <Clock size={15} className="info-icon" />
                      <span>{event.time}</span>
                    </div>
                    <div className="info-row">
                      <MapPin size={15} className="info-icon" />
                      <span>{event.location}</span>
                    </div>
                    <div className="info-row">
                      <Users size={15} className="info-icon" />
                      <span>
                        참석 인원: <strong>{event.attendees?.length || 0}</strong> / {event.maxAttendees}명
                      </span>
                    </div>
                  </div>

                  {/* Attendees avatar stack */}
                  <div className="attendees-stack-row">
                    <div className="avatar-stack">
                      {event.attendees?.slice(0, 5).map((attId, i) => {
                        const attUser = users.find(u => u.id === attId);
                        return (
                          <img 
                            key={i}
                            src={attUser?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=user'} 
                            alt={attUser?.name || '참가자'} 
                            title={attUser?.name || '참가자'}
                            className="stacked-avatar"
                          />
                        );
                      })}
                      {event.attendees?.length > 5 && (
                        <div className="stacked-more">+{event.attendees.length - 5}</div>
                      )}
                    </div>

                    <button 
                      className={`rsvp-btn ${isAttending ? 'attending' : ''}`}
                      onClick={() => handleRSVP(event.id)}
                      disabled={!isAttending && isFull}
                    >
                      {isAttending ? (
                        <>
                          <CheckCircle size={16} />
                          <span>참가 확정 (취소)</span>
                        </>
                      ) : isFull ? (
                        <span>정원 마감</span>
                      ) : (
                        <>
                          <Plus size={16} />
                          <span>참가 신청하기</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar / Quick Tips */}
        <div className="calendar-sidebar">
          <div className="sidebar-card tips-card">
            <h4>💡 오프라인 밋업 참여 안내</h4>
            <ul>
              <li><strong>납땜 워크숍</strong>: 인두기 및 페이스트 솔더, 확대경은 랩실에 비치되어 있습니다.</li>
              <li><strong>아트웍 품평회</strong>: 노트북에 KiCad 또는 Gerber 뷰어를 설치해 오시면 대형 모니터로 피어 리뷰를 진행합니다.</li>
              <li><strong>공동구매</strong>: 마감 시간 이전까지 거버 파일 업로드 완료자에 한해 진행됩니다.</li>
            </ul>
          </div>

          <div className="sidebar-card location-card">
            <h4>📍 모임 아지트 안내</h4>
            <p className="loc-title">당근 메이커스페이스 역삼점</p>
            <p className="loc-sub">서울시 강남구 테헤란로 14길 6, 2층 하드웨어 팹</p>
            <div className="loc-equipments">
              <span className="eq-tag">2GHz 오실로스코프</span>
              <span className="eq-tag">SMD 리플로우 오븐</span>
              <span className="eq-tag">실체현미경</span>
              <span className="eq-tag">열화상 카메라</span>
            </div>
          </div>
        </div>
      </div>

      {/* New Event Modal */}
      {isNewEventModalOpen && (
        <div className="modal-overlay" onClick={() => setIsNewEventModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>새 모임 및 밋업 일정 등록</h3>
              <button className="close-btn" onClick={() => setIsNewEventModalOpen(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleCreateEvent}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">모임/일정 명칭 *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="예: 4층 PCB 임피던스 매칭 스터디"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">모임 유형</label>
                    <select className="form-select" value={newType} onChange={e => setNewType(e.target.value)}>
                      <option value="정기밋업">정기밋업</option>
                      <option value="공동구매">공동구매</option>
                      <option value="온라인리뷰">온라인리뷰</option>
                      <option value="납땜스터디">납땜스터디</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">최대 모집 인원</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      value={newMax} 
                      onChange={e => setNewMax(e.target.value)}
                      min={2}
                      max={100}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">날짜</label>
                    <input 
                      type="date" 
                      className="form-input" 
                      value={newDate} 
                      onChange={e => setNewDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">시간</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="예: 14:00 ~ 17:00"
                      value={newTime} 
                      onChange={e => setNewTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">장소</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="예: 역삼 당근 메이커스페이스 2층"
                    value={newLocation} 
                    onChange={e => setNewLocation(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">모임 상세 설명 & 준비물</label>
                  <textarea 
                    className="form-textarea" 
                    rows={3}
                    placeholder="모임의 주요 아젠다 및 참가자가 챙겨야 할 준비물을 적어주세요."
                    value={newDesc}
                    onChange={e => setNewDesc(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setIsNewEventModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? '등록 중...' : '일정 등록 완료'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .calendar-content-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .calendar-content-layout {
            grid-template-columns: 1fr;
          }
        }
        .list-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .list-title-row h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
        }
        .event-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .event-item-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.2s;
        }
        .event-item-card:hover {
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .event-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }
        .event-status-tag {
          font-size: 0.75rem;
          color: #10B981;
          font-weight: 700;
        }
        .event-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.4rem;
        }
        .event-card-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 0.9rem;
        }
        .event-info-table {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.5rem;
          background: #F8FAFC;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .info-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: #334155;
        }
        .info-icon {
          color: var(--primary);
        }
        .attendees-stack-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 0.75rem;
        }
        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .stacked-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
          object-fit: cover;
        }
        .stacked-avatar:first-child {
          margin-left: 0;
        }
        .stacked-more {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #E2E8F0;
          color: #475569;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -8px;
          border: 2px solid white;
        }
        .rsvp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          background: var(--primary);
          color: white;
          box-shadow: var(--shadow-orange);
        }
        .rsvp-btn.attending {
          background: #10B981;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }
        .sidebar-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .sidebar-card h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.75rem;
        }
        .tips-card ul {
          padding-left: 1.2rem;
          font-size: 0.83rem;
          color: #475569;
          line-height: 1.6;
        }
        .tips-card li {
          margin-bottom: 0.5rem;
        }
        .loc-title {
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--primary-dark);
        }
        .loc-sub {
          font-size: 0.8rem;
          color: #64748B;
          margin-bottom: 0.75rem;
        }
        .loc-equipments {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .eq-tag {
          font-size: 0.72rem;
          background: #F1F5F9;
          color: #334155;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
