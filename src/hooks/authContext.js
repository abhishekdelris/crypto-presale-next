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
      const response = await axios.get('/api/auth/me', {
        withCredentials: true
      });
      
      if (response.data) {
        setIsLoggedIn(true);
        setUser(response.data);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.log("Not logged in or error checking status:", error);
      setIsLoggedIn(false);
      setUser(null);
      
      // Fallback: check localStorage
      const token = localStorage.getItem('userToken');
      if (token) {
        setIsLoggedIn(true);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const logout = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: '/api/auth/logout',
        withCredentials: true
      });
      
      if (response.data) {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
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
