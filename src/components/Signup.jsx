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


'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
//  console.log(register);
 
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        router.push('/login');
      } else {
        setError('User already exists or an error occurred.');
      }

      setLoading(false);
    } catch (err) {
      setError('An error occurred.');
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="py-4 loginform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-us-form">
                <div className="row">
                  <div className="col-xl-12 text-center">
                    <h5 className="h3 fw-bold mb-0">Join Us Today!</h5>
                    <p>Create your account to get started!</p>
                  </div>

                  {/* Name Field */}
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Name</label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      className="form-control mb-2"
                      placeholder="Full Name"
                    />
                    {errors.name && <p className="text-danger">Name is required.</p>}
                  </div>

                  {/* Email Field */}
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Email Address</label>
                    <input
                      {...register('email', { required: true })}
                      type="text"
                      className="form-control mb-2"
                      placeholder="Email Address"
                    />
                    {errors.email && <p className="text-danger">Email is required.</p>}
                  </div>

                  {/* Password Field */}
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Password</label>
                    <input
                      {...register('password', { required: true })}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    {errors.password && <p className="text-danger">Password is required.</p>}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Confirm Password</label>
                    <input
                      // {...register('confirmPassword', { required: true })}
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <p className="text-danger">Confirm Password is required.</p>}
                  </div>

                  {/* Role Selection */}
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Select Role</label>
                    <select {...register('role')} className="form-control">
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  {/* Register Button */}
                  <div className="col-xl-6">
                    <button onClick={handleSubmit(onSubmit)} className="btn-main primary-btn w-75 text-center fw-bold py-3 btn-second_main shadow">
                      {loading ? 'Loading...' : 'Register'}
                    </button>
                  </div>

                  <div className="col-xl-12 text-center">
                    <p>Already have an account? <Link href="/login" className="textclr fw-bold">Login Here.</Link></p>
                  </div>

                  {error && <p className="text-danger">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
