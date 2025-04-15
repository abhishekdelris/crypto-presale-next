// export default Promoted
"use client";

import React, { useState } from "react";
import Image from "next/image";
import altcoinImage from "../images/altcoin.webp";
import vactorbg from "../images/vector-row-bg.webp";
import Link from "next/link";

function Promoted({ feturedData }) {
  const [selectedOption, setSelectedOption] = useState("");

  const data = feturedData.data || [];

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
                <Link href="/submit_coin" className="btn btn-link text-presale">
                  Your coin here? Contact us!
                </Link>
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
                        <th>Hardcap</th>
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
                            <td>{item.name}</td>
                            <td>{handleTypeValue(item.ico_ido_type)}</td>
                            <td>
                              {item.ico_price
                                ? `${item.ico_price} (${
                                    item.accept_type || "USDT"
                                  })`
                                : "N/A"}
                            </td>
                            <td>Hardcap {formatNumber(item.hard_cap)}</td>
                            <td>
                              <div className="row">
                                <div className="col-sm-4">
                                  <span>
                                    {calculateSingleDateDifference(
                                      item.start_time,
                                      item.end_time
                                    )}
                                  </span>
                                </div>
                                <div className="col-sm-4">
                                  <button className="btn-main primary-btn small px-4 btn-second_main">
                                    Hodl
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
                              <Link href={`/crypto-ico-details/${data.slug}`}>
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
    </section>
  );
}

export default Promoted;
