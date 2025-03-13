// import React from 'react'
// import Image from 'next/image';
// import googleImage from "../images/google.png";

// function Login() {
//   return (
//    <>
//     <section class="py-4 loginform">
//       <div class="container">
//         <div class="row">
//             <div class="col-lg-6 offset-lg-3">
//                 <div class="contact-us-form">
//                         <div class="row">
//                             <div class="col-xl-12 text-center">
//                                 <h5 class="h3 fw-bold mb-0">Welcome Back</h5>
//                                 <p>Please enter your details</p>
//                             </div>
                            
//                             <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Email Address</label>
//                                 <input type="text" class="form-control mb-2" placeholder="Email Address" name="" />
//                             </div>
//                             <div class="col-xl-12 mb-2">
//                                 <label class="fw-bold">Password</label>
//                                 <input type="password" class="form-control" placeholder="Password" name="" />
//                             </div>
//                             <div class="col-xl-12 main_flex">

//                                 <p class="mb-0"><input type="checkbox" /> Remember Me</p>
//                                 <a href="" class="btn btn-link">Forgot Password</a>
//                             </div>
//                             <div class="col-xl-12">
//                                 <a href="" class="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow">Login</a>
//                             </div>
//                             <div class="col-xl-12">
//                                  <a href="" class="btn-main primary-btn w-100  text-center fw-bold py-3 btn-border shadow mb-3"><Image src={googleImage} width="24" /> &nbsp;Sign in with Google</a>
//                              </div>
//                              <div class="col-xl-12 text-center">
//                                  <p>Don’t have an account? <a href="/signup" class="textclr fw-bold">Register Here.</a></p>
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

// export default Login

// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import googleImage from '../images/google.png';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   // const handleLogin = async () => {
//   //   try {
//   //     const res = await fetch("/api/auth/login", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ email, password })
//   //     });
  
//   //     const data = await res.json();
//   //     if (!res.ok) throw new Error(data.error || "Login failed");
  
//   //     console.log("Login successful:", data);
//   //   } catch (error) {
//   //     console.error("Login error:", error.message);
//   //   }
//   // };
  
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);
    
//     try {
//       const response = await axios.post('/api/auth/login', { email, password });
//       if (response.data.success) {
//         // Redirect to dashboard or home page on successful login
//         localStorage.setItem('user', JSON.stringify(response.data));
//         router.push('/');

//       }
//     } catch (err) {
//       console.warn("this is a warning",err.response?.data?.message || 'Login failed');
      
//       setError(err.response?.data?.message || 'Login failed');
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
//                     <a href="" className="btn btn-link">Forgot Password</a>
//                   </div>
//                   <div className="col-xl-12">
//                     <button type="submit" className="btn-main primary-btn w-100 text-center fw-bold mb-2 py-3 btn-second_main shadow">
//                       Login
//                     </button>
//                   </div>
//                 </form>
//                 <div className="col-xl-12">
//                   <a href="" className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-border shadow mb-3">
//                     <Image src={googleImage} width="24" alt="Google Sign In" /> &nbsp;Sign in with Google
//                   </a>
//                 </div>
//                 <div className="col-xl-12 text-center">
//                   <p>Don’t have an account? <a href="/signup" className="textclr fw-bold">Register Here.</a></p>
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



"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import googleImage from "../images/google.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirection
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/"); // Redirect to dashboard after login
    }
  };

  return (
    <section className="py-4 loginform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-us-form">
              <div className="row">
                <div className="col-xl-12 text-center">
                  <h5 className="h3 fw-bold mb-0">Welcome Back</h5>
                  <p>Please enter your details</p>
                </div>
                {error && <p className="text-danger text-center">{error}</p>}
                <form onSubmit={handleLogin} className="w-100">
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Email Address</label>
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label className="fw-bold">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-xl-12 main_flex">
                    <p className="mb-0">
                      <input type="checkbox" /> Remember Me
                    </p>
                    <a href="" className="btn btn-link">Forgot Password</a>
                  </div>
                  <div className="col-xl-12">
                    <button type="submit" className="btn-main primary-btn w-100 text-center fw-bold mb-2 py-3 btn-second_main shadow">
                      Login
                    </button>
                  </div>
                </form>
                <div className="col-xl-12">
                  <button
                    onClick={() => signIn("google")}
                    className="btn-main primary-btn w-100 text-center fw-bold py-3 btn-border shadow mb-3"
                  >
                    <Image src={googleImage} width="24" alt="Google Sign In" /> &nbsp;Sign in with Google
                  </button>
                </div>
                <div className="col-xl-12 text-center">
                  <p>Don’t have an account? <a href="/signup" className="textclr fw-bold">Register Here.</a></p>
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
