// // app/context/AuthContext.js
// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => { 
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Check if user is logged in on initial load
//     const token = localStorage.getItem('adminToken');
//     const adminData = localStorage.getItem('adminData');
    
//     if (token && adminData) {
//       setAdmin(JSON.parse( ));
//     }
    
//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const response = await fetch('/api/admin/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await response.json();
      
//       if (!response.ok) {
//         throw new Error(data.error || 'Login failed');
//       }

//       // Save token and admin data
//       localStorage.setItem('adminToken', data.token);
//       localStorage.setItem('adminData', JSON.stringify(data.admin));
      
//       // Set admin state
//       setAdmin(data.admin);
      
//       // Redirect based on role
//       if (data.admin.role === 'super_admin') {
//         router.push('/admin/super-dashboard');
//       } else {
//         router.push('/admin/dashboard');
//       }
      
//       return data;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('adminData');
//     setAdmin(null);
//     router.push('/admin');
//   };

//   return (
//     <AuthContext.Provider value={{ admin, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// app/hooks/admin_authContext.js
'use client';

import { createContext, useContext } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === 'loading';

  const login = async (email, password) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      // If login is successful, you can do additional logic here
      // Check role and redirect accordingly
      if (session?.user?.role === 'super_admin') {
        router.push('/admin/super-dashboard');
      } else {
        router.push('/admin/dashboard');
      }

      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push('/admin');
  };

  return (
    <AuthContext.Provider value={{
      admin: session?.user || null,
      login,
      logout,
      loading,
      isAuthenticated: !!session?.user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const adminAuth = () => useContext(AuthContext);