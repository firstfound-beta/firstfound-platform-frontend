import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    // Initialize state from localStorage if available
    return JSON.parse(localStorage.getItem('adminAuth')) || false;
  });

  useEffect(() => {
    // Store authentication state in localStorage whenever it changes
    localStorage.setItem('adminAuth', JSON.stringify(isAdminAuthenticated));
  }, [isAdminAuthenticated]);

  const login = (email, password) => {
    if (email === "abhi@123" && password === "abhi123") {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('adminAuth'); // Clear the auth state
  };

  return (
    <AdminContext.Provider value={{ isAdminAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};