import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [cart,setcart] = useState(null);

  const values = {
    isLogin,
    setLogin,
  };

  return (
    <AuthContext.Provider value= {values}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };