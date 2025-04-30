'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import Link from 'next/link';


const profile = () => {
    const params = useParams();
    const {id} = params;
    const [userData , setUserData]=useState([]);
    const fetchUserData =async()=>{
    try {
        
          const response = await axios.get(`/api/profile_edit/${id}`)
          const result= response.data;
          setUserData(result.data);
        } catch (error) {
          console.error("Error fetching user data:", error); 
        }
    }
    useEffect(()=>{
        fetchUserData();
    },[])
    const dateOfBirth = (dateInput)=> {
        const dateString = String(dateInput);
        return dateString.split('T')[0];
    }
  return (
  <section className="provileview">
        <div className="container">
            <div className="row my-2">
                <div className="col-xl-12">
                    <div className="profile-header">
                        <div className="profile-cover"></div>
                        <Link className="edit-profile-btn" href={`/profile_edit/${id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                            </svg>
                            Edit Profiles
                        </Link>
                        <div className="profile-user-info">
                            <Image id="avatarPreview" src='/avtar.webp' width={120} height={120} alt="Profile Avatar" className="profile-avatar"/>
                            <h1 className="profile-username">{userData.username}</h1>
                            <div className="profile-userid">@E8DC19EF</div>
                            <span className="verified-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                                Verified Member
                            </span>
                            <p className="profile-bio">
                                Crypto enthusiast and blockchain technology advocate with over 5 years of experience in the Web3 space. Passionate about decentralized finance and emerging blockchain applications.
                            </p>
                        </div>
                    </div>
                    <div className="referral-box">
                        <div className="firstrefferal">
                            <h3 className="referral-title">Share Your Referral Code</h3>
                            <div className="referral-code" id="referral">{userData.referral_code}</div>
                            <div className="referral-actions">
                                <button className="referral-btn btn-light" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                    </svg>
                                    Copy Code
                                </button>
                            </div>
                        </div>
                        <div className="refferalright">
                            <h3 className="referral-title d-block">Social Links</h3>
                            <ul className="social-links">
                                <li className="mb-2"><a href={userData.facebook_url} className="social-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                        </svg>
                                        coingabbar.username
                                    </a></li>
                                <li className="mb-2"><a href={userData.instagram_url} className="social-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                        </svg>
                                        @username_crypto
                                    </a></li>
                                <li className="mb-2"><a href={userData.facebook_url} className="social-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                                        </svg>
                                        @usernamecrypto
                                    </a></li>
                                <li className="mb-2"><a href={userData.facebook_url} className="social-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                                        </svg>
                                        @usernamecrypto
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-section">
                        <h3 className="section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                            Personal Information
                        </h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <div className="info-label"><span>Full Name</span></div>
                                <div className="info-value"><span>{userData.name}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>User ID</span></div>
                                <div className="info-value"><span>{userData.id}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>Gender</span></div>
                                <div className="info-value"><span>{userData.gender}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>Date of Birth</span></div>
                                <div className="info-value"><span>{dateOfBirth(userData.dob)}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>Email</span></div>
                                <div className="info-value"><span>{userData.email}</span>
                                    <span className={userData.is_email_verified==1?`badge badge-success`:`badge badge-danger`}>{userData.is_email_verified==1?"Verified":"Not Verified"}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>Phone</span></div> <div className="info-value"><span>
                                                {userData.mobile_number}</span>
                                            <span className={userData.mobile_number==1?`badge badge-success`:`badge badge-danger`}>{userData.mobile_number==1?"Verified":"Not Verified"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='upper-profile'>
                    <div className="profile-section">
                        <h3 className="section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            Location
                        </h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <div className="info-label"><span>Country</span></div>
                                <div className="info-value"><span>{userData.country}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>State</span></div>
                                <div className="info-value"><span>{userData.state}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>City</span></div>
                                <div className="info-value"><span>{userData.city}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>Address</span></div>
                                <div className="info-value"><span>{userData.address}</span></div>
                            </div>
                            <div className="info-item">
                                <div className="info-label"><span>Pin Code</span></div>
                                <div className="info-value"><span>{userData.pincode}</span></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default profile;
