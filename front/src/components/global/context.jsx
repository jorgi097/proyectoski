import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, initialUserInfo }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('isAuthenticated') === 'true');
  const [userInfo, setUserInfo] = useState(initialUserInfo); // Utiliza directamente el valor pasado como parámetro

  useEffect(() => {
    // Actualiza el localStorage
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [isAuthenticated, userInfo]);

  useEffect(() => {
    // Actualiza el estado de userInfo cuando cambia el valor inicial
    setUserInfo(initialUserInfo);
  }, [initialUserInfo]); // Este efecto se ejecutará cada vez que initialUserInfo cambie

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
};
