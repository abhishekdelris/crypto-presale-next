// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import googleImage from '../images/google.png';
// import { userAuth } from '@/hooks/authContext';
// import Link from 'next/link';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = userAuth();
 
//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setError(null);
    
//   //   try {
//   //     const response = await axios.post('/api/auth/login', { email, password });
//   //    console.log("response...",response);
     
//   //     if (response.data.success && response.data.token) {
//   //       // Redirect to dashboard or home page on successful login
//   //       localStorage.setItem('user', JSON.stringify(response.data));
//   //       localStorage.setItem('userToken', response.data.token);
//   //       window.dispatchEvent(new Event('login-event'));
//   //       router.push('/');

//   //     }
//   //   } catch (err) {
//   //     console.warn("this is a warning",err.response?.data?.message || 'Login failed');
      
//   //     setError(err.response?.data?.message || 'Login failed');
//   //   }
//   // };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     const result = await login(email, password);
    
//     setIsLoading(false);
    
//     if (result.success) {
//       router.push('/home');
//     } else {
//       setError(result.error || 'Login failed');
//     }
//   };

//   return (
//     <section className="py-4 loginform">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 offset-lg-3">
//             <div className="contact-us-form">
//               <div className="row">
//                 <div className="col-xl-12 text-center">
//                   <h5 className="h3 fw-bold mb-0">Welcome Back</h5>
//                   <p>Please enter your details</p>
//                 </div>
//                 {error && <p className="text-danger text-center">{error}</p>}
//                 <form onSubmit={handleLogin} className="w-100">
//                   <div className="col-xl-12 mb-2">
//                     <label className="fw-bold">Email Address</label>
//                     <input 
//                       type="email" 
//                       className="form-control mb-2" 
//                       placeholder="Email Address" 
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="col-xl-12 mb-2">
//                     <label className="fw-bold">Password</label>
//                     <input 
//                       type="password" 
//                       className="form-control" 
//                       placeholder="Password" 
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="col-xl-12 main_flex">
//                     <p className="mb-0">
//                       <input type="checkbox" /> Remember Me
//                     </p>
//                     <Link href="/forgotPassword" className="btn btn-link">Forgot Password</Link>
//                   </div>
//                   <div className="col-xl-12">
//                     <button type="submit" className="btn-main primary-btn w-100 text-center fw-bold mb-2 py-3 btn-second_main shadow">
//                       Login
//                     </button>
//                   </div>
//                 </form>
//                 <div className="col-xl-12">
//                   <Link href="" className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-border shadow mb-3">
//                     <Image src={googleImage} width="24" alt="Google Sign In" /> &nbsp;Sign in with Google
//                   </Link>
//                 </div>
//                 <div className="col-xl-12 text-center">
//                   <p>Don’t have an account? <Link href="/signup" className="textclr fw-bold">Register Here.</Link></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;


"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import googleImage from '../images/google.png'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userAuth } from '@/hooks/authContext';
import Link from 'next/link';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [formError, setFormError] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { login,isAuthenticated } = userAuth();
 
  // Form validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);
  
  // Form validation on input change
  useEffect(() => {
    const newErrors = {};
    
    if (touchedFields.email && !email) {
      newErrors.email = 'Email is required';
    } else if (touchedFields.email && !validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (touchedFields.password && !password) {
      newErrors.password = 'Password is required';
    } else if (touchedFields.password && password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
  }, [email, password, touchedFields]);

  // Handle field blur for validation
  const handleBlur = (field) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    setTouchedFields({
      email: true,
      password: true
    });
    
    // Check for validation errors
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    // If there are validation errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setFormError('');
    setIsLoading(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
       toast.success("Login successfully");
        router.push('/');
      } else {
        setFormError(result.error || 'Login failed');
      }
    } catch (error) {
      setFormError('An unexpected error occurred. Please try again.');
         toast.success("An unexpected error occurred. Please try again.");
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-4 loginform">
       <ToastContainer />
      <div className="container">
        
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-us-form">
              <div className="row">
                <div className="col-xl-12 text-center">
                  <h5 className="h3 fw-bold mb-0">Welcome Back</h5>
                  <p>Please enter your details</p>
                </div>
                {formError && <p className="text-danger text-center">{formError}</p>}
                <form onSubmit={handleLogin} className="w-100">
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Email Address</label>
                    <input 
                      type="email" 
                      className={`form-control mb-1 ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Email Address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur('email')}
                    />
                    {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Password</label>
                    <input 
                      type="password" 
                      className={`form-control mb-1 ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => handleBlur('password')}
                    />
                    {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                  </div>
                  <div className="col-xl-12 main_flex">
                    <p className="mb-0">
                      <input type="checkbox" /> Remember Me
                    </p>
                    <Link href="/forgotPassword" className="btn btn-link">Forgot Password</Link>
                  </div>
                  <div className="col-xl-12">
                    <button 
                      type="submit" 
                      className="btn-main primary-btn w-100 text-center fw-bold mb-2 py-3 btn-second_main shadow"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                  </div>
                </form>
                <div className="col-xl-12">
                  <Link href="" className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-border shadow mb-3">
                    <Image src={googleImage} width="24" alt="Google Sign In" /> &nbsp;Sign in with Google
                  </Link>
                </div>
                <div className="col-xl-12 text-center">
                  <p>Don't have an account? <Link href="/signup" className="textclr fw-bold">Register Here.</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;