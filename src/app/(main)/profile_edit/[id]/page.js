'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';



const profileEdit = () => {
    const params = useParams();
       const {id} = params;
       const route = useRouter();
       const [userData , setUserData]=useState({
        is_upload	: null ,
        name: null ,
        dob: null ,
        username: null ,
        email: null ,
        is_email_verified: null ,
        about	: null ,
        address: null ,
        country	: null ,
        state	: null ,
        city	: null ,
        pincode	: null ,
        referral_code: null ,
        facebook_url: null ,
        instagram_url: null ,
        telegram_url: null ,
        twitter_url: null ,
        reddit_url: null ,
        linkedin_url: null ,
        discord_url: null ,
        mobile_number: null ,
        is_mobile_verified: null ,
        country_code: null ,
        country_id: null ,
        state_id: null ,
        is_forget: null ,
        device_type: null ,
        gender: null ,
        backend_mobile_number: null ,
    });
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
       },[]);

       const submitHandle = async()=>{
        try {
            console.log(userData)
            const response = await axios.post(`/api/profile_edit/${id}`, userData);  
            const result= response.data;
            if( result.success === true){
                alert(`your profile update successfully!`);
                route.push(`/profile/${id}`);
                // fetchUserData();
            }
          } catch (error) {
            console.error("Error fetching user data:", error); 
          }
       }
       const dateOfBirth = (dateInput)=> {
        const dateString = String(dateInput);
        return dateString.split('T')[0];
    }
    const previewAvatar = (event)=>{
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('avatarPreview').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
  return (
      <section className="editprofile">
        <div className="container">
            <div className="row ">
                <div className="col-xl-12 my-2">
                    <h4 className="fw-bold">Edit Profile</h4>
                    <div className="avatar-container">
                        <div className="user-avatar"> 
                            <Image id="avatarPreview" src='/avtar.webp' width={120} height={120} alt="Profile Avatar" className="avatar-img"></Image>
                                <div className='edit-icon' onClick={()=>document.getElementById('avatarInput').click()}>
                                <svg className="iconset" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg></div>
                            </div>
                            <input type="file" id="avatarInput" accept="image/*" onChange={(e) => previewAvatar(e)}/>
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="fullName" className="required">Full Name</label>
                                <input type="text" id="fullName" className="form-control" onChange={(e) => setUserData({ ...userData, name: e.target.value })} value={userData.name} placeholder="Enter your name"/>
                                <div className="help-text">Name Mandatory to complete 100% profile</div>
                            </div>
                            <div className="form-group">
                                <label for="username" className="required">User Name</label>
                                <input type="text" id="username" className="form-control" onChange={(e) => setUserData({ ...userData, username: e.target.value })} value={userData.username} placeholder="Enter user name"/>
                            </div>
                            <div className="form-group">
                                <label>Gender:</label>
                                <div className="gender-options">
                                    <div className="radio-group">
                                        <input type="radio" id="male" name="gender" onChange={(e) => setUserData({ ...userData, gender: e.target.value })} value="MALE"  checked={userData.gender === "MALE"}/>
                                        <label for="male">Male</label>
                                    </div>
                                    <div className="radio-group">
                                        <input type="radio" id="female" name="gender" onChange={(e) => setUserData({ ...userData, gender: e.target.value })} value="FEMALE"  checked={userData.gender === "FEMALE"}/>
                                        <label for="female">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="country">Country</label>
                                <div className="select-wrapper">
                                    <select id="country" className="form-control">
                                        <option selected disabled>Select Country</option>
                                        <option value="us">United States</option>
                                        <option value="ca">Canada</option>
                                        <option value="in">India</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="au">Australia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="state">State</label>
                                <div className="select-wrapper">
                                    <select id="state" className="form-control">
                                        <option selected disabled>Select State</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="city">City</label>
                                <input type="text" id="city" className="form-control" onChange={(e) => setUserData({ ...userData,city: e.target.value })} value={userData.city} placeholder="City"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="mobile" className="required">Verify Mobile Number</label>
                                <div className="inline-group">
                                    <input type="text" className="form-control phone-code" value="+91" readonly/>
                                    <input type="text" id="mobile" className="form-control" onChange={(e) => setUserData({ ...userData, mobile_number: e.target.value })} value={userData.mobile_number} placeholder="Mobile no."/>
                                </div>
                                <div className="help-text">Mobile no. is mandatory to complete 100% profile.</div>
                            </div>
                            <div className="form-group">
                                <label for="otp">Enter OTP</label>
                                <div className="inline-group">
                                    <input type="text" id="otp" className="form-control" placeholder="Enter OTP"/>
                                    <button className="btn btn-primary text-pre">Verify OTP</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="email" className="required">Verify Email</label>
                                <div className="inline-group">
                                    <input type="email" id="email" className="form-control" onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email}/>
                                </div>
                                <div className="help-text">Email ID Mandatory to complete 100% profile.</div>
                            </div>
                            <div className="form-group">
                                <label for="dob" className="required">Date of Birth</label>
                                <input type="date" id="dob" className="form-control" onChange={(e) => setUserData({ ...userData,dob: e.target.value })} value={dateOfBirth(userData.dob)}/>
                                <div className="help-text">DOB is mandatory to complete 100% profile.</div>
                            </div>
                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" id="address" className="form-control" onChange={(e) => setUserData({ ...userData, address: e.target.value })} value={userData.address} placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <label for="pincode">Pin Code</label>
                                <input type="text" id="pincode" className="form-control" onChange={(e) => setUserData({ ...userData, pincode: e.target.value })} value={userData.pincode} placeholder="Pin Code"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="referral">Share Referral Code</label>
                                <div className="inline-group">
                                    <input type="text" id="referral" className="form-control" value={userData.referral_code} disabled readonly/>
                                    <button className="copy-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                        </svg>
                                    </button>
                                    <button className="btn btn-outline text-pre">Share Referral Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>
                            Submit Your Social links
                            <span className="badge">i</span>
                        </h3>
                        <div className="help-text mb-2">Minimum two social media IDs required to complete 100% profile.</div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="facebook">Facebook ID <span className="badge">i</span></label>
                                <input type="text" id="facebook" className="form-control" onChange={(e) => setUserData({ ...userData, facebook_url: e.target.value })} value={userData.facebook_url} placeholder="Facebook ID"/>
                            </div>
                            <div className="form-group">
                                <label for="instagram">Instagram ID <span className="badge">i</span></label>
                                <input type="text" id="instagram" className="form-control" onChange={(e) => setUserData({ ...userData, instagram_url: e.target.value })} value={userData.instagram_url} placeholder="Instagram ID"/>
                            </div>
                            <div className="form-group">
                                <label for="telegram">Telegram ID <span className="badge">i</span></label>
                                <input type="text" id="telegram" className="form-control" onChange={(e) => setUserData({ ...userData, telegram_url: e.target.value })} value={userData.telegram_url} placeholder="Telegram ID"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="twitter">Twitter ID <span className="badge">i</span></label>
                                <input type="text" id="twitter" className="form-control" onChange={(e) => setUserData({ ...userData, twitter_url: e.target.value })} value={userData.twitter_url} placeholder="Twitter ID"/>
                            </div>
                            <div className="form-group">
                                <label for="reddit">Reddit ID <span className="badge">i</span></label>
                                <input type="text" id="reddit" className="form-control" onChange={(e) => setUserData({ ...userData, reddit_url: e.target.value })} value={userData.reddit_url} placeholder="Reddit ID"/>
                            </div>
                            <div className="form-group">
                                <label for="linkedin">LinkedIn ID <span className="badge">i</span></label>
                                <input type="text" id="linkedin" className="form-control" onChange={(e) => setUserData({ ...userData, linkedin_url: e.target.value })} value={userData.linkedin_url} placeholder="LinkedIn ID"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="discord">Discord ID <span className="badge">i</span></label>
                                <input type="text" id="discord" className="form-control"  onChange={(e) => setUserData({ ...userData, discord_url: e.target.value })} value={userData.discord_url} placeholder="Discord ID"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="about">About</label>
                            <textarea id="about" className="form-control" placeholder="Bio..."  onChange={(e) => setUserData({ ...userData, about: e.target.value })} value={userData.about} ></textarea>
                        </div>
                    </div>
                    <div className="action-btn-container mb-5">
                        <button className="btn btn-primary" onClick={()=>submitHandle()}>Update Profile</button>
                    </div>
                </div>
            </div>
        
    </section>
    
  )
}

export default profileEdit;
