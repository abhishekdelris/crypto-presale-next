// "use client"

// import React, { useState } from 'react';
// import Image from 'next/image';
// import altcoinImage from "../images/altcoin.webp";
// import { useRouter } from "next/navigation"; 
// import { userAuth } from '../hooks/authContext';
// import Link from 'next/link';
// import LoginModal from './LoginModal';

// export default function EditListings({ icoData }) {
//   const [selectedType, setSelectedType] = useState('');
//   const [searchQuery, setSearchQuery] = useState("");
//   const [tempSearchQuery, setTempSearchQuery] = useState(""); // For immediate input changes
//   const router = useRouter();
//   const [visibleData, setVisibleData] = useState(15);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;
//    const [selectedOption, setSelectedOption] = useState("");
//       const [isLoading, setIsLoading] = useState(false);
     
//         const { login,isAuthenticated,user } = userAuth();
//         const [showLoginModal, setShowLoginModal] = useState(false);
    
//         const handleOpenLoginModal = () => setShowLoginModal(true);
//         const handleCloseLoginModal = () => setShowLoginModal(false);
  
//     const handleSubmitForm = () => {
//       if(isAuthenticated) {
//         router.push('/update_request/${ico.id}')
//       } else {
//         handleOpenLoginModal();
//       }
//     }
  
//     const handleLoginSuccess = (userData) => {
//       console.log('User logged in successfully:', userData);
//        router.push('/update_request/${ico.id}');
//       // You can add custom logic here after successful login
//       // For example, update the UI to show the user is logged in
//     };

//   const handleSelectChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   const handleSearchInputChange = (event) => {
//     setTempSearchQuery(event.target.value);
//   };

//   // Function to be called when search button is clicked
//   const handleSearch = () => {
//     setSearchQuery(tempSearchQuery);
//   };

//   // Also handle Enter key press on the search input
//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
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

//   // Filter the data based on search, type, and date range
//   const filteredData = (icoData?.data || []).filter((ico) => {
//     // Text search filter
//     const matchesSearch = searchQuery === '' || 
//       (ico.name && ico.name.toLowerCase().includes(searchQuery.toLowerCase())) || 
//       (ico.alias && ico.alias.toLowerCase().includes(searchQuery.toLowerCase()));
    
//     // Type filter
//     let matchesType = true;
//     if (selectedType === 'ongoing') {
//       const now = new Date();
//       const startTime = new Date(ico.start_time);
//       const endTime = new Date(ico.end_time);
//       matchesType = now >= startTime && now <= endTime;
//     } else if (selectedType === 'upcoming') {
//       const now = new Date();
//       const startTime = new Date(ico.start_time);
//       matchesType = startTime > now;
//     } else if (selectedType === 'ended') {
//       const now = new Date();
//       const endTime = new Date(ico.end_time);
//       matchesType = endTime < now;
//     }
    
//     // Date range filter
//     let matchesDateRange = true;
//     if (startDate && endDate) {
//       const icoStartDate = new Date(ico.start_time);
//       const icoEndDate = new Date(ico.end_time);
      
//       // Check if the ICO period overlaps with the selected date range
//       matchesDateRange = 
//         (icoStartDate <= endDate && icoEndDate >= startDate);
//     }
    
//     return ico.is_review === 1 && matchesSearch && matchesType && matchesDateRange;
//   });

//   // Sort the filtered data: Featured first, then others
//   const sortedData = filteredData.sort((a, b) => (b.featured - a.featured));

//   // Paginate the data
//   const paginatedData = sortedData.slice(0, visibleData);

//   // Load More function
//   const handleLoadMore = () => {
//     setVisibleData((prev) => prev + 15);
//   };
  
//   const handleType = (type) => {
//         switch (type) {
//           case 0:
//             return "ICO ";
//           case 1:
//             return "IDO ";
//           case 2:
//             return "IEO ";
//           case 3:
//             return "Presale";
         
//           default:
//             return "ICO ";
//         }
//       };

//       const handleLike = async (ico_id, pre_like) => {
//         if (isAuthenticated===false) {
//           router.push("/login")
//           return;
//         }
    
//         const res = await fetch('/api/like_counts', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             ico_id,
//             user_id: user.id, // make sure user ID is part of session
//             pre_like,
//           }),
//         });
    
//         const data = await res.json();
    
//         if (data.success) {
//           alert('Liked!');
//           router.refresh(); // Refresh page to get updated like count
//         } else {
//           alert(data.message);
//         }
//       };


//   return (
//     <>
      
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
//                   <td>{ handleType(ico.ico_ido_type)}</td>
//                   <td>{ "On Website"}</td>
//                   <td>
//                     <button className="upvote-btn"  onClick={() =>
//                     handleLike(ico.id, ico.likes_counts || 0)
//                   }>
//                       <i className="bi bi-hand-thumbs-up" /> {ico.likes_counts || 0}
//                     </button>
//                   </td>
//                   <td>{calculateSingleDateDifference(ico.start_time,ico.end_time) || "N/A"}</td>
//                   <td>{formatNumber(ico.fund_asking_for) || "N/A"}</td>
//                   <td>{ico.ico_price ? `${ico.ico_price} (${ico.accept_type || "USDT"})` : "N/A"}</td>
//                   <td>{ico.fund_asking_for ? `${formatNumber(ico.fund_asking_for)} (${ico.accept_type || "USDT"})` : "N/A"}</td>
//                   <td>
//                   <div className="">
//                     {  isAuthenticated ?    <Link href={`/update_request/${ico.id}`}>
//                     <button className='btn btn-outline-warning'>edit</button>
//                        </Link>  :
//                        <Link href={`/login`}>
//                        <button className='btn btn-outline-warning'>edit</button>
//                           </Link>
//                     }
                
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

//        <LoginModal 
//               show={showLoginModal} 
//               handleClose={handleCloseLoginModal}
//               onLoginSuccess={handleLoginSuccess}
//             />
//     </>
//   );
// }


"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import altcoinImage from "../images/altcoin.webp";
import { useRouter } from "next/navigation"; 
import { userAuth } from '../hooks/authContext';
import Link from 'next/link';
import LoginModal from './LoginModal';

export default function EditListings({ icoData }) {
  const [selectedType, setSelectedType] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState(""); // For immediate input changes
  const router = useRouter();
  const [visibleData, setVisibleData] = useState(15);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const [selectedIcoId, setSelectedIcoId] = useState(null); // Store the selected ICO ID
     
  const { login, isAuthenticated, user } = userAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
    
  const handleOpenLoginModal = (icoId) => {
    setSelectedIcoId(icoId); // Store the ICO ID
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => setShowLoginModal(false);
  
  const handleSubmitForm = (icoId) => {
    if(isAuthenticated) {
      router.push(`/update-request/${icoId}`);
    } else {
      handleOpenLoginModal(icoId);
    }
  };
  
  const handleLoginSuccess = (userData) => {
    console.log('User logged in successfully:', userData);
    if (selectedIcoId) {
      router.push(`/update-request/${selectedIcoId}`);
    }
    // You can add custom logic here after successful login
    // For example, update the UI to show the user is logged in
  };

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
  
  const handleType = (type) => {
    switch (type) {
      case 0:
        return "ICO ";
      case 1:
        return "IDO ";
      case 2:
        return "IEO ";
      case 3:
        return "Presale";
      default:
        return "ICO ";
    }
  };

  const handleLike = async (ico_id, pre_like) => {
    if (isAuthenticated === false) {
      handleOpenLoginModal(ico_id); // Open login modal instead of redirecting
      return;
    }

    const res = await fetch('/api/like_counts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ico_id,
        user_id: user.id, // make sure user ID is part of session
        pre_like,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert('Liked!');
      router.refresh(); // Refresh page to get updated like count
    } else {
      alert(data.message);
    }
  };

  return (
    <>
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
                      src={
                        ico.image
                          ? ico.image.startsWith(
                              "https://d3iuzwoiyg9qa8.cloudfront.net/"
                            )
                            ? ico.image 
                            : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${ico.image}`
                          : altcoinImage
                      }
                        alt={ico.img_alt_title || "ICO Project"}
                        width={32}
                        height={32}
                        className="project-icon me-2"
                      />
                     <div className='set_ico_name'> {ico.name || "Unnamed Project"}
                     <label className='set_alias'>{ico.alias ? `(${ico.alias})` : ""}</label>
                     </div>
                     {ico.featured === 1 ? <span className="featured-tag ms-2">Featured</span> : ''}
                    </div>
                  </td>
                  <td>{handleType(ico.ico_ido_type)}</td>
                  <td>{"On Website"}</td>
                  <td>
                    <button className="upvote-btn" onClick={() => handleLike(ico.id, ico.likes_counts || 0)}>
                      <i className="bi bi-hand-thumbs-up" /> {ico.likes_counts || 0}
                    </button>
                  </td>
                  <td>{calculateSingleDateDifference(ico.start_time, ico.end_time) || "N/A"}</td>
                  <td>{formatNumber(ico.fund_asking_for) || "N/A"}</td>
                  <td>{ico.ico_price ? `${ico.ico_price} (${ico.accept_type || "USDT"})` : "N/A"}</td>
                  <td>{ico.fund_asking_for ? `${formatNumber(ico.fund_asking_for)} (${ico.accept_type || "USDT"})` : "N/A"}</td>
                  <td>
                    <div className="">
                      {isAuthenticated ? (
                        <Link href={`/update-request/${ico.slug}`}>
                          <button className='btn btn-outline-warning'>edit</button>
                        </Link>
                      ) : (
                        <button 
                          className='btn btn-outline-warning' 
                          onClick={() => handleOpenLoginModal(ico.slug)}
                        >
                          edit
                        </button>
                      )}
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

      <LoginModal 
        show={showLoginModal} 
        handleClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}