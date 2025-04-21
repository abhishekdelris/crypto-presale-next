import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [tokenValid, setTokenValid] = useState(false);
  const [verifying, setVerifying] = useState(true);
  
  const router = useRouter();
  const { token, email } = router.query;
  
  useEffect(() => {
    // Verify token when component mounts
    const verifyToken = async () => {
      if (!token || !email) return;
      
      try {
        const response = await fetch('/api/auth/verify-reset-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, email })
        });
        
        const data = await response.json();
        
        if (data.success) {
          setTokenValid(true);
        } else {
          setMessage({ type: 'error', text: 'Invalid or expired reset link' });
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setMessage({ type: 'error', text: 'An error occurred while verifying reset link' });
      } finally {
        setVerifying(false);
      }
    };
    
    if (token && email) {
      verifyToken();
    } else if (router.isReady && (!token || !email)) {
      setVerifying(false);
      setMessage({ type: 'error', text: 'Missing reset information' });
    }
  }, [token, email, router.isReady]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }
    
    if (password.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters long' });
      return;
    }
    
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });
      
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, email, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ 
          type: 'success', 
          text: 'Password reset successful. Redirecting to login...' 
        });
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };
  
  if (verifying) {
    return (
      <section className="py-4 loginform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <h5 className="h3 fw-bold mb-3">Verifying Reset Link</h5>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  if (!tokenValid && !verifying) {
    return (
      <section className="py-4 loginform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-us-form text-center">
                <h5 className="h3 fw-bold mb-0">Reset Link Invalid</h5>
                <p className="text-danger mb-4">{message.text}</p>
                <p>The password reset link is invalid or has expired.</p>
                <Link href="/forgot-password" className="btn-main primary-btn text-center fw-bold py-2 px-4 btn-second_main shadow">
                  Request New Reset Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-4 loginform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-us-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-12 text-center">
                    <h5 className="h3 fw-bold mb-0">Reset Password</h5>
                    <p>Enter your new password below.</p>
                  </div>
                  
                  {message.text && (
                    <div className={`col-xl-12 alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                      {message.text}
                    </div>
                  )}
                  
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">New Password</label>
                    <input 
                      type="password" 
                      className="form-control mb-2" 
                      placeholder="New Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                  
                  <div className="col-xl-12 mb-3">
                    <label className="fw-bold">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control mb-2" 
                      placeholder="Confirm Password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                  
                  <div className="col-xl-12">
                    <button 
                      type="submit" 
                      className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow"
                      disabled={loading}
                    >
                      {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;