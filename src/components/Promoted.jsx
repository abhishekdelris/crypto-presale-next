// export default Promoted
"use client";

import React, { useState } from "react";
import Image from "next/image";
import altcoinImage from "../images/altcoin.webp";
import vactorbg from "../images/vector-row-bg.webp";
import Link from "next/link";
import { useAuth } from '@/hooks/authContext';
import { useRouter } from 'next/navigation';
import LoginModal from "./LoginModal";

function Promoted({ feturedData }) {
  const [selectedOption, setSelectedOption] = useState("");
    const [isLoading, setIsLoading] = useState(false);
      const router = useRouter();
      const { login,isAuthenticated } = useAuth();
      const [showLoginModal, setShowLoginModal] = useState(false);
  
      const handleOpenLoginModal = () => setShowLoginModal(true);
      const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleSubmitForm = () => {
    if(isAuthenticated) {
      router.push('/submit-coin')
    } else {
      handleOpenLoginModal();
    }
  }

  const handleLoginSuccess = (userData) => {
    console.log('User logged in successfully:', userData);
     router.push('/submit-coin');
    // You can add custom logic here after successful login
    // For example, update the UI to show the user is logged in
  };

  const data = feturedData.data || feturedData || [];

  const formatToYYYYMMDD = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getTimeAgo = (timestamp) => {
    if (!timestamp) return "Unknown time";
   const formate =  formatToYYYYMMDD(timestamp)
    const created = new Date(formate);
    const now = new Date();
  
    if (isNaN(created)) return "Invalid date";
  
    const diffInMs = created - now;
    const isFuture = diffInMs > 0;
  
    const absMinutes = Math.floor(Math.abs(diffInMs) / (1000 * 60));
    const absHours = Math.floor(absMinutes / 60);
    const absDays = Math.floor(absMinutes / (60 * 24));
    const absWeeks = Math.floor(absDays / 7);
    const absMonths = Math.floor(absDays / 30); // Approximation
  
    // const suffix = isFuture ? "from now" : "ago";
  
    if (absMinutes < 60) {
      return `${absMinutes} minute${absMinutes !== 1 ? "s" : ""} `;
    } else if (absHours < 24) {
      return `${absHours} hour${absHours !== 1 ? "s" : ""} `;
    } else if (absDays < 7) {
      return `${absDays} day${absDays !== 1 ? "s" : ""} `;
    } else if (absWeeks < 4) {
      return `${absWeeks} week${absWeeks !== 1 ? "s" : ""} `;
    } else {
      return `${absMonths} month${absMonths !== 1 ? "s" : ""} `;
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(2).replace(/\.00$/, "") + "K";
    return num?.toString() || "N/A";
  }

  function calculateSingleDateDifference(startDate, endDate) {
    if (!startDate || !endDate) return "N/A";

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end < start) return "Invalid date range";

    const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    if (totalDays >= 30) return `${Math.floor(totalDays / 30)} months`;
    if (totalDays >= 7) return `${Math.floor(totalDays / 7)} weeks`;
    return `${totalDays} days`;
  }

  const handleTypeValue = (num) => {
    switch (num) {
      case 0:
        return "ICO";
      case 1:
        return "IDO";
      case 2:
        return "IEO"; 
      case 3:
        return "Presale";
      default:
        return "Presale";
    }
  };

  return (
    <section className="tablesection pt-4">
      <div className="container mb-4">
        <div className="row">
          <div className="col-xl-12">
            <div className="table_block">
              <div className="table_top main_flex">
                <h6 className="h4 fw-semibold mb-0">Featured</h6>
                <p onClick={handleSubmitForm} className="btn btn-link text-presale">
                  Submit your project!
                </p>
              </div>
              <div className="table_main">
                <div className="table-responsive">
                  <table className="table table-bg table-striped table-manage">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Coin</th>
                        <th>Name</th>
                        <th>Stage</th>
                        <th>Price</th>
                        <th>Fundraising Goal</th>
                        <th>Duration</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((item, index) => (
                          <tr key={item.id || index}>
                            <td>{index + 1}</td>
                            <td>
                              <Image
                                src={
                                  item.image
                                    ? item.image.startsWith(
                                        "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                      )
                                      ? item.image
                                      : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${item.image}`
                                    : altcoinImage
                                }
                                alt={item.img_alt_title || "ICO Project"}
                                width={32}
                                height={32}
                                className="project-icon me-2"
                              />
                            </td>
                            <td><Link href={`/crypto-ico-details/${item.slug}`} className="text_customization"> {item.name} </Link></td>
                            <td>{handleTypeValue(item.ico_ido_type)}</td>
                            <td>
                              {item.ico_price
                                ? `${item.ico_price} (${
                                    item.accept_type || "USDT"
                                  })`
                                : "N/A"}
                            </td>
                            <td> {formatNumber(item.fund_asking_for)}</td>
                            <td>
                              <div className="row">
                                <div className="col-sm-4">
                                  <span 
                                   data-bs-toggle="tooltip"
                                   data-bs-placement="top"
                                   title={`Start from ${formatToYYYYMMDD(item.start_time)} to ${formatToYYYYMMDD(item.end_time)}`}
                                   className="custom-tooltip"
                                  >
                                    {getTimeAgo(item.end_time)}
                                  </span>
                                </div>
                                <div className="col-sm-4">
                                  <button className="btn-main primary-btn small px-4 btn-second_main">
                                  fuel
                                  </button>
                                </div>
                                <div className="col-sm-4">
                                  <i className="fa-regular fa-star"></i>
                                </div>
                              </div>
                              {/* <div className="main_flex_Gap">
                                <span>
                                  {calculateSingleDateDifference(
                                    item.start_time,
                                    item.end_time
                                  )}
                                </span>
                                <button className="btn-main primary-btn small px-4 btn-second_main">
                                  Hodl
                                </button>
                                <i className="fa-regular fa-star"></i>
                              </div> */}
                            </td>
                            <td>
                            <div className="info-circle">
                              <Link href={`/crypto-ico-details/${item.slug}`}>
                                <i className="fa-solid fa-arrow-up-right-from-square hyperlink"></i>
                              </Link>
                            </div>
                          </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center">
                            No featured data available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={vactorbg} alt="vector" className="centertable" />
      <LoginModal 
        show={showLoginModal} 
        handleClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </section>
  );
}

export default Promoted;
