'use client'
import React, { useState } from 'react';

// Reusable Dropdown Component
const Dropdown = ({  
  label, 
  options, 
  type = 'checkbox',
  placeholder = 'Select Options' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (option) => {
    if (type === 'checkbox') {
      // Toggle checkbox selection
      setSelectedOptions(prev => 
        prev.includes(option) 
          ? prev.filter(item => item !== option)
          : [...prev, option]
      );
    } else {
      // Radio button selection
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (selectedOptions.length === 0) return placeholder;
    return selectedOptions.join(', ');
  };

  return (
    <div className="filterblock relative">
      <label className="block mb-2">{label}</label>
      <div className="relative">
        <button 
          onClick={toggleDropdown}
          className="dropdown-toggle form-control text-start w-full flex justify-between items-center"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="truncate">{getDisplayText()}</span>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>

        {isOpen && (
          <div 
            className="absolute z-10 w-full bg-white border rounded shadow-lg mt-1"
            role="menu"
          >
            {['Option 1', 'Option 2', 'Option 3'].map((option) => (
              <div 
                key={option} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                <label className="flex items-center">
                  <input
                    type={type}
                    name={label.toLowerCase().replace(' ', '-')}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
function PresaleFilters() {
  return (
    <div className="container">
          <div className="row">
                <div className="col-xl-12">
                    <div className="section-title">
                        <h5 className="h4 fw-semibold">Best Crypto Presales 2024</h5>
                        <p>Looking for the best and newest crypto presales and ICOs to invest in? You're in the right place at Cryptopresale.net. We list the most exciting upcoming and active crypto presales of 2024. Our presales overview gives you all the key details. Whether you're new to crypto or a seasoned investor, Cryptopresale is your go-to for the top presale opportunities.</p>
                    </div>
                    </div>
      <div className="filtertable grid  md:grid-cols-3 ">
        <Dropdown 
          label="Chain" 
          type="checkbox"
          placeholder="All Chains"
        />
        <Dropdown 
          label="Category" 
          type="checkbox"
          placeholder="All Categories"
        />
        <Dropdown 
          label="Platform" 
          type="checkbox"
          placeholder="All Platforms"
        />
        
        {/* Soft Cap and Hard Cap Dropdowns */}
        <div className="filterblock">
          <label className="block mb-2">Soft Cap</label>
          <select className="form-control w-full">
            <option>All Soft Caps</option>
            <option>0-1000</option>
            <option>1000-5000</option>
            <option>5000-10000</option>
          </select>
        </div>

        <div className="filterblock">
          <label className="block mb-2">Hard Cap</label>
          <select className="form-control w-full">
            <option>All Hard Caps</option>
            <option>0-5000</option>
            <option>5000-10000</option>
            <option>10000+</option>
          </select>
        </div>

        {/* Audit and KYC Sections */}
        <div className="filterblock flex items-center gap-2">
          <label>Audit</label>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>    
          </label>
          
        </div>

        <div className="filterblock flex items-center gap-2 ">
          <label>KYC</label>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
          
        </div>
         <div class="filterblock">
                            <label class="mb-1">Listings</label>
                            <div class="radio-toolbar">
                              <input type="radio" id="radio1" name="radios" value="all" checked />
                              <label for="radio1">Show All</label>
                              <input type="radio" id="radio2" name="radios" value="false" />
                              <label for="radio2">Presale Live</label>
                              <input type="radio" id="radio3" name="radios" value="true" />
                              <label for="radio3">Presale Upcoming</label>
                              <input type="radio" id="radio4" name="radios" value="true" />
                              <label for="radio4">Fair Launch Live</label>
                              <input type="radio" id="radio5" name="radios" value="true" />
                              <label for="radio5">Fair Launch Upcoming</label>
                            </div>
                        </div>
        
      </div>
    </div>
    </div>
  );
}

export default PresaleFilters;

// import { useState } from "react";

// const PresaleFilters = () => {
//   const [audit, setAudit] = useState(false);
//   const [kyc, setKyc] = useState(false);
//   const [selectedListing, setSelectedListing] = useState("Presale Live");

//   return (
//     <div className="container p-3 bg-light rounded">
//       <div className="row g-2">
//         <div className="col-md-2">
//           <label className="form-label">Chain</label>
//           <select className="form-select">
//             <option>All Chains</option>
//           </select>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">Category</label>
//           <select className="form-select">
//             <option>All Categories</option>
//           </select>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">Platform</label>
//           <select className="form-select">
//             <option>All Platforms</option>
//           </select>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">Soft Cap</label>
//           <select className="form-select">
//             <option>All Chains</option>
//           </select>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">Hard Cap</label>
//           <select className="form-select">
//             <option>All Chains</option>
//           </select>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">Audit</label>
//           <div className="form-check form-switch">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={audit}
//               onChange={() => setAudit(!audit)}
//             />
//           </div>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">KYC</label>
//           <div className="form-check form-switch">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={kyc}
//               onChange={() => setKyc(!kyc)}
//             />
//           </div>
//         </div>
//         <div className="col-md-2">
//           <label className="form-label">Audit Company</label>
//           <select className="form-select">
//             <option>Select Companies</option>
//           </select>
//         </div>
//         <div className="col-md-2Fair">
//           <label className="form-label">KYC Tier</label>
//           <select className="form-select">
//             <option>Select Tiers</option>
//           </select>
//         </div>
//       </div>
//       <div className="mt-3 d-flex gap-2">
//         {["Show All", "Presale Live", "Presale Upcoming", "Fair Launch Live", "Fair Launch Upcoming"].map((item) => (
//           <button
//             key={item}
//             className={`btn ${selectedListing === item ? "btn-dark" : "btn-outline-dark"}`}
//             onClick={() => setSelectedListing(item)}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PresaleFilters;



// import { useState } from "react";
// import Image from "next/image";

// const PresaleFilters = () => {
//   const [audit, setAudit] = useState(false);
//   const [kyc, setKyc] = useState(false);
//   const [selectedListing, setSelectedListing] = useState("all");

//   // Dummy data for table
//   const presaleData = [
//     {
//       id: 1,
//       imgSrc: "/images/altcoin.webp",
//       name: "LCAI",
//       badge: "Warning",
//       marketCap: "Presale",
//       price: "-",
//       hardcap: "9000",
//       launch: "In 3 months",
//     },
//     {
//       id: 2,
//       imgSrc: "/images/altcoin.webp",
//       name: "LCAI",
//       badge: "Warning",
//       marketCap: "Presale",
//       price: "-",
//       hardcap: "9000",
//       launch: "In 3 months",
//     },
//   ];

//   return (
//     <div className="container mt-4">
//       <div className="section-title text-center">
//         <h4 className="fw-semibold">Best Crypto Presales 2024</h4>
//         <p>
//           Looking for the best and newest crypto presales and ICOs to invest in?
//           You're in the right place at Cryptopresale.net. We list the most
//           exciting upcoming and active crypto presales of 2024.
//         </p>
//       </div>

//       {/* Filter Section */}
//       <div className="filtertable p-3 bg-light rounded">
//         <div className="row g-3">
//           {/* Chain Dropdown */}
//           <div className="col-md-2">
//             <label>Chain</label>
//             <select className="form-control">
//               <option>All Chains</option>
//             </select>
//           </div>

//           {/* Category Dropdown */}
//           <div className="col-md-2">
//             <label>Category</label>
//             <select className="form-control">
//               <option>All Categories</option>
//             </select>
//           </div>

//           {/* Platform Dropdown */}
//           <div className="col-md-2">
//             <label>Platform</label>
//             <select className="form-control">
//               <option>All Platforms</option>
//             </select>
//           </div>

//           {/* Soft Cap */}
//           <div className="col-md-2">
//             <label>Soft Cap</label>
//             <select className="form-control">
//               <option>All Chains</option>
//             </select>
//           </div>

//           {/* Hard Cap */}
//           <div className="col-md-2">
//             <label>Hard Cap</label>
//             <select className="form-control">
//               <option>All Chains</option>
//             </select>
//           </div>

//           {/* Audit Toggle */}
//           <div className="col-md-2">
//             <label>Audit</label>
//             <div className="form-check form-switch">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 checked={audit}
//                 onChange={() => setAudit(!audit)}
//               />
//             </div>
//             <select className="form-control">
//               <option>Select Companies</option>
//             </select>
//           </div>

//           {/* KYC Toggle */}
//           <div className="col-md-2">
//             <label>KYC</label>
//             <div className="form-check form-switch">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 checked={kyc}
//                 onChange={() => setKyc(!kyc)}
//               />
//             </div>
//             <select className="form-control">
//               <option>Select Tiers</option>
//             </select>
//           </div>

          
//         </div>

//         {/* Listings Filter */}
//         <div className="mt-3 d-flex gap-2">
//           {[
//             { label: "Show All", value: "all" },
//             { label: "Presale Live", value: "presale_live" },
//             { label: "Presale Upcoming", value: "presale_upcoming" },
//             { label: "Fair Launch Live", value: "fair_launch_live" },
//             { label: "Fair Launch Upcoming", value: "fair_launch_upcoming" },
//           ].map((item) => (
//             <button
//               key={item.value}
//               className={`btn ${
//                 selectedListing === item.value ? "btn-dark" : "btn-outline-dark"
//               }`}
//               onClick={() => setSelectedListing(item.value)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="table-responsive mt-4">
//         <table className="table table-bg table-striped">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Coin</th>
//               <th>Name</th>
//               <th>Badges</th>
//               <th>Market Cap</th>
//               <th>Price</th>
//               <th>Change 24h</th>
//               <th>Launch</th>
//               <th>Total Boosts</th>
//             </tr>
//           </thead>
//           <tbody>
//             {presaleData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>
//                   <Image src={item.imgSrc} width={30} height={30} alt="coin" />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>
//                   <span className="badge rounded-pill bg-warning text-dark">
//                     {item.badge}
//                   </span>
//                 </td>
//                 <td>{item.marketCap}</td>
//                 <td>{item.price}</td>
//                 <td>
//                   <span>Hardcap {item.hardcap}</span>
//                 </td>
//                 <td>{item.launch}</td>
//                 <td>
//                   <div className="d-flex align-items-center gap-2">
//                     <span>{item.launch}</span>
//                     <button className="btn btn-primary btn-sm">Boost</button>
//                     <i className="fa-regular fa-star"></i>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PresaleFilters;
