// import React from 'react'
// import Image from 'next/image';
// import altcoinImage from "../images/altcoin.webp";
// import vactorbg from "../images/vector-row-bg.webp"
// import PresaleFilters from "./PresaleFilters";
// import Link from 'next/link';

// function Promoted({ feturedData }) {
  
//     console.log("this is a feturedData.....",feturedData);
//     const data = feturedData;
    
//     const handleSelectChange = (event) => {
//         setSelectedOption(event.target.value);
//       };
    
//       function formatNumber(num) {
//         if (num >= 1e9) {
//           return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B';
//         } else if (num >= 1e6) {
//           return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M';
//         } else if (num >= 1e3) {
//           return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K';
//         }
//         return num.toString() ? num.toString() : num;
//       }
    
//       function calculateSingleDateDifference(startDate, endDate) {
//         const start = new Date(startDate);
//         const end = new Date(endDate);
      
//         if (end < start) {
//           return "End date must be greater than start date.";
//         }
      
//         const timeDifference = end - start;
//         const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
//         const totalMonths = Math.floor(totalDays / 30);
//         const totalWeeks = Math.floor(totalDays / 7);
      
//         if (totalMonths > 0) {
//           return `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
//         } else if (totalWeeks > 0) {
//           return `${totalWeeks} week${totalWeeks !== 1 ? 's' : ''}`;
//         } else {
//           return `${totalDays} day${totalDays !== 1 ? 's' : ''}`;
//         }
//       }

//       const handleTypeValue = (num) => {
//          if(num===0){
//             return "ICO"
//          }
//          if(num===1){
//             return "IDO"
//          }
//          if(num===2){
//             return "IEO"
//          }
//          if(num===3){
//             return "Presale"
//          }
//          else{
//             return "presale"
//          }
//       }
//   return (
 
//           <section className="tablesection pt-4">
//         <div className="container mb-4">
//             <div className="row">
//                 <div className="col-xl-12"> 
//                     <div className="table_block">
//                         <div className="table_top main_flex">
//                             <h6 className="h4 fw-semibold mb-0">Featured</h6>
//                             <Link href="/submit_coin" className="btn btn-link text-presale">Your coin here? Contact us!</Link>
//                         </div>
//                         <div className="table_main">
//                             <div className="table-responsive">
//                                 <table className="table table-bg table-striped">
//                                     <thead>
//                                         <tr>
//                                         <th>#</th>
//                                         <th>Coin</th>
//                                         <th>Name</th>
                                      
//                                         <th> Stage</th>
//                                         <th> Price</th>
//                                         <th> Change 24h</th>
                                      
//                                         <th> Total Boosts</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {
//                                             data.length > 0 ? 
//                                             data.map((data,index) => (
//                                                 <tr>
//                                                 <td>{index}</td>
//                                                 <td>
//                                                 <Image
//                         src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${data.image}` || altcoinImage}
//                         alt={data.img_alt_title || "ICO Project"}
//                         width={32}
//                         height={32}
//                         className="project-icon me-2"
//                       /></td>
//                                                 <td>{data.name}</td>
                                               
//                                                 <td>{handleTypeValue(data.ico_ido_type)}</td>
//                                                  <td>{data.ico_price ? `${data.ico_price} (${data.accept_type || "USDT"})` : "N/A"}</td>
//                                                 <td><span>Hardcap {data.hard_cap}</span></td>
                                                
//                                                 <td>
//                                                     <div className="main_flex_Gap">
//                                                         <span>{calculateSingleDateDifference(data.start_time,data.end_time) || "N/A"}</span>
//                                                         <button className="btn-main primary-btn small px-4 btn-second_main">Hodl</button>
//                                                         <i className="fa-regular fa-star"></i>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                             )) : ""
//                                         }
                   
//                                         <tr>
//                                             <td>1</td>
//                                             <td><Image src={altcoinImage} alt='coins' height={30} width={30} /></td>
//                                             <td>LCAI</td>
                                           
//                                             <td>IEO</td>
//                                              <td>10.20 M (USDT)</td>
//                                             <td><span>Hardcap 9000</span></td>
                                            
//                                             <td>
//                                                 <div className="main_flex_Gap">
//                                                     <span> In 3 months</span>
//                                                     <button className="btn-main primary-btn small px-4 btn-second_main">Hodl</button>
//                                                     <i className="fa-regular fa-star"></i>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>1</td>
//                                             <td><Image src={altcoinImage} alt='coins' height={30} width={30} /></td>
//                                             <td>LCAI</td>
                                           
//                                             <td>IDO</td>
//                                             <td>10.20 M (USDT)</td>
//                                             <td><span>Hardcap 9000</span></td>
                                            
//                                             <td>
//                                                 <div className="main_flex_Gap">
//                                                     <span> In 3 months</span>
//                                                     <button className="btn-main primary-btn small px-4 btn-second_main">Hodl</button>
//                                                     {/* Hodl or Fuel */}
//                                                     <i className="fa-regular fa-star"></i>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>1</td>
//                                             <td><Image src={altcoinImage} alt='coins' height={30} width={30} /></td>
//                                             <td>LCAI</td>
                                           
//                                             <td>ICO</td>
//                                             <td>10.20 M (USDT)</td>
//                                             <td><span>Hardcap 9000</span></td>
                                            
//                                             <td>
//                                                 <div className="main_flex_Gap">
//                                                     <span> In 3 months</span>
//                                                     <button className="btn-main primary-btn small px-4 btn-second_main">Hodl</button>
//                                                     <i className="fa-regular fa-star"></i>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Image src={vactorbg} alt='vector' className='centertable' />
//         {/* <img src="../images/vector-row-bg.webp" className="centertable" /> */}
      
     
//     </section>
   
//   )
// }

// export default Promoted
"use client"

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
                        <th>#</th>
                        <th>Coin</th>
                        <th>Name</th>
                        <th>Stage</th>
                         <th>Price</th>
                        <th>Hardcap</th>
                        <th>Duration</th>
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
                                    ? `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${item.image}`
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
                                ? `${item.ico_price} (${item.accept_type || "USDT"})`
                                : "N/A"}
                            </td>
                            <td>Hardcap {formatNumber(item.hard_cap)}</td>
                            <td>
                              <div className="row">
                                <div className="col-sm-4"><span>
                                  {calculateSingleDateDifference(
                                    item.start_time,
                                    item.end_time
                                  )}
                                </span></div>
                                <div className="col-sm-4"><button className="btn-main primary-btn small px-4 btn-second_main">
                                  Hodl
                                </button></div>
                                <div className="col-sm-4"><i className="fa-regular fa-star"></i></div>
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
