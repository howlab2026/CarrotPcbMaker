import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
        return data;
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
    return [];
  };

  useEffect(() => {
    const init = async () => {
      const fetched = await fetchUsers();
      const savedUser = localStorage.getItem('carrot_pcb_user');
      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          const matched = fetched.find(u => u.id === parsed.id) || parsed;
          setCurrentUser(matched);
        } catch (e) {
          if (fetched.length > 0) setCurrentUser(fetched[0]);
        }
      } else if (fetched.length > 0) {
        // Default to admin for instant rich demo experience
        setCurrentUser(fetched[0]);
      }
      setLoading(false);
    };
    init();
  }, []);

  const login = async (username, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || '로그인에 실패했습니다.');
    }
    const userData = await res.json();
    setCurrentUser(userData);
    localStorage.setItem('carrot_pcb_user', JSON.stringify(userData));
    return userData;
  };

  const register = async (formData) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || '회원가입에 실패했습니다.');
    }
    const newUser = await res.json();
    setCurrentUser(newUser);
    localStorage.setItem('carrot_pcb_user', JSON.stringify(newUser));
    await fetchUsers();
    return newUser;
  };

  const quickSwitchUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem('carrot_pcb_user', JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem('carrot_pcb_user');
    if (users.length > 0) {
      setCurrentUser(users[0]); // Fallback to first user or null
    } else {
      setCurrentUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      users,
      loading,
      login,
      register,
      quickSwitchUser,
      logout,
      refreshUsers: fetchUsers
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
