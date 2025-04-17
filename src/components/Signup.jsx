// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useAuth } from '@/hooks/authContext';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const { register } = useAuth();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState(null); 
//     const router = useRouter();
  
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (formData.password !== formData.confirmPassword) {
//   //     setError("Passwords do not match");
//   //     return;
//   //   }
//   //   try {
//   //     const response = await axios.post('/api/auth/register', {
//   //       name: formData.name,
//   //       email: formData.email,
//   //       password: formData.password
//   //     });
//   //     console.log(response.data);
//   //     alert("Registration successful!");
//   //     router.push('/login');
//   //   } catch (err) {
//   //     setError(err.response?.data?.error || "Registration failed");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
    
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
    
//     setIsLoading(true);
    
//     const result = await register(name, email, password);
    
//     setIsLoading(false);
    
//     if (result.success) {
//       router.push('/dashboard');
//     } else {
//       setError(result.error || 'Registration failed');
//     }
//   };

//   return (
//     <div>
//       <section className="py-4 loginform">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 offset-lg-3">
//               <div className="contact-us-form">
//                 <form onSubmit={handleSubmit}>
//                   <div className="row">
//                     <div className="col-xl-12 text-center">
//                       <h5 className="h3 fw-bold mb-0">Join Us Today!</h5>
//                       <p>Create your account to get started!</p>
//                     </div>
//                     {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//                     <div className="col-xl-12 mb-2">
//                       <label className="fw-bold">Name</label>
//                       <input type="text" className="form-control mb-2" placeholder="Full Name" name="name"   onChange={(e) => setName(e.target.value)} required />
//                     </div>
//                     <div className="col-xl-12 mb-2">
//                       <label className="fw-bold">Email Address</label>
//                       <input type="email" className="form-control mb-2" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
//                     <div className="col-xl-12 mb-2">
//                       <label className="fw-bold">Password</label>
//                       <input type="password" className="form-control" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} required />
//                     </div>
//                     <div className="col-xl-12 mb-2">
//                       <label className="fw-bold">Confirm Password</label>
//                       <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
//                     </div>
//                     <div className="col-xl-6">
//                       <button type="submit" className="btn-main primary-btn w-75 text-center fw-bold py-3 btn-second_main shadow">Register</button>
//                     </div>
//                     <div className="col-xl-12 text-center">
//                       <p>Already have an account? <Link href="/login" className="textclr fw-bold">Login Here.</Link></p>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> 
//     </div>
//   );
// }

// export default Signup;


"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/authContext';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register } = useAuth();
  const router = useRouter();
  
  // Destructure form data for easier access
  const { name, email, password, confirmPassword } = formData;
  
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Handle field blur for validation
  const handleBlur = (field) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true
    });
  };

  // Form validation logic
  useEffect(() => {
    const newErrors = {};
    
    // Name validation
    if (touchedFields.name) {
      if (!name.trim()) {
        newErrors.name = 'Name is required';
      } else if (/\d/.test(name)) {
        newErrors.name = 'Name should not contain numbers';
      } else if (name.length < 2) {
        newErrors.name = 'Name should be at least 2 characters';
      }
    }
    
    // Email validation
    if (touchedFields.email) {
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    // Password validation
    if (touchedFields.password) {
      if (!password) {
        newErrors.password = 'Password is required';
      } else if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
      }
    }
    
    // Confirm password validation
    if (touchedFields.confirmPassword) {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
  }, [formData, touchedFields]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set all fields as touched to trigger validation
    setTouchedFields({
      name: true,
      email: true,
      password: true,
      confirmPassword: true
    });
    
    // Check for validation errors
    const newErrors = {};
    
    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (/\d/.test(name)) {
      newErrors.name = 'Name should not contain numbers';
    } else if (name.length < 2) {
      newErrors.name = 'Name should be at least 2 characters';
    }
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
    }
    
    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    
    // If there are validation errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setFormError('');
    setIsLoading(true);
    
    try {
      const result = await register(name, email, password);
      
      if (result.success) {
        // Show the thank you modal instead of redirecting immediately
        setIsLoading(false);
        setShowThankYouModal(true);
        
        // After 3 seconds, redirect to login page
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setFormError(result.error || 'Registration failed');
        setIsLoading(false);
      }
    } catch (error) {
      setFormError('An unexpected error occurred. Please try again.');
      console.error('Registration error:', error);
      setIsLoading(false);
    }
  };

  // Thank You Modal Component
  const ThankYouModal = () => {
    if (!showThankYouModal) return null;
    
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-body text-center">
            <h2>Thank You!</h2>
            <p>Your registration was successful!</p>
            <p>You will be redirected to the login page shortly...</p>
            <div className="spinner-border text-primary mt-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            max-width: 500px;
            width: 90%;
          }
          h2 {
            color: #28a745;
            margin-bottom: 15px;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div>
      <section className="py-4 loginform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-us-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12 text-center">
                      <h5 className="h3 fw-bold mb-0">Join Us Today!</h5>
                      <p>Create your account to get started!</p>
                    </div>
                    
                    {formError && <p className="text-danger text-center">{formError}</p>}
                    
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Name</label>
                      <input 
                        type="text" 
                        className={`form-control mb-1 ${errors.name ? 'is-invalid' : ''}`} 
                        placeholder="Full Name" 
                        name="name" 
                        value={name}
                        onChange={handleChange} 
                        onBlur={() => handleBlur('name')}
                      />
                      {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                    </div>
                    
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Email Address</label>
                      <input 
                        type="email" 
                        className={`form-control mb-1 ${errors.email ? 'is-invalid' : ''}`} 
                        placeholder="Email Address" 
                        name="email" 
                        value={email}
                        onChange={handleChange} 
                        onBlur={() => handleBlur('email')}
                      />
                      {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                    </div>
                    
                    {/* <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Password</label>
                      <input 
                        type="password" 
                        className={`form-control mb-1 ${errors.password ? 'is-invalid' : ''}`} 
                        placeholder="Password" 
                        name="password" 
                        value={password}
                        onChange={handleChange} 
                        onBlur={() => handleBlur('password')}
                      />
                      {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                    </div> */}
                    <div className="col-xl-12 mb-2">
  <label className="fw-bold">Password</label>
  <div className="input-group">
    <input 
      type={showPassword ? 'text' : 'password'}
      className={`form-control mb-1 ${errors.password ? 'is-invalid' : ''}`} 
      placeholder="Password" 
      name="password" 
      value={password}
      onChange={handleChange} 
      onBlur={() => handleBlur('password')}
    />
    <button 
      type="button" 
      className="btn btn-outline-secondary"
      onClick={() => setShowPassword(!showPassword)}
      tabIndex={-1}
    >
      {showPassword ? 'Hide' : 'Show'}
    </button>
  </div>
  {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
</div>


<div className="col-xl-12 mb-2">
  <label className="fw-bold">Confirm Password</label>
  <div className="input-group">
    <input 
      type={showConfirmPassword ? 'text' : 'password'}
      className={`form-control mb-1 ${errors.confirmPassword ? 'is-invalid' : ''}`} 
      placeholder="Confirm Password" 
      name="confirmPassword" 
      value={confirmPassword}
      onChange={handleChange} 
      onBlur={() => handleBlur('confirmPassword')}
    />
    
    <button 
      type="button" 
      className="btn btn-outline-secondary"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      tabIndex={-1}
    >
      {showConfirmPassword ? 'Hide' : 'Show'}
    </button>
  </div>
  {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
</div>

                    {/* <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Confirm Password</label>
                      <input 
                        type="password" 
                        className={`form-control mb-1 ${errors.confirmPassword ? 'is-invalid' : ''}`} 
                        placeholder="Confirm Password" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={handleChange} 
                        onBlur={() => handleBlur('confirmPassword')}
                      />
                      {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                    </div> */}
                    
                    <div className="col-xl-6">
                      
                      <button 
                        type="submit" 
                        className="btn-main primary-btn w-75 text-center fw-bold py-3 btn-second_main shadow"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Creating Account...' : 'Register'}
                      </button>
                    </div>
                    
                    <div className="col-xl-12 text-center">
                      <p>Already have an account? <Link href="/login" className="textclr fw-bold">Login Here.</Link></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Thank You Modal */}
      <ThankYouModal />
    </div>
  );
}

export default Signup;