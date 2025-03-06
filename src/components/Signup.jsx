import React from 'react'

function Signup() {
  return (
    <div>
     <section class="py-4 loginform">
      <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="contact-us-form">
                        <div class="row">
                            <div class="col-xl-12 text-center">
                                <h5 class="h3 fw-bold mb-0">Join Us Today!</h5>
                                <p>Create your account to get started!</p>
                            </div>
                            
                            <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Name</label>
                                <input type="text" class="form-control mb-2" placeholder="Full Name" name=""/>
                            </div>
                              <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Email Address</label>
                                <input type="text" class="form-control mb-2" placeholder="Email Address" name=""/>
                            </div>
                            <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Password</label>
                                <input type="password" class="form-control" placeholder="Password" name=""/>
                                
                            </div>
                              <div class="col-xl-12 mb-2">
                                <label class="fw-bold">Confirm Password</label>
                                <input type="password" class="form-control" placeholder="Confirm Password" name=""/>
                                
                            </div>
                            <div class="col-xl-6">
                                <a href="" class="btn-main primary-btn w-75 text-center fw-bold py-3 btn-second_main shadow">Register</a>
                            </div>
                             <div class="col-xl-12 text-center">
                                 <p>Already have an account? <a href="login.php" class="textclr fw-bold">Login Here.</a></p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  </section> 
    </div>
  )
}

export default Signup
