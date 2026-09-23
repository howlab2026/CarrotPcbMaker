import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Plus, 
  ThumbsUp, 
  Eye, 
  Calendar, 
  Tag, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  X,
  FileText,
  Bookmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['전체', '설계 기초', '소자 선택', '발주 가이드', '납땜 팁', '트러블슈팅'];

export default function WikiView() {
  const { currentUser } = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // 새 글 폼
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: '설계 기초',
    tags: '',
    content: ''
  });

  const fetchArticles = async () => {
    try {
      setLoading(true);
      let url = '/api/wiki';
      const params = new URLSearchParams();
      if (activeCategory !== '전체') params.append('category', activeCategory);
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [activeCategory, searchQuery]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleOpenDetail = (article) => {
    setSelectedArticle(article);
    // 조회수 증가
    fetch(`/api/wiki/${article.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ views: (article.views || 0) + 1 })
    }).catch(() => {});
  };

  const handleLike = async (articleId) => {
    if (!selectedArticle) return;
    const nextLikes = (selectedArticle.likes || 0) + 1;
    try {
      const res = await fetch(`/api/wiki/${articleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: nextLikes })
      });
      if (res.ok) {
        setSelectedArticle(prev => ({ ...prev, likes: nextLikes }));
        setArticles(prev => prev.map(a => a.id === articleId ? { ...a, likes: nextLikes } : a));
        showToast('좋아요를 눌렀습니다! 👍');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateArticle = async (e) => {
    e.preventDefault();
    if (!newArticle.title.trim() || !newArticle.content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    try {
      const tagsArray = newArticle.tags
        .split(',')
        .map(t => t.trim().replace(/^#/, ''))
        .filter(Boolean);

      const payload = {
        title: newArticle.title,
        category: newArticle.category,
        tags: tagsArray.length > 0 ? tagsArray : ['PCB'],
        content: newArticle.content,
        authorName: currentUser?.name || '익명 메이커',
        authorId: currentUser?.id || 'usr_guest'
      };

      const res = await fetch('/api/wiki', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setIsWriteModalOpen(false);
        setNewArticle({ title: '', category: '설계 기초', tags: '', content: '' });
        fetchArticles();
        showToast('새 지식 위키 문서가 발행되었습니다! 📚');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="wiki-view">
      <div className="wiki-header">
        <div>
          <h2 className="page-title">
            <span className="title-emoji">📚</span> 메이커 지식 위키
          </h2>
          <p className="page-desc">
            반복되는 KiCad 설계 오류, 부품 선정 팁, 해외 발주 노하우를 집단 지성으로 공유합니다.
          </p>
        </div>

        <div className="header-actions">
          {toastMsg && <span className="toast-badge">{toastMsg}</span>}
          <button className="btn-primary" onClick={() => setIsWriteModalOpen(true)}>
            <Plus size={16} /> 지식 문서 작성
          </button>
        </div>
      </div>

      {selectedArticle ? (
        /* 상세 문서 읽기 뷰 */
        <div className="article-detail-view">
          <button className="back-btn" onClick={() => setSelectedArticle(null)}>
            <ArrowLeft size={16} /> 목록으로 돌아가기
          </button>

          <article className="detail-card">
            <div className="detail-meta">
              <span className="category-pill">{selectedArticle.category}</span>
              <span className="meta-date">
                <Calendar size={13} /> {selectedArticle.updatedAt}
              </span>
              <span className="meta-author">작성자: {selectedArticle.authorName}</span>
            </div>

            <h1 className="detail-title">{selectedArticle.title}</h1>

            <div className="detail-tags">
              {(selectedArticle.tags || []).map((t, idx) => (
                <span key={idx} className="tag-chip">#{t}</span>
              ))}
            </div>

            <div className="detail-divider" />

            <div className="detail-content-body">
              {selectedArticle.content.split('\n\n').map((para, i) => {
                if (para.startsWith('## ')) {
                  return <h2 key={i} className="content-h2">{para.replace('## ', '')}</h2>;
                }
                if (para.startsWith('### ')) {
                  return <h3 key={i} className="content-h3">{para.replace('### ', '')}</h3>;
                }
                if (para.startsWith('- ')) {
                  return (
                    <ul key={i} className="content-ul">
                      {para.split('\n').map((li, j) => (
                        <li key={j}>{li.replace(/^- /, '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (para.match(/^\d+\. /)) {
                  return (
                    <ol key={i} className="content-ol">
                      {para.split('\n').map((li, j) => (
                        <li key={j}>{li.replace(/^\d+\. /, '')}</li>
                      ))}
                    </ol>
                  );
                }
                return <p key={i} className="content-p">{para}</p>;
              })}
            </div>

            <div className="detail-footer">
              <button className="like-btn" onClick={() => handleLike(selectedArticle.id)}>
                <ThumbsUp size={16} />
                <span>도움이 되었어요 ({selectedArticle.likes || 0})</span>
              </button>
              <div className="detail-stats">
                <span><Eye size={14} /> 조회수 {selectedArticle.views || 0}</span>
              </div>
            </div>
          </article>
        </div>
      ) : (
        /* 위키 문서 목록 뷰 */
        <>
          {/* 검색 및 카테고리 필터 */}
          <div className="search-filter-section">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="궁금한 키워드 검색 (예: KiCad, DRC, 0603, JLCPCB, 노이즈 등)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="category-tabs">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 위키 아티클 리스트 */}
          {loading ? (
            <div className="loading-state">문서를 불러오는 중입니다...</div>
          ) : articles.length === 0 ? (
            <div className="empty-state">
              <BookOpen size={48} color="#CBD5E1" />
              <h3>검색된 지식 문서가 없습니다</h3>
              <p>첫 번째로 이 주제에 관한 노하우 문서를 작성해보세요!</p>
              <button className="btn-primary" onClick={() => setIsWriteModalOpen(true)}>
                <Plus size={16} /> 새 문서 작성하기
              </button>
            </div>
          ) : (
            <div className="articles-grid">
              {articles.map(article => (
                <div 
                  key={article.id} 
                  className="article-card"
                  onClick={() => handleOpenDetail(article)}
                >
                  <div className="card-top-row">
                    <span className="card-cat-badge">{article.category}</span>
                    <span className="card-date">{article.updatedAt}</span>
                  </div>

                  <h3 className="card-title">{article.title}</h3>

                  <p className="card-snippet">
                    {article.content.replace(/[#\-\*]/g, '').slice(0, 100)}...
                  </p>

                  <div className="card-tags">
                    {(article.tags || []).slice(0, 3).map((t, idx) => (
                      <span key={idx} className="card-tag">#{t}</span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <span className="card-author">by {article.authorName}</span>
                    <div className="card-meta-icons">
                      <span><Eye size={13} /> {article.views || 0}</span>
                      <span><ThumbsUp size={13} /> {article.likes || 0}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* 새 문서 작성 모달 */}
      {isWriteModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsWriteModalOpen(false)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <BookOpen size={20} color="#FF6F0F" />
                <h3>새 지식 위키 문서 작성</h3>
              </div>
              <button className="close-btn" onClick={() => setIsWriteModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateArticle} className="modal-form">
              <div className="form-group">
                <label>문서 제목 *</label>
                <input
                  type="text"
                  placeholder="예: STM32F4 클럭 오실레이터 회로 설계 시 주의사항"
                  value={newArticle.title}
                  onChange={e => setNewArticle({ ...newArticle, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>카테고리</label>
                  <select
                    value={newArticle.category}
                    onChange={e => setNewArticle({ ...newArticle, category: e.target.value })}
                  >
                    {CATEGORIES.filter(c => c !== '전체').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>태그 (쉼표로 구분)</label>
                  <input
                    type="text"
                    placeholder="예: STM32, 크리스탈, 노이즈"
                    value={newArticle.tags}
                    onChange={e => setNewArticle({ ...newArticle, tags: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>본문 내용 (마크다운 지원) *</label>
                <textarea
                  rows="10"
                  placeholder={`## 소제목 작성\n내용을 상세하게 적어주세요.\n- 체크리스트 1\n- 체크리스트 2\n1. 순서 1\n2. 순서 2`}
                  value={newArticle.content}
                  onChange={e => setNewArticle({ ...newArticle, content: e.target.value })}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsWriteModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary">
                  문서 발행하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .wiki-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .wiki-header {
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

        .search-filter-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted, #94A3B8);
        }

        .search-box input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 12px;
          font-size: 0.95rem;
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #1E293B);
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--primary, #FF6F0F);
        }

        .clear-search {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
        }

        .category-tabs {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .category-tab {
          padding: 0.45rem 1rem;
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .category-tab:hover {
          border-color: var(--primary, #FF6F0F);
          color: var(--primary, #FF6F0F);
        }

        .category-tab.active {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border-color: var(--primary, #FF6F0F);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
        }

        .article-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .article-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.08);
          border-color: var(--primary-light, #FFD8BE);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-cat-badge {
          background: #EFF6FF;
          color: #2563EB;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
        }

        .card-date {
          font-size: 0.75rem;
          color: var(--text-muted, #94A3B8);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          line-height: 1.4;
        }

        .card-snippet {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          line-height: 1.5;
          flex: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .card-tag {
          font-size: 0.75rem;
          color: var(--primary, #FF6F0F);
          background: var(--primary-light, #FFF2E8);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border, #F1F5F9);
          font-size: 0.8rem;
          color: var(--text-muted, #64748B);
        }

        .card-meta-icons {
          display: flex;
          gap: 0.75rem;
        }

        .card-meta-icons span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Detail View */
        .article-detail-view {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: none;
          color: var(--text-muted, #64748B);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
          padding: 0.3rem 0;
        }

        .back-btn:hover {
          color: var(--primary, #FF6F0F);
        }

        .detail-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 14px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04);
        }

        .detail-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .category-pill {
          background: var(--primary-light, #FFF2E8);
          color: var(--primary, #FF6F0F);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 12px;
        }

        .meta-date, .meta-author {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .detail-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          line-height: 1.35;
          margin-bottom: 1rem;
        }

        .detail-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag-chip {
          font-size: 0.8rem;
          font-weight: 600;
          color: #2563EB;
          background: #EFF6FF;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .detail-divider {
          height: 1px;
          background: var(--border, #E2E8F0);
          margin-bottom: 1.5rem;
        }

        .detail-content-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--text-main, #334155);
        }

        .content-h2 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 1.5rem 0 0.75rem 0;
          color: var(--text-main, #1E293B);
        }

        .content-h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 1.25rem 0 0.5rem 0;
          color: var(--text-main, #1E293B);
        }

        .content-p {
          margin-bottom: 1rem;
        }

        .content-ul, .content-ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .content-ul li, .content-ol li {
          margin-bottom: 0.35rem;
        }

        .detail-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border, #E2E8F0);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .like-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #EFF6FF;
          color: #2563EB;
          border: 1px solid #BFDBFE;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .like-btn:hover {
          background: #DBEAFE;
        }

        .detail-stats {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          display: flex;
          gap: 1rem;
        }

        .detail-stats span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .empty-state, .loading-state {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--text-muted, #64748B);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem 0;
          color: var(--text-main, #1E293B);
        }

        .empty-state p {
          margin-bottom: 1.5rem;
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
          max-width: 640px;
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
      `}</style>
    </div>
  );
}
