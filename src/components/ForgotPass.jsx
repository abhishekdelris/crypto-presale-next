// import React from 'react'
// import Image from 'next/image';
// import googleImage from "../images/google.png";
// import Link from 'next/link';

// function ForgotPass() {
//   return (
//    <>
//     <section class="py-4 loginform">
//       <div class="container">
//         <div class="row">
//             <div class="col-lg-6 offset-lg-3"> 
//                 <div class="contact-us-form">
//                         <div class="row">
//                             <div class="col-xl-12 text-center">
//                                 <h5 class="h3 fw-bold mb-0">Forgot Password</h5>
//                                 <p>Enter your email address below to reset your password.</p>
//                             </div>
                            
//                             <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Email </label>
//                                 <input type="text" class="form-control mb-2" placeholder="Email Address" name="" />
//                             </div>
                            
//                             <div class="col-xl-12 main_flex">

                                 
//                                 <Link href="/login" class="btn btn-link">Back to login</Link>
//                             </div>
//                             <div class="col-xl-12">
//                                 <Link href="" class="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow">Email Password Reset Link</Link>
//                             </div>
                           
//                         </div>
//                     </div>
//             </div>
//         </div>
//     </div>
//   </section>
//    </>
//   )
// }

// export default ForgotPass

'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import googleImage from "../images/google.png";
import Link from 'next/link';

function ForgotPass() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }
    
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });
      
      const response = await fetch('/api/auth/forgotPass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ 
          type: 'success', 
          text: 'Password reset link has been sent to your email address' 
        });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      console.error('Error sending reset link:', error);
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-4 loginform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-us-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12 text-center">
                      <h5 className="h3 fw-bold mb-0">Forgot Password</h5>
                      <p>Enter your email address below to reset your password.</p>
                    </div>
                    
                    {message.text && (
                      <div className={`col-xl-12 alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                        {message.text}
                      </div>
                    )}
                    
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Email </label>
                      <input 
                        type="email" 
                        className="form-control mb-2" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="col-xl-12 main_flex mb-3">
                      <Link href="/login" className="btn btn-link">Back to login</Link>
                    </div>
                    
                    <div className="col-xl-12">
                      <button 
                        type="submit" 
                        className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Email Password Reset Link'}
                      </button>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPass;