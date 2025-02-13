import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const result = await axios.post('https://emotiva-server.onrender.com/user/signin', { email, password });
      const userData = {
        name: result.data.user,
        email: result.data.email
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return null;
    } catch (error) {
      return error.response?.data.message || 'Login failed. Please try again.';
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/signin');
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};