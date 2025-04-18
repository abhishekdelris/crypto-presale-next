"use client";
import nextConfig from "../../../next.config";
// import { auth } from "../../../shared/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Alert, Button, Card, Col, Nav, OverlayTrigger, Row, Tab, Tooltip, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from '../../hooks/admin_authContext';


// Form validation schema
// const validateForm = (values) => {
//   const errors = {};
  
//   // Email validation
//   if (!values.email) {
//     errors.email = 'Email is required';
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = 'Email is invalid';
//   }
  
//   // Password validation
//   if (!values.password) {
//     errors.password = 'Password is required';
//   } else if (values.password.length < 6) {
//     errors.password = 'Password must be at least 6 characters';
//   }
  
//   return errors;
// };

export default function Home() {

  const { login } = useAuth();

  const [passwordshow, setpasswordshow] = useState(false);
  const [passwordshow1, setpasswordshow1] = useState(false);

  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  // const Login = (e) => {
  //   e.preventDefault();
  //   auth.signInWithEmailAndPassword(email, password).then(
  //     user => { console.log(user); RouteChange(); }).catch(err => { setError(err.message); });
  // };


  let { basePath } = nextConfig;
  const router = useRouter();
  const RouteChange = () => {
    let path = "/admin/dashboard";
    router.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "adminnextjs@gmail.com",
      password: "1234567890"
    },
  });

  const onSubmit = async (data) => {
    try {
      // const validationErrors = validateForm(formData);
      // setError(validationErrors);
      
      // // If there are validation errors, don't submit
      // if (Object.keys(validationErrors).length > 0) {
      //   return;
      // }
      console.log("login data...........!",data)
      await login(data?.email, data?.password);
      console.log("login successful.....!");
      return RouteChange();
     
      
    } catch (err) {
      setError(err.message || 'Login failed');
    }
    console.log(data)
    // if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
    //   return RouteChange();
    // }
    // else {
    //   reset();
    //   setError("the auction details does not matched");
    //   // setValue("email", "adminnextjs@gmail.com")
    //   // setValue("password", "1234567890")
    // }
  };

  return (
    <Fragment>
      <html>
        <body className="authentication-background" suppressHydrationWarning={true}>
          <div className="page main-signin-wrapper">

            <Row className="signpages text-center">
              <Col md={12}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  {/* <Nav variant="pills" className='d-inline-flex bg-white p-2 rounded-2'>
                    <Nav.Item><OverlayTrigger overlay={<Tooltip>Nextjs</Tooltip>}><Nav.Link eventKey="first"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjslogo.png`} /></Nav.Link></OverlayTrigger></Nav.Item>
                    <Nav.Item><OverlayTrigger overlay={<Tooltip>Firebase</Tooltip>}><Nav.Link eventKey="second"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/firbase.png`} /></Nav.Link></OverlayTrigger></Nav.Item>
                  </Nav> */}
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Card className="mb-0">
                        <Row className="row-sm">

                          <Col lg={6} xl={5} className="d-none d-lg-block text-center bg-primary details">
                            <div className="mt-5 pt-4 p-2 position-absolute">
                              <Link scroll={false} href={"/admin/dashboard/"}><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/logo.png`} className="header-brand-img mb-4" alt="logo" /></Link>
                              <div className="clearfix"></div>
                              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/svgs/user.svg`} className="ht-100 mb-0" alt="user" />
                              <h5 className="mt-4">Create Your Account</h5>
                              <span className="text-white-6 fs-13 mb-5 mt-xl-0">Signup to create, discover and connect with the global community</span>
                            </div>
                          </Col>
                          <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                            <div className="main-container container-fluid">
                              <Row className="row-sm">
                                <Card.Body className="mt-2 mb-2">
                                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/logo.png`} className="d-lg-none header-brand-img text-start float-start mb-4 error-logo-light" alt="logo" />
                                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/logo.png`} className="d-lg-none header-brand-img text-start float-start mb-4 error-logo" alt="logo" />
                                  <div className="clearfix"></div>
                                  <form onSubmit={handleSubmit((onSubmit))}>
                                    <h5 className="text-start mb-2">Signin to Your Account</h5>
                                    <p className="mb-4 text-muted fs-13 ms-0 text-start">Signin to create, discover and connect with the global community</p>
                                    {err && <Alert variant="danger">{err}</Alert>}
                                    <Form.Group className="text-start form-group">
                                      <Form.Label>Email</Form.Label>
                                      <input type="text"  {...register("email", {
                                        required:
                                        {
                                          value: true,
                                          message: "Email is required"
                                        },
                                        pattern:
                                        {
                                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                          message: "This input is pattern only."
                                        }

                                      })} className="form-control" />
                                      {errors.email && <p className="mt-2 text-danger">{errors.email?.message} </p>}
                                    </Form.Group>
                                    <div className="text-start form-group">
                                      <Form.Label>Password</Form.Label>
                                      <div className="input-group">
                                        <input type={(passwordshow) ? 'text' : "password"}
                                          {...register("password", {
                                            required:
                                            {
                                              value: true,
                                              message: "Password is required"
                                            },
                                            maxLength: {
                                              value: 10,
                                              message: "This input must exceed 10 characters"
                                            }
                                          })} className="form-control"
                                        />

                                        <button className="btn btn-light bg-transparent" type="button"
                                          onClick={() => setpasswordshow(!passwordshow)} id="button-addon2">
                                          <i className={`${passwordshow ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></button>
                                      </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                      <input type="submit" defaultValue="Sign In" className="btn btn-primary" />
                                    </div>
                                  </form>
                                  <div className="text-start mt-5 ms-0">
                                    <div className="mb-1"><Link scroll={false} href={"/authentication/resetpassword/"}>Forgot password?</Link></div>
                                    <div>Don't have an account? <Link scroll={false} href={"/authentication/signup/"}>Register Here</Link></div>
                                  </div>
                                </Card.Body>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Card className="mb-0">
                        <Row className="row-sm">

                          <Col lg={6} xl={5} className="d-none d-lg-block text-center bg-primary details">
                            <div className="mt-5 pt-4 p-2 position-absolute">
                              <Link  scroll={false} href={"/admin/dashboard/"}><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-white.png`} className="header-brand-img mb-4" alt="logo" /></Link>
                              <div className="clearfix"></div>
                              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/svgs/user.svg`} className="ht-100 mb-0" alt="user" />
                              <h5 className="mt-4">Create Your Account</h5>
                              <span className="text-white-6 fs-13 mb-5 mt-xl-0">Signup to create, discover and connect with the global community</span>
                            </div>
                          </Col>
                          <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                            <div className="main-container container-fluid">
                              <Row className="row-sm">
                                <Card.Body className="mt-2 mb-2">
                                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-white.png`} className="d-lg-none header-brand-img text-start float-start mb-4 error-logo-light" alt="logo" />
                                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} className="d-lg-none header-brand-img text-start float-start mb-4 error-logo" alt="logo" />
                                  <div className="clearfix"></div>
                                  <form>
                                    <h5 className="text-start mb-2">Signin to Your Account</h5>
                                    <p className="mb-4 text-muted fs-13 ms-0 text-start">Signin to create, discover and connect with the global community</p>
                                    {err && <Alert variant="danger">{err}</Alert>}
                                    <Form.Group className="text-start form-group">
                                      <Form.Label>Email</Form.Label>
                                      <input type="text" className="form-control" id="signin-username" placeholder="user name" name="email"
                                        value={email}
                                        onChange={changeHandler}
                                        required />
                                    </Form.Group>
                                    <div className="text-start form-group">
                                      <Form.Label>Password</Form.Label>
                                      <div className="input-group">
                                        <input className="form-control" id="signin-password" placeholder="password" name="password"
                                          type={(passwordshow1) ? "text" : "password"}
                                          value={password}
                                          onChange={changeHandler}
                                          required />

                                        <button className="btn btn-light bg-transparent" type="button"
                                          onClick={() => setpasswordshow1(!passwordshow1)} id="button-addon2">
                                          <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></button>
                                      </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                      <input type="submit" defaultValue="Sign In" className="btn btn-primary" />
                                    </div>
                                  </form>
                                  <div className="text-start mt-5 ms-0">
                                    <div className="mb-1"><Link scroll={false} href={"admin/authentication/resetpassword/"}>Forgot password?</Link></div>
                                    <div>Don't have an account? <Link scroll={false} href={"admin/authentication/signup/"}>Register Here</Link></div>
                                  </div>
                                </Card.Body>
                              </Row>
                            </div>
                          </Col>

                        </Row>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </div>
        </body>
      </html>
    </Fragment>
  );
}
