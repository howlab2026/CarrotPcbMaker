import { INITIAL_MOCK_DATA } from './mockData.js';

const STORAGE_KEY = 'carrot_pcb_store_v1';

// Load or initialize store in localStorage
export function getLocalStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Failed to parse localStorage store:', e);
  }
  // Initialize with seed data
  const seed = JSON.parse(JSON.stringify(INITIAL_MOCK_DATA));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
  } catch (e) {
    console.warn('LocalStorage not available:', e);
  }
  return seed;
}

export function saveLocalStore(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

// Convert File / Blob to Data URL
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Check if running on static host (GitHub Pages, file protocol, or standalone)
export const isStaticHost = 
  typeof window !== 'undefined' && 
  (window.location.hostname.includes('github.io') || 
   window.location.protocol === 'file:' || 
   window.__USE_MOCK_API__ === true);

export function initMockApi() {
  if (typeof window === 'undefined') return;

  const originalFetch = window.fetch;

  window.fetch = async function (input, init = {}) {
    const url = typeof input === 'string' ? input : input?.url || '';

    // Only intercept /api/ calls
    if (!url.includes('/api/')) {
      return originalFetch(input, init);
    }

    // If on localhost with backend, we can try backend first, but if it fails or if isStaticHost, handle with mock
    if (!isStaticHost) {
      try {
        const response = await originalFetch(input, init);
        if (response.status !== 404 && response.status !== 502 && response.status !== 503) {
          return response;
        }
      } catch (err) {
        console.warn('Backend unavailable, falling back to client mock store:', err.message);
      }
    }

    // Parse path and query
    const parsedUrl = new URL(url, window.location.origin);
    const pathname = parsedUrl.pathname;
    const query = Object.fromEntries(parsedUrl.searchParams.entries());
    const method = (init.method || 'GET').toUpperCase();
    
    let body = null;
    if (init.body) {
      if (typeof init.body === 'string') {
        try {
          body = JSON.parse(init.body);
        } catch {
          body = init.body;
        }
      } else {
        body = init.body;
      }
    }

    const store = getLocalStore();

    const jsonResponse = (data, status = 200) => {
      return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' }
      });
    };

    // 1. Upload
    if (pathname === '/api/upload' && method === 'POST') {
      try {
        let file = null;
        if (body instanceof FormData) {
          file = body.get('file');
        }
        if (file && typeof file !== 'string') {
          const dataUrl = await readFileAsDataURL(file);
          return jsonResponse({ url: dataUrl, filename: file.name, originalName: file.name });
        }
        return jsonResponse({ url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' });
      } catch (err) {
        return jsonResponse({ error: err.message }, 500);
      }
    }

    // 2. Users & Auth
    if (pathname === '/api/users' && method === 'GET') {
      const safeUsers = store.users.map(({ password, ...u }) => u);
      return jsonResponse(safeUsers);
    }

    if (pathname === '/api/auth/login' && method === 'POST') {
      const { username, password } = body || {};
      const user = store.users.find(u => u.username === username);
      if (!user || user.password !== password) {
        return jsonResponse({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' }, 401);
      }
      if (user.role === 'suspended') {
        return jsonResponse({ error: '이용이 정지된 회원 계정입니다.' }, 403);
      }
      const { password: _, ...userInfo } = user;
      return jsonResponse(userInfo);
    }

    if (pathname === '/api/auth/register' && method === 'POST') {
      const { username, password, name, bio, tags, avatar } = body || {};
      if (store.users.some(u => u.username === username)) {
        return jsonResponse({ error: '이미 사용 중인 아이디입니다.' }, 409);
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
      store.users.push(newUser);
      saveLocalStore(store);
      const { password: _, ...userInfo } = newUser;
      return jsonResponse(userInfo, 201);
    }

    // Update user: /api/users/:id
    const userMatch = pathname.match(/^\/api\/users\/([^/]+)$/);
    if (userMatch && method === 'PUT') {
      const userId = userMatch[1];
      const idx = store.users.findIndex(u => u.id === userId);
      if (idx !== -1) {
        store.users[idx] = { ...store.users[idx], ...body };
        delete store.users[idx].password;
        saveLocalStore(store);
        return jsonResponse(store.users[idx]);
      }
      return jsonResponse({ error: '회원을 찾을 수 없습니다.' }, 404);
    }

    // 3. Stats
    if (pathname === '/api/stats' && method === 'GET') {
      return jsonResponse({
        totalMembers: store.users.length,
        totalProjects: store.projects.length,
        publicProjects: store.projects.filter(p => p.isPublic).length,
        totalPosts: store.posts.length,
        upcomingEvents: store.events.length
      });
    }

    // 4. Projects
    if (pathname === '/api/projects' && method === 'GET') {
      let list = store.projects;
      if (query.publicOnly === 'true') {
        list = list.filter(p => p.isPublic);
      } else if (query.userId) {
        list = list.filter(p => p.userId === query.userId || p.isPublic);
      }
      return jsonResponse(list);
    }

    if (pathname === '/api/projects' && method === 'POST') {
      const newProject = {
        id: `prj_${Date.now()}`,
        ...body,
        likes: 0,
        likedUsers: [],
        comments: [],
        createdAt: new Date().toISOString()
      };
      store.projects.unshift(newProject);
      saveLocalStore(store);
      return jsonResponse(newProject, 201);
    }

    // Project Detail: /api/projects/:id
    const prjDetailMatch = pathname.match(/^\/api\/projects\/([^/]+)$/);
    if (prjDetailMatch) {
      const prjId = prjDetailMatch[1];
      const idx = store.projects.findIndex(p => p.id === prjId);
      if (idx === -1) return jsonResponse({ error: 'Not found' }, 404);

      if (method === 'GET') {
        return jsonResponse(store.projects[idx]);
      }
      if (method === 'PUT') {
        store.projects[idx] = { ...store.projects[idx], ...body };
        saveLocalStore(store);
        return jsonResponse(store.projects[idx]);
      }
      if (method === 'DELETE') {
        store.projects.splice(idx, 1);
        saveLocalStore(store);
        return jsonResponse({ message: 'Deleted', id: prjId });
      }
    }

    // Project Like: /api/projects/:id/like
    const prjLikeMatch = pathname.match(/^\/api\/projects\/([^/]+)\/like$/);
    if (prjLikeMatch && method === 'POST') {
      const prjId = prjLikeMatch[1];
      const prj = store.projects.find(p => p.id === prjId);
      if (!prj) return jsonResponse({ error: 'Not found' }, 404);
      const userId = body?.userId;
      const likedIdx = prj.likedUsers.indexOf(userId);
      if (likedIdx === -1) {
        prj.likedUsers.push(userId);
        prj.likes += 1;
      } else {
        prj.likedUsers.splice(likedIdx, 1);
        prj.likes = Math.max(0, prj.likes - 1);
      }
      saveLocalStore(store);
      return jsonResponse({ likes: prj.likes, likedUsers: prj.likedUsers });
    }

    // Project Comment: /api/projects/:id/comments
    const prjCommentMatch = pathname.match(/^\/api\/projects\/([^/]+)\/comments$/);
    if (prjCommentMatch && method === 'POST') {
      const prjId = prjCommentMatch[1];
      const prj = store.projects.find(p => p.id === prjId);
      if (!prj) return jsonResponse({ error: 'Not found' }, 404);
      const comment = {
        id: `cmt_${Date.now()}`,
        userId: body.userId,
        userName: body.userName,
        userAvatar: body.userAvatar,
        text: body.text,
        createdAt: new Date().toISOString()
      };
      prj.comments.push(comment);
      saveLocalStore(store);
      return jsonResponse(comment, 201);
    }

    // 5. Posts & Boards
    if (pathname === '/api/posts' && method === 'GET') {
      let list = store.posts;
      if (query.boardType) {
        list = list.filter(p => p.boardType === query.boardType);
      }
      if (query.search) {
        const q = query.search.toLowerCase();
        list = list.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q));
      }
      return jsonResponse(list);
    }

    if (pathname === '/api/posts' && method === 'POST') {
      const newPost = {
        id: `post_${Date.now()}`,
        ...body,
        views: 0,
        likes: 0,
        likedUsers: [],
        comments: [],
        createdAt: new Date().toISOString()
      };
      if (newPost.boardType === 'secret') {
        newPost.authorName = '익명의 납땜러';
        newPost.authorAvatar = 'https://api.dicebear.com/7.x/identicon/svg?seed=secret';
      }
      store.posts.unshift(newPost);
      saveLocalStore(store);
      return jsonResponse(newPost, 201);
    }

    // Post Detail: /api/posts/:id
    const postDetailMatch = pathname.match(/^\/api\/posts\/([^/]+)$/);
    if (postDetailMatch) {
      const postId = postDetailMatch[1];
      const idx = store.posts.findIndex(p => p.id === postId);
      if (idx === -1) return jsonResponse({ error: 'Not found' }, 404);

      if (method === 'GET') {
        store.posts[idx].views = (store.posts[idx].views || 0) + 1;
        saveLocalStore(store);
        return jsonResponse(store.posts[idx]);
      }
      if (method === 'PUT') {
        store.posts[idx] = { ...store.posts[idx], ...body };
        saveLocalStore(store);
        return jsonResponse(store.posts[idx]);
      }
      if (method === 'DELETE') {
        store.posts.splice(idx, 1);
        saveLocalStore(store);
        return jsonResponse({ message: 'Deleted', id: postId });
      }
    }

    // Post Like: /api/posts/:id/like
    const postLikeMatch = pathname.match(/^\/api\/posts\/([^/]+)\/like$/);
    if (postLikeMatch && method === 'POST') {
      const postId = postLikeMatch[1];
      const post = store.posts.find(p => p.id === postId);
      if (!post) return jsonResponse({ error: 'Not found' }, 404);
      const userId = body?.userId;
      const likedIdx = post.likedUsers.indexOf(userId);
      if (likedIdx === -1) {
        post.likedUsers.push(userId);
        post.likes = (post.likes || 0) + 1;
      } else {
        post.likedUsers.splice(likedIdx, 1);
        post.likes = Math.max(0, (post.likes || 0) - 1);
      }
      saveLocalStore(store);
      return jsonResponse({ likes: post.likes, likedUsers: post.likedUsers });
    }

    // Post Comment: /api/posts/:id/comments
    const postCommentMatch = pathname.match(/^\/api\/posts\/([^/]+)\/comments$/);
    if (postCommentMatch && method === 'POST') {
      const postId = postCommentMatch[1];
      const post = store.posts.find(p => p.id === postId);
      if (!post) return jsonResponse({ error: 'Not found' }, 404);
      const isAnon = body.isAnonymous || post.boardType === 'secret';
      const comment = {
        id: `cmt_${Date.now()}`,
        userId: body.userId,
        userName: isAnon ? '익명의 메이커' : body.userName,
        userAvatar: isAnon ? 'https://api.dicebear.com/7.x/identicon/svg?seed=cmt' : body.userAvatar,
        text: body.text,
        createdAt: new Date().toISOString()
      };
      post.comments.push(comment);
      saveLocalStore(store);
      return jsonResponse(comment, 201);
    }

    // 6. Events
    if (pathname === '/api/events' && method === 'GET') {
      return jsonResponse(store.events);
    }

    if (pathname === '/api/events' && method === 'POST') {
      const newEvent = {
        id: `evt_${Date.now()}`,
        ...body,
        maxAttendees: Number(body.maxAttendees) || 20,
        attendees: [],
        status: '모집중'
      };
      store.events.unshift(newEvent);
      saveLocalStore(store);
      return jsonResponse(newEvent, 201);
    }

    const eventRsvpMatch = pathname.match(/^\/api\/events\/([^/]+)\/rsvp$/);
    if (eventRsvpMatch && method === 'POST') {
      const eventId = eventRsvpMatch[1];
      const event = store.events.find(e => e.id === eventId);
      if (!event) return jsonResponse({ error: 'Not found' }, 404);
      const userId = body?.userId;
      const idx = event.attendees.indexOf(userId);
      if (idx === -1) {
        if (event.attendees.length >= event.maxAttendees) {
          return jsonResponse({ error: '정원이 마감되었습니다.' }, 400);
        }
        event.attendees.push(userId);
      } else {
        event.attendees.splice(idx, 1);
      }
      saveLocalStore(store);
      return jsonResponse(event);
    }

    // 7. Channels & DM
    if (pathname === '/api/channels' && method === 'GET') {
      return jsonResponse(store.chatChannels || []);
    }

    const dmMatch = pathname.match(/^\/api\/dm\/([^/]+)\/([^/]+)$/);
    if (dmMatch && method === 'GET') {
      const [, u1, u2] = dmMatch;
      let thread = (store.directMessages || []).find(t => 
        (t.user1Id === u1 && t.user2Id === u2) || (t.user1Id === u2 && t.user2Id === u1)
      );
      if (!thread) {
        thread = {
          id: `dm_${u1}_${u2}`,
          user1Id: u1,
          user2Id: u2,
          messages: []
        };
        store.directMessages = store.directMessages || [];
        store.directMessages.push(thread);
        saveLocalStore(store);
      }
      return jsonResponse(thread);
    }

    // Default fallback
    return jsonResponse({ message: 'OK' });
  };
}
