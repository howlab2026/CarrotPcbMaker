import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { 
  Hash, 
  Send, 
  User, 
  Image as ImageIcon, 
  Upload, 
  Sparkles, 
  Smile, 
  Check, 
  Users, 
  MessageCircle,
  Paperclip
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ChatView({ initialDmUserId }) {
  const { currentUser, users } = useAuth();
  const [chatType, setChatType] = useState('channel'); // 'channel' | 'dm'
  const [channels, setChannels] = useState([]);
  const [activeChannelId, setActiveChannelId] = useState('ch_general');
  const [selectedDmUser, setSelectedDmUser] = useState(null);
  const [dmThread, setDmThread] = useState(null);

  useEffect(() => {
    if (initialDmUserId && users?.length) {
      const target = users.find(u => u.id === initialDmUserId);
      if (target) {
        setChatType('dm');
        setSelectedDmUser(target);
      }
    }
  }, [initialDmUserId, users]);
  
  const [inputText, setInputText] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  
  const socketRef = useRef(null);
  const messagesScrollRef = useRef(null);

  // Initialize socket
  useEffect(() => {
    const isStatic = window.location.hostname.includes('github.io');
    if (!isStatic) {
      try {
        socketRef.current = io({ reconnectionAttempts: 3, timeout: 3000 });
      } catch (e) {
        console.warn('Socket connection error, running in local fallback mode:', e);
      }
    }

    if (socketRef.current) {
      socketRef.current.on('new_channel_message', ({ channelId, message }) => {
        setChannels(prev => prev.map(ch => {
          if (ch.id === channelId) {
            // Avoid duplicate
            if (ch.messages.some(m => m.id === message.id)) return ch;
            return { ...ch, messages: [...ch.messages, message] };
          }
          return ch;
        }));
      });

      socketRef.current.on('new_dm_message', ({ threadId, message }) => {
        setDmThread(prev => {
          if (prev && prev.id === threadId) {
            if (prev.messages.some(m => m.id === message.id)) return prev;
            return { ...prev, messages: [...prev.messages, message] };
          }
          return prev;
        });
      });
    }

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  // Fetch channels
  const fetchChannels = async () => {
    try {
      const res = await fetch('/api/channels');
      if (res.ok) {
        const data = await res.json();
        setChannels(data);
      }
    } catch (err) {
      console.error('Failed to load channels:', err);
    }
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  // When switching channels, join socket room
  useEffect(() => {
    if (chatType === 'channel' && activeChannelId && socketRef.current) {
      socketRef.current.emit('join_channel', activeChannelId);
    }
  }, [chatType, activeChannelId]);

  // Fetch DM thread when selectedDmUser changes
  useEffect(() => {
    const fetchDm = async () => {
      if (chatType === 'dm' && selectedDmUser && currentUser) {
        try {
          const res = await fetch(`/api/dm/${currentUser.id}/${selectedDmUser.id}`);
          if (res.ok) {
            const data = await res.json();
            setDmThread(data);
            if (socketRef.current) {
              socketRef.current.emit('join_dm', data.id);
            }
          }
        } catch (err) {
          console.error('Failed to load DM:', err);
        }
      }
    };
    fetchDm();
  }, [chatType, selectedDmUser, currentUser]);

  // Scroll to bottom of message box ONLY (without scrolling window or affecting header)
  useEffect(() => {
    if (messagesScrollRef.current) {
      messagesScrollRef.current.scrollTop = messagesScrollRef.current.scrollHeight;
    }
  }, [channels, dmThread, activeChannelId, selectedDmUser]);

  // Keep window scrolled to top when entering ChatView
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const activeChannel = channels.find(c => c.id === activeChannelId);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if ((!inputText.trim() && !imagePreview) || !currentUser) return;

    const messagePayload = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      text: inputText.trim(),
      image: imagePreview || undefined,
      createdAt: new Date().toISOString()
    };

    if (chatType === 'channel') {
      socketRef.current?.emit('send_channel_message', {
        channelId: activeChannelId,
        message: messagePayload
      });
      // Optimistic update
      setChannels(prev => prev.map(ch => {
        if (ch.id === activeChannelId) {
          return { ...ch, messages: [...ch.messages, messagePayload] };
        }
        return ch;
      }));
    } else if (chatType === 'dm' && selectedDmUser && dmThread) {
      socketRef.current?.emit('send_dm_message', {
        user1Id: currentUser.id,
        user2Id: selectedDmUser.id,
        threadId: dmThread.id,
        message: messagePayload
      });
      setDmThread(prev => ({
        ...prev,
        messages: [...(prev?.messages || []), messagePayload]
      }));
    }

    setInputText('');
    setImagePreview('');
  };

  const handleChatImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        setImagePreview(data.url);
      } else {
        setImagePreview(URL.createObjectURL(file));
      }
    } catch (err) {
      setImagePreview(URL.createObjectURL(file));
    } finally {
      setIsUploadingImage(false);
    }
  };

  const otherUsers = users.filter(u => u.id !== currentUser?.id);

  return (
    <div className="chat-container fade-in">
      <div className="chat-layout">
        {/* Left Sidebar: Channels & 1:1 DMs */}
        <div className="chat-sidebar">
          {/* Tabs */}
          <div className="chat-nav-tabs">
            <button 
              className={`chat-tab-btn ${chatType === 'channel' ? 'active' : ''}`}
              onClick={() => setChatType('channel')}
            >
              <Users size={16} />
              <span>멀티 채널</span>
            </button>
            <button 
              className={`chat-tab-btn ${chatType === 'dm' ? 'active' : ''}`}
              onClick={() => {
                setChatType('dm');
                if (!selectedDmUser && otherUsers.length > 0) {
                  setSelectedDmUser(otherUsers[0]);
                }
              }}
            >
              <MessageCircle size={16} />
              <span>1:1 개인 DM</span>
            </button>
          </div>

          {/* Channels List */}
          {chatType === 'channel' ? (
            <div className="sidebar-list">
              <div className="sidebar-header-label">모임 단체 채팅 채널</div>
              {channels.map(channel => (
                <div 
                  key={channel.id}
                  className={`channel-item ${activeChannelId === channel.id ? 'active' : ''}`}
                  onClick={() => setActiveChannelId(channel.id)}
                >
                  <Hash size={16} className="channel-hash-icon" />
                  <div className="channel-item-info">
                    <span className="channel-item-name">{channel.name}</span>
                    <span className="channel-item-preview">{channel.description}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 1:1 Direct Messages List */
            <div className="sidebar-list">
              <div className="sidebar-header-label">회원 다이렉트 메시지</div>
              {otherUsers.map(user => {
                const isSelected = selectedDmUser?.id === user.id;
                return (
                  <div 
                    key={user.id}
                    className={`dm-user-item ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedDmUser(user)}
                  >
                    <div className="dm-avatar-wrapper">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="dm-avatar"
                        onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=dm'; }}
                      />
                      <span className="online-dot" />
                    </div>
                    <div className="dm-user-info">
                      <div className="dm-user-top">
                        <span className="dm-user-name">{user.name}</span>
                        {user.role === 'admin' && <span className="mini-admin-badge">운영진</span>}
                      </div>
                      <span className="dm-user-bio">{user.bio}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Main Chat Panel */}
        <div className="chat-main-panel">
          {/* Chat Header */}
          <div className="chat-top-header">
            {chatType === 'channel' ? (
              <div className="chat-target-info">
                <Hash size={20} className="active-hash-icon" />
                <div>
                  <h3 className="active-title">{activeChannel?.name || '자유수다방'}</h3>
                  <span className="active-desc">{activeChannel?.description}</span>
                </div>
              </div>
            ) : (
              <div className="chat-target-info">
                <img 
                  src={selectedDmUser?.avatar} 
                  alt={selectedDmUser?.name} 
                  className="dm-header-avatar"
                  onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=header'; }}
                />
                <div>
                  <h3 className="active-title">{selectedDmUser?.name || '회원 선택'}</h3>
                  <span className="active-desc">@{selectedDmUser?.username} • 1:1 다이렉트 메시지</span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-messages-scroll" ref={messagesScrollRef}>
            {chatType === 'channel' ? (
              activeChannel?.messages?.map(msg => {
                const isMe = msg.senderId === currentUser?.id;
                return (
                  <div key={msg.id} className={`chat-message-row ${isMe ? 'me' : 'other'}`}>
                    {!isMe && (
                      <img 
                        src={msg.senderAvatar} 
                        alt={msg.senderName} 
                        className="msg-avatar"
                        onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=msg'; }}
                      />
                    )}
                    <div className="msg-bubble-container">
                      {!isMe && <span className="msg-sender-name">{msg.senderName}</span>}
                      <div className={`msg-bubble ${isMe ? 'bubble-me' : 'bubble-other'}`}>
                        {msg.image && (
                          <div className="msg-image-box">
                            <img src={msg.image} alt="Sent" />
                          </div>
                        )}
                        {msg.text && <p className="msg-text">{msg.text}</p>}
                      </div>
                      <span className="msg-time">
                        {new Date(msg.createdAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              dmThread?.messages?.map(msg => {
                const isMe = msg.senderId === currentUser?.id;
                return (
                  <div key={msg.id} className={`chat-message-row ${isMe ? 'me' : 'other'}`}>
                    <div className="msg-bubble-container">
                      <div className={`msg-bubble ${isMe ? 'bubble-me' : 'bubble-other'}`}>
                        {msg.image && (
                          <div className="msg-image-box">
                            <img src={msg.image} alt="Sent" />
                          </div>
                        )}
                        {msg.text && <p className="msg-text">{msg.text}</p>}
                      </div>
                      <span className="msg-time">
                        {new Date(msg.createdAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Image Upload Preview */}
          {imagePreview && (
            <div className="chat-upload-preview">
              <img src={imagePreview} alt="Preview" />
              <button 
                type="button" 
                className="remove-preview-btn"
                onClick={() => setImagePreview('')}
              >
                ✕
              </button>
            </div>
          )}

          {/* Message Input Box */}
          <form onSubmit={handleSendMessage} className="chat-input-bar">
            <label className="chat-attach-btn" title="사진 / 회로도 이미지 전송">
              <Paperclip size={18} />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleChatImageUpload} 
                style={{ display: 'none' }}
                disabled={isUploadingImage}
              />
            </label>

            <input 
              type="text" 
              className="chat-text-input" 
              placeholder={
                chatType === 'channel' 
                  ? `${activeChannel?.name || '채널'}에 실시간 메시지 입력...` 
                  : `${selectedDmUser?.name || '회원'}님에게 1:1 메시지 보내기...`
              }
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />

            <button 
              type="submit" 
              className="chat-send-btn"
              disabled={!inputText.trim() && !imagePreview}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .chat-container {
          width: 100%;
        }
        .chat-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          height: calc(100vh - 220px);
          min-height: 520px;
          max-height: 800px;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 800px) {
          .chat-layout {
            grid-template-columns: 1fr;
          }
          .chat-sidebar {
            display: none;
          }
        }
        .chat-sidebar {
          background: #F8FAFC;
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .chat-nav-tabs {
          display: flex;
          padding: 0.75rem;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border);
          background: white;
        }
        .chat-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.6rem 0.5rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #64748B;
          background: #F1F5F9;
        }
        .chat-tab-btn.active {
          background: var(--primary);
          color: white;
        }
        .sidebar-list {
          flex: 1;
          overflow-y: auto;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .sidebar-header-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.4rem 0.5rem;
        }
        .channel-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .channel-item:hover {
          background: #EEF2F6;
        }
        .channel-item.active {
          background: white;
          box-shadow: var(--shadow-sm);
          border: 1px solid #E2E8F0;
        }
        .channel-hash-icon {
          color: #94A3B8;
        }
        .channel-item.active .channel-hash-icon {
          color: var(--primary);
        }
        .channel-item-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .channel-item-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1E293B;
        }
        .channel-item-preview {
          font-size: 0.72rem;
          color: #64748B;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* DM Item */
        .dm-user-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .dm-user-item:hover {
          background: #EEF2F6;
        }
        .dm-user-item.active {
          background: white;
          box-shadow: var(--shadow-sm);
          border: 1px solid #E2E8F0;
        }
        .dm-avatar-wrapper {
          position: relative;
        }
        .dm-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }
        .online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 9px;
          height: 9px;
          background: #10B981;
          border-radius: 50%;
          border: 1.5px solid white;
        }
        .dm-user-info {
          flex: 1;
          overflow: hidden;
        }
        .dm-user-top {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .dm-user-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1E293B;
        }
        .mini-admin-badge {
          font-size: 0.65rem;
          background: #FFF2E8;
          color: #EA580C;
          font-weight: 800;
          padding: 0.05rem 0.3rem;
          border-radius: 4px;
        }
        .dm-user-bio {
          font-size: 0.72rem;
          color: #94A3B8;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
        }
        /* Chat Main Panel */
        .chat-main-panel {
          display: flex;
          flex-direction: column;
          background: #FAFBFD;
        }
        .chat-top-header {
          padding: 0.9rem 1.25rem;
          background: white;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .chat-target-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .active-hash-icon {
          color: var(--primary);
        }
        .dm-header-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #FFD8BE;
        }
        .active-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
        }
        .active-desc {
          font-size: 0.75rem;
          color: #64748B;
        }
        .chat-messages-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chat-message-row {
          display: flex;
          gap: 0.6rem;
          max-width: 75%;
        }
        .chat-message-row.me {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .chat-message-row.other {
          align-self: flex-start;
        }
        .msg-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          align-self: flex-start;
          object-fit: cover;
        }
        .msg-bubble-container {
          display: flex;
          flex-direction: column;
        }
        .chat-message-row.me .msg-bubble-container {
          align-items: flex-end;
        }
        .msg-sender-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748B;
          margin-bottom: 0.2rem;
          margin-left: 0.2rem;
        }
        .msg-bubble {
          padding: 0.75rem 1rem;
          border-radius: 14px;
          font-size: 0.9rem;
          line-height: 1.5;
          word-break: break-word;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .bubble-other {
          background: white;
          color: #1E293B;
          border: 1px solid var(--border);
          border-top-left-radius: 3px;
        }
        .bubble-me {
          background: var(--primary);
          color: white;
          border-top-right-radius: 3px;
        }
        .msg-image-box {
          max-width: 280px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 0.4rem;
        }
        .msg-image-box img {
          width: 100%;
          display: block;
        }
        .msg-time {
          font-size: 0.68rem;
          color: #94A3B8;
          margin-top: 0.2rem;
          padding: 0 0.25rem;
        }
        .chat-upload-preview {
          position: relative;
          width: 100px;
          height: 80px;
          margin: 0.5rem 1.25rem 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .chat-upload-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .remove-preview-btn {
          position: absolute;
          top: 2px;
          right: 2px;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
        }
        .chat-input-bar {
          padding: 0.85rem 1.25rem;
          background: white;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .chat-attach-btn {
          color: #64748B;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 6px;
        }
        .chat-attach-btn:hover {
          color: var(--primary);
          background: #F8FAFC;
        }
        .chat-text-input {
          flex: 1;
          padding: 0.7rem 1rem;
          border: 1px solid var(--border);
          border-radius: 20px;
          font-size: 0.9rem;
          background: #F8FAFC;
        }
        .chat-text-input:focus {
          outline: none;
          background: white;
          border-color: var(--primary);
        }
        .chat-send-btn {
          background: var(--primary);
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-orange);
        }
        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
