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
  HelpCircle,
  MapPin,
  Flame,
  Award
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function BoardView() {
  const { currentUser } = useAuth();
  const [boardType, setBoardType] = useState('sos'); // 'sos' | 'notice' | 'info' | 'general' | 'secret' | 'suggestion'
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  
  // Write post form state
  const [writeTitle, setWriteTitle] = useState('');
  const [writeContent, setWriteContent] = useState('');
  const [writeBoard, setWriteBoard] = useState('sos');
  const [isPinned, setIsPinned] = useState(false);
  const [writeImages, setWriteImages] = useState([]);
  const [pinMarkers, setPinMarkers] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Comment state
  const [commentText, setCommentText] = useState('');
  
  // Admin suggestion answer state
  const [adminReplyText, setAdminReplyText] = useState('');
  const [suggestionStatus, setSuggestionStatus] = useState('검토중');

  const boards = [
    { id: 'sos', label: '🚨 회로 SOS', desc: '타버린 기판, 쇼트, 미작동 버그! 핀포인트 사진 찍고 해결책 채택받기 (+1.5℃)' },
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

  const handleAcceptSolution = async (commentId) => {
    if (!selectedPost || !currentUser) return;
    if (selectedPost.authorId !== currentUser.id && currentUser.role !== 'admin') {
      alert('질문 작성자 또는 관리자만 해결책을 채택할 수 있습니다.');
      return;
    }
    try {
      const res = await fetch(`/api/posts/${selectedPost.id}/accept-solution`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commentId })
      });
      if (res.ok) {
        const updated = await res.json();
        setSelectedPost(updated);
        setPosts(prev => prev.map(p => p.id === updated.id ? updated : p));
        alert('🎉 해결책이 성공적으로 채택되었습니다! 답변자에게 납땜 온도 +1.5℃와 "회로 SOS 명탐정 💡" 뱃지가 부여되었습니다.');
      }
    } catch (err) {
      console.error('Accept solution error:', err);
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
          pinMarkers: writeBoard === 'sos' ? pinMarkers : [],
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
        setPinMarkers([]);
      }
    } catch (err) {
      console.error('Submit post error:', err);
    }
  };

  const handlePinClickOnImage = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    const label = prompt('이 지점의 의심 증상/발열 부위 설명을 입력하세요:', `Pin ${pinMarkers.length + 1} 의심 지점`);
    if (label && label.trim()) {
      setPinMarkers(prev => [...prev, { id: `pin_${Date.now()}`, x, y, label: label.trim() }]);
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
                    ) : post.boardType === 'sos' ? (
                      post.isResolved ? (
                        <span className="badge badge-green">✓ 해결</span>
                      ) : (
                        <span className="badge badge-orange">🚨 SOS</span>
                      )
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
                    {post.pinMarkers?.length > 0 && (
                      <span className="pin-indicator-badge">📍 핀 {post.pinMarkers.length}개</span>
                    )}
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
                {selectedPost.boardType === 'sos' && (
                  selectedPost.isResolved ? (
                    <span className="badge badge-green">✓ 채택 완료</span>
                  ) : (
                    <span className="badge badge-orange">진단 요청중</span>
                  )
                )}
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
              {/* SOS Alert Banner */}
              {selectedPost.boardType === 'sos' && (
                selectedPost.isResolved ? (
                  <div className="sos-resolved-banner">
                    <CheckCircle2 size={18} />
                    <span>이 회로 버그는 해결책이 채택되어 수리 완료되었습니다! 🎉</span>
                  </div>
                ) : (
                  <div className="sos-unresolved-banner">
                    <AlertCircle size={18} />
                    <span>도움 요청 중인 회로 버그입니다. 핀포인트를 확인하고 댓글로 해결책을 알려주세요! (채택 시 +1.5℃ 납땜온도)</span>
                  </div>
                )
              )}

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

              {/* SOS Pinpoint Interactive Viewer or Regular Images */}
              {selectedPost.boardType === 'sos' && selectedPost.images?.[0] ? (
                <div className="sos-pinpoint-viewer">
                  <div className="pin-viewer-stage">
                    <img src={selectedPost.images[0]} alt="Circuit SOS Board" className="pin-stage-image" />
                    {(selectedPost.pinMarkers || []).map((pin, pIdx) => (
                      <div 
                        key={pin.id || pIdx} 
                        className="interactive-pin-dot"
                        style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      >
                        <span className="pin-num">{pIdx + 1}</span>
                        <div className="pin-floating-tooltip">
                          <strong>Pin {pIdx + 1}:</strong> {pin.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {(selectedPost.pinMarkers || []).length > 0 && (
                    <div className="pin-legend-box">
                      <div className="legend-title">
                        <MapPin size={14} />
                        <span>등록된 버그 의심 핀포인트 ({selectedPost.pinMarkers.length}개):</span>
                      </div>
                      <div className="legend-list">
                        {selectedPost.pinMarkers.map((pin, pIdx) => (
                          <div key={pin.id || pIdx} className="legend-item">
                            <span className="legend-badge">Pin {pIdx + 1}</span>
                            <span className="legend-text">{pin.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : selectedPost.images && selectedPost.images.length > 0 ? (
                <div className="post-images-grid">
                  {selectedPost.images.map((img, i) => (
                    <a key={i} href={img} target="_blank" rel="noreferrer" className="post-img-item">
                      <img src={img} alt="Attached" />
                    </a>
                  ))}
                </div>
              ) : null}

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
                  <span>공감 & 응원 {selectedPost.likes || 0}</span>
                </button>
              </div>

              {/* Comments Section */}
              <div className="post-comments-area">
                <h4>답변 & 댓글 ({selectedPost.comments?.length || 0})</h4>

                <form onSubmit={handleAddComment} className="comment-form">
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder={
                      selectedPost.boardType === 'sos'
                        ? '버그 원인 진단 및 해결 팁을 작성하세요 (채택 시 +1.5℃ 납땜온도)...'
                        : selectedPost.boardType === 'secret' ? '익명으로 댓글을 작성합니다...' : '댓글을 작성하세요...'
                    }
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                  />
                  <button type="submit" className="btn-primary">
                    <Send size={15} />
                  </button>
                </form>

                <div className="comments-list">
                  {selectedPost.comments?.map(c => {
                    const isAccepted = c.isAccepted || selectedPost.acceptedCommentId === c.id;
                    const canAccept = selectedPost.boardType === 'sos' && 
                                      !selectedPost.isResolved && 
                                      (currentUser?.id === selectedPost.authorId || currentUser?.role === 'admin') &&
                                      c.userId !== selectedPost.authorId;

                    return (
                      <div key={c.id} className={`comment-item ${isAccepted ? 'accepted-solution-card' : ''}`}>
                        {isAccepted && (
                          <div className="accepted-banner">
                            <Award size={16} />
                            <span>🏆 질문자가 채택한 해결책 솔루션 (+1.5℃ 납땜 온도 획득)</span>
                          </div>
                        )}
                        <div className="comment-inner-row">
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
                            {canAccept && (
                              <div className="solution-accept-box">
                                <button 
                                  className="accept-solve-btn"
                                  onClick={() => handleAcceptSolution(c.id)}
                                >
                                  <Award size={14} />
                                  <span>이 답변을 해결책으로 채택하기 (+1.5℃)</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                      <option value="sos">🚨 회로 SOS (핀포인트 마킹 & 채택)</option>
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
                    placeholder={writeBoard === 'sos' ? "예: [SOS] ESP32 5V 인가 시 LDO에서 연기가 납니다!" : "제목을 입력하세요"}
                    value={writeTitle}
                    onChange={e => setWriteTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">내용 *</label>
                  <textarea 
                    className="form-textarea" 
                    rows={6}
                    placeholder={writeBoard === 'sos' ? "증상, 전원 입력 조건, 쇼트 및 발열 상태를 상세히 적어주세요." : "내용을 작성하세요."}
                    value={writeContent}
                    onChange={e => setWriteContent(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    {writeBoard === 'sos' ? '기판 사진 첨부 (필수 - 핀포인트 마킹용)' : '이미지 첨부'}
                  </label>
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

                  {/* If SOS board and image uploaded, show click-to-pin canvas */}
                  {writeBoard === 'sos' && writeImages.length > 0 && (
                    <div className="sos-write-pin-tool">
                      <div className="pin-tool-hint">
                        💡 <strong>사진의 이상 지점을 클릭</strong>하면 핀포인트 마킹(Pin 1, Pin 2...)을 추가할 수 있습니다.
                      </div>
                      <div className="pin-interactive-canvas" onClick={handlePinClickOnImage}>
                        <img src={writeImages[0]} alt="SOS Uploaded Board" />
                        {pinMarkers.map((pin, idx) => (
                          <div 
                            key={pin.id || idx} 
                            className="interactive-pin-dot"
                            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Pin ${idx + 1} ("${pin.label}") 마킹을 삭제할까요?`)) {
                                setPinMarkers(prev => prev.filter((_, i) => i !== idx));
                              }
                            }}
                          >
                            <span className="pin-num">{idx + 1}</span>
                          </div>
                        ))}
                      </div>

                      {pinMarkers.length > 0 && (
                        <div className="pin-markers-summary">
                          {pinMarkers.map((pin, idx) => (
                            <div key={pin.id || idx} className="summary-pin-tag">
                              <span>Pin {idx + 1}: {pin.label}</span>
                              <button 
                                type="button" 
                                onClick={() => setPinMarkers(prev => prev.filter((_, i) => i !== idx))}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {writeBoard !== 'sos' && writeImages.length > 0 && (
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
        /* SOS & Pinpoint Styles */
        .pin-indicator-badge {
          background: #FEF2F2;
          color: #DC2626;
          border: 1px solid #FECACA;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .sos-resolved-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #ECFDF5;
          color: #065F46;
          border: 1.5px solid #A7F3D0;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .sos-unresolved-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFF7ED;
          color: #C2410C;
          border: 1.5px solid #FDBA74;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-weight: 700;
          font-size: 0.88rem;
          margin-bottom: 1rem;
        }
        .sos-pinpoint-viewer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 0.75rem 0 1.25rem;
        }
        .pin-viewer-stage {
          position: relative;
          width: 100%;
          max-height: 420px;
          background: #0F172A;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
        }
        .pin-stage-image {
          max-width: 100%;
          max-height: 420px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .interactive-pin-dot {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 26px;
          height: 26px;
          background: #EF4444;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 900;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.9), 0 0 14px rgba(239, 68, 68, 0.8);
          cursor: pointer;
          z-index: 10;
          transition: transform 0.2s ease;
          animation: pinPulse 2s infinite ease-in-out;
        }
        .interactive-pin-dot:hover {
          transform: translate(-50%, -50%) scale(1.3);
          z-index: 20;
        }
        @keyframes pinPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.9), 0 0 10px rgba(239, 68, 68, 0.6); }
          50% { box-shadow: 0 0 0 5px rgba(255, 255, 255, 1), 0 0 18px rgba(239, 68, 68, 1); }
        }
        .pin-floating-tooltip {
          display: none;
          position: absolute;
          bottom: 115%;
          left: 50%;
          transform: translateX(-50%);
          background: #0F172A;
          color: white;
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
          font-size: 0.76rem;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 30;
        }
        .interactive-pin-dot:hover .pin-floating-tooltip {
          display: block;
        }
        .pin-legend-box {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.75rem 1rem;
        }
        .legend-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.4rem;
        }
        .legend-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: #1E293B;
        }
        .legend-badge {
          background: #EF4444;
          color: white;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
        }
        /* Comment Acceptance */
        .accepted-solution-card {
          border: 2px solid #10B981 !important;
          background: #F0FDF4 !important;
          border-radius: 10px;
          overflow: hidden;
        }
        .accepted-banner {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #10B981;
          color: white;
          padding: 0.35rem 0.85rem;
          font-size: 0.78rem;
          font-weight: 800;
        }
        .comment-inner-row {
          display: flex;
          gap: 0.75rem;
          padding: 0.85rem;
        }
        .solution-accept-box {
          margin-top: 0.5rem;
        }
        .accept-solve-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFF7ED;
          color: #EA580C;
          border: 1.5px solid #FED7AA;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .accept-solve-btn:hover {
          background: #EA580C;
          color: white;
          border-color: #EA580C;
        }
        /* Write pin tool */
        .sos-write-pin-tool {
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pin-tool-hint {
          font-size: 0.82rem;
          color: #C2410C;
          background: #FFF7ED;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #FFEDD5;
        }
        .pin-interactive-canvas {
          position: relative;
          cursor: crosshair;
          max-height: 280px;
          background: #0F172A;
          border-radius: 8px;
          overflow: hidden;
          display: inline-block;
          border: 2px dashed #FDBA74;
        }
        .pin-interactive-canvas img {
          max-height: 280px;
          width: auto;
          display: block;
        }
        .pin-markers-summary {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .summary-pin-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #334155;
        }
        .summary-pin-tag button {
          border: none;
          background: transparent;
          color: #DC2626;
          font-weight: 800;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
