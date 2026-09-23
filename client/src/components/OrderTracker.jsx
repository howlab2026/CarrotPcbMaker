import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Plus, 
  ArrowRight, 
  ArrowLeft, 
  Trash2, 
  ExternalLink, 
  Calendar, 
  Layers, 
  Cpu, 
  DollarSign, 
  AlertCircle,
  X,
  Copy
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PIPELINE_COLUMNS = [
  { id: 'placed', title: '주문 접수', icon: Clock, color: '#64748B', bg: '#F1F5F9' },
  { id: 'production', title: '기판 제작중', icon: Cpu, color: '#3B82F6', bg: '#EFF6FF' },
  { id: 'smt', title: 'SMT 부품실장', icon: Layers, color: '#8B5CF6', bg: '#F5F3FF' },
  { id: 'shipping', title: '국제 배송중', icon: Truck, color: '#F59E0B', bg: '#FFFBEB' },
  { id: 'delivered', title: '수령 완료', icon: CheckCircle2, color: '#10B981', bg: '#ECFDF5' }
];

const MANUFACTURERS = ['JLCPCB', 'PCBWay', 'Aisler', '한샘디지텍', '샘플PCB', '기타'];

export default function OrderTracker() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterMfr, setFilterMfr] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // 새 발주 폼 상태
  const [form, setForm] = useState({
    title: '',
    manufacturer: 'JLCPCB',
    orderNumber: '',
    layers: 2,
    quantity: 5,
    hasSmt: false,
    cost: '',
    currency: 'USD',
    estimatedDelivery: '',
    trackingNumber: '',
    notes: ''
  });

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // 상태 변경
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
        showToast('발주 상태가 업데이트되었습니다.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 삭제
  const handleDelete = async (orderId) => {
    if (!window.confirm('이 발주 내역을 삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`/api/orders/${orderId}`, { method: 'DELETE' });
      if (res.ok) {
        setOrders(prev => prev.filter(o => o.id !== orderId));
        showToast('발주 항목이 삭제되었습니다.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert('기판 프로젝트명을 입력해주세요.');
      return;
    }

    try {
      const payload = {
        ...form,
        cost: Number(form.cost) || 0,
        layers: Number(form.layers) || 2,
        quantity: Number(form.quantity) || 5,
        userId: currentUser?.id || 'usr_admin',
        status: 'placed'
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setIsModalOpen(false);
        setForm({
          title: '',
          manufacturer: 'JLCPCB',
          orderNumber: '',
          layers: 2,
          quantity: 5,
          hasSmt: false,
          cost: '',
          currency: 'USD',
          estimatedDelivery: '',
          trackingNumber: '',
          notes: ''
        });
        fetchOrders();
        showToast('새 발주 건이 성공적으로 등록되었습니다!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 통계 계산
  const inProgressCount = orders.filter(o => o.status !== 'delivered').length;
  const deliveredCount = orders.filter(o => o.status === 'delivered').length;
  const totalCostUsd = orders.reduce((sum, o) => sum + (Number(o.cost) || 0), 0);
  const totalCostKrw = Math.round(totalCostUsd * 1350);

  // D-Day 계산
  const getDDay = (targetDate) => {
    if (!targetDate) return null;
    const diff = Math.ceil((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24));
    if (diff > 0) return `D-${diff}`;
    if (diff === 0) return 'D-Day';
    return `D+${Math.abs(diff)}`;
  };

  const filteredOrders = orders.filter(o => {
    if (filterMfr !== 'all' && o.manufacturer !== filterMfr) return false;
    return true;
  });

  return (
    <div className="order-tracker-view">
      <div className="tracker-header">
        <div>
          <h2 className="page-title">
            <span className="title-emoji">📦</span> 기판 발주 트래커
          </h2>
          <p className="page-desc">
            JLCPCB, PCBWay 등 해외 기판 발주 제작 현황과 배송 일정을 한눈에 관리하세요.
          </p>
        </div>

        <div className="header-actions">
          {toastMsg && <span className="toast-badge">{toastMsg}</span>}
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} /> 새 발주 등록
          </button>
        </div>
      </div>

      {/* 요약 통계 카드 */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#EFF6FF', color: '#3B82F6' }}>
            <Cpu size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-val">{inProgressCount}건</span>
            <span className="stat-lbl">진행 중인 발주</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#ECFDF5', color: '#10B981' }}>
            <CheckCircle2 size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-val">{deliveredCount}건</span>
            <span className="stat-lbl">수령 완료 기판</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#FFF2E8', color: '#FF6F0F' }}>
            <DollarSign size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-val">${totalCostUsd.toFixed(1)}</span>
            <span className="stat-lbl">총 발주 비용 (~약 {totalCostKrw.toLocaleString()}원)</span>
          </div>
        </div>
      </div>

      {/* 제조사 필터 */}
      <div className="filter-bar">
        <span className="filter-label">제조사:</span>
        <button 
          className={`filter-chip ${filterMfr === 'all' ? 'active' : ''}`}
          onClick={() => setFilterMfr('all')}
        >
          전체 보기 ({orders.length})
        </button>
        {MANUFACTURERS.map(mfr => {
          const count = orders.filter(o => o.manufacturer === mfr).length;
          return (
            <button
              key={mfr}
              className={`filter-chip ${filterMfr === mfr ? 'active' : ''}`}
              onClick={() => setFilterMfr(mfr)}
            >
              {mfr} {count > 0 && `(${count})`}
            </button>
          );
        })}
      </div>

      {/* 칸반 파이프라인 보드 */}
      <div className="kanban-board">
        {PIPELINE_COLUMNS.map((col, colIdx) => {
          const ColIcon = col.icon;
          const colOrders = filteredOrders.filter(o => o.status === col.id);

          return (
            <div key={col.id} className="kanban-column">
              <div className="column-header" style={{ borderTopColor: col.color }}>
                <div className="col-title-group">
                  <ColIcon size={18} style={{ color: col.color }} />
                  <span className="col-title">{col.title}</span>
                  <span className="col-badge" style={{ background: col.bg, color: col.color }}>
                    {colOrders.length}
                  </span>
                </div>
              </div>

              <div className="column-cards-list">
                {colOrders.length === 0 ? (
                  <div className="column-empty">항목 없음</div>
                ) : (
                  colOrders.map(order => {
                    const dDay = getDDay(order.estimatedDelivery);

                    return (
                      <div key={order.id} className="order-card">
                        <div className="card-top">
                          <span className="mfr-tag">{order.manufacturer}</span>
                          {dDay && (
                            <span className={`dday-tag ${dDay.includes('-') ? 'urgent' : 'normal'}`}>
                              {dDay}
                            </span>
                          )}
                        </div>

                        <h4 className="order-title">{order.title}</h4>

                        {order.orderNumber && (
                          <div className="order-num-row">
                            <span className="order-num">#{order.orderNumber}</span>
                          </div>
                        )}

                        <div className="specs-grid">
                          <span className="spec-item">{order.layers}층 PCB</span>
                          <span className="spec-item">{order.quantity}장</span>
                          {order.hasSmt && <span className="spec-item smt">SMT 포함</span>}
                          {order.cost > 0 && <span className="spec-item cost">${order.cost}</span>}
                        </div>

                        {order.notes && (
                          <p className="order-notes">{order.notes}</p>
                        )}

                        {order.estimatedDelivery && (
                          <div className="date-row">
                            <Calendar size={13} />
                            <span>예상수령: {order.estimatedDelivery}</span>
                          </div>
                        )}

                        {order.trackingNumber && (
                          <div className="tracking-row">
                            <Truck size={13} />
                            <span className="tracking-code">{order.trackingNumber}</span>
                          </div>
                        )}

                        {/* 카드 하단 액션 버튼 */}
                        <div className="card-actions">
                          {colIdx > 0 && (
                            <button
                              className="step-btn prev"
                              onClick={() => handleStatusChange(order.id, PIPELINE_COLUMNS[colIdx - 1].id)}
                              title="이전 단계로"
                            >
                              <ArrowLeft size={13} />
                            </button>
                          )}

                          <button 
                            className="delete-card-btn" 
                            onClick={() => handleDelete(order.id)}
                            title="삭제"
                          >
                            <Trash2 size={13} />
                          </button>

                          {colIdx < PIPELINE_COLUMNS.length - 1 && (
                            <button
                              className="step-btn next"
                              onClick={() => handleStatusChange(order.id, PIPELINE_COLUMNS[colIdx + 1].id)}
                              title="다음 단계로 이동"
                            >
                              <span>다음 단계</span>
                              <ArrowRight size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 새 발주 등록 모달 */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <Package size={20} color="#FF6F0F" />
                <h3>새 기판 발주 등록</h3>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>기판 프로젝트명 *</label>
                <input
                  type="text"
                  placeholder="예: 당근 키패드 메인보드 v1.2"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>제조사</label>
                  <select
                    value={form.manufacturer}
                    onChange={e => setForm({ ...form, manufacturer: e.target.value })}
                  >
                    {MANUFACTURERS.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>주문 번호</label>
                  <input
                    type="text"
                    placeholder="예: JLC-20260923-01"
                    value={form.orderNumber}
                    onChange={e => setForm({ ...form, orderNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label>층수 (Layer)</label>
                  <select
                    value={form.layers}
                    onChange={e => setForm({ ...form, layers: e.target.value })}
                  >
                    <option value={1}>1층 (단면)</option>
                    <option value={2}>2층 (양면)</option>
                    <option value={4}>4층</option>
                    <option value={6}>6층</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>제작 수량 (PCS)</label>
                  <input
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={e => setForm({ ...form, quantity: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>발주 비용 ($ USD)</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="예: 25.5"
                    value={form.cost}
                    onChange={e => setForm({ ...form, cost: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={form.hasSmt}
                    onChange={e => setForm({ ...form, hasSmt: e.target.checked })}
                  />
                  <span>SMT 부품 실장 서비스 포함</span>
                </label>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>도착 예정일</label>
                  <input
                    type="date"
                    value={form.estimatedDelivery}
                    onChange={e => setForm({ ...form, estimatedDelivery: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>운송장 번호 (Tracking)</label>
                  <input
                    type="text"
                    placeholder="예: DHL / CJ대한통운 번호"
                    value={form.trackingNumber}
                    onChange={e => setForm({ ...form, trackingNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>메모 / 사양 특이사항</label>
                <textarea
                  rows="2"
                  placeholder="예: ENIG 금도금, 무연납 HASL, 스텐실 포함 등"
                  value={form.notes}
                  onChange={e => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary">
                  등록 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .order-tracker-view {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .tracker-header {
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

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
        }

        .filter-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted, #64748B);
        }

        .filter-chip {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 20px;
          padding: 0.35rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .filter-chip:hover {
          border-color: var(--primary, #FF6F0F);
          color: var(--primary, #FF6F0F);
        }

        .filter-chip.active {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border-color: var(--primary, #FF6F0F);
        }

        .kanban-board {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          align-items: start;
        }

        .kanban-column {
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          overflow: hidden;
          min-height: 520px;
          display: flex;
          flex-direction: column;
        }

        .column-header {
          padding: 0.9rem;
          background: var(--bg-card, #FFFFFF);
          border-bottom: 1px solid var(--border, #E2E8F0);
          border-top: 3px solid #64748B;
        }

        .col-title-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .col-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          flex: 1;
        }

        .col-badge {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 12px;
        }

        .column-cards-list {
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .column-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted, #94A3B8);
          font-size: 0.85rem;
        }

        .order-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 10px;
          padding: 0.9rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .order-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mfr-tag {
          background: #EFF6FF;
          color: #2563EB;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dday-tag {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dday-tag.urgent {
          background: #FEF2F2;
          color: #DC2626;
        }

        .dday-tag.normal {
          background: #F1F5F9;
          color: #475569;
        }

        .order-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          line-height: 1.35;
        }

        .order-num-row {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
          font-family: monospace;
        }

        .specs-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .spec-item {
          font-size: 0.72rem;
          font-weight: 600;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-muted, #64748B);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border, #E2E8F0);
        }

        .spec-item.smt {
          background: #F5F3FF;
          color: #7C3AED;
          border-color: #DDD6FE;
        }

        .spec-item.cost {
          background: #ECFDF5;
          color: #059669;
          border-color: #A7F3D0;
        }

        .order-notes {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
          background: var(--bg-sub, #F8FAFC);
          padding: 0.4rem;
          border-radius: 4px;
          line-height: 1.4;
        }

        .date-row, .tracking-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
        }

        .tracking-code {
          font-family: monospace;
          background: #F1F5F9;
          padding: 1px 4px;
          border-radius: 3px;
        }

        .card-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.3rem;
          padding-top: 0.5rem;
          border-top: 1px dashed var(--border, #E2E8F0);
        }

        .step-btn {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 6px;
          padding: 0.3rem 0.5rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .step-btn.next {
          margin-left: auto;
          background: var(--primary-light, #FFF2E8);
          color: var(--primary, #FF6F0F);
          border-color: var(--primary, #FF6F0F);
        }

        .step-btn:hover {
          opacity: 0.85;
        }

        .delete-card-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 4px;
        }

        .delete-card-btn:hover {
          color: #DC2626;
          background: #FEF2F2;
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
          max-width: 520px;
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
          padding: 0.2rem;
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

        .form-group input, .form-group select, .form-group textarea {
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 8px;
          padding: 0.55rem 0.75rem;
          font-size: 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-main, #1E293B);
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary, #FF6F0F);
          background: #FFFFFF;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-row.three-col {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .checkbox-group {
          margin-top: -0.25rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
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

        @media (max-width: 1200px) {
          .kanban-board {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .kanban-board {
            grid-template-columns: 1fr;
          }
          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
