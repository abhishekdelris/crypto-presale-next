// "use client"

// import React, { useState } from 'react';
// import Image from 'next/image';
// import altcoinImage from "../images/altcoin.webp";
// import { useRouter } from "next/navigation";
// import Link from 'next/link';

// export default function ClientSideICO({ icoData }) {
//   const [selectedOption, setSelectedOption] = useState('option1');
//   const router = useRouter(); 
//   const [visibleData, setVisibleData] = useState(15);


//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   function formatNumber(num) {
//     if (num >= 1e9) {
//       return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B';
//     } else if (num >= 1e6) {
//       return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M';
//     } else if (num >= 1e3) {
//       return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K';
//     }
//     return num.toString() ? num.toString() : num;
//   }

//   function calculateSingleDateDifference(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
  
//     if (end < start) {
//       return "End date must be greater than start date.";
//     }
  
//     const timeDifference = end - start;
//     const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
//     const totalMonths = Math.floor(totalDays / 30);
//     const totalWeeks = Math.floor(totalDays / 7);
  
//     if (totalMonths > 0) {
//       return `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
//     } else if (totalWeeks > 0) {
//       return `${totalWeeks} week${totalWeeks !== 1 ? 's' : ''}`;
//     } else {
//       return `${totalDays} day${totalDays !== 1 ? 's' : ''}`;
//     }
//   }
//   // Filter the featured data first
// //   const filteredData = icoData?.data?.filter((ico) => ico.featured === 1) || [];
// // Sort the data: Featured first, then others
// const sortedData = (icoData?.data || []).sort((a, b) => (b.featured - a.featured));

// // Paginate the data
// const paginatedData = sortedData.slice(0, visibleData);

//   // Paginate the data
// //   const paginatedData = filteredData.slice(0, visibleData);

//   // Load More function
//   const handleLoadMore = () => {
//     setVisibleData((prev) => prev + 15);
//   };
  
 
//   return (
//     <>
//       {/* Filter Tabs */}
//       <div className="btn-group mb-4">
//         <button className="btn btn-light tab-button" onClick={() => router.push("/crypto-token-ico-ido-ieo-presale")}>All</button>
//         <button className="btn btn-light tab-button " onClick={() => router.push("/ico")}>
//           Crypto ICO
//         </button>
//         <button className="btn btn-light tab-button active-tab" onClick={() => router.push("/ido")}>Crypto IDO</button>
//         <button className="btn btn-light tab-button" onClick={() => router.push('/ieo')}>Crypto IEO</button>
//         <button className="btn btn-light tab-button" onClick={() => router.push('/presale')}>Crypto Presale</button>
//       </div>
      
//       {/* Search Bar */}
//       <div className="row mb-4">
//         <div className="col-md-5">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search By Keyword..."
//           />
//         </div>
//         <div className="col-md-3">
//           <select value={selectedOption} onChange={handleSelectChange} className="form-select">
//             <option value="option1">Selected Date</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </select>
//         </div>
//         <div className="col-md-3">
//           <select value={selectedOption} onChange={handleSelectChange} className="form-select">
//             <option value="option1">Selected Date</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </select>
//         </div>
//         <div className="col-md-1">
//           <button className="btn btn-primary w-100">
//             <i className="bi bi-search" />
//           </button>
//         </div>
//       </div>
      
//       {/* ICO Table with Server-fetched Data */}
//       <div className="table-responsive">
//         <table className="table table-hover">
//           <thead className="table-light">
//             <tr>
//               <th>Name</th>
//               <th>Stage</th>
//               <th>Launchpad</th>
//               <th>Upvotes</th>
//               <th>End In</th>
//               <th>Tokens for Sale</th>
//               <th>Rate</th>
//               <th>Fundraising Goal</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//           {paginatedData.length > 0 ? (
//               paginatedData.map((ico, index) => (
//                 <tr key={ico.id || index}>
//                   <td>
//                     <div className="d-flex align-items-center">
//                       <Image
//                         src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${ico.image}` || altcoinImage}
//                         alt={ico.img_alt_title || "ICO Project"}
//                         width={32}
//                         height={32}
//                         className="project-icon me-2"
//                       />
//                      <div className='set_ico_name'> {ico.name || "Unnamed Project"}
//                      <label className='set_alias'>{ico.alias ? `(${ico.alias})` : ""}</label>
//                      </div>
//                      {ico.featured===1 ?  <span className="featured-tag ms-2">Featured</span> : ''}
//                     </div>
//                   </td>
//                   <td>{ico.ico_ido_type ===1 ? "IDO" : "presalse"}</td>
//                   <td>{ "On Website"}</td>
//                   <td>
//                     <button className="upvote-btn">
//                       <i className="bi bi-hand-thumbs-up" /> {ico.likes_counts || 0}
//                     </button>
//                   </td>
//                   <td>{calculateSingleDateDifference(ico.start_time,ico.end_time) || "N/A"}</td>
//                   <td>{formatNumber(ico.fund_asking_for) || "N/A"}</td>
//                   <td>{ico.ico_price ? `${ico.ico_price} (${ico.accept_type || "USDT"})` : "N/A"}</td>
//                   <td>{ico.fund_asking_for ? `${formatNumber(ico.fund_asking_for)} (${ico.accept_type || "USDT"})` : "N/A"}</td>
//                   <td>
//                   <div className="info-circle">
//                   <Link href={`/crypto-ico-details/${ico.slug}`}>
//                       <i class="fa-solid fa-arrow-up-right-from-square hyperlink"></i>
//                       {/* <i className="bi bi-info" /> */}
//                        </Link>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9" className="text-center py-4">No ICO data available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Load More Button */}
//       {visibleData < sortedData.length && (
//         <div className="text-center mt-4 mb-5">
//           <button className="btn btn-primary px-4" onClick={handleLoadMore}>
//             Load More
//           </button>
//         </div>
//       )}
//     </>
//   );
// }




"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ClientSideIDO({ icoData }) {
  const [selectedType, setSelectedType] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState(""); // For immediate input changes
  const router = useRouter();
  const [visibleData, setVisibleData] = useState(15);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setTempSearchQuery(event.target.value);
  };

  // Function to be called when search button is clicked
  const handleSearch = () => {
    setSearchQuery(tempSearchQuery);
  };

  // Also handle Enter key press on the search input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K';
    }
    return num.toString() ? num.toString() : num;
  }

  function calculateSingleDateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    if (end < start) {
      return "End date must be greater than start date.";
    }
  
    const timeDifference = end - start;
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    const totalMonths = Math.floor(totalDays / 30);
    const totalWeeks = Math.floor(totalDays / 7);
  
    if (totalMonths > 0) {
      return `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
    } else if (totalWeeks > 0) {
      return `${totalWeeks} week${totalWeeks !== 1 ? 's' : ''}`;
    } else {
      return `${totalDays} day${totalDays !== 1 ? 's' : ''}`;
    }
  }

  // Filter the data based on search, type, and date range
  const filteredData = (icoData?.data || []).filter((ico) => {
    // Text search filter
    const matchesSearch = searchQuery === '' || 
      (ico.name && ico.name.toLowerCase().includes(searchQuery.toLowerCase())) || 
      (ico.alias && ico.alias.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Type filter
    let matchesType = true;
    if (selectedType === 'ongoing') {
      const now = new Date();
      const startTime = new Date(ico.start_time);
      const endTime = new Date(ico.end_time);
      matchesType = now >= startTime && now <= endTime;
    } else if (selectedType === 'upcoming') {
      const now = new Date();
      const startTime = new Date(ico.start_time);
      matchesType = startTime > now;
    } else if (selectedType === 'ended') {
      const now = new Date();
      const endTime = new Date(ico.end_time);
      matchesType = endTime < now;
    }
    
    // Date range filter
    let matchesDateRange = true;
    if (startDate && endDate) {
      const icoStartDate = new Date(ico.start_time);
      const icoEndDate = new Date(ico.end_time);
      
      // Check if the ICO period overlaps with the selected date range
      matchesDateRange = 
        (icoStartDate <= endDate && icoEndDate >= startDate);
    }
    
    return ico.is_review === 1 && matchesSearch && matchesType && matchesDateRange;
  });

  // Sort the filtered data: Featured first, then others
  const sortedData = filteredData.sort((a, b) => (b.featured - a.featured));

  // Paginate the data
  const paginatedData = sortedData.slice(0, visibleData);

  // Load More function
  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 15);
  };
  
  return (
    <>
      {/* Filter Tabs */}
      <div className="btn-group mb-4">
        <button className="btn btn-light tab-button" onClick={() => router.push("/crypto-token-ico-ido-ieo-presale")}>All</button>
        <button className="btn btn-light tab-button " onClick={() => router.push("/ico")}>
          Crypto ICO
        </button>
        <button className="btn btn-light tab-button active-tab" onClick={() => router.push("/ido")}>Crypto IDO</button>
        <button className="btn btn-light tab-button" onClick={() => router.push('/ieo')}>Crypto IEO</button>
        <button className="btn btn-light tab-button" onClick={() => router.push('/presale')}>Crypto Presale</button>
      </div>
      
      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Keyword..."
            value={tempSearchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={handleKeyPress}
          /> 
        </div>
        <div className="col-md-3">
          <select value={selectedType} onChange={handleSelectChange} className="form-select">
            <option value="">Select Type</option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
            <option value="ended">Ended</option>
          </select>
        </div>
        <div className="col-md-3">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            className="form-select"
            onChange={(update) => setDateRange(update)}
            isClearable={true}
            placeholderText="Select Date Range"
          />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            <i className="bi bi-search" />
          </button>
        </div>
      </div>
      
      {/* ICO Table with Server-fetched Data */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Stage</th>
              <th>Launchpad</th>
              <th>Upvotes</th>
              <th>End In</th>
              <th>Tokens for Sale</th>
              <th>Rate</th>
              <th>Fundraising Goal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {paginatedData.length > 0 ? (
              paginatedData.map((ico, index) => (
                <tr key={ico.id || index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <Image
                        src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${ico.image}` || altcoinImage}
                        alt={ico.img_alt_title || "ICO Project"}
                        width={32}
                        height={32}
                        className="project-icon me-2"
                      />
                     <div className='set_ico_name'> {ico.name || "Unnamed Project"}
                     <label className='set_alias'>{ico.alias ? `(${ico.alias})` : ""}</label>
                     </div>
                     {ico.featured===1 ?  <span className="featured-tag ms-2">Featured</span> : ''}
                    </div>
                  </td>
                  <td>{ico.ico_ido_type ===1 ? "IDO" : "presalse"}</td>
                  <td>{ "On Website"}</td>
                  <td>
                    <button className="upvote-btn">
                      <i className="bi bi-hand-thumbs-up" /> {ico.likes_counts || 0}
                    </button>
                  </td>
                  <td>{calculateSingleDateDifference(ico.start_time,ico.end_time) || "N/A"}</td>
                  <td>{formatNumber(ico.fund_asking_for) || "N/A"}</td>
                  <td>{ico.ico_price ? `${ico.ico_price} (${ico.accept_type || "USDT"})` : "N/A"}</td>
                  <td>{ico.fund_asking_for ? `${formatNumber(ico.fund_asking_for)} (${ico.accept_type || "USDT"})` : "N/A"}</td>
                  <td>
                  <div className="info-circle">
                  <Link href={`/crypto-ico-details/${ico.slug}`}>
                      <i className="fa-solid fa-arrow-up-right-from-square hyperlink"></i>
                       </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">No ICO data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Load More Button */}
      {visibleData < sortedData.length && (
        <div className="text-center mt-4 mb-5">
          <button className="btn btn-primary px-4" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </>
  );
}