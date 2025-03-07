// import React from 'react';
// import '../styles/submitCoins.css';

// function SubmitCoin() {
//   return (
//     <>
//     <section class="brdcrumb">
//     <div class="container">
//         <ul class="mb-0">
//             <li><a href="index" title="Home">Home</a></li>
//             <li>Submit Coin</li>
//         </ul>
//     </div>
// </section>
// <section class="py-4 loginform submitcoin">
//     <div class="container">
//         <div class="row">
//             <div class="col-lg-8 offset-lg-2">
//                 <div class="contact-us-form">
//                     <div class="row">
//                         <div class="col-xl-12 text-center">
//                             <h5 class="h2 fw-bold mb-4">Submit new coin</h5>
//                         </div>
//                         <form>
//                             <div class="top_pills">
//                                 <nav class="nav nav-pills nav-fill ">
//                                     <a class="nav-link tab-pills" href="#">Personal Details</a>
//                                     <a class="nav-link tab-pills" href="#">Address Details</a>
//                                     <a class="nav-link tab-pills" href="#">Company Details</a>
//                                     <a class="nav-link tab-pills" href="#">Finish</a>
//                                 </nav>
//                             </div>
//                             <div class="">
//                                 <div class="tab d-none">
//                                     <div class="row">
//                                         <div class="col-xl-12 text-center w-75 m-auto">
//                                             <p class="fw-bold">Please complete the steps to add a new coin to Crypto Presale. After approval your project will be visible on our platform.</p>
//                                         </div>
//                                         <div class="col-xl-4">
//                                             <div class="mb-3">
//                                                 <label for="name" class="form-label">Logo</label>
//                                                 <div class="form-group">
//                                                     <div class="confirm-identity">
//                                                         <div class="ci-user">
//                                                             <div class="ci-user-picture">
//                                                                 <img src="images/avtar.webp" id="item-img-output" class="imgpreviewPrf img-fluid" alt="" />
//                                                             </div>
//                                                             <div class="modal fade cropImageModal" id="cropImagePop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//                                                                 <button type="button" class="close-modal-custom" data-dismiss="modal" aria-label="Close"><i class="feather icon-x"></i></button>
//                                                                 <div class="modal-dialog">
//                                                                     <div class="modal-content">
//                                                                         <div class="modal-body p-0">
//                                                                             <div class="modal-header-bg"></div>
//                                                                             <div class="up-photo-title">
//                                                                                 <h3 class="modal-title">Update Profile Photo</h3>
//                                                                             </div>
//                                                                             <div class="up-photo-content pb-5">
//                                                                                 <div id="upload-demo" class="center-block">
//                                                                                     <h5><i class="fas fa-arrows-alt mr-1"></i> Drag your photo as you require</h5>
//                                                                                 </div>
//                                                                                 <div class="upload-action-btn text-center px-2">
//                                                                                     <button type="button" id="cropImageBtn" class="btn btn-default btn-medium bg-blue px-3 mr-2">Save Photo</button>
//                                                                                     <button type="button" class="btn btn-default btn-medium bg-default-light px-3 ml-sm-2 replacePhoto position-relative">Replace Photo</button>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="ci-user-btn mt-4">
//                                                             <a href="javascript:;" class="userEditeBtn btn-main primary-btn small px-4 btn-second_main">
//                                                                 <input type="file" class="item-img file center-block filepreviewprofile" />
//                                                                 Click to upload image
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="col-xl-8">
//                                             <div class="mb-2">
//                                                 <label for="name" class="form-label mb-0">Name <sup class="text-danger fs-5">*</sup></label>
//                                                 <input type="text" class="form-control" name="name" id="name" placeholder="Please enter name" />
//                                             </div>
//                                             <div class="mb-2">
//                                                 <label for="email" class="form-label mb-0">Symbol <sup class="text-danger fs-5">*</sup></label>
//                                                 <input type="email" class="form-control" name="email" id="email" placeholder="Symobol Here" />
//                                             </div>
//                                             <div class="mb-2">
//                                                 <label for="password" class="form-label mb-0">Description <sup class="text-danger fs-5">*</sup></label>
//                                                 <textarea class="form-control" rows="2" placeholder="Enter Description Here"></textarea>
//                                             </div>
//                                         </div>
//                                         <div class="col-xl-12">
//                                             <label>Categories (select at least one)*</label>
//                                             <div class="checkboxflex mb-2">
//                                                 <div class="listing-category"> <input type="checkbox" name="Checkbox" /> <label> Artificial Intelligence </label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Gambling" /> <label>
//                                                         Gambling</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Platform" /> <label>
//                                                         NFT Platform</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Other" /> <label>
//                                                         Other</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="DeFiv" /> <label>
//                                                         DeFiv</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Gaming" /> <label>
//                                                         Gaming</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Earn"/> <label>
//                                                         Play To Earn</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Tokens" /> <label>
//                                                         Pump.fun Tokens</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Token"/> <label>
//                                                         Fan Token</label> </div>
//                                                 <div class="listing-category"> <input type="checkbox" name="Memecoins"/> <label>
//                                                         Memecoins</label> </div>
//                                                 <div class="listing-category mb-2"> <input type="checkbox" name="Utility"/> <label>
//                                                         Utility Token</label> </div>
//                                                 <small class="text-danger">Select all categories that apply to your token.</small>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="tab d-none">
//                                     <div class="mb-3">
//                                         <label for="name" class="form-label">Website link <sup class="text-danger fs-5">*</sup></label>
//                                         <input type="text" class="form-control" name="name" id="name" placeholder="Please enter address 1"/>
//                                     </div>
//                                     <div class="mb-3">
//                                         <label for="email" class="form-label">Telegram link </label>
//                                         <input type="email" class="form-control" name="email" id="email" placeholder="Please enter address 2"/>
//                                     </div>
//                                     <div class="mb-3 ">
//                                         <label for="city" class="form-label">X link</label>
//                                         <input type="text" class="form-control" name="city" id="city" placeholder="Please enter city"/>
//                                     </div>
//                                     <div class="mb-3 ">
//                                         <label for="state" class="form-label">Discord link</label>
//                                         <input type="state" class="form-control" name="state" id="state" placeholder="Please enter state"/>
//                                     </div>
//                                     <div class="mb-3 ">
//                                         <label for="city" class="form-label">YouTube Video link </label>
//                                         <input type="text" class="form-control" name="city" id="city" placeholder="Please enter city"/> 
//                                         <small class="text-danger">Provide a link to a video, not to a channel. The video will be shown in the coin’s description.</small>
//                                     </div>
//                                     <div class="mb-3 ">
//                                         <label for="state" class="form-label">Whitepaper link</label>
//                                         <input type="state" class="form-control" name="state" id="state" placeholder="Please enter state" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="tab d-none">
//                                 <div class="mb-3">
//                                     <label for="name" class="form-label">Website link <sup class="text-danger fs-5">*</sup></label>
//                                     <input type="text" class="form-control" name="name" id="name" placeholder="Please enter address 1" />
//                                 </div>
//                                 <div class="mb-3">
//                                     <label for="email" class="form-label">Telegram link </label>
//                                     <input type="email" class="form-control" name="email" id="email" placeholder="Please enter address 2"/>
//                                 </div>
//                                 <div class="mb-3 ">
//                                     <label for="city" class="form-label">X link</label>
//                                     <input type="text" class="form-control" name="city" id="city" placeholder="Please enter city" />
//                                 </div>
//                                 <div class="mb-3 ">
//                                     <label for="state" class="form-label">Discord link</label>
//                                     <input type="state" class="form-control" name="state" id="state" placeholder="Please enter state" />
//                                 </div>
//                                 <div class="mb-3 ">
//                                     <label for="city" class="form-label">YouTube Video link </label>
//                                     <input type="text" class="form-control" name="city" id="city" placeholder="Please enter city" />
//                                     <small class="text-danger">Provide a link to a video, not to a channel. The video will be shown in the coin’s description.</small>
//                                 </div>
//                                 <div class="mb-3 ">
//                                     <label for="state" class="form-label">Whitepaper link</label>
//                                     <input type="state" class="form-control" name="state" id="state" placeholder="Please enter state" />
//                                 </div>
//                             </div>
//                             <div class="tab d-none">
//                                 <p>All Set! Please submit to continue. Thank you</p>
//                             </div>
//                     <div class="text-end">
//                         <div class="main_flex">
//                             <button type="button" id="back_button" class="btn-main primary-btn  shadow" onclick="back()">Back</button>
//                             <button type="button" id="next_button" class="btn-main primary-btn btn-second_main shadow" onclick="next()">Next</button>
//                         </div>
//                     </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//    </div>
//    </div>
// </section>

//     </>
//   )
// }

// export default SubmitCoin

'use client'
import React, { useState } from 'react';
// Assuming you have a CSS file at this location
// If not, you should create one or use a different styling approach
import Image from 'next/image';
// import Avtar from "../images/avtar.webp";
import '../styles/submitCoins.css';

function SubmitCoin() {
  // State to track current tab
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState({
    // Personal details
    logo: null,
    name: '',
    symbol: '',
    description: '',
    categories: {
      artificialIntelligence: false,
      gambling: false,
      nftPlatform: false,
      other: false,
      defiv: false,
      gaming: false,
      playToEarn: false,
      pumpFunTokens: false,
      fanToken: false,
      memecoins: false,
      utilityToken: false,
    },
    // Address details
    websiteLink: '',
    telegramLink: '',
    xLink: '',
    discordLink: '',
    youtubeLink: '',
    whitepaperLink: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        categories: {
          ...formData.categories,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    // Here you would typically handle the file upload
    // For demonstration, we'll just store the file object
    setFormData({
      ...formData,
      logo: file,
    });
  };

  // Navigation functions
  const next = () => {
    if (currentTab < 3) {
      setCurrentTab(currentTab + 1);
    }
  };

  const back = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li><a href="/" title="Home">Home</a></li>
            <li>Submit Coin</li>
          </ul>
        </div>
      </section>
      <section className="py-4 loginform submitcoin">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="contact-us-form">
                <div className="row">
                  <div className="col-xl-12 text-center">
                    <h5 className="h2 fw-bold mb-4">Submit new coin</h5>
                  </div>
                  <form>
                    <div className="top_pills">
                      <nav className="nav nav-pills nav-fill">
                        <a 
                          className={`nav-link tab-pills ${currentTab === 0 ? 'active' : ''}`} 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentTab(0); }}
                        >
                          Personal Details
                        </a>
                        <a 
                          className={`nav-link tab-pills ${currentTab === 1 ? 'active' : ''}`} 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentTab(1); }}
                        >
                          Address Details
                        </a>
                        <a 
                          className={`nav-link tab-pills ${currentTab === 2 ? 'active' : ''}`} 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentTab(2); }}
                        >
                          Company Details
                        </a>
                        <a 
                          className={`nav-link tab-pills ${currentTab === 3 ? 'active' : ''}`} 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); setCurrentTab(3); }}
                        >
                          Finish
                        </a>
                      </nav>
                    </div>
                    <div>
                      {/* Tab 1: Personal Details */}
                      <div className={`tab ${currentTab === 0 ? 'd-block' : 'd-none'}`}>
                        <div className="row">
                          <div className="col-xl-12 text-center w-75 m-auto">
                            <p className="fw-bold">Please complete the steps to add a new coin to Crypto Presale. After approval your project will be visible on our platform.</p>
                          </div>
                          <div className="col-xl-4">
                            <div className="mb-3">
                              <label htmlFor="logo" className="form-label">Logo</label>
                              <div className="form-group">
                                <div className="confirm-identity">
                                  <div className="ci-user">
                                    <div className="ci-user-picture">
                                      <img 
                                        src={formData.logo ? URL.createObjectURL(formData.logo) :  "http://192.168.1.7/crypto-presale/images/avtar.webp"} 
                                        id="item-img-output" 
                                        className="imgpreviewPrf img-fluid" 
                                        alt="Logo preview" 
                                      />
                                    </div>
                                  </div>
                                  <div className="ci-user-btn mt-4">
                                    <a href="#" onClick={(e) => e.preventDefault()} className="userEditeBtn btn-main primary-btn small px-4 btn-second_main">
                                      <input 
                                        type="file" 
                                        className="item-img file center-block filepreviewprofile" 
                                        onChange={handleLogoUpload}
                                      />
                                      Click to upload image
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8">
                            <div className="mb-2">
                              <label htmlFor="name" className="form-label mb-0">Name <sup className="text-danger fs-5">*</sup></label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                id="name" 
                                placeholder="Please enter name" 
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="symbol" className="form-label mb-0">Symbol <sup className="text-danger fs-5">*</sup></label>
                              <input 
                                type="text" 
                                className="form-control" 
                                name="symbol" 
                                id="symbol" 
                                placeholder="Symbol Here" 
                                value={formData.symbol}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="description" className="form-label mb-0">Description <sup className="text-danger fs-5">*</sup></label>
                              <textarea 
                                className="form-control" 
                                rows="2" 
                                name="description"
                                id="description"
                                placeholder="Enter Description Here"
                                value={formData.description}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <label>Categories (select at least one)*</label>
                            <div className="checkboxflex mb-2">
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="artificialIntelligence" 
                                  checked={formData.categories.artificialIntelligence}
                                  onChange={handleInputChange}
                                /> 
                                <label> Artificial Intelligence </label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="gambling" 
                                  checked={formData.categories.gambling}
                                  onChange={handleInputChange}
                                /> 
                                <label>Gambling</label> 
                              </div>
                              {/* Add the rest of the checkboxes following the same pattern */}
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="nftPlatform" 
                                  checked={formData.categories.nftPlatform}
                                  onChange={handleInputChange}
                                /> 
                                <label>NFT Platform</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="other" 
                                  checked={formData.categories.other}
                                  onChange={handleInputChange}
                                /> 
                                <label>Other</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="defiv" 
                                  checked={formData.categories.defiv}
                                  onChange={handleInputChange}
                                /> 
                                <label>DeFiv</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="gaming" 
                                  checked={formData.categories.gaming}
                                  onChange={handleInputChange}
                                /> 
                                <label>Gaming</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="playToEarn" 
                                  checked={formData.categories.playToEarn}
                                  onChange={handleInputChange}
                                /> 
                                <label>Play To Earn</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="pumpFunTokens" 
                                  checked={formData.categories.pumpFunTokens}
                                  onChange={handleInputChange}
                                /> 
                                <label>Pump.fun Tokens</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="fanToken" 
                                  checked={formData.categories.fanToken}
                                  onChange={handleInputChange}
                                /> 
                                <label>Fan Token</label> 
                              </div>
                              <div className="listing-category"> 
                                <input 
                                  type="checkbox" 
                                  name="memecoins" 
                                  checked={formData.categories.memecoins}
                                  onChange={handleInputChange}
                                /> 
                                <label>Memecoins</label> 
                              </div>
                              <div className="listing-category mb-2"> 
                                <input 
                                  type="checkbox" 
                                  name="utilityToken" 
                                  checked={formData.categories.utilityToken}
                                  onChange={handleInputChange}
                                /> 
                                <label>Utility Token</label> 
                              </div>
                              <small className="text-danger">Select all categories that apply to your token.</small>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tab 2: Address Details */}
                      <div className={`tab ${currentTab === 1 ? 'd-block' : 'd-none'}`}>
                        <div className="mb-3">
                          <label htmlFor="websiteLink" className="form-label">Website link <sup className="text-danger fs-5">*</sup></label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="websiteLink" 
                            id="websiteLink" 
                            placeholder="Please enter website link" 
                            value={formData.websiteLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="telegramLink" className="form-label">Telegram link </label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="telegramLink" 
                            id="telegramLink" 
                            placeholder="Please enter Telegram link" 
                            value={formData.telegramLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="xLink" className="form-label">X link</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="xLink" 
                            id="xLink" 
                            placeholder="Please enter X link" 
                            value={formData.xLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="discordLink" className="form-label">Discord link</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="discordLink" 
                            id="discordLink" 
                            placeholder="Please enter Discord link" 
                            value={formData.discordLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="youtubeLink" className="form-label">YouTube Video link </label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="youtubeLink" 
                            id="youtubeLink" 
                            placeholder="Please enter YouTube link" 
                            value={formData.youtubeLink}
                            onChange={handleInputChange}
                          />
                          <small className="text-danger">Provide a link to a video, not to a channel. The video will be shown in the coin's description.</small>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="whitepaperLink" className="form-label">Whitepaper link</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="whitepaperLink" 
                            id="whitepaperLink" 
                            placeholder="Please enter whitepaper link" 
                            value={formData.whitepaperLink}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Tab 3: Company Details (same as Address Details in your original code) */}
                      <div className={`tab ${currentTab === 2 ? 'd-block' : 'd-none'}`}>
                        <div className="mb-3">
                          <label htmlFor="companyName" className="form-label">Company Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="companyName" 
                            id="companyName" 
                            placeholder="Enter your company name" 
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="companyEmail" className="form-label">Company Email</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            name="companyEmail" 
                            id="companyEmail" 
                            placeholder="Enter company email" 
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="companyContact" className="form-label">Company Contact</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="companyContact" 
                            id="companyContact" 
                            placeholder="Enter company contact number" 
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="companyAddress" className="form-label">Company Address</label>
                          <textarea 
                            className="form-control" 
                            name="companyAddress" 
                            id="companyAddress" 
                            rows="3" 
                            placeholder="Enter company address"
                          ></textarea>
                        </div>
                      </div>

                      {/* Tab 4: Finish */}
                      <div className={`tab ${currentTab === 3 ? 'd-block' : 'd-none'}`}>
                        <div className="text-center">
                          <p>All Set! Please submit to continue.</p>
                          <p>Thank you for submitting your coin to our platform.</p>
                          <p>Our team will review your submission and will get back to you soon.</p>
                          <button 
                            type="submit" 
                            className="btn-main primary-btn btn-second_main shadow mt-3"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation buttons */}
                    <div className="text-end mt-4">
                      <div className="main_flex">
                        <button 
                          type="button" 
                          id="back_button" 
                          className={`btn-main primary-btn shadow ${currentTab === 0 ? 'd-none' : ''}`} 
                          onClick={back}
                        >
                          Back
                        </button>
                        <button 
                          type="button" 
                          id="next_button" 
                          className={`btn-main primary-btn btn-second_main shadow ${currentTab === 3 ? 'd-none' : ''}`} 
                          onClick={next}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubmitCoin;