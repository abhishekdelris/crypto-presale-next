import React from 'react'
import Image from 'next/image';
import googleImage from "../images/google.png";

function ForgotPass() {
  return (
   <>
    <section class="py-4 loginform">
      <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="contact-us-form">
                        <div class="row">
                            <div class="col-xl-12 text-center">
                                <h5 class="h3 fw-bold mb-0">Forgot Password</h5>
                                <p>Enter your email address below to reset your password.</p>
                            </div>
                            
                            <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Email </label>
                                <input type="text" class="form-control mb-2" placeholder="Email Address" name="" />
                            </div>
                            
                            <div class="col-xl-12 main_flex">

                                 
                                <a href="" class="btn btn-link">Back to login</a>
                            </div>
                            <div class="col-xl-12">
                                <a href="" class="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow">Email Password Reset Link</a>
                            </div>
                           
                        </div>
                    </div>
            </div>
        </div>
    </div>
  </section>
   </>
  )
}

export default ForgotPass
