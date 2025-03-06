import React from 'react'

function Login() {
  return (
   <>
    <section class="py-4 loginform">
      <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="contact-us-form">
                        <div class="row">
                            <div class="col-xl-12 text-center">
                                <h5 class="h3 fw-bold mb-0">Welcome Back</h5>
                                <p>Please enter your details</p>
                            </div>
                            
                            <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Email Address</label>
                                <input type="text" class="form-control mb-2" placeholder="Email Address" name="" />
                            </div>
                            <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Password</label>
                                <input type="password" class="form-control" placeholder="Password" name="" />
                            </div>
                            <div class="col-xl-12 main_flex">

                                <p class="mb-0"><input type="checkbox" /> Remember Me</p>
                                <a href="" class="btn btn-link">Forgot Password</a>
                            </div>
                            <div class="col-xl-12">
                                <a href="" class="btn-main primary-btn w-100 text-center fw-bold py-3 btn-second_main shadow">Login</a>
                            </div>
                            <div class="col-xl-12">
                                 <a href="" class="btn-main primary-btn w-100  text-center fw-bold py-3 btn-border shadow mb-3"><img src="http://192.168.1.7/crypto-presale/images/google.png" width="24" /> &nbsp;Sign in with Google</a>
                             </div>
                             <div class="col-xl-12 text-center">
                                 <p>Don’t have an account? <a href="signup.php" class="textclr fw-bold">Register Here.</a></p>
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

export default Login
