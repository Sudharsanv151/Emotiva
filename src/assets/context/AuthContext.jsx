import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  const login = async (email, password) => {
    try {
      const result = await axios.post('http://localhost:5000/user/signin', { email, password });
      setUser(result.data.user);
      return null; 
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data.message; 
      }
      return 'Login failed. Please try again.'; 
    }
  };

  const logout = () => {
    setUser(null); 
    navigate('/signin'); 
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
