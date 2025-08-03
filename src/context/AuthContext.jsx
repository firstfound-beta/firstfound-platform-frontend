import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
  
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setIsLoggedIn(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse userData:", error);
        // If parsing fails, treat it as unauthenticated
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("user"); // clean up the bad value
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  
    setLoading(false);
  }, []);
  

  const login = (token, userData) => {
    if (typeof token === "string" && userData && typeof userData === "object") {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoggedIn(true);
      setUser(userData);
    } else {
      console.error("Invalid token or userData passed to login()");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
      {!loading && children} 
    </AuthContext.Provider>
  );
};
