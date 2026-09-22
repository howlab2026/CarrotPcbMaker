import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  MapPin, 
  Search, 
  Plus, 
  MessageSquare, 
  CheckCircle2, 
  Wrench, 
  Cpu, 
  Layers, 
  Sparkles,
  Upload,
  Clock,
  ShieldCheck,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function EquipmentView({ onNavigateToChat }) {
  const { currentUser } = useAuth();
  const [equipmentList, setEquipmentList] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  // Form state
  const [formCategory, setFormCategory] = useState('scope');
  const [formTitle, setFormTitle] = useState('');
  const [formLocation, setFormLocation] = useState('역삼동 당근 하드웨어 랩');
  const [formCondition, setFormCondition] = useState('정기 밋업 시 지참 가능 / 작업실 방문 사용');
  const [formSpecs, setFormSpecs] = useState('');
  const [formImage, setFormImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const categories = [
    { id: 'all', label: '전체 장비' },
    { id: 'scope', label: '🔬 오실로스코프 & 계측기' },
    { id: 'soldering', label: '🔥 열풍기 & 리워크' },
    { id: '3dprinter', label: '🖨️ 3D 프린터 & 기구' },
    { id: 'microscope', label: '🔍 광학 현미경' }
  ];

  const fetchEquipment = async () => {
    try {
      let url = `/api/equipment?category=${categoryFilter}`;
      if (searchQuery.trim()) {
        url += `&search=${encodeURIComponent(searchQuery.trim())}`;
      }
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setEquipmentList(data);
      }
    } catch (err) {
      console.error('Failed to fetch equipment:', err);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, [categoryFilter, searchQuery]);

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !currentUser) return;

    try {
      const res = await fetch('/api/equipment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: formCategory,
          title: formTitle.trim(),
          location: formLocation.trim(),
          condition: formCondition.trim(),
          specs: formSpecs.trim(),
          image: formImage || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
          ownerId: currentUser.id,
          ownerName: currentUser.name,
          ownerAvatar: currentUser.avatar
        })
      });
      if (res.ok) {
        const newEq = await res.json();
        setEquipmentList(prev => [newEq, ...prev]);
        setIsWriteModalOpen(false);
        // Reset form
        setFormTitle('');
        setFormSpecs('');
        setFormImage('');
      }
    } catch (err) {
      console.error('Create equipment error:', err);
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
    <div className="equipment-container fade-in">
      {/* Header Banner */}
      <div className="equipment-header-banner">
        <div className="banner-text">
          <h2 className="banner-title">
            <span className="banner-emoji">🗺️</span> 동네 공유 장비 & 공방 맵
          </h2>
          <p className="banner-desc">
            개인이 구매하기 부담스러운 4채널 디지털 오실로스코프, 고출력 SMD 열풍기, 고해상도 납땜 현미경을 이웃들과 함께 공유하고 대여해보세요.
          </p>
        </div>
        <button 
          className="btn-primary write-eq-btn"
          onClick={() => setIsWriteModalOpen(true)}
        >
          <Plus size={18} />
          <span>내 장비 공유 / 등록</span>
        </button>
      </div>

      {/* Filter Tabs & Search */}
      <div className="equipment-filter-bar">
        <div className="filter-group-tabs">
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-tab ${categoryFilter === c.id ? 'active' : ''}`}
              onClick={() => setCategoryFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="equipment-search">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="장비명, 제조사, 사양 검색..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Equipment Cards Grid */}
      <div className="equipment-grid">
        {equipmentList.length === 0 ? (
          <div className="empty-equipment">
            <div className="empty-icon">🔬</div>
            <h3>등록된 공유 장비가 없습니다</h3>
            <p>보유 중인 계측기나 공구를 등록하여 이웃 메이커들에게 도움을 나누어보세요!</p>
          </div>
        ) : (
          equipmentList.map(item => (
            <div 
              key={item.id} 
              className="equipment-card"
              onClick={() => setSelectedEquipment(item)}
            >
              <div className="eq-thumb-wrap">
                <img 
                  src={item.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'} 
                  alt={item.title} 
                  className="eq-thumb" 
                />
                <span className="status-badge-available">
                  <CheckCircle2 size={12} /> 이용 가능
                </span>
              </div>

              <div className="eq-content">
                <h3 className="eq-title">{item.title}</h3>

                <div className="eq-location-row">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </div>

                <div className="eq-specs-box">
                  <div className="eq-specs-title">주요 성능 / 스펙</div>
                  <pre className="eq-specs-text">{item.specs}</pre>
                </div>

                <div className="eq-condition-note">
                  <strong>대여 조건:</strong> {item.condition}
                </div>

                <div className="eq-footer">
                  <div className="owner-col">
                    <img 
                      src={item.ownerAvatar} 
                      alt={item.ownerName} 
                      className="owner-avatar"
                      onError={e => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                    />
                    <div className="owner-info">
                      <span className="owner-name">{item.ownerName}</span>
                      <span className="owner-role">장비 제공자</span>
                    </div>
                  </div>

                  <button 
                    className="contact-dm-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onNavigateToChat) {
                        onNavigateToChat(item.ownerId);
                      }
                    }}
                  >
                    <MessageSquare size={14} />
                    <span>대여 문의</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Equipment Detail Modal */}
      {selectedEquipment && (
        <div className="modal-overlay" onClick={() => setSelectedEquipment(null)}>
          <div className="modal-content equipment-detail-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="status-badge-available">
                <CheckCircle2 size={13} /> 공유 및 대여 가능
              </span>
              <button className="close-btn" onClick={() => setSelectedEquipment(null)}>✕</button>
            </div>

            <div className="modal-body">
              <h2 className="detail-eq-title">{selectedEquipment.title}</h2>

              <div className="detail-eq-image">
                <img src={selectedEquipment.image} alt={selectedEquipment.title} />
              </div>

              <div className="detail-meta-grid">
                <div className="meta-card">
                  <span className="meta-label">보관 및 이용 위치</span>
                  <span className="meta-val">{selectedEquipment.location}</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">대여 및 사용 조건</span>
                  <span className="meta-val">{selectedEquipment.condition}</span>
                </div>
              </div>

              <div className="detail-specs-card">
                <h4>상세 스펙 및 부속품</h4>
                <pre>{selectedEquipment.specs}</pre>
              </div>

              <div className="detail-owner-row">
                <img 
                  src={selectedEquipment.ownerAvatar} 
                  alt={selectedEquipment.ownerName} 
                  className="owner-avatar-lg"
                  onError={e => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'; }}
                />
                <div>
                  <div className="owner-name-lg">{selectedEquipment.ownerName}</div>
                  <div className="owner-desc-sm">당근 PCB 메이커스 장비 호스트</div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={() => setSelectedEquipment(null)}>
                닫기
              </button>
              <button 
                type="button" 
                className="btn-primary"
                onClick={() => {
                  if (onNavigateToChat) {
                    onNavigateToChat(selectedEquipment.ownerId);
                    setSelectedEquipment(null);
                  }
                }}
              >
                <MessageSquare size={16} />
                <span>장비 호스트에게 1:1 대여 문의하기</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Equipment Modal */}
      {isWriteModalOpen && (
        <div className="modal-overlay" onClick={() => setIsWriteModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>공유 장비 등록하기</h3>
              <button className="close-btn" onClick={() => setIsWriteModalOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleCreateSubmit}>
              <div className="modal-body">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">장비 분류 *</label>
                    <select 
                      className="form-select"
                      value={formCategory}
                      onChange={e => setFormCategory(e.target.value)}
                    >
                      <option value="scope">🔬 오실로스코프 & 계측기</option>
                      <option value="soldering">🔥 열풍기 & 리워크 스테이션</option>
                      <option value="3dprinter">🖨️ 3D 프린터 & 기구물</option>
                      <option value="microscope">🔍 실체 현미경</option>
                      <option value="etc">🛠️ 기타 전자기기/공구</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">위치 / 작업실 *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="예: 역삼동 당근 하드웨어 랩 / 판교 개인 작업실"
                      value={formLocation}
                      onChange={e => setFormLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">장비 모델명 및 명칭 *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="예: Rigol DS1054Z 4CH 오실로스코프 (100MHz)"
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">이용 및 대여 조건 *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="예: 정기 밋업 당일 지참 / 작업실 방문 예약 사용 (사전 1:1 문의)"
                    value={formCondition}
                    onChange={e => setFormCondition(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">주요 성능 / 스펙 / 부속품 *</label>
                  <textarea 
                    className="form-textarea" 
                    rows={4}
                    placeholder="• 4채널 100MHz 대역폭&#10;• 패시브 프로브 4개 구비&#10;• I2C/SPI 디코딩 지원"
                    value={formSpecs}
                    onChange={e => setFormSpecs(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">장비 실물 사진</label>
                  <label className="file-upload-btn">
                    <Upload size={16} />
                    <span>장비 사진 업로드</span>
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
                      <img src={formImage} alt="Equipment" />
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setIsWriteModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary" disabled={isUploading}>
                  공유 장비 등록 완료 (+0.8℃ 납땜온도)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .equipment-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .equipment-header-banner {
          background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
          border: 1.5px solid #86EFAC;
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
          color: #166534;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .banner-desc {
          font-size: 0.92rem;
          color: #15803D;
          margin-top: 0.35rem;
          line-height: 1.5;
          max-width: 800px;
        }
        .write-eq-btn {
          white-space: nowrap;
          padding: 0.75rem 1.4rem;
          font-size: 0.95rem;
          background: #16A34A;
          border-color: #16A34A;
        }
        .write-eq-btn:hover {
          background: #15803D;
        }
        .equipment-filter-bar {
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
          flex-wrap: wrap;
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
          color: #16A34A;
        }
        .filter-tab.active {
          background: #16A34A;
          color: white;
        }
        .equipment-search {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F8FAFC;
          border: 1px solid var(--border);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
        }
        .equipment-search input {
          border: none;
          background: transparent;
          font-size: 0.85rem;
          outline: none;
          min-width: 180px;
        }
        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .equipment-card {
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
        .equipment-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
          border-color: #86EFAC;
        }
        .eq-thumb-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          background: #0F172A;
          overflow: hidden;
        }
        .eq-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .equipment-card:hover .eq-thumb {
          transform: scale(1.04);
        }
        .status-badge-available {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: #16A34A;
          color: white;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .eq-content {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .eq-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }
        .eq-location-row {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: #64748B;
          margin-bottom: 0.75rem;
        }
        .eq-specs-box {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.65rem 0.85rem;
          margin-bottom: 0.75rem;
        }
        .eq-specs-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: #475569;
          margin-bottom: 0.3rem;
        }
        .eq-specs-text {
          font-family: inherit;
          font-size: 0.82rem;
          color: #334155;
          line-height: 1.45;
          white-space: pre-wrap;
          margin: 0;
        }
        .eq-condition-note {
          font-size: 0.8rem;
          color: #15803D;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          flex: 1;
        }
        .eq-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid #F1F5F9;
        }
        .owner-col {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .owner-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
        }
        .owner-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .owner-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .owner-role {
          font-size: 0.7rem;
          color: #94A3B8;
        }
        .contact-dm-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: #F0FDF4;
          color: #16A34A;
          border: 1px solid #86EFAC;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .contact-dm-btn:hover {
          background: #16A34A;
          color: white;
        }
        .equipment-detail-modal {
          max-width: 680px;
        }
        .detail-eq-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 1rem;
        }
        .detail-eq-image {
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #0F172A;
        }
        .detail-eq-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .detail-specs-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.25rem;
        }
        .detail-specs-card h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }
        .detail-specs-card pre {
          font-family: inherit;
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
          white-space: pre-wrap;
          margin: 0;
        }
        .detail-owner-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
        }
        .owner-avatar-lg {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }
        .owner-name-lg {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0F172A;
        }
        .owner-desc-sm {
          font-size: 0.78rem;
          color: #64748B;
        }
        .empty-equipment {
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
