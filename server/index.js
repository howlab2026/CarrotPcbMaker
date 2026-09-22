import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { db } from './data/store.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Setup uploads directory
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
app.use('/uploads', express.static(UPLOADS_DIR));

// Configure multer for image/file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9가-힣_-]/g, '');
    cb(null, `${Date.now()}_${baseName}${ext}`);
  }
});
const upload = multer({ 
  storage,
  limits: { fileSize: 25 * 1024 * 1024 } // 25MB
});

// File upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '파일이 업로드되지 않았습니다.' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl, filename: req.file.filename, originalName: req.file.originalname });
});

// Multiple files upload endpoint
app.post('/api/upload/multiple', upload.array('files', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: '업로드할 파일이 없습니다.' });
  }
  const urls = req.files.map(f => `/uploads/${f.filename}`);
  res.json({ urls });
});

/* =========================================================================
   USER & AUTH APIs
   ========================================================================= */
app.get('/api/users', (req, res) => {
  const users = db.getUsers().map(({ password, ...rest }) => rest);
  res.json(users);
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.getUserByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' });
  }
  if (user.role === 'suspended') {
    return res.status(403).json({ error: '이용이 정지된 회원 계정입니다. 관리자에게 문의하세요.' });
  }
  const { password: _, ...userInfo } = user;
  res.json(userInfo);
});

app.post('/api/auth/register', (req, res) => {
  const { username, password, name, bio, tags, avatar } = req.body;
  if (!username || !password || !name) {
    return res.status(400).json({ error: '필수 정보를 모두 입력해주세요.' });
  }
  if (db.getUserByUsername(username)) {
    return res.status(409).json({ error: '이미 사용 중인 아이디입니다.' });
  }
  const newUser = {
    id: `usr_${Date.now()}`,
    username,
    password,
    name,
    avatar: avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(username)}`,
    role: 'member',
    bio: bio || '당근 PCB 모임 새싹 회원입니다 🌱',
    tags: tags && tags.length ? tags : ['새싹회원', 'PCB입문'],
    createdAt: new Date().toISOString()
  };
  db.addUser(newUser);
  const { password: _, ...userInfo } = newUser;
  res.status(201).json(userInfo);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  delete updates.password; // Do not accidentally overwrite via user update
  const updated = db.updateUser(id, updates);
  if (!updated) return res.status(404).json({ error: '회원을 찾을 수 없습니다.' });
  const { password: _, ...userInfo } = updated;
  res.json(userInfo);
});

/* =========================================================================
   PROJECTS (내 작업 저장공간 & 공유) APIs
   ========================================================================= */
app.get('/api/projects', (req, res) => {
  const { userId, publicOnly } = req.query;
  let projects = db.getProjects();
  if (publicOnly === 'true') {
    projects = projects.filter(p => p.isPublic);
  } else if (userId) {
    // Return user's own projects + public projects
    projects = projects.filter(p => p.userId === userId || p.isPublic);
  }
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = db.getProjectById(req.params.id);
  if (!project) return res.status(404).json({ error: '프로젝트를 찾을 수 없습니다.' });
  res.json(project);
});

app.post('/api/projects', (req, res) => {
  const { userId, userName, userAvatar, title, description, specs, status, isPublic, tags, images } = req.body;
  if (!title || !userId) {
    return res.status(400).json({ error: '프로젝트 제목과 작성자 정보가 필요합니다.' });
  }
  const newProject = {
    id: `prj_${Date.now()}`,
    userId,
    userName: userName || '익명 메이커',
    userAvatar: userAvatar || '',
    title,
    description: description || '',
    specs: specs || '',
    status: status || '구상/스케치',
    isPublic: Boolean(isPublic),
    tags: tags || [],
    images: images || [],
    likes: 0,
    likedUsers: [],
    comments: [],
    createdAt: new Date().toISOString()
  };
  db.addProject(newProject);
  io.emit('project_created', newProject);
  res.status(201).json(newProject);
});

app.put('/api/projects/:id', (req, res) => {
  const updated = db.updateProject(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: '프로젝트를 찾을 수 없습니다.' });
  io.emit('project_updated', updated);
  res.json(updated);
});

app.delete('/api/projects/:id', (req, res) => {
  const deleted = db.deleteProject(req.params.id);
  if (!deleted) return res.status(404).json({ error: '프로젝트를 찾을 수 없습니다.' });
  io.emit('project_deleted', { id: req.params.id });
  res.json({ message: '삭제되었습니다.', id: req.params.id });
});

app.post('/api/projects/:id/like', (req, res) => {
  const { userId } = req.body;
  const project = db.getProjectById(req.params.id);
  if (!project) return res.status(404).json({ error: '프로젝트를 찾을 수 없습니다.' });
  
  const likedIndex = project.likedUsers.indexOf(userId);
  if (likedIndex === -1) {
    project.likedUsers.push(userId);
    project.likes += 1;
  } else {
    project.likedUsers.splice(likedIndex, 1);
    project.likes = Math.max(0, project.likes - 1);
  }
  db.save();
  io.emit('project_updated', project);
  res.json({ likes: project.likes, likedUsers: project.likedUsers });
});

app.post('/api/projects/:id/comments', (req, res) => {
  const { userId, userName, userAvatar, text } = req.body;
  const project = db.getProjectById(req.params.id);
  if (!project) return res.status(404).json({ error: '프로젝트를 찾을 수 없습니다.' });
  
  const comment = {
    id: `cmt_${Date.now()}`,
    userId,
    userName,
    userAvatar,
    text,
    createdAt: new Date().toISOString()
  };
  project.comments.push(comment);
  db.save();
  io.emit('project_updated', project);
  res.status(201).json(comment);
});

/* =========================================================================
   BOARDS (공지, 정보, 일반, 비밀, 건의사항) APIs
   ========================================================================= */
app.get('/api/posts', (req, res) => {
  const { boardType, search } = req.query;
  let posts = db.getPosts(boardType);
  if (search) {
    const q = search.toLowerCase();
    posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q));
  }
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = db.getPostById(req.params.id);
  if (!post) return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  post.views = (post.views || 0) + 1;
  db.save();
  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const { boardType, authorId, authorName, authorAvatar, title, content, images, isPinned } = req.body;
  if (!boardType || !title || !content) {
    return res.status(400).json({ error: '게시판 분류, 제목, 내용을 모두 입력해주세요.' });
  }
  const newPost = {
    id: `post_${Date.now()}`,
    boardType,
    authorId,
    authorName: boardType === 'secret' ? '익명의 납땜러' : authorName,
    authorAvatar: boardType === 'secret' ? 'https://api.dicebear.com/7.x/identicon/svg?seed=secret' : authorAvatar,
    title,
    content,
    images: images || [],
    isPinned: Boolean(isPinned),
    status: boardType === 'suggestion' ? '접수' : undefined,
    adminResponse: boardType === 'suggestion' ? '' : undefined,
    views: 0,
    likes: 0,
    likedUsers: [],
    comments: [],
    createdAt: new Date().toISOString()
  };
  db.addPost(newPost);
  io.emit('post_created', newPost);
  res.status(201).json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
  const updated = db.updatePost(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  io.emit('post_updated', updated);
  res.json(updated);
});

app.delete('/api/posts/:id', (req, res) => {
  const deleted = db.deletePost(req.params.id);
  if (!deleted) return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  io.emit('post_deleted', { id: req.params.id });
  res.json({ message: '게시글이 삭제되었습니다.', id: req.params.id });
});

app.post('/api/posts/:id/like', (req, res) => {
  const { userId } = req.body;
  const post = db.getPostById(req.params.id);
  if (!post) return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  
  const likedIndex = post.likedUsers.indexOf(userId);
  if (likedIndex === -1) {
    post.likedUsers.push(userId);
    post.likes = (post.likes || 0) + 1;
  } else {
    post.likedUsers.splice(likedIndex, 1);
    post.likes = Math.max(0, (post.likes || 0) - 1);
  }
  db.save();
  io.emit('post_updated', post);
  res.json({ likes: post.likes, likedUsers: post.likedUsers });
});

app.post('/api/posts/:id/comments', (req, res) => {
  const { userId, userName, userAvatar, text, isAnonymous } = req.body;
  const post = db.getPostById(req.params.id);
  if (!post) return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  
  const comment = {
    id: `cmt_${Date.now()}`,
    userId,
    userName: (isAnonymous || post.boardType === 'secret') ? '익명의 메이커' : userName,
    userAvatar: (isAnonymous || post.boardType === 'secret') ? 'https://api.dicebear.com/7.x/identicon/svg?seed=cmt' : userAvatar,
    text,
    createdAt: new Date().toISOString()
  };
  post.comments.push(comment);
  db.save();
  io.emit('post_updated', post);
  res.status(201).json(comment);
});

/* =========================================================================
   EVENTS & CALENDAR APIs
   ========================================================================= */
app.get('/api/events', (req, res) => {
  res.json(db.getEvents());
});

app.post('/api/events', (req, res) => {
  const { title, type, date, time, location, description, maxAttendees } = req.body;
  const newEvent = {
    id: `evt_${Date.now()}`,
    title,
    type: type || '정기밋업',
    date,
    time,
    location,
    description,
    maxAttendees: Number(maxAttendees) || 20,
    attendees: [],
    status: '모집중'
  };
  db.addEvent(newEvent);
  io.emit('event_created', newEvent);
  res.status(201).json(newEvent);
});

app.post('/api/events/:id/rsvp', (req, res) => {
  const { userId } = req.body;
  const event = db.getEvents().find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ error: '일정을 찾을 수 없습니다.' });
  
  const idx = event.attendees.indexOf(userId);
  if (idx === -1) {
    if (event.attendees.length >= event.maxAttendees) {
      return res.status(400).json({ error: '모집 정원이 마감되었습니다.' });
    }
    event.attendees.push(userId);
  } else {
    event.attendees.splice(idx, 1);
  }
  db.save();
  io.emit('event_updated', event);
  res.json(event);
});

/* =========================================================================
   CHATS (Channel & Direct Message) APIs
   ========================================================================= */
app.get('/api/channels', (req, res) => {
  res.json(db.getChannels());
});

app.get('/api/dm/:user1Id/:user2Id', (req, res) => {
  const { user1Id, user2Id } = req.params;
  const thread = db.getDirectMessages(user1Id, user2Id);
  res.json(thread);
});

/* =========================================================================
   STATS (대시보드 통계) API
   ========================================================================= */
app.get('/api/stats', (req, res) => {
  const users = db.getUsers();
  const projects = db.getProjects();
  const posts = db.getPosts();
  const events = db.getEvents();
  
  res.json({
    totalMembers: users.length,
    totalProjects: projects.length,
    publicProjects: projects.filter(p => p.isPublic).length,
    totalPosts: posts.length,
    upcomingEvents: events.length
  });
});

/* =========================================================================
   SOCKET.IO REAL-TIME CHAT
   ========================================================================= */
io.on('connection', (socket) => {
  socket.on('join_channel', (channelId) => {
    socket.join(channelId);
  });

  socket.on('leave_channel', (channelId) => {
    socket.leave(channelId);
  });

  socket.on('send_channel_message', ({ channelId, message }) => {
    const saved = db.addChannelMessage(channelId, message);
    if (saved) {
      io.to(channelId).emit('new_channel_message', { channelId, message: saved });
    }
  });

  socket.on('join_dm', (threadId) => {
    socket.join(threadId);
  });

  socket.on('send_dm_message', ({ user1Id, user2Id, threadId, message }) => {
    const saved = db.addDirectMessage(user1Id, user2Id, message);
    if (saved) {
      io.to(threadId).emit('new_dm_message', { threadId, message: saved });
      io.emit('dm_notification', { recipientId: user2Id, senderId: user1Id, message: saved });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Carrot PCB Club Server running on http://localhost:${PORT}`);
});
