'use client'
import axios from 'axios';
import Link from 'next/link';
import Image from "next/image";
import altcoinImage from "../images/altcoin.webp";
import React, { Fragment, useEffect, useState } from 'react'
import { userAuth } from "@/hooks/authContext";

function FavouriteList() {
    const [favoriteData,setFavoriteData] = useState([]);
      // const [filteredData, setFilteredData] = useState([]);
      const { isLoggedIn, logout,user } = userAuth();
    
    useEffect(()=>{
        favoriteList();
    },[])
    const favoriteList = async() => {
      try {
        const request = await axios.get(`/api/favoritelist/listing/${user.id}`) 
      const result = request.data;
      if(result.success === true){
        setFavoriteData(result.data);
      }
      } catch (error) {
        console.log("data is not fetch");
      }  
    }


  const formatToYYYYMMDD = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

    const delete_coin = async(id) => {
      try {
        const dataset = {
          user_id:user.id,
          ico_id:id,
        };
        console.log(dataset);
        const request = await axios.delete(`/api/favoritelist/listing/${user.id}`,{data:dataset,})
      const result = request.data;
      if(result.success === true){
        alert("Coin is remove from the list ")
        favoriteList();
      }
      } catch (error) {
        console.log("not remove from the list"+error.message);
      }  
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


const getTimeAgo = (timestamp) => {
  if (!timestamp) return "Unknown time";
  
  const formate = formatToYYYYMMDD(timestamp);
  const created = new Date(formate);
  const now = new Date();

  if (isNaN(created)) return "Invalid date";

  const diffInMs = created - now;
  const isFuture = diffInMs > 0;

  const absMinutes = Math.floor(Math.abs(diffInMs) / (1000 * 60));
  const absHours = Math.floor(absMinutes / 60);
  const absDays = Math.floor(absMinutes / (60 * 24));
  const absWeeks = Math.floor(absDays / 7);

  if (absMinutes < 60) {
    return `${absMinutes} minute${absMinutes !== 1 ? "s" : ""} `;
  } else if (absHours < 24) {
    return `${absHours} hour${absHours !== 1 ? "s" : ""} `;
  } else if (absDays < 7) {
    return `${absDays} day${absDays !== 1 ? "s" : ""} `;
  } else if (absDays < 30) { // yahan 30 days tak weeks show hoga
    return `${absWeeks} week${absWeeks !== 1 ? "s" : ""} `;
  } else {
    const absMonths = Math.floor(absDays / 30);
    return `${absMonths} month${absMonths !== 1 ? "s" : ""} `;
  }
};


     
  return (
    <Fragment>
        <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><Link href="/" title="Home">Home</Link></li>
            <li>Favourite List</li> 
          </ul>
        </div>
      </section>
        <div className="container py-4">
            <h1 className='h2 mb-2'>Favourite List</h1>
            <p className="text-muted mb-4">
            The FavouriteList component displays a user's saved or liked cryptocurrency coins. It checks if the favourites array exists and safely maps over it to render each coin's name, symbol, and price. This helps prevent errors when data is undefined or empty.
            </p>
        </div>
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
                      <th>End In</th>
                      <th>Total Boosts</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                        <tbody>
                        {favoriteData.length > 0 ? (
                      favoriteData.map((coin, index) => (
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
                     
                                <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={`Start from ${formatToYYYYMMDD(coin.start_time)} to ${formatToYYYYMMDD(coin.end_time)}`}
                      className="custom-tooltip"
                    >
                                  {getTimeAgo(coin.end_time)}
                                  {/* {calculateSingleDateDifference(
                                    coin.start_time,
                                    coin.end_time
                                  )} */}
                                </span>
                             
                          </td>
                          <td>
                            <div className="row">
                            
                              <div className="col-sm-6">
                                <button className="btn-main primary-btn small px-4 btn-second_main">
                                  fuel
                                </button>
                              </div>
                              <div className="col-sm-6">
                                    <button className="btn-main danger-btn small px-4 btn-second_main"  onClick={() =>delete_coin(coin.id)}>
                                        Remove  
                                      </button>
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </Fragment>
  )
}

export default FavouriteList
