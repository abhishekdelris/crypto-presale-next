"use client"
import React, { useState } from 'react';

function PresaleFilters() {
  // State to track dropdown open/close states
  const [openDropdowns, setOpenDropdowns] = useState({
    chain: false,
    category: false,
    platform: false,
    audit: false,
    kyc: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns(prev => ({
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
      kyc: false,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h5 className="h4 fw-semibold">Best Crypto Presales 2024</h5>
              <p>Looking for the best and newest crypto presales and ICOs to invest in? You're in the right place at Cryptopresale.net. We list the most exciting upcoming and active crypto presales of 2024. Our presales overview gives you all the key details. Whether you're new to crypto or a seasoned investor, Cryptopresale is your go-to for the top presale opportunities.</p>
            </div>
            <div className="filtertable">
              {/* Chain Filter */}
              <div className="filterblock">
                <label>Chain</label>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="dropdown-toggle form-control text-start" 
                    type="button"
                    onClick={() => toggleDropdown('chain')}
                  >
                    All Chains
                  </button>
                  {openDropdowns.chain && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="chain1" />
                          <label className="form-check-label" htmlFor="chain1">Ethereum</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="chain2" />
                          <label className="form-check-label" htmlFor="chain2">Binance Smart Chain</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="chain3" />
                          <label className="form-check-label" htmlFor="chain3">Solana</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="filterblock">
                <label>Category</label>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="dropdown-toggle form-control text-start" 
                    type="button"
                    onClick={() => toggleDropdown('category')}
                  >
                    All Categories
                  </button>
                  {openDropdowns.category && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="category1" />
                          <label className="form-check-label" htmlFor="category1">DeFi</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="category2" />
                          <label className="form-check-label" htmlFor="category2">GameFi</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="category3" />
                          <label className="form-check-label" htmlFor="category3">Meme</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Platform Filter */}
              <div className="filterblock">
                <label>Platform</label>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="dropdown-toggle form-control text-start" 
                    type="button"
                    onClick={() => toggleDropdown('platform')}
                  >
                    All Platforms
                  </button>
                  {openDropdowns.platform && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="platform1" />
                          <label className="form-check-label" htmlFor="platform1">PinkSale</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="platform2" />
                          <label className="form-check-label" htmlFor="platform2">DxSale</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="platform3" />
                          <label className="form-check-label" htmlFor="platform3">UniCrypt</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Soft Cap Filter */}
              <div className="filterblock">
                <label>Soft Cap</label>
                <select className="form-control">
                  <option>All Caps</option>
                  <option>$0 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>

              {/* Hard Cap Filter */}
              <div className="filterblock">
                <label>Hard Cap</label>
                <select className="form-control">
                  <option>All Caps</option>
                  <option>$0 - $100,000</option>
                  <option>$100,000 - $500,000</option>
                  <option>$500,000+</option>
                </select>
              </div>

              {/* Audit Filter */}
              <div className="filterblock">
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
                    onClick={() => toggleDropdown('audit')}
                  >
                    Select Companies
                  </button>
                  {openDropdowns.audit && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="audit1" />
                          <label className="form-check-label" htmlFor="audit1">CertiK</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="audit2" />
                          <label className="form-check-label" htmlFor="audit2">Hacken</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="audit3" />
                          <label className="form-check-label" htmlFor="audit3">Solidproof</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* KYC Filter */}
              <div className="filterblock">
                <div className="d-flex align-items-center gap-2">
                  <label>KYC </label>
                  <label className="switch"> 
                    <input type="checkbox" />
                    <div className="slider round"></div>
                  </label>
                </div>
                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="dropdown-toggle form-control text-start" 
                    type="button"
                    onClick={() => toggleDropdown('kyc')}
                  >
                    Select Tiers
                  </button>
                  {openDropdowns.kyc && (
                    <ul className="dropdown-menu show">
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="kyc1" />
                          <label className="form-check-label" htmlFor="kyc1">Tier 1</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="kyc2" />
                          <label className="form-check-label" htmlFor="kyc2">Tier 2</label>
                        </div>
                      </li>
                      <li className="dropdown-item">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="kyc3" />
                          <label className="form-check-label" htmlFor="kyc3">Tier 3</label>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Listings Filter */}
              <div className="filterblock">
                <label className="mb-1">Listings</label>
                <div className="radio-toolbar">
                  <input type="radio" id="radio1" name="radios" value="all" defaultChecked />
                  <label htmlFor="radio1">Show All</label>
                  <input type="radio" id="radio2" name="radios" value="false" />
                  <label htmlFor="radio2">Presale Live</label>
                  <input type="radio" id="radio3" name="radios" value="true" />
                  <label htmlFor="radio3">Presale Upcoming</label>
                  <input type="radio" id="radio4" name="radios" value="fairLaunchLive" />
                  <label htmlFor="radio4">Fair Launch Live</label>
                  <input type="radio" id="radio5" name="radios" value="fairLaunchUpcoming" />
                  <label htmlFor="radio5">Fair Launch Upcoming</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Close dropdowns when clicking outside */}
      {Object.values(openDropdowns).some(val => val) && (
        <div 
          onClick={closeDropdown}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        />
      )}
    </>
  );
}

export default PresaleFilters;
