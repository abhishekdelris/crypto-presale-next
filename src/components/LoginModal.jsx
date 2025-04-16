"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import googleImage from '../images/google.png';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';

const LoginModal = ({ show, handleClose, onLoginSuccess }) => {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // Validation state
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });
  
  // Form touch state (to show validation only after user interaction)
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();
  
  // Reset form and errors when modal opens
  useEffect(() => {
    if (show) {
      resetForm();
    }
  }, [show]);
  
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
    setErrors({ email: '', password: '', general: '' });
    setTouched({ email: false, password: false });
    setIsSubmitting(false);
  };
  
  // Handle field blur to mark fields as touched
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };
  
  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };
  
  // Password validation
  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };
  
  // Validate a specific field
  const validateField = (field) => {
    let errorMessage = '';
    
    switch (field) {
      case 'email':
        errorMessage = validateEmail(email);
        break;
      case 'password':
        errorMessage = validatePassword(password);
        break;
      default:
        break;
    }
    
    setErrors({ ...errors, [field]: errorMessage });
    return errorMessage === '';
  };
  
  // Validate all fields
  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    setErrors({
      email: emailError,
      password: passwordError,
      general: ''
    });
    
    setTouched({
      email: true,
      password: true
    });
    
    return !emailError && !passwordError;
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setRememberMe(checked);
    } else {
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
      
      // Clear error when typing if field was touched
      if (touched[name]) {
        validateField(name);
      }
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({ ...errors, general: '' });
    
    try {
      const response = await axios.post('/api/auth/login', { 
        email, 
        password,
        rememberMe 
      });
      
      if (response.data.success && response.data.token) {
        // Store user data and token
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('userToken', response.data.token);
        
        // Store rememberMe setting if checked
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        
        // Dispatch login event for any listeners
        window.dispatchEvent(new Event('login-event'));
        
        // Close the modal
        handleClose();
        
        // Call the success callback if provided
        if (onLoginSuccess) {
          onLoginSuccess(response.data);
        } else {
          // Default redirect to home
          router.push('/');
        }
      }
    } catch (err) {
      console.warn("Login failed:", err);
      
      // Handle different types of errors
      if (err.response) {
        // Server returned an error response
        if (err.response.status === 401) {
          setErrors({ 
            ...errors, 
            general: 'Invalid email or password. Please try again.' 
          });
        } else if (err.response.status === 429) {
          setErrors({ 
            ...errors, 
            general: 'Too many login attempts. Please try again later.' 
          });
        } else {
          setErrors({ 
            ...errors, 
            general: err.response.data?.message || 'Login failed. Please try again.' 
          });
        }
      } else if (err.request) {
        // No response received from server
        setErrors({ 
          ...errors, 
          general: 'No response from server. Please check your internet connection.' 
        });
      } else {
        // Error in setting up the request
        setErrors({ 
          ...errors, 
          general: 'An unexpected error occurred. Please try again.' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Load remembered email on initial render
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      centered
      className="login-modal"
      size="md"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          <h5 className="h3 fw-bold mb-0">Welcome Back</h5>
          <p className="small text-muted">Please enter your details</p>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <div className="contact-us-form">
          <div className="row">
            {errors.general && (
              <div className="col-12 mb-3">
                <div className="alert alert-danger py-2" role="alert">
                  {errors.general}
                </div>
              </div>
            )}
            
            <form onSubmit={handleLogin} className="w-100" noValidate>
              <div className="col-12 mb-3">
                <label htmlFor="email" className="fw-bold">Email Address</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                  placeholder="Email Address" 
                  value={email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                />
                {touched.email && errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              
              <div className="col-12 mb-3">
                <label htmlFor="password" className="fw-bold">Password</label>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                  placeholder="Password" 
                  value={password}
                  onChange={handleChange}
                  onBlur={() => handleBlur('password')}
                  required
                  disabled={isSubmitting}
                  autoComplete="current-password"
                />
                {touched.password && errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              
              <div className="col-12 d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input 
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="form-check-input" 
                    checked={rememberMe}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <Link 
                  href="/forgotPassword" 
                  className="text-primary"
                  onClick={() => {
                    handleClose();
                    // You might want to add navigation to forgot password page here
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              
              <div className="col-12 mb-3">
                <button 
                  type="submit" 
                  className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
            </form>
            
            <div className="col-12 mb-3">
              <button 
                className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-border shadow d-flex align-items-center justify-content-center"
                disabled={isSubmitting}
                onClick={() => {
                  // Handle Google Sign In
                  console.log('Google Sign In clicked');
                  // Implement Google OAuth logic here
                }}
              >
                <Image src={googleImage} width="24" height="24" alt="Google Sign In" /> &nbsp;Sign in with Google
              </button>
            </div>
            
            <div className="col-12 text-center">
              <p>
                Don't have an account? {' '}
                <Link 
                  href="/signup" 
                  className="textclr fw-bold" 
                  onClick={handleClose}
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;