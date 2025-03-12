// import React from 'react'

// function Signup() {
//   return (
//     <div>
//      <section class="py-4 loginform">
//       <div class="container">
//         <div class="row">
//             <div class="col-lg-6 offset-lg-3">
//                 <div class="contact-us-form">
//                         <div class="row">
//                             <div class="col-xl-12 text-center">
//                                 <h5 class="h3 fw-bold mb-0">Join Us Today!</h5>
//                                 <p>Create your account to get started!</p>
//                             </div>
                            
//                             <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Name</label>
//                                 <input type="text" class="form-control mb-2" placeholder="Full Name" name=""/>
//                             </div>
//                               <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Email Address</label>
//                                 <input type="text" class="form-control mb-2" placeholder="Email Address" name=""/>
//                             </div>
//                             <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Password</label>
//                                 <input type="password" class="form-control" placeholder="Password" name=""/>
                                
//                             </div>
//                               <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Confirm Password</label>
//                                 <input type="password" class="form-control" placeholder="Confirm Password" name=""/>
                                
//                             </div>
//                             <div class="col-xl-6">
//                                 <a href="" class="btn-main primary-btn w-75 text-center fw-bold py-3 btn-second_main shadow">Register</a>
//                             </div>
//                              <div class="col-xl-12 text-center">
//                                  <p>Already have an account? <a href="login" class="textclr fw-bold">Login Here.</a></p>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     </div>
//   </section> 
//     </div>
//   )
// }

// export default Signup

"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
      alert("Registration successful!");
      router.push('/login');
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
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
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Name</label>
                      <input type="text" className="form-control mb-2" placeholder="Full Name" name="name" onChange={handleChange} required />
                    </div>
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Email Address</label>
                      <input type="email" className="form-control mb-2" placeholder="Email Address" name="email" onChange={handleChange} required />
                    </div>
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Password</label>
                      <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} required />
                    </div>
                    <div className="col-xl-12 mb-2">
                      <label className="fw-bold">Confirm Password</label>
                      <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
                    </div>
                    <div className="col-xl-6">
                      <button type="submit" className="btn-main primary-btn w-75 text-center fw-bold py-3 btn-second_main shadow">Register</button>
                    </div>
                    <div className="col-xl-12 text-center">
                      <p>Already have an account? <a href="/login" className="textclr fw-bold">Login Here.</a></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default Signup;