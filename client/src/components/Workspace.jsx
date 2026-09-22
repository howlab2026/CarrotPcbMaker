import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Plus, 
  Search, 
  Heart, 
  MessageSquare, 
  Share2, 
  Eye, 
  Lock, 
  Globe, 
  Upload, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Workspace({ onOpenNewProject, initialFilter = 'all' }) {
  const { currentUser } = useAuth();
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); // 'all' (전체 갤러리) | 'my' (내 작업실)
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [commentInput, setCommentInput] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLike = async (projectId) => {
    if (!currentUser) return;
    try {
      const res = await fetch(`/api/projects/${projectId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id })
      });
      if (res.ok) {
        const data = await res.json();
        setProjects(prev => prev.map(p => {
          if (p.id === projectId) {
            return { ...p, likes: data.likes, likedUsers: data.likedUsers };
          }
          return p;
        }));
        if (selectedProject?.id === projectId) {
          setSelectedProject(prev => ({
            ...prev,
            likes: data.likes,
            likedUsers: data.likedUsers
          }));
        }
      }
    } catch (err) {
      console.error('Failed to like project:', err);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentInput.trim() || !currentUser || !selectedProject) return;
    setIsSubmittingComment(true);
    try {
      const res = await fetch(`/api/projects/${selectedProject.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          text: commentInput.trim()
        })
      });
      if (res.ok) {
        const newComment = await res.json();
        const updatedComments = [...(selectedProject.comments || []), newComment];
        setSelectedProject(prev => ({ ...prev, comments: updatedComments }));
        setProjects(prev => prev.map(p => p.id === selectedProject.id ? { ...p, comments: updatedComments } : p));
        setCommentInput('');
      }
    } catch (err) {
      console.error('Failed to add comment:', err);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleToggleShare = async (project) => {
    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublic: !project.isPublic })
      });
      if (res.ok) {
        const updated = await res.json();
        setProjects(prev => prev.map(p => p.id === project.id ? updated : p));
        if (selectedProject?.id === project.id) {
          setSelectedProject(updated);
        }
      }
    } catch (err) {
      console.error('Failed to toggle share:', err);
    }
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm('정말 이 프로젝트를 삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`/api/projects/${projectId}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p.id !== projectId));
        if (selectedProject?.id === projectId) setSelectedProject(null);
      }
    } catch (err) {
      console.error('Failed to delete project:', err);
    }
  };

  // Filtered projects
  const filteredProjects = projects.filter(p => {
    if (activeTab === 'my') {
      if (p.userId !== currentUser?.id) return false;
    } else {
      // Community showcase: only show public projects or own
      if (!p.isPublic && p.userId !== currentUser?.id) return false;
    }

    if (selectedStatus !== 'all' && p.status !== selectedStatus) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title?.toLowerCase().includes(q);
      const matchDesc = p.description?.toLowerCase().includes(q);
      const matchTags = p.tags?.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchTags) return false;
    }

    return true;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case '조립완료': return 'badge-green';
      case '샘플발주': return 'badge-blue';
      case '아트웍': return 'badge-orange';
      case '회로설계': return 'badge-purple';
      default: return 'badge-gray';
    }
  };

  return (
    <div className="workspace-container fade-in">
      {/* Top Banner & Action */}
      <div className="workspace-header">
        <div>
          <h2 className="section-title">
            <span className="title-icon">⚡</span> PCB 작업실 & 공유 갤러리
          </h2>
          <p className="section-desc">
            회원 개인의 PCB 설계 작업물을 저장하고, 커뮤니티에 공개하여 피드백 및 회로 리뷰를 나눌 수 있습니다.
          </p>
        </div>
        <button className="btn-primary" onClick={onOpenNewProject}>
          <Plus size={18} />
          <span>새 PCB 작업 등록</span>
        </button>
      </div>

      {/* Navigation Controls */}
      <div className="workspace-controls">
        <div className="tab-pills">
          <button 
            className={`pill-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Globe size={16} />
            <span>모임 공유 갤러리</span>
            <span className="count-pill">{projects.filter(p => p.isPublic).length}</span>
          </button>
          <button 
            className={`pill-btn ${activeTab === 'my' ? 'active' : ''}`}
            onClick={() => setActiveTab('my')}
          >
            <Lock size={16} />
            <span>내 작업 보관함</span>
            <span className="count-pill">
              {projects.filter(p => p.userId === currentUser?.id).length}
            </span>
          </button>
        </div>

        <div className="filter-search-row">
          {/* Status filter */}
          <div className="status-chips">
            {['all', '구상/스케치', '회로설계', '아트웍', '샘플발주', '조립완료'].map(s => (
              <button
                key={s}
                className={`status-chip ${selectedStatus === s ? 'active' : ''}`}
                onClick={() => setSelectedStatus(s)}
              >
                {s === 'all' ? '전체 상태' : s}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="프로젝트, 태그, 부품명 검색..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="empty-state-box">
          <div className="empty-icon">🔌</div>
          <h3>해당 조건의 PCB 작업물이 없습니다</h3>
          <p>새로운 아이디어를 등록하거나 전체 갤러리를 탐색해보세요.</p>
          <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={onOpenNewProject}>
            <Plus size={16} /> 새 작업 등록하기
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => {
            const isOwner = currentUser?.id === project.userId;
            const isLiked = project.likedUsers?.includes(currentUser?.id);

            return (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail Image */}
                <div className="project-thumbnail-wrapper">
                  <img 
                    src={project.images?.[0] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'} 
                    alt={project.title}
                    className="project-thumbnail"
                  />
                  <div className="thumbnail-badges">
                    <span className={`badge ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                    {project.isPublic ? (
                      <span className="badge badge-orange" title="전체 회원에게 공개됨">
                        <Globe size={11} /> 공유중
                      </span>
                    ) : (
                      <span className="badge badge-gray" title="나만 보는 비공개 작업">
                        <Lock size={11} /> 개인보관
                      </span>
                    )}
                  </div>
                  {project.images?.length > 1 && (
                    <span className="image-count-tag">+{project.images.length - 1}장</span>
                  )}
                </div>

                {/* Card Content */}
                <div className="project-card-body">
                  <div className="project-author-row">
                    <img 
                      src={project.userAvatar} 
                      alt={project.userName} 
                      className="author-avatar-sm"
                      onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=user'; }}
                    />
                    <span className="author-name">{project.userName}</span>
                    <span className="post-date">
                      {new Date(project.createdAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags?.map((tag, idx) => (
                      <span key={idx} className="project-tag">#{tag}</span>
                    ))}
                  </div>

                  {/* Footer actions */}
                  <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
                    <div className="interaction-buttons">
                      <button 
                        className={`like-btn ${isLiked ? 'liked' : ''}`}
                        onClick={() => handleLike(project.id)}
                      >
                        <Heart size={16} fill={isLiked ? '#FF6F0F' : 'none'} color={isLiked ? '#FF6F0F' : '#64748B'} />
                        <span>{project.likes || 0}</span>
                      </button>
                      <button className="cmt-count-btn">
                        <MessageSquare size={16} color="#64748B" />
                        <span>{project.comments?.length || 0}</span>
                      </button>
                    </div>

                    {isOwner && (
                      <div className="owner-action-group">
                        <button 
                          className="share-toggle-btn"
                          onClick={() => handleToggleShare(project)}
                          title={project.isPublic ? '비공개로 전환' : '커뮤니티에 공개'}
                        >
                          <Share2 size={15} />
                          <span>{project.isPublic ? '공개중' : '공개하기'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content project-detail-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="detail-header-meta">
                <span className={`badge ${getStatusBadgeClass(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
                {selectedProject.isPublic ? (
                  <span className="badge badge-orange"><Globe size={12} /> 커뮤니티 공유됨</span>
                ) : (
                  <span className="badge badge-gray"><Lock size={12} /> 개인 비공개 작업</span>
                )}
                <span className="detail-date">
                  등록일: {new Date(selectedProject.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
              <div className="detail-header-right">
                {currentUser?.id === selectedProject.userId && (
                  <>
                    <button 
                      className="btn-secondary" 
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                      onClick={() => handleToggleShare(selectedProject)}
                    >
                      <Share2 size={14} />
                      {selectedProject.isPublic ? '비공개 전환' : '전체 공개 공유'}
                    </button>
                    <button 
                      className="btn-secondary" 
                      style={{ padding: '0.4rem 0.6rem', color: '#DC2626' }}
                      onClick={() => handleDelete(selectedProject.id)}
                      title="프로젝트 삭제"
                    >
                      <Trash2 size={14} />
                    </button>
                  </>
                )}
                <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
              </div>
            </div>

            <div className="modal-body detail-modal-body">
              {/* Images Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="detail-images-row">
                  {selectedProject.images.map((img, i) => (
                    <a key={i} href={img} target="_blank" rel="noreferrer" className="detail-img-box">
                      <img src={img} alt={`${selectedProject.title} ${i}`} />
                      <span className="expand-overlay"><Eye size={16} /> 원본 보기</span>
                    </a>
                  ))}
                </div>
              )}

              <div className="detail-author-box">
                <img 
                  src={selectedProject.userAvatar} 
                  alt={selectedProject.userName} 
                  className="author-avatar-md"
                  onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=user'; }}
                />
                <div>
                  <div className="detail-author-name">{selectedProject.userName}</div>
                  <div className="detail-author-role">작성자 / 프로젝트 오너</div>
                </div>
              </div>

              <h2 className="detail-title">{selectedProject.title}</h2>

              <div className="detail-section">
                <h4 className="detail-sec-title">📝 설계 개요 & 기능 설명</h4>
                <p className="detail-desc-text">{selectedProject.description}</p>
              </div>

              {selectedProject.specs && (
                <div className="detail-section">
                  <h4 className="detail-sec-title">🔧 회로 & PCB 상세 스펙 (층수/MCU/BOM)</h4>
                  <pre className="detail-specs-box">{selectedProject.specs}</pre>
                </div>
              )}

              {/* Tags */}
              <div className="detail-tags-box">
                {selectedProject.tags?.map((t, idx) => (
                  <span key={idx} className="project-tag">#{t}</span>
                ))}
              </div>

              {/* Like bar */}
              <div className="detail-like-bar">
                <button 
                  className={`btn-primary ${selectedProject.likedUsers?.includes(currentUser?.id) ? 'active-like' : ''}`}
                  onClick={() => handleLike(selectedProject.id)}
                  style={{ gap: '0.5rem' }}
                >
                  <Heart size={18} fill={selectedProject.likedUsers?.includes(currentUser?.id) ? 'white' : 'none'} />
                  <span>응원 & 좋아요 ({selectedProject.likes || 0})</span>
                </button>
                <span className="like-tip">
                  {selectedProject.likedUsers?.length > 0 
                    ? `${selectedProject.likedUsers.length}명의 메이커가 이 회로를 추천했습니다.` 
                    : '가장 먼저 이 프로젝트를 응원해보세요!'}
                </span>
              </div>

              {/* Comments Section */}
              <div className="detail-comments-section">
                <h4 className="detail-sec-title">
                  💬 기술 토론 및 피드백 ({selectedProject.comments?.length || 0})
                </h4>

                <form onSubmit={handleAddComment} className="comment-form">
                  <input 
                    type="text" 
                    placeholder="회로 설계 질문이나 조언, 피드백을 남겨주세요..." 
                    className="form-input" 
                    value={commentInput}
                    onChange={e => setCommentInput(e.target.value)}
                    disabled={isSubmittingComment}
                  />
                  <button type="submit" className="btn-primary" disabled={isSubmittingComment || !commentInput.trim()}>
                    댓글 작성
                  </button>
                </form>

                <div className="comments-list">
                  {selectedProject.comments?.length === 0 ? (
                    <div className="no-comments">아직 등록된 피드백이 없습니다. 첫 번째 댓글을 남겨보세요!</div>
                  ) : (
                    selectedProject.comments?.map(c => (
                      <div key={c.id} className="comment-item">
                        <img 
                          src={c.userAvatar} 
                          alt={c.userName} 
                          className="comment-avatar"
                          onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=cmt'; }}
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
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .workspace-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0F172A;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .title-icon {
          font-size: 1.4rem;
        }
        .section-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .workspace-controls {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1rem;
          margin-bottom: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-sm);
        }
        .tab-pills {
          display: flex;
          gap: 0.5rem;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 0.75rem;
        }
        .pill-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .pill-btn:hover {
          background: #F1F5F9;
          color: #1E293B;
        }
        .pill-btn.active {
          background: var(--primary);
          color: #FFFFFF;
        }
        .count-pill {
          background: rgba(0, 0, 0, 0.08);
          padding: 0.1rem 0.45rem;
          border-radius: 10px;
          font-size: 0.75rem;
          white-space: nowrap;
        }
        .pill-btn.active .count-pill {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }
        .filter-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .status-chips {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .status-chip {
          padding: 0.35rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 8px;
          background: #F8FAFC;
          color: #475569;
          border: 1px solid var(--border);
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .status-chip:hover {
          border-color: #CBD5E1;
        }
        .status-chip.active {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
        }
        .search-box {
          position: relative;
          min-width: 260px;
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
        .search-input {
          width: 100%;
          padding: 0.5rem 0.8rem 0.5rem 2.2rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.85rem;
          background: #F8FAFC;
        }
        .search-input:focus {
          outline: none;
          background: #FFFFFF;
          border-color: var(--primary);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
        }
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .project-thumbnail-wrapper {
          position: relative;
          height: 190px;
          background: #0F172A;
          overflow: hidden;
        }
        .project-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .project-card:hover .project-thumbnail {
          transform: scale(1.03);
        }
        .thumbnail-badges {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          display: flex;
          gap: 0.4rem;
        }
        .image-count-tag {
          position: absolute;
          bottom: 0.6rem;
          right: 0.6rem;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .project-card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-author-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .author-avatar-sm {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        .author-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .post-date {
          font-size: 0.72rem;
          color: #94A3B8;
          margin-left: auto;
        }
        .project-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-card-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: auto;
          margin-bottom: 1rem;
        }
        .project-tag {
          font-size: 0.72rem;
          color: #0D9488;
          background: #F0FDFA;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-weight: 600;
        }
        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 0.75rem;
        }
        .interaction-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .like-btn, .cmt-count-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: #64748B;
          font-weight: 600;
        }
        .like-btn.liked {
          color: var(--primary);
        }
        .share-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
        }
        .share-toggle-btn:hover {
          background: #FFD8BE;
        }
        .empty-state-box {
          text-align: center;
          padding: 4rem 1rem;
          background: white;
          border-radius: var(--radius-lg);
          border: 1.5px dashed var(--border);
        }
        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        /* Project Detail Modal */
        .project-detail-modal {
          max-width: 820px;
        }
        .detail-header-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .detail-header-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .detail-date {
          font-size: 0.8rem;
          color: #94A3B8;
          margin-left: 0.4rem;
        }
        .detail-images-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0.75rem;
        }
        .detail-img-box {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          min-height: 240px;
          max-height: 380px;
          background: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .detail-img-box img {
          max-width: 100%;
          max-height: 380px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .expand-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .detail-img-box:hover .expand-overlay {
          opacity: 1;
        }
        .detail-author-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #F8FAFC;
          padding: 0.75rem 1rem;
          border-radius: 10px;
        }
        .author-avatar-md {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .detail-author-name {
          font-weight: 700;
          color: #0F172A;
        }
        .detail-author-role {
          font-size: 0.75rem;
          color: #64748B;
        }
        .detail-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0F172A;
        }
        .detail-sec-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 0.4rem;
        }
        .detail-desc-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .detail-specs-box {
          background: #0F172A;
          color: #A7F3D0;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 1rem;
          border-radius: 8px;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        .detail-like-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #FFF7F0;
          border: 1px solid #FFEDD5;
          border-radius: 10px;
        }
        .like-tip {
          font-size: 0.82rem;
          color: #C2410C;
          font-weight: 500;
        }
        .detail-comments-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .comment-form {
          display: flex;
          gap: 0.5rem;
        }
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .comment-item {
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #F8FAFC;
          border-radius: 8px;
        }
        .comment-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .comment-content {
          flex: 1;
        }
        .comment-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }
        .comment-author {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1E293B;
        }
        .comment-time {
          font-size: 0.72rem;
          color: #94A3B8;
        }
        .comment-text {
          font-size: 0.85rem;
          color: #334155;
        }
        .no-comments {
          font-size: 0.85rem;
          color: #94A3B8;
          text-align: center;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
