import React, { useState } from 'react';
import { X, Upload, Plus, Trash2, Cpu, Globe, Lock, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function NewProjectModal({ isOpen, onClose, onProjectCreated }) {
  const { currentUser } = useAuth();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [specs, setSpecs] = useState('• Layer: 2 Layer\n• MCU: \n• Dimensions: \n• Power: 5V USB-C');
  const [status, setStatus] = useState('회로설계');
  const [isPublic, setIsPublic] = useState(true);
  const [tagsInput, setTagsInput] = useState('KiCad, 아두이노');
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setIsUploading(true);
    setError('');

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        if (res.ok) {
          const data = await res.json();
          setImages(prev => [...prev, data.url]);
        } else {
          // If server upload fails, fallback to local object URL
          const localUrl = URL.createObjectURL(file);
          setImages(prev => [...prev, localUrl]);
        }
      }
    } catch (err) {
      console.error('File upload error:', err);
      // Fallback
      const localUrl = URL.createObjectURL(files[0]);
      setImages(prev => [...prev, localUrl]);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddSampleImage = () => {
    const sampleImages = [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ];
    const randomImg = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    setImages(prev => [...prev, randomImg]);
  };

  const handleRemoveImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('프로젝트 제목을 입력해주세요.');
      return;
    }
    if (!currentUser) {
      setError('로그인 후 이용할 수 있습니다.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          title: title.trim(),
          description: description.trim(),
          specs: specs.trim(),
          status,
          isPublic,
          tags,
          images: images.length > 0 ? images : [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
          ]
        })
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || '프로젝트 등록에 실패했습니다.');
      }

      const created = await res.json();
      if (onProjectCreated) onProjectCreated(created);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content new-project-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="np-title-row">
            <span className="np-icon">⚡</span>
            <h3>새 PCB 설계 프로젝트 등록</h3>
          </div>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {error && <div className="auth-alert error">{error}</div>}

            <div className="form-group">
              <label className="form-label">프로젝트 명 *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="예: STM32 기반 스마트 전력 모니터링 보드"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">진행 단계 (Status)</label>
                <select 
                  className="form-select"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="구상/스케치">구상/스케치</option>
                  <option value="회로설계">회로설계</option>
                  <option value="아트웍">아트웍 (Artwork)</option>
                  <option value="샘플발주">샘플발주 (Fabrication)</option>
                  <option value="조립완료">조립완료 (Assembled)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">공개 범위 설정</label>
                <div 
                  className={`share-toggle-card ${isPublic ? 'public' : 'private'}`}
                  onClick={() => setIsPublic(!isPublic)}
                >
                  {isPublic ? (
                    <>
                      <Globe size={18} className="toggle-icon public" />
                      <div>
                        <div className="toggle-label">전체 회원 공개 공유</div>
                        <div className="toggle-sub">갤러리에 노출되어 피드백을 받습니다</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Lock size={18} className="toggle-icon private" />
                      <div>
                        <div className="toggle-label">나만 보기 (비공개)</div>
                        <div className="toggle-sub">내 작업 보관함에만 저장됩니다</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">회로/기판 사진 업로드 (다중 선택 가능)</label>
              <div className="image-upload-zone">
                <label className="file-upload-btn">
                  <Upload size={18} />
                  <span>내 PC에서 이미지 파일 선택</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    disabled={isUploading}
                  />
                </label>
                <button 
                  type="button" 
                  className="sample-img-btn"
                  onClick={handleAddSampleImage}
                >
                  <ImageIcon size={16} />
                  <span>샘플 기판 사진 추가</span>
                </button>
              </div>

              {/* Uploaded images previews */}
              {images.length > 0 && (
                <div className="uploaded-previews-grid">
                  {images.map((img, idx) => (
                    <div key={idx} className="preview-item">
                      <img src={img} alt={`Preview ${idx}`} />
                      <button 
                        type="button" 
                        className="remove-img-btn"
                        onClick={() => handleRemoveImage(idx)}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">프로젝트 설명 & 개발 목적</label>
              <textarea 
                className="form-textarea" 
                rows={3}
                placeholder="어떤 기능을 하는 회로인지, 어떤 계기로 만들게 되었는지 자유롭게 설명해주세요."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">회로 및 PCB 상세 스펙 (층수, 부품, 치수 등)</label>
              <textarea 
                className="form-textarea font-mono" 
                rows={4}
                value={specs}
                onChange={e => setSpecs(e.target.value)}
                placeholder="• Layer: 4 Layer&#10;• MCU: ESP32-S3&#10;• Power: 3.3V LDO&#10;• Package: 0603 SMD"
              />
            </div>

            <div className="form-group">
              <label className="form-label">태그 (쉼표로 구분)</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="예: KiCad, ESP32, 4층기판, 고속신호"
                value={tagsInput}
                onChange={e => setTagsInput(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>취소</button>
            <button type="submit" className="btn-primary" disabled={isSubmitting || isUploading}>
              {isSubmitting ? '저장 중...' : '작업물 저장 및 등록'}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .new-project-modal {
          max-width: 680px;
        }
        .np-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .np-icon {
          font-size: 1.3rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
        .share-toggle-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.9rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--border);
          cursor: pointer;
          background: #F8FAFC;
          transition: all 0.2s;
        }
        .share-toggle-card.public {
          border-color: #FED7AA;
          background: #FFF7ED;
        }
        .toggle-icon.public {
          color: var(--primary);
        }
        .toggle-icon.private {
          color: #64748B;
        }
        .toggle-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1E293B;
        }
        .toggle-sub {
          font-size: 0.72rem;
          color: #64748B;
        }
        .image-upload-zone {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .file-upload-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          border: 1.5px dashed var(--primary);
          background: var(--primary-light);
          color: var(--primary-dark);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }
        .file-upload-btn:hover {
          background: #FFEDD5;
        }
        .sample-img-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 0.9rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: white;
          color: #475569;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .sample-img-btn:hover {
          background: #F1F5F9;
        }
        .uploaded-previews-grid {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }
        .preview-item {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .remove-img-btn {
          position: absolute;
          top: 3px;
          right: 3px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .font-mono {
          font-family: var(--font-mono);
          font-size: 0.82rem;
        }
      `}</style>
    </div>
  );
}
