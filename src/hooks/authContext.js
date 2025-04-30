// "use client"
// import { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Function to check login status
//   const checkLoginStatus = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('userToken');
//       const data = localStorage.getItem('user')

//       console.log("this is a funcation for check login status....",token,data);
      
//       if (!token & !data) {
//         setIsLoggedIn(false);
//         setUser(null);
//         setLoading(false); 
//         return;
//       }
      
//       // const response = await axios.get('/api/auth/me', {
//       //   headers: {
//       //     'Authorization': `Bearer ${token}`
//       //   }
//       // });
      
//       if (data) {
//         setIsLoggedIn(true);
//         setUser(data);
//       } else {
//         setIsLoggedIn(false);
//         setUser(null);
//         localStorage.removeItem('userToken');
//         localStorage.removeItem('user');
//       }
//     } catch (error) {
//       console.log("Not logged in or error checking status:", error);
//       setIsLoggedIn(false);
//       setUser(null);
//       localStorage.removeItem('userToken');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle logout
//   const logout = async () => {
//     try {
//       const token = localStorage.getItem('userToken');
      
//       if (token) {
//         const response = await axios({
//           method: 'post',
//           url: '/api/auth/logout',
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
        
//         console.log("response....", response.data);
//       }
    
//         localStorage.removeItem('user');
//       // Always clear local storage and state
//       localStorage.removeItem('userToken');
//       setIsLoggedIn(false);
//       setUser(null);
//     } catch (error) {
//       console.error('Logout failed:', error);
//       // Even if server logout fails, clear local state
//       localStorage.removeItem('userToken');
//       setIsLoggedIn(false);
//       setUser(null);
//     }
//   };

//   // Check login status on mount
//   useEffect(() => {
//     checkLoginStatus();
    
//     // Listen for storage events (for multi-tab support)
//     const handleStorageChange = (e) => {
//       if (e.key === 'userToken') {
//         checkLoginStatus();
//       }
//     };
    
//     window.addEventListener('storage', handleStorageChange);
    
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   // Create a custom event to trigger auth checks
//   useEffect(() => {
//     const handleLoginEvent = () => {
//       checkLoginStatus();
//     };
    
//     window.addEventListener('login-event', handleLoginEvent);
    
//     return () => {
//       window.removeEventListener('login-event', handleLoginEvent);
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ 
//       isLoggedIn, 
//       user, 
//       loading, 
//       logout, 
//       checkLoginStatus 
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
    } else {
      setUser(session?.user || null);
      setIsAuthenticated(!!session?.user); // Update this
      setLoading(false);
    }
  }, [session, status]);
  
  const login = async (email, password) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      if (result?.error) {
        return { success: false, error: result.error };
      }
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return { success: false, error: "Login failed" };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error };
      }
     if(data.success) {
      return { success: true };
     }
       
      // // Auto login after successful registration
      // const loginResult = await login(email, password);
      // return loginResult;
    } catch (error) {
      return { success: false, error: "Registration failed" };
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    setUser(null);
    setIsAuthenticated(false);
    router.refresh(); // Or manually reload data/context
  };

  const checkAuthStatus = () => {
    return {
      isAuthenticated,
      loading,
      user
    };
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    checkAuthStatus,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const userAuth = () => useContext(AuthContext);
