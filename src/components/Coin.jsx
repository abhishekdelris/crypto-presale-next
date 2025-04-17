"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import altcoinImage from "../images/altcoin.webp";
import { useRouter } from "next/navigation";
import vactorbg from "../images/vector-row-bg.webp";

import Link from "next/link";

function Coin({ CoinData }) {
  // State for dropdown visibility
  const router = useRouter();
  const [openDropdowns, setOpenDropdowns] = useState({
    chain: false,
    category: false,
    platform: false,
    audit: false,
    kyc: false
  });

  // Define filter states
  const [filters, setFilters] = useState({
    chain: [],
    platform: [],
    stage: "All Stage",
    softCap: "All Caps",
    hardCap: "All Caps"
  });

  // State for filtered data
  const [filteredData, setFilteredData] = useState([]);

  // Get original data
  const data = CoinData.data || CoinData || [];

  // Apply filters whenever filters or data changes
  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  // Filter logic
  const applyFilters = () => {
    let result = [...data];

    // Filter by chain
    if (filters.chain.length > 0) {
      result = result.filter((coin) =>
        filters.chain.includes(coin.chain || "Unknown")
      );
    }

    // Filter by platform
    if (filters.platform.length > 0) {
      result = result.filter((coin) =>
        filters.platform.includes(coin.platform || "Unknown")
      );
    }

    // Filter by stage
    if (filters.stage !== "All Stage") {
      result = result.filter((coin) => {
        const coinStage = handleTypeValue(coin.ico_ido_type);
        return coinStage === filters.stage;
      });
    }

    // Filter by soft cap
    if (filters.softCap !== "All Caps") {
      result = result.filter((coin) => {
        const softCap = coin.soft_cap || 0;
        if (filters.softCap === "$0 - $50,000") {
          return softCap >= 0 && softCap <= 50000;
        } else if (filters.softCap === "$50,000 - $100,000") {
          return softCap > 50000 && softCap <= 100000;
        } else if (filters.softCap === "$100,000+") {
          return softCap > 100000;
        }
        return true;
      });
    }

    // Filter by hard cap
    if (filters.hardCap !== "All Caps") {
      result = result.filter((coin) => {
        const hardCap = coin.hard_cap || 0;
        if (filters.hardCap === "$0 - $100,000") {
          return hardCap >= 0 && hardCap <= 100000;
        } else if (filters.hardCap === "$100,000 - $500,000") {
          return hardCap > 100000 && hardCap <= 500000;
        } else if (filters.hardCap === "$500,000+") {
          return hardCap > 500000;
        }
        return true;
      });
    }

    setFilteredData(result);
  };

  // Toggle dropdown visibility
  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setOpenDropdowns({
      chain: false,
      category: false,
      platform: false,
      audit: false,
      kyc: false
    });
  };

  // Handle checkbox change for dropdowns
  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const currentValues = [...prev[filterType]];

      if (currentValues.includes(value)) {
        // Remove value if already selected
        return {
          ...prev,
          [filterType]: currentValues.filter((item) => item !== value)
        };
      } else {
        // Add value if not selected
        return {
          ...prev,
          [filterType]: [...currentValues, value]
        };
      }
    });
  };

  // Handle select change for dropdowns
  const handleSelectChange = (filterType, event) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: event.target.value
    }));
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
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title d-none">
              <h5 className="h4 fw-semibold">Best Crypto Presales 2024</h5>
              <p>
                Looking for the best and newest crypto presales and ICOs to
                invest in? You're in the right place at Cryptopresale.net. We
                list the most exciting upcoming and active crypto presales of
                2024. Our presales overview gives you all the key details.
                Whether you're new to crypto or a seasoned investor,
                Cryptopresale is your go-to for the top presale opportunities.
              </p>
            </div>
            <div className="filtertable d-none">
              {/* Chain Filter */}
              <div className="filterblock">
                <label>Chain</label>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="dropdown-toggle form-control text-start"
                    type="button"
                    onClick={() => toggleDropdown("chain")}
                  >
                    {filters.chain.length > 0
                      ? `${filters.chain.length} Selected`
                      : "All Chains"}
                  </button>
                  {openDropdowns.chain && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="chain1"
                            checked={filters.chain.includes("Ethereum")}
                            onChange={() =>
                              handleCheckboxChange("chain", "Ethereum")
                            }
                          />
                          <label className="form-check-label" htmlFor="chain1">
                            Ethereum
                          </label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="chain2"
                            checked={filters.chain.includes(
                              "Binance Smart Chain"
                            )}
                            onChange={() =>
                              handleCheckboxChange(
                                "chain",
                                "Binance Smart Chain"
                              )
                            }
                          />
                          <label className="form-check-label" htmlFor="chain2">
                            Binance Smart Chain
                          </label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="chain3"
                            checked={filters.chain.includes("Solana")}
                            onChange={() =>
                              handleCheckboxChange("chain", "Solana")
                            }
                          />
                          <label className="form-check-label" htmlFor="chain3">
                            Solana
                          </label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Stage Filter */}
              <div className="filterblock">
                <label>Stage</label>
                <select
                  className="form-control"
                  value={filters.stage}
                  onChange={(e) => handleSelectChange("stage", e)}
                >
                  <option>All Stage</option>
                  <option>Presale</option>
                  <option>ICO</option>
                  <option>IDO</option>
                  <option>IEO</option>
                </select>
              </div>

              {/* Platform Filter */}
              <div className="filterblock">
                <label>Platform</label>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="dropdown-toggle form-control text-start"
                    type="button"
                    onClick={() => toggleDropdown("platform")}
                  >
                    {filters.platform.length > 0
                      ? `${filters.platform.length} Selected`
                      : "All Platforms"}
                  </button>
                  {openDropdowns.platform && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="platform1"
                            checked={filters.platform.includes("PinkSale")}
                            onChange={() =>
                              handleCheckboxChange("platform", "PinkSale")
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="platform1"
                          >
                            PinkSale
                          </label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="platform2"
                            checked={filters.platform.includes("DxSale")}
                            onChange={() =>
                              handleCheckboxChange("platform", "DxSale")
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="platform2"
                          >
                            DxSale
                          </label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="platform3"
                            checked={filters.platform.includes("UniCrypt")}
                            onChange={() =>
                              handleCheckboxChange("platform", "UniCrypt")
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="platform3"
                          >
                            UniCrypt
                          </label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Soft Cap Filter */}
              <div className="filterblock">
                <label>Soft Cap</label>
                <select
                  className="form-control"
                  value={filters.softCap}
                  onChange={(e) => handleSelectChange("softCap", e)}
                >
                  <option>All Caps</option>
                  <option>$0 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>

              {/* Hard Cap Filter */}
              <div className="filterblock">
                <label>Hard Cap</label>
                <select
                  className="form-control"
                  value={filters.hardCap}
                  onChange={(e) => handleSelectChange("hardCap", e)}
                >
                  <option>All Caps</option>
                  <option>$0 - $100,000</option>
                  <option>$100,000 - $500,000</option>
                  <option>$500,000+</option>
                </select>
              </div>

              {/* Audit Filter (hidden) */}
              <div className="filterblock d-none">
                <div className="d-flex align-items-center gap-2">
                  <label>Audit </label>
                  <label className="switch">
                    <input type="checkbox" />
                    <div className="slider round"></div>
                  </label>
                </div>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="dropdown-toggle form-control text-start"
                    type="button"
                    onClick={() => toggleDropdown("audit")}
                  >
                    Select Companies
                  </button>
                  {openDropdowns.audit && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="audit1"
                          />
                          <label className="form-check-label" htmlFor="audit1">
                            CertiK
                          </label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="audit2"
                          />
                          <label className="form-check-label" htmlFor="audit2">
                            Hacken
                          </label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="audit3"
                          />
                          <label className="form-check-label" htmlFor="audit3">
                            Solidproof
                          </label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* KYC Filter (hidden) */}
              <div className="filterblock d-none">{/* KYC content */}</div>

              {/* Listings Filter (hidden) */}
              <div className="filterblock d-none">{/* Listings content */}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {Object.values(openDropdowns).some((val) => val) && (
        <div
          onClick={closeDropdown}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        />
      )}

      <section className="tablesection pt-4">
        <div className="container mb-4">
          <div className="row">
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
                      <th>Total Boosts</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? (
                      filteredData.map((coin, index) => (
                        <tr key={coin.id || index}>
                          <td>{index + 1}</td>
                          <td>
                            <Image
                              src={
                                coin.image
                                  ? coin.image.startsWith(
                                      "https://d3iuzwoiyg9qa8.cloudfront.net/"
                                    )
                                    ? coin.image
                                    : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${coin.image}`
                                  : altcoinImage
                              }
                              alt={coin.img_alt_title || "ICO Project"}
                              width={32}
                              height={32}
                              className="project-icon me-2"
                            />
                          </td>
                          <td><Link href={`/crypto-ico-details/${coin.slug}`} className="text_customization"> {coin.name} </Link></td>
                          <td>{handleTypeValue(coin.ico_ido_type)}</td>
                          <td>
                            {coin.ico_price
                              ? `${coin.ico_price} (${
                                  coin.accept_type || "USDT"
                                })`
                              : "N/A"}
                          </td>
                          <td> {formatNumber(coin.fund_asking_for)}</td>
                          <td>
                            <div className="row">
                              <div className="col-sm-4">
                                <span>
                                  {calculateSingleDateDifference(
                                    coin.start_time,
                                    coin.end_time
                                  )}
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
                          </td>
                          <td>
                            <div className="info-circle">
                              <Link href={`/crypto-ico-details/${coin.slug}`}>
                                <i className="fa-solid fa-arrow-up-right-from-square hyperlink"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No data available for selected filters
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="text-center mt-4 mb-5">
                  <button
                    className="btn bg-gradient px-4 text-light"
                   
                  >
                    <Link href={"/crypto-token-ico-ido-ieo-presale"} className="text-light" style={{textDecorationLine : "none"}}>
                    View More </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Coin;
