"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to check login status
  const checkLoginStatus = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('userToken');
      const data = localStorage.getItem('user')

      console.log("this is a funcation for check login status....",token,data);
      
      if (!token & !data) {
        setIsLoggedIn(false);
        setUser(null);
        setLoading(false); 
        return;
      }
      
      // const response = await axios.get('/api/auth/me', {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // });
      
      if (data) {
        setIsLoggedIn(true);
        setUser(data);
      } else {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.log("Not logged in or error checking status:", error);
      setIsLoggedIn(false);
      setUser(null);
      localStorage.removeItem('userToken');
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const logout = async () => {
    try {
      const token = localStorage.getItem('userToken');
      
      if (token) {
        const response = await axios({
          method: 'post',
          url: '/api/auth/logout',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        console.log("response....", response.data);
      }
    
        localStorage.removeItem('user');
      // Always clear local storage and state
      localStorage.removeItem('userToken');
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      // Even if server logout fails, clear local state
      localStorage.removeItem('userToken');
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  // Check login status on mount
  useEffect(() => {
    checkLoginStatus();
    
    // Listen for storage events (for multi-tab support)
    const handleStorageChange = (e) => {
      if (e.key === 'userToken') {
        checkLoginStatus();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Create a custom event to trigger auth checks
  useEffect(() => {
    const handleLoginEvent = () => {
      checkLoginStatus();
    };
    
    window.addEventListener('login-event', handleLoginEvent);
    
    return () => {
      window.removeEventListener('login-event', handleLoginEvent);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
      loading, 
      logout, 
      checkLoginStatus 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}