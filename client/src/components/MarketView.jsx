import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Share2, 
  Users, 
  Calendar, 
  MapPin, 
  Plus, 
  Search, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  Upload, 
  X,
  DollarSign
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function MarketView({ onNavigateToChat }) {
  const { currentUser } = useAuth();
  const [items, setItems] = useState([]);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'share' | 'group_buy'
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'recruiting'
  const [searchQuery, setSearchQuery] = useState('');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Form state
  const [formType, setFormType] = useState('share');
  const [formCategory, setFormCategory] = useState('pcb');
  const [formTitle, setFormTitle] = useState('');
  const [formPrice, setFormPrice] = useState(0);
  const [formTargetCount, setFormTargetCount] = useState(3);
  const [formDeadline, setFormDeadline] = useState('');
  const [formLocation, setFormLocation] = useState('역삼동 직거래 또는 반값택배');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const fetchItems = async () => {
    try {
      let url = `/api/market?type=${filterType}&status=${filterStatus}`;
      if (searchQuery.trim()) {
        url += `&search=${encodeURIComponent(searchQuery.trim())}`;
      }
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (err) {
      console.error('Failed to fetch market items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [filterType, filterStatus, searchQuery]);

  const handleJoin = async (itemId, e) => {
    e?.stopPropagation();
    if (!currentUser) {
      alert('로그인이 필요한 기능입니다.');
      return;
    }
    try {
      const res = await fetch(`/api/market/${itemId}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id })
      });
      if (res.ok) {
        const updated = await res.json();
        setItems(prev => prev.map(item => item.id === updated.id ? updated : item));
        if (selectedItem?.id === updated.id) {
          setSelectedItem(updated);
        }
      }
    } catch (err) {
      console.error('Join error:', err);
    }
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !currentUser) return;

    try {
      const res = await fetch('/api/market', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formType,
          category: formCategory,
          title: formTitle.trim(),
          price: formType === 'share' ? 0 : Number(formPrice) || 0,
          targetCount: Number(formTargetCount) || 2,
          deadline: formDeadline || '2026-10-15',
          location: formLocation.trim(),
          description: formDescription.trim(),
          image: formImage || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
          authorId: currentUser.id,
          authorName: currentUser.name,
          authorAvatar: currentUser.avatar
        })
      });
      if (res.ok) {
        const newItem = await res.json();
        setItems(prev => [newItem, ...prev]);
        setIsWriteModalOpen(false);
        // Reset form
        setFormTitle('');
        setFormDescription('');
        setFormImage('');
        setFormPrice(0);
      }
    } catch (err) {
      console.error('Create market item error:', err);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        setFormImage(data.url);
      } else {
        setFormImage(URL.createObjectURL(file));
      }
    } catch (err) {
      setFormImage(URL.createObjectURL(file));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="market-container fade-in">
      {/* Header Banner */}
      <div className="market-header-banner">
        <div className="banner-text">
          <h2 className="banner-title">
            <span className="banner-emoji">📦</span> 부품 나눔 & 해외 기판 묶음 공구 장터
          </h2>
          <p className="banner-desc">
            최소 수량 5장 발주 후 남는 PCB 무료 나눔과 DHL 배송비 0원 혜택! 소자 릴(Reel) 묶음 소분으로 제작 비용을 함께 절약해요.
          </p>
        </div>
        <button 
          className="btn-primary write-market-btn"
          onClick={() => setIsWriteModalOpen(true)}
        >
          <Plus size={18} />
          <span>나눔 / 공구 등록</span>
        </button>
      </div>

      {/* Filters & Search Bar */}
      <div className="market-filter-bar">
        <div className="filter-group-tabs">
          <button 
            className={`filter-tab ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            전체보기
          </button>
          <button 
            className={`filter-tab ${filterType === 'share' ? 'active' : ''}`}
            onClick={() => setFilterType('share')}
          >
            🥕 무료 나눔
          </button>
          <button 
            className={`filter-tab ${filterType === 'group_buy' ? 'active' : ''}`}
            onClick={() => setFilterType('group_buy')}
          >
            ✈️ 해외 묶음 공구
          </button>
        </div>

        <div className="filter-right-tools">
          <button 
            className={`toggle-status-btn ${filterStatus === 'recruiting' ? 'active' : ''}`}
            onClick={() => setFilterStatus(prev => prev === 'recruiting' ? 'all' : 'recruiting')}
          >
            {filterStatus === 'recruiting' ? '✓ 모집중만 보는 중' : '모집중만 보기'}
          </button>

          <div className="market-search">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="부품명, 기판 검색..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div className="market-grid">
        {items.length === 0 ? (
          <div className="empty-market">
            <div className="empty-icon">📦</div>
            <h3>등록된 나눔 / 공구 항목이 없습니다</h3>
            <p>직접 남는 기판이나 소자를 이웃 메이커들과 함께 나누어보세요!</p>
          </div>
        ) : (
          items.map(item => {
            const isParticipating = currentUser && (item.participants || []).includes(currentUser.id);
            const isCompleted = item.status === 'completed' || (item.currentCount >= item.targetCount);
            const progressPercent = Math.min(100, Math.round((item.currentCount / item.targetCount) * 100));

            return (
              <div 
                key={item.id} 
                className={`market-card ${isCompleted ? 'completed-card' : ''}`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image & Type Badge */}
                <div className="card-thumb-wrap">
                  <img 
                    src={item.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'} 
                    alt={item.title} 
                    className="card-thumb" 
                  />
                  <div className="card-badges-top">
                    {item.type === 'share' ? (
                      <span className="badge-type share">🥕 무료나눔</span>
                    ) : (
                      <span className="badge-type groupbuy">✈️ 묶음공구</span>
                    )}
                    {isCompleted ? (
                      <span className="badge-status completed">마감 완료</span>
                    ) : (
                      <span className="badge-status recruiting">모집중</span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>

                  <div className="card-price-row">
                    {item.type === 'share' ? (
                      <span className="price-tag free">0원 (무료 나눔)</span>
                    ) : (
                      <span className="price-tag paid">
                        1인당 <strong>₩{Number(item.price).toLocaleString()}</strong>
                      </span>
                    )}
                    <span className="deadline-text">
                      <Clock size={13} /> {item.deadline} 까지
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="card-progress-wrap">
                    <div className="progress-labels">
                      <span className="progress-count">
                        <Users size={14} /> {item.currentCount} / {item.targetCount}명
                      </span>
                      <span className="progress-pct">{progressPercent}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="card-location">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>

                  <p className="card-desc-preview">{item.description}</p>

                  {/* Footer Bar */}
                  <div className="card-footer">
                    <div className="author-col">
                      <img 
                        src={item.authorAvatar} 
                        alt={item.authorName} 
                        className="author-avatar"
                        onError={e => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                      />
                      <span className="author-name">{item.authorName}</span>
                    </div>

                    <div className="action-buttons-group">
                      <button 
                        className={`join-btn ${isParticipating ? 'participating' : ''}`}
                        onClick={(e) => handleJoin(item.id, e)}
                        disabled={!isParticipating && isCompleted}
                      >
                        {isParticipating ? '참여 취소' : item.type === 'share' ? '나눔 신청' : '공구 참여'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content market-detail-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-badges">
                {selectedItem.type === 'share' ? (
                  <span className="badge-type share">🥕 무료나눔</span>
                ) : (
                  <span className="badge-type groupbuy">✈️ 묶음공구</span>
                )}
                {selectedItem.status === 'completed' ? (
                  <span className="badge-status completed">모집마감</span>
                ) : (
                  <span className="badge-status recruiting">모집중</span>
                )}
              </div>
              <button className="close-btn" onClick={() => setSelectedItem(null)}>✕</button>
            </div>

            <div className="modal-body">
              <h2 className="detail-title">{selectedItem.title}</h2>

              <div className="detail-image-box">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>

              <div className="detail-meta-grid">
                <div className="meta-card">
                  <span className="meta-label">1인당 부담 금액</span>
                  <span className="meta-val price">
                    {selectedItem.type === 'share' ? '0원 (무료)' : `₩${Number(selectedItem.price).toLocaleString()}원`}
                  </span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">참여 현황</span>
                  <span className="meta-val">
                    {selectedItem.currentCount} / {selectedItem.targetCount}명 ({Math.round((selectedItem.currentCount / selectedItem.targetCount) * 100)}%)
                  </span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">마감 기한</span>
                  <span className="meta-val">{selectedItem.deadline}</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">수령 및 전달 방식</span>
                  <span className="meta-val">{selectedItem.location}</span>
                </div>
              </div>

              <div className="detail-desc-box">
                <h4>상세 설명 및 안내</h4>
                <p>{selectedItem.description}</p>
              </div>

              <div className="detail-author-row">
                <img 
                  src={selectedItem.authorAvatar} 
                  alt={selectedItem.authorName} 
                  className="author-avatar-lg"
                  onError={e => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                />
                <div>
                  <div className="author-name-lg">{selectedItem.authorName}</div>
                  <div className="author-desc-sm">나눔/공구 총대 메이커</div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => {
                  if (onNavigateToChat) {
                    onNavigateToChat(selectedItem.authorId);
                    setSelectedItem(null);
                  } else {
                    alert('실시간 채팅 탭에서 1:1 대화를 나눠보세요.');
                  }
                }}
              >
                <MessageSquare size={16} />
                <span>주최자에게 1:1 문의</span>
              </button>

              <button 
                type="button"
                className={`btn-primary ${currentUser && (selectedItem.participants || []).includes(currentUser.id) ? 'active' : ''}`}
                onClick={() => handleJoin(selectedItem.id)}
              >
                {currentUser && (selectedItem.participants || []).includes(currentUser.id) 
                  ? '신청 취소하기' 
                  : selectedItem.type === 'share' ? '🥕 나눔 신청하기' : '📦 공구 참여하기'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Item Modal */}
      {isWriteModalOpen && (
        <div className="modal-overlay" onClick={() => setIsWriteModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>새 부품 나눔 / 묶음 공구 등록</h3>
              <button className="close-btn" onClick={() => setIsWriteModalOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleCreateSubmit}>
              <div className="modal-body">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">구분 *</label>
                    <select 
                      className="form-select"
                      value={formType}
                      onChange={e => setFormType(e.target.value)}
                    >
                      <option value="share">🥕 무료 나눔 (남는 기판/부품)</option>
                      <option value="group_buy">✈️ 묶음 공구 (해외 배송비 절약)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">카테고리 *</label>
                    <select 
                      className="form-select"
                      value={formCategory}
                      onChange={e => setFormCategory(e.target.value)}
                    >
                      <option value="pcb">PCB 기판 (JLCPCB/PCBWay 등)</option>
                      <option value="component">수동소자 / 칩릴 (LCSC 등)</option>
                      <option value="mcu">MCU / IC / 센서</option>
                      <option value="etc">공구 / 3D 출력물 / 기타</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">제목 *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="예: [나눔] RP2040 키보드 기판 3장 나눔 / [공구] 0603 칩저항 10종 릴 소분"
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-row-2">
                  {formType === 'group_buy' && (
                    <div className="form-group">
                      <label className="form-label">1인당 예상 분담 금액 (원) *</label>
                      <input 
                        type="number" 
                        className="form-input" 
                        placeholder="예: 3500"
                        value={formPrice}
                        onChange={e => setFormPrice(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">모집 인원 (수량) *</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      min="1"
                      max="100"
                      value={formTargetCount}
                      onChange={e => setFormTargetCount(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">모집 마감일 *</label>
                    <input 
                      type="date" 
                      className="form-input" 
                      value={formDeadline}
                      onChange={e => setFormDeadline(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">수령 / 직거래 방식 *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="예: 정기 밋업 당일 수령 / 역삼동 직거래 / 편의점 반값택배"
                    value={formLocation}
                    onChange={e => setFormLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">상세 설명 *</label>
                  <textarea 
                    className="form-textarea" 
                    rows={4}
                    placeholder="부품 규격, 발주 스펙, 나눔/공구 조건 등을 상세히 적어주세요."
                    value={formDescription}
                    onChange={e => setFormDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">실물 / 발주 내역 사진</label>
                  <label className="file-upload-btn">
                    <Upload size={16} />
                    <span>사진 첨부하기</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      style={{ display: 'none' }}
                      disabled={isUploading}
                    />
                  </label>
                  {formImage && (
                    <div className="uploaded-preview-single">
                      <img src={formImage} alt="Uploaded" />
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setIsWriteModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary" disabled={isUploading}>
                  등록 완료 (+0.5℃ 납땜온도)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .market-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .market-header-banner {
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          border: 1.5px solid #FDBA74;
          border-radius: 16px;
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .banner-emoji {
          font-size: 1.7rem;
        }
        .banner-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #9A3412;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .banner-desc {
          font-size: 0.92rem;
          color: #C2410C;
          margin-top: 0.35rem;
          line-height: 1.5;
          max-width: 800px;
        }
        .write-market-btn {
          white-space: nowrap;
          padding: 0.75rem 1.4rem;
          font-size: 0.95rem;
        }
        .market-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          background: white;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .filter-group-tabs {
          display: flex;
          gap: 0.5rem;
        }
        .filter-tab {
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          transition: all 0.15s;
        }
        .filter-tab:hover {
          color: var(--primary);
        }
        .filter-tab.active {
          background: var(--primary);
          color: white;
        }
        .filter-right-tools {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .toggle-status-btn {
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
        }
        .toggle-status-btn.active {
          background: #ECFDF5;
          color: #059669;
          border-color: #6EE7B7;
        }
        .market-search {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F8FAFC;
          border: 1px solid var(--border);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
        }
        .market-search input {
          border: none;
          background: transparent;
          font-size: 0.85rem;
          outline: none;
          min-width: 170px;
        }
        .market-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .market-card {
          background: white;
          border-radius: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .market-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
          border-color: #FFD8BE;
        }
        .card-thumb-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          background: #0F172A;
          overflow: hidden;
        }
        .card-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .market-card:hover .card-thumb {
          transform: scale(1.04);
        }
        .card-badges-top {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .badge-type {
          font-size: 0.76rem;
          font-weight: 800;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
        .badge-type.share {
          background: #10B981;
          color: white;
        }
        .badge-type.groupbuy {
          background: #FF6F0F;
          color: white;
        }
        .badge-status {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.75);
          color: white;
          backdrop-filter: blur(4px);
        }
        .badge-status.recruiting {
          background: #0284C7;
        }
        .card-content {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .price-tag.free {
          font-size: 0.95rem;
          font-weight: 800;
          color: #059669;
        }
        .price-tag.paid {
          font-size: 0.88rem;
          color: #64748B;
        }
        .price-tag.paid strong {
          font-size: 1.1rem;
          color: var(--primary);
        }
        .deadline-text {
          font-size: 0.76rem;
          color: #94A3B8;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .card-progress-wrap {
          margin-bottom: 0.75rem;
        }
        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 0.3rem;
        }
        .progress-count {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .progress-pct {
          color: var(--primary);
        }
        .progress-bar-bg {
          width: 100%;
          height: 7px;
          background: #E2E8F0;
          border-radius: 9999px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FB923C 0%, #FF6F0F 100%);
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .card-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #64748B;
          margin-bottom: 0.5rem;
        }
        .card-desc-preview {
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 1rem;
          flex: 1;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid #F1F5F9;
        }
        .author-col {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .author-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .join-btn {
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: #FFF2E8;
          color: #EA580C;
          border: 1px solid #FFD8BE;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .join-btn:hover {
          background: var(--primary);
          color: white;
        }
        .join-btn.participating {
          background: #F1F5F9;
          color: #64748B;
          border-color: #CBD5E1;
        }
        .market-detail-modal {
          max-width: 680px;
        }
        .modal-header-badges {
          display: flex;
          gap: 0.5rem;
        }
        .detail-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 1rem;
        }
        .detail-image-box {
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #0F172A;
        }
        .detail-image-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .detail-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .meta-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .meta-label {
          font-size: 0.76rem;
          color: #64748B;
          font-weight: 600;
        }
        .meta-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1E293B;
        }
        .meta-val.price {
          color: var(--primary);
          font-size: 1.05rem;
        }
        .detail-desc-box {
          background: #FFFBF7;
          border: 1px solid #FED7AA;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.25rem;
        }
        .detail-desc-box h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #9A3412;
          margin-bottom: 0.5rem;
        }
        .detail-desc-box p {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .detail-author-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
        }
        .author-avatar-lg {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
        .author-name-lg {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0F172A;
        }
        .author-desc-sm {
          font-size: 0.78rem;
          color: #64748B;
        }
        .uploaded-preview-single {
          margin-top: 0.5rem;
          max-width: 240px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .uploaded-preview-single img {
          width: 100%;
          height: auto;
          display: block;
        }
        .empty-market {
          grid-column: 1 / -1;
          padding: 4rem 1rem;
          text-align: center;
          background: white;
          border: 1px dashed var(--border);
          border-radius: 16px;
        }
        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }
      `}</style>
    </div>
  );
}
