import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Pin, 
  Search, 
  Plus, 
  Heart, 
  Eye, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Lock, 
  Sparkles, 
  X,
  Send,
  Upload,
  Shield,
  HelpCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function BoardView() {
  const { currentUser } = useAuth();
  const [boardType, setBoardType] = useState('notice'); // 'notice' | 'info' | 'general' | 'secret' | 'suggestion'
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  
  // Write post form state
  const [writeTitle, setWriteTitle] = useState('');
  const [writeContent, setWriteContent] = useState('');
  const [writeBoard, setWriteBoard] = useState('general');
  const [isPinned, setIsPinned] = useState(false);
  const [writeImages, setWriteImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Comment state
  const [commentText, setCommentText] = useState('');
  
  // Admin suggestion answer state
  const [adminReplyText, setAdminReplyText] = useState('');
  const [suggestionStatus, setSuggestionStatus] = useState('검토중');

  const boards = [
    { id: 'notice', label: '📢 공지사항', desc: '모임 정기 공지 및 필독 운영 안내' },
    { id: 'info', label: '💡 정보게시판', desc: 'KiCad 노하우, PCB 발주 가이드, 부품 소싱 팁' },
    { id: 'general', label: '💬 일반게시판', desc: '자유로운 하드웨어 잡담, Q&A, 작업 후기' },
    { id: 'secret', label: '🔒 비밀게시판', desc: '익명으로 솔직하게 털어놓는 고민과 비밀 질문' },
    { id: 'suggestion', label: '📮 건의사항', desc: '모임 운영 개선 아이디어 제안 및 처리 현황' },
  ];

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/posts?boardType=${boardType}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [boardType]);

  const handlePostClick = async (postId) => {
    try {
      const res = await fetch(`/api/posts/${postId}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedPost(data);
        if (data.status) setSuggestionStatus(data.status);
        if (data.adminResponse) setAdminReplyText(data.adminResponse);
      }
    } catch (err) {
      console.error('Failed to load post detail:', err);
    }
  };

  const handleLike = async (postId) => {
    if (!currentUser) return;
    try {
      const res = await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id })
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: data.likes, likedUsers: data.likedUsers } : p));
        if (selectedPost?.id === postId) {
          setSelectedPost(prev => ({ ...prev, likes: data.likes, likedUsers: data.likedUsers }));
        }
      }
    } catch (err) {
      console.error('Like error:', err);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || !currentUser || !selectedPost) return;
    try {
      const res = await fetch(`/api/posts/${selectedPost.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          text: commentText.trim(),
          isAnonymous: selectedPost.boardType === 'secret'
        })
      });
      if (res.ok) {
        const newCmt = await res.json();
        setSelectedPost(prev => ({
          ...prev,
          comments: [...(prev.comments || []), newCmt]
        }));
        setCommentText('');
      }
    } catch (err) {
      console.error('Add comment error:', err);
    }
  };

  const handleAdminUpdateSuggestion = async () => {
    if (!selectedPost || currentUser?.role !== 'admin') return;
    try {
      const res = await fetch(`/api/posts/${selectedPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: suggestionStatus,
          adminResponse: adminReplyText
        })
      });
      if (res.ok) {
        const updated = await res.json();
        setSelectedPost(updated);
        setPosts(prev => prev.map(p => p.id === updated.id ? updated : p));
        alert('건의사항 상태 및 관리자 답변이 저장되었습니다.');
      }
    } catch (err) {
      console.error('Admin update error:', err);
    }
  };

  const handleWriteSubmit = async (e) => {
    e.preventDefault();
    if (!writeTitle.trim() || !writeContent.trim() || !currentUser) return;

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          boardType: writeBoard,
          authorId: currentUser.id,
          authorName: currentUser.name,
          authorAvatar: currentUser.avatar,
          title: writeTitle.trim(),
          content: writeContent.trim(),
          images: writeImages,
          isPinned: currentUser.role === 'admin' ? isPinned : false
        })
      });
      if (res.ok) {
        const newPost = await res.json();
        if (newPost.boardType === boardType) {
          setPosts(prev => [newPost, ...prev]);
        } else {
          setBoardType(newPost.boardType);
        }
        setIsWriteModalOpen(false);
        setWriteTitle('');
        setWriteContent('');
        setWriteImages([]);
      }
    } catch (err) {
      console.error('Submit post error:', err);
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
        setWriteImages(prev => [...prev, data.url]);
      } else {
        const local = URL.createObjectURL(file);
        setWriteImages(prev => [...prev, local]);
      }
    } catch (err) {
      const local = URL.createObjectURL(file);
      setWriteImages(prev => [...prev, local]);
    } finally {
      setIsUploading(false);
    }
  };

  const currentBoardObj = boards.find(b => b.id === boardType);

  const filteredPosts = posts.filter(p => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q);
  });

  const getSuggestionStatusBadge = (status) => {
    switch (status) {
      case '반영완료': return 'badge-green';
      case '검토중': return 'badge-orange';
      default: return 'badge-blue';
    }
  };

  return (
    <div className="board-container fade-in">
      {/* Board Header & Write Button */}
      <div className="board-top-bar">
        <div>
          <h2 className="section-title">
            <span className="title-icon">📋</span> 당근 PCB 커뮤니티 게시판
          </h2>
          <p className="section-desc">{currentBoardObj?.desc}</p>
        </div>
        <button 
          className="btn-primary"
          onClick={() => {
            setWriteBoard(boardType);
            setIsWriteModalOpen(true);
          }}
        >
          <Plus size={18} />
          <span>게시글 작성</span>
        </button>
      </div>

      {/* Board Nav Tabs */}
      <div className="board-tabs-bar">
        <div className="board-tabs">
          {boards.map(b => (
            <button
              key={b.id}
              className={`board-tab-btn ${boardType === b.id ? 'active' : ''}`}
              onClick={() => setBoardType(b.id)}
            >
              <span>{b.label}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="board-search-box">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="제목, 본문 검색..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Posts Table / List */}
      <div className="board-posts-wrapper">
        {filteredPosts.length === 0 ? (
          <div className="empty-board">
            <p>등록된 게시글이 없습니다. 첫 번째 글을 남겨보세요!</p>
          </div>
        ) : (
          <div className="posts-table">
            <div className="posts-table-header">
              <span className="col-status">구분</span>
              <span className="col-title">제목</span>
              <span className="col-author">작성자</span>
              <span className="col-date">등록일</span>
              <span className="col-views">조회</span>
              <span className="col-likes">좋아요</span>
            </div>

            {filteredPosts.map(post => {
              const isSecret = post.boardType === 'secret';
              return (
                <div 
                  key={post.id} 
                  className={`post-row ${post.isPinned ? 'pinned-row' : ''}`}
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="col-status">
                    {post.isPinned ? (
                      <span className="badge badge-orange"><Pin size={11} /> 필독</span>
                    ) : post.boardType === 'suggestion' ? (
                      <span className={`badge ${getSuggestionStatusBadge(post.status)}`}>
                        {post.status || '접수'}
                      </span>
                    ) : isSecret ? (
                      <span className="badge badge-gray"><Lock size={11} /> 비밀</span>
                    ) : (
                      <span className="badge badge-gray">일반</span>
                    )}
                  </div>

                  <div className="col-title">
                    <span className="post-title-text">{post.title}</span>
                    {post.comments?.length > 0 && (
                      <span className="comment-badge-count">[{post.comments.length}]</span>
                    )}
                    {post.images?.length > 0 && (
                      <span className="image-attach-icon">📷</span>
                    )}
                  </div>

                  <div className="col-author">
                    {isSecret ? (
                      <span className="anonymous-author">🔒 익명</span>
                    ) : (
                      <span className="author-name-text">{post.authorName}</span>
                    )}
                  </div>

                  <div className="col-date">
                    {new Date(post.createdAt).toLocaleDateString('ko-KR', { month: '2-digit', day: '2-digit' })}
                  </div>

                  <div className="col-views">{post.views || 0}</div>
                  <div className="col-likes">{post.likes || 0}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content post-detail-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-meta">
                <span className="badge badge-orange">
                  {boards.find(b => b.id === selectedPost.boardType)?.label}
                </span>
                {selectedPost.status && (
                  <span className={`badge ${getSuggestionStatusBadge(selectedPost.status)}`}>
                    상태: {selectedPost.status}
                  </span>
                )}
                <span className="detail-date">
                  {new Date(selectedPost.createdAt).toLocaleString('ko-KR')}
                </span>
              </div>
              <button className="close-btn" onClick={() => setSelectedPost(null)}>✕</button>
            </div>

            <div className="modal-body">
              <h2 className="post-view-title">{selectedPost.title}</h2>

              <div className="post-author-bar">
                <img 
                  src={selectedPost.authorAvatar} 
                  alt={selectedPost.authorName} 
                  className="author-avatar-sm"
                  onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/identicon/svg?seed=post'; }}
                />
                <span className="author-name">{selectedPost.authorName}</span>
                <span className="stat-item"><Eye size={14} /> {selectedPost.views || 0}</span>
                <span className="stat-item"><Heart size={14} /> {selectedPost.likes || 0}</span>
              </div>

              {/* Images */}
              {selectedPost.images && selectedPost.images.length > 0 && (
                <div className="post-images-grid">
                  {selectedPost.images.map((img, i) => (
                    <a key={i} href={img} target="_blank" rel="noreferrer" className="post-img-item">
                      <img src={img} alt="Attached" />
                    </a>
                  ))}
                </div>
              )}

              {/* Content Body */}
              <div className="post-view-content">
                {selectedPost.content}
              </div>

              {/* Suggestion Official Admin Response Box */}
              {selectedPost.boardType === 'suggestion' && (
                <div className="admin-reply-box">
                  <div className="admin-reply-header">
                    <Shield size={16} color="#EA580C" />
                    <h4>운영진 공식 답변 및 조치 사항</h4>
                  </div>
                  {selectedPost.adminResponse ? (
                    <p className="admin-reply-text">{selectedPost.adminResponse}</p>
                  ) : (
                    <p className="admin-reply-empty">아직 등록된 운영진 답변이 없습니다. 검토 중입니다.</p>
                  )}

                  {/* If current user is Admin, allow replying & status change */}
                  {currentUser?.role === 'admin' && (
                    <div className="admin-control-area">
                      <div className="admin-control-row">
                        <label className="form-label">처리 상태 변경:</label>
                        <select 
                          className="form-select"
                          value={suggestionStatus}
                          onChange={e => setSuggestionStatus(e.target.value)}
                        >
                          <option value="접수">접수 (Received)</option>
                          <option value="검토중">검토중 (Reviewing)</option>
                          <option value="반영완료">반영완료 (Completed)</option>
                        </select>
                      </div>
                      <textarea 
                        className="form-textarea" 
                        rows={2}
                        placeholder="회원 건의사항에 대한 운영진 공식 피드백을 입력하세요."
                        value={adminReplyText}
                        onChange={e => setAdminReplyText(e.target.value)}
                      />
                      <button 
                        className="btn-primary" 
                        style={{ alignSelf: 'flex-end', padding: '0.45rem 1rem' }}
                        onClick={handleAdminUpdateSuggestion}
                      >
                        답변 및 상태 저장
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Like action */}
              <div className="post-like-center">
                <button 
                  className={`post-like-button ${selectedPost.likedUsers?.includes(currentUser?.id) ? 'active' : ''}`}
                  onClick={() => handleLike(selectedPost.id)}
                >
                  <Heart size={20} fill={selectedPost.likedUsers?.includes(currentUser?.id) ? '#FF6F0F' : 'none'} />
                  <span>공감 & 좋아요 {selectedPost.likes || 0}</span>
                </button>
              </div>

              {/* Comments Section */}
              <div className="post-comments-area">
                <h4>댓글 ({selectedPost.comments?.length || 0})</h4>

                <form onSubmit={handleAddComment} className="comment-form">
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder={selectedPost.boardType === 'secret' ? '익명으로 댓글을 작성합니다...' : '댓글을 작성하세요...'}
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                  />
                  <button type="submit" className="btn-primary">
                    <Send size={15} />
                  </button>
                </form>

                <div className="comments-list">
                  {selectedPost.comments?.map(c => (
                    <div key={c.id} className="comment-item">
                      <img 
                        src={c.userAvatar} 
                        alt={c.userName} 
                        className="comment-avatar"
                        onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/identicon/svg?seed=cmt'; }}
                      />
                      <div className="comment-content">
                        <div className="comment-meta">
                          <span className="comment-author">{c.userName}</span>
                          <span className="comment-time">
                            {new Date(c.createdAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="comment-text">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Write Post Modal */}
      {isWriteModalOpen && (
        <div className="modal-overlay" onClick={() => setIsWriteModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>새 게시글 작성</h3>
              <button className="close-btn" onClick={() => setIsWriteModalOpen(false)}>✕</button>
            </div>
            <form onSubmit={handleWriteSubmit}>
              <div className="modal-body">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">게시판 선택</label>
                    <select 
                      className="form-select"
                      value={writeBoard}
                      onChange={e => setWriteBoard(e.target.value)}
                    >
                      {currentUser?.role === 'admin' && (
                        <option value="notice">📢 공지사항</option>
                      )}
                      <option value="info">💡 정보게시판</option>
                      <option value="general">💬 일반게시판</option>
                      <option value="secret">🔒 비밀게시판 (익명 보호)</option>
                      <option value="suggestion">📮 건의사항</option>
                    </select>
                  </div>

                  {currentUser?.role === 'admin' && writeBoard === 'notice' && (
                    <div className="form-group">
                      <label className="form-label">상단 고정 (Pin)</label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <input 
                          type="checkbox" 
                          checked={isPinned} 
                          onChange={e => setIsPinned(e.target.checked)} 
                        />
                        <span>필독 공지글로 상단에 고정</span>
                      </label>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">제목 *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="제목을 입력하세요"
                    value={writeTitle}
                    onChange={e => setWriteTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">내용 *</label>
                  <textarea 
                    className="form-textarea" 
                    rows={8}
                    placeholder="내용을 작성하세요. 회로 질문, 지식 나눔 등 자유롭게 작성할 수 있습니다."
                    value={writeContent}
                    onChange={e => setWriteContent(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">이미지 첨부</label>
                  <label className="file-upload-btn">
                    <Upload size={16} />
                    <span>이미지 업로드</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      style={{ display: 'none' }}
                      disabled={isUploading}
                    />
                  </label>
                  {writeImages.length > 0 && (
                    <div className="uploaded-previews-grid">
                      {writeImages.map((img, idx) => (
                        <div key={idx} className="preview-item">
                          <img src={img} alt="Attach" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setIsWriteModalOpen(false)}>
                  취소
                </button>
                <button type="submit" className="btn-primary" disabled={isUploading}>
                  게시글 등록
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .board-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .board-tabs-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
          background: white;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .board-tabs {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .board-tab-btn {
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .board-tab-btn:hover {
          color: var(--primary);
        }
        .board-tab-btn.active {
          background: var(--primary);
          color: white;
        }
        .board-search-box {
          position: relative;
          min-width: 240px;
        }
        .posts-table {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .posts-table-header {
          display: grid;
          grid-template-columns: 80px 1fr 140px 90px 60px 60px;
          padding: 0.85rem 1.25rem;
          background: #F8FAFC;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748B;
          border-bottom: 1px solid var(--border);
        }
        .post-row {
          display: grid;
          grid-template-columns: 80px 1fr 140px 90px 60px 60px;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #F1F5F9;
          font-size: 0.88rem;
          align-items: center;
          cursor: pointer;
          transition: background 0.15s;
        }
        .post-row:hover {
          background: #FFFBF7;
        }
        .pinned-row {
          background: #FFFDF9;
          font-weight: 600;
        }
        .col-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-right: 1rem;
          line-height: 1.4;
        }
        .post-title-text {
          color: #0F172A;
          font-weight: 600;
          word-break: break-word;
        }
        .comment-badge-count {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.8rem;
        }
        .col-author, .col-date, .col-views, .col-likes {
          font-size: 0.82rem;
          color: #64748B;
        }
        .col-views, .col-likes {
          text-align: center;
        }
        @media (max-width: 768px) {
          .posts-table-header {
            display: none;
          }
          .post-row {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
          .col-author, .col-date, .col-views, .col-likes {
            display: inline-block;
            margin-right: 0.5rem;
          }
        }
        .empty-board {
          padding: 4rem 1rem;
          text-align: center;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--border);
          color: #94A3B8;
        }
        /* Detail Modal */
        .post-detail-modal {
          max-width: 760px;
        }
        .modal-header-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .post-view-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
        }
        .post-author-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #F1F5F9;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.78rem;
          color: #94A3B8;
        }
        .post-view-content {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.7;
          white-space: pre-wrap;
          margin-top: 0.5rem;
        }
        .post-images-grid {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 0.75rem 0;
        }
        .post-img-item {
          max-width: 420px;
          min-width: 180px;
          height: auto;
          max-height: 340px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .post-img-item img {
          max-width: 100%;
          max-height: 340px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .admin-reply-box {
          background: #FFF7ED;
          border: 1.5px solid #FED7AA;
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-top: 1rem;
        }
        .admin-reply-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }
        .admin-reply-header h4 {
          font-size: 0.92rem;
          font-weight: 700;
          color: #C2410C;
        }
        .admin-reply-text {
          font-size: 0.9rem;
          color: #7C2D12;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        .admin-reply-empty {
          font-size: 0.85rem;
          color: #9A3412;
          font-style: italic;
        }
        .admin-control-area {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px dashed #FDBA74;
        }
        .admin-control-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .post-like-center {
          display: flex;
          justify-content: center;
          margin: 1.5rem 0;
        }
        .post-like-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          border: 1.5px solid var(--border);
          background: white;
          color: #475569;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .post-like-button:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .post-like-button.active {
          border-color: var(--primary);
          color: var(--primary);
          background: #FFF7ED;
        }
        .post-comments-area {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
