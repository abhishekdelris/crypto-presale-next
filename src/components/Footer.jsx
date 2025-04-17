"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/authContext";
import { useRouter } from "next/navigation";
import LoginModal from "./LoginModal";

function Footer() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleSubmitForm = () => {
    if (isAuthenticated) {
      router.push("/submit_coin");
    } else {
      handleOpenLoginModal();
    }
  };

  const handleLoginSuccess = (userData) => {
    console.log("User logged in successfully:", userData);
    router.push("/submit_coin");
    // You can add custom logic here after successful login
    // For example, update the UI to show the user is logged in
  };
  return (
    <>
      <footer className="footer-04">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">
                <Link href="#" className="logo">
                  Crypto Presale
                </Link>
              </h2>
              <p>
                Crypto presales are offering opportunities for early investment
                in various projects. emphasizing potential growth and innovative
                features like Layer 1 Web3 aggregation and DeFi wallet
                technology.{" "}
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-md-0 mb-4">
              <h2 className="footer-heading">Categories</h2>
              <ul className="footermenu">
                {/* <li> <Link href="/">Home</Link> </li> */}
                <li>
                  <Link className="d-block" href="/listings">
                    New listings
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-link p-0 d-block text-start"
                    style={{textDecoration : 'none', color : "darkgray"}}
                    onClick={handleSubmitForm}
                  >
                    Submit Coin
                  </button>
                </li>

                <li>
                  <Link className="d-block" href="/edit-ico-presale-coins">
                    Update Request
                  </Link>
                </li>
                <li>
                  <Link className="d-block " href="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="d-block" href="/advertise">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link className="d-block" href="/press_release">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 mb-md-0 mb-4">
              <h2 className="footer-heading">Follow us</h2>
              <ul className="ftco-footer-social p-0 main_flex_Gap">
                <li className="ftco-animate">
                  <Link href="#" title="Twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
                <li className="ftco-animate">
                  <Link href="#" title="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="ftco-animate">
                  <Link href="#" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li className="ftco-animate">
                  <Link href="#" title="Linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4 d-none">
              <h2 className="footer-heading">Subcribe</h2>
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Enter email address"
                  />
                  <button
                    type="submit"
                    className="form-control submit rounded-right"
                  >
                    <span className="sr-only">Submit</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-100 mt-5 border-top py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="copyright mb-0">
                  Copyright © 2025 Crypto Presale. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <LoginModal
          show={showLoginModal}
          handleClose={handleCloseLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />
      </footer>
    </>
  );
}

export default Footer;
