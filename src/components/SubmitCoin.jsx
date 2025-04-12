
// "use client";
// import React, { useState } from "react";
// // Assuming you have a CSS file at this location
// // If not, you should create one or use a different styling approach
// import Image from "next/image";
// import Link from "next/link";
// // import avtarImage from "../images/avtar.webp";
// // import '../styles/submitCoins.css';

// function SubmitCoin() {
//   // State to track current tab
//   const [currentTab, setCurrentTab] = useState(0);
//   const [formData, setFormData] = useState({
//     ico_ido_id,
//       user_id,
//       fund_stage,
//       launchpad,
//       other_launchpad,
//       type,
//       crypto_market_id,
//       coin_name,
//       alias,
//       slug,
//       image,
//       start_time,
//       end_time,
//       total_coin,
//       quantity_of_coin,
//       ico_price,
//       website,
//       ico_project_id,
//       soft_cap,
//       hard_cap,
//       personal_cap,
//       contract_address,
//       description,
//       country,
//       where_to_buy,
//       social_media_url,
//       twitter,
//       instagram,
//       reddit,
//       medium,
//       telegram,
//       discord,
//       user_contact_type,
//       user_contact,
//       ico_ido_type , // Default value as per schema
//       plan,
//       total_amount,
//       trasaction_id,
//       market_email,
//       wallet_address,
//       coin_token_address,
//       coin_token,
//       blockchain,
//       ticker,
//     // Personal details
//     logo: null,
//     name: "",
//     symbol: "",
    
//     categories: {
//       artificialIntelligence: false,
//       gambling: false,
//       nftPlatform: false,
//       other: false,
//       defiv: false,
//       gaming: false,
//       playToEarn: false,
//       pumpFunTokens: false,
//       fanToken: false,
//       memecoins: false,
//       utilityToken: false
//     },
//     // Address details
//     websiteLink: "",
//     telegramLink: "",
//     xLink: "",
//     discordLink: "",
//     youtubeLink: "",
//     whitepaperLink: ""
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         categories: {
//           ...formData.categories,
//           [name]: checked
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   // Handle logo upload
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     // Here you would typically handle the file upload
//     // For demonstration, we'll just store the file object
//     setFormData({
//       ...formData,
//       logo: file
//     });
//   };

//   // Navigation functions
//   const next = () => {
//     if (currentTab < 5) {
//       setCurrentTab(currentTab + 1);
//     }
//   };

//   const back = () => {
//     if (currentTab > 0) {
//       setCurrentTab(currentTab - 1);
//     }
//   };

  // const launchpadOptions = [
  //   { value: "", label: "Select Project Type" },
  //   { value: "dao-maker", label: "DAO Maker Launchpad" },
  //   { value: "bscpad", label: "BSCPad" },
  //   { value: "trustswap", label: "TrustSwap" },
  //   { value: "bullstarter", label: "BullStarter" },
  //   { value: "occamrazer", label: "OccamRazer" },
  //   { value: "polkastarter", label: "Polkastarter" },
  //   { value: "starter", label: "Starter" },
  //   { value: "pancakeswap", label: "PancakeSwap" },
  //   { value: "paid-network", label: "PAID Network" },
  //   { value: "launchpool", label: "Launchpool" },
  //   { value: "red-kite", label: "Red Kite" },
  //   { value: "trustpad", label: "TrustPad" },
  //   { value: "enjinstarter", label: "Enjinstarter" },
  //   { value: "zendit", label: "ZENDIT" },
  //   { value: "poolz", label: "Poolz" },
  //   { value: "seedify", label: "Seedify" },
  //   { value: "gamefi", label: "GameFi" },
  //   { value: "gamestarter", label: "Gamestarter" },
  //   { value: "kommunitas", label: "Kommunitas" },
  //   { value: "truepnl", label: "TruePNL" },
  //   { value: "impossible-finance", label: "Impossible Finance" },
  //   { value: "binstarter", label: "BinStarter" },
  //   { value: "gagarin", label: "GAGARIN" },
  //   { value: "firestarter", label: "FireStarter" },
  //   { value: "spores-network", label: "Spores Network" },
  //   { value: "occamrazer-2", label: "OccamRazer" },
  //   { value: "tokensoft", label: "Tokensoft" },
  //   { value: "gempad", label: "Gempad" },
  //   { value: "gate-io", label: "Gate.io" },
  //   { value: "pinksale-finance", label: "pinksale Finance" },
  //   { value: "p2pb2b", label: "p2pb2b" },
  //   { value: "ixirpad", label: "ixirpad" },
  //   { value: "daostarter", label: "DaoStarter" },
  //   { value: "binance", label: "Binance" },
  //   { value: "kucoin", label: "Kucoin" },
  //   { value: "coinlist", label: "Coinlist" },
  //   { value: "crytfex", label: "Crytfex" },
  //   { value: "southxchange", label: "SouthXchange" },
  //   { value: "probit-global", label: "ProBit Global" },
  //   { value: "latoken", label: "Latoken" },
  //   { value: "peakdefi", label: "Peakdefi" },
  //   { value: "x-starter", label: "x-starter" },
  //   { value: "on-website", label: "On Website" },
  //   { value: "iskra", label: "ISKRA" },
  //   { value: "coinstore", label: "Coinstore" },
  //   { value: "bscstation", label: "BSCStation" },
  //   { value: "zelwin-finance", label: "ZELWIN Finance" },
  //   { value: "bitmart-launchpad", label: "BitMart Launchpad" },
  //   { value: "bitforex", label: "Bitforex" },
  //   { value: "vindax", label: "Vindax" },
  //   { value: "kanga-exchange", label: "Kanga Exchange" },
  //   { value: "kingdomstarter", label: "KingdomStarter" },
  //   { value: "xlaunchpad", label: "XLaunchpad" },
  //   { value: "infinitypad", label: "InfinityPad" },
  //   { value: "uplift", label: "Uplift" },
  //   { value: "bitget", label: "Bitget" },
  //   { value: "bybit", label: "Bybit" },
  //   { value: "dextrade", label: "DexTrade" },
  //   { value: "singularitydao", label: "SingularityDao" },
  //   { value: "zyberswap", label: "ZyberSwap" },
  //   { value: "razrfi-launchpad", label: "RazrFi Launchpad" },
  //   { value: "bsclaunch", label: "BSClaunch" },
  //   { value: "pancakeswap-2", label: "pancakeswap" },
  //   { value: "finlaunch", label: "finlaunch" },
  //   { value: "dao-maker-2", label: "Dao Maker" },
  //   { value: "bullperks", label: "Bullperks" },
  //   { value: "torkpad", label: "TorkPad" },
  //   { value: "republic", label: "Republic" },
  //   { value: "chaingpt", label: "Chaingpt" },
  //   { value: "koistarter", label: "KOIStarter" },
  //   { value: "indoex-io", label: "Indoex.io" },
  //   { value: "matic-launchpad", label: "Matic Launchpad" },
  //   { value: "bscs-launchpad", label: "BSCS Launchpad" },
  //   { value: "bitlink-launchpad", label: "Bitlink LaunchPad" },
  //   { value: "decubate", label: "Decubate" },
  //   { value: "coinlist-launchpad", label: "Coinlist LaunchPad" },
  //   { value: "bounce", label: "Bounce" },
  //   { value: "wepad-launchpad", label: "Wepad Launchpad" },
  //   { value: "synapse-network", label: "Synapse Network" },
  //   { value: "tonup", label: "TonUP" },
  //   { value: "impulse-finance", label: "Impulse Finance" },
  //   { value: "bakeryswap", label: "BakerySwap" },
  //   { value: "turtsat", label: "TurtSat" },
  //   { value: "flybtc", label: "FLYBTC" },
  //   { value: "ape-terminal", label: "Ape Terminal" },
  //   { value: "aitech-pad", label: "AITECH Pad" },
  //   { value: "moonstarter", label: "MoonStarter" },
  //   { value: "fjord-foundry", label: "Fjord Foundry" },
  //   { value: "starlaunch", label: "StarLaunch" },
  //   { value: "dojoswap", label: "DojoSwap" },
  //   { value: "solanium", label: "Solanium" },
  //   { value: "moonedge", label: "MoonEdge" },
  //   { value: "avalaunch", label: "Avalaunch" },
  //   { value: "gamespad", label: "Gamespad" },
  //   { value: "dexcheck", label: "Dexcheck" },
  //   { value: "velocore", label: "Velocore" },
  //   { value: "floorswap", label: "Floorswap" },
  //   { value: "paragen", label: "Paragen" },
  //   { value: "okx", label: "OKX" },
  //   { value: "port3-network", label: "Port3 Network" },
  //   { value: "turtsat-2", label: "TurtSat" },
  //   { value: "cetus", label: "Cetus" },
  //   { value: "spartadex", label: "SpartaDex" },
  //   { value: "finceptor", label: "Finceptor" },
  //   { value: "tenset-io", label: "TenseT.io" },
  //   { value: "superlauncher", label: "SuperLauncher" },
  //   { value: "bigone", label: "BigONE" },
  //   { value: "ronin", label: "Ronin" },
  //   { value: "brcstarter", label: "BRCStarter" },
  //   { value: "arbipad", label: "Arbipad" },
  //   { value: "seapad", label: "SeaPad" },
  //   { value: "magic-eden", label: "Magic Eden" },
  //   { value: "vent-finance", label: "Vent Finance" },
  //   { value: "avalaunch-2", label: "Avalaunch" },
  //   { value: "neolaunch", label: "neolaunch" },
  //   { value: "trustfi", label: "Trustfi" },
  //   { value: "de-fi-2-0", label: "De.Fi 2.0" },
  //   { value: "openpad", label: "OpenPad" },
  //   { value: "smithii", label: "Smithii" },
  //   { value: "dyor", label: "DYOR" },
  //   { value: "bitexen-global", label: "Bitexen Global" },
  //   { value: "siriuspad", label: "Siriuspad" },
  //   { value: "particle-network", label: "Particle Network" },
  //   { value: "bhero", label: "BHero" },
  //   { value: "tokenfi", label: "TokenFi" },
  //   { value: "eclipsefi", label: "Eclipsefi" },
  //   { value: "cryptohub", label: "CryptoHub" },
  //   { value: "unicorn-hunter", label: "Unicorn Hunter" },
  //   { value: "dappad", label: "Dappad" },
  //   { value: "zenix-launcher", label: "Zenix Launcher" },
  //   { value: "huostarter", label: "Huostarter" },
  //   { value: "pattieswap", label: "PattieSwap" },
  //   { value: "smithii-2", label: "Smithii" },
  //   { value: "octavia", label: "Octavia" },
  //   { value: "bit2me-global", label: "Bit2Me Global" },
  //   { value: "operation-phoenix", label: "Operation Phoenix" },
  //   { value: "ordify", label: "Ordify" },
  //   { value: "kredict", label: "KREDICT" },
  //   { value: "truepnl-2", label: "TruePNL" },
  //   { value: "jupiter", label: "Jupiter" },
  //   { value: "magic-square", label: "Magic Square" },
  //   { value: "eeseeio", label: "eeseeio" },
  //   { value: "dxsale", label: "DxSale" },
  //   { value: "solsale", label: "Solsale" },
  //   { value: "degenpad", label: "DegenPad" },
  //   { value: "elixir-games", label: "Elixir Games" },
  //   { value: "fantomstarter", label: "fantomstarter" },
  //   { value: "blastup", label: "Blastup" },
  //   { value: "axo", label: "axo" },
  //   { value: "tonsale", label: "TONSALE" },
  //   { value: "chainboost2", label: "chainboost2" },
  //   { value: "app-alphamind-co", label: "app alphamind.co" },
  //   { value: "bitstorage", label: "bitstorage" },
  //   { value: "borgpad", label: "BorgPad" },
  //   { value: "tokentool", label: "tokentool" },
  //   { value: "truffle", label: "truffle" }
  // ];

//   return (
//     <>
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li>
//               <Link href="/" title="Home">
//                 Home
//               </Link>
//             </li>
//             <li>Submit Coin</li>
//           </ul>
//         </div>
//       </section>
//       <section className="py-4 loginform submitcoin">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="contact-us-form">
//                 <div className="row">
//                   <div className="col-xl-12 text-center">
//                     <h5 className="h2 fw-bold mb-4">Submit new coin</h5>
//                   </div>
//                   <form>
//                     <div className="top_pills">
//                       <nav className="nav nav-pills nav-fill">
//                         <a
//                           className={`nav-link tab-pills ${
//                             currentTab === 0 ? "active" : ""
//                           }`}
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCurrentTab(0);
//                           }}
//                         >
//                           Coin Details
//                         </a>
//                         <a
//                           className={`nav-link tab-pills ${
//                             currentTab === 1 ? "active" : ""
//                           }`}
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCurrentTab(1);
//                           }}
//                         >
//                           Address Details
//                         </a>
//                         <a
//                           className={`nav-link tab-pills ${
//                             currentTab === 2 ? "active" : ""
//                           }`}
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCurrentTab(2);
//                           }}
//                         >
//                           Company Details
//                         </a>
//                         <a
//                           className={`nav-link tab-pills ${
//                             currentTab === 3 ? "active" : ""
//                           }`}
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCurrentTab(3);
//                           }}
//                         >
//                           Listing Details
//                         </a>
//                         <a
//                           className={`nav-link tab-pills ${
//                             currentTab === 4 ? "active" : ""
//                           }`}
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCurrentTab(4);
//                           }}
//                         >
//                           Pricing Details
//                         </a>
//                         <a
//                           className={`nav-link tab-pills ${
//                             currentTab === 5 ? "active" : ""
//                           }`}
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCurrentTab(5);
//                           }}
//                         >
//                           Finish
//                         </a>
//                       </nav>
//                     </div>
//                     <div>
//                       {/* Tab 1: Personal Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 0 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="row">
//                           <div className="col-xl-12 text-center w-75 m-auto">
//                             <p className="fw-bold">
//                               Please complete the steps to add a new coin to
//                               Crypto Presale. After approval your project will
//                               be visible on our platform.
//                             </p>
//                           </div>
//                           <div className="col-xl-4">
//                             <div className="mb-3">
//                               <label htmlFor="logo" className="form-label">
//                                 Coin Logo
//                               </label>
//                               <div className="form-group">
//                                 <div className="confirm-identity">
//                                   <div className="ci-user">
//                                     <div className="ci-user-picture">
//                                       {/* <Image 
//                                       src={formData.logo ? URL.createObjectURL(formData.logo) :avtarImage}
//                                       id="item-img-output" 
//                                         className="imgpreviewPrf img-fluid" 
//                                         alt="Logo preview" 
//                                       /> */}
//                                       <img
//                                         src={
//                                           formData.logo
//                                             ? URL.createObjectURL(formData.logo)
//                                             : "/avtar.webp"
//                                         }
//                                         id="item-img-output"
//                                         className="imgpreviewPrf img-fluid"
//                                         alt="Logo preview"
//                                       />
//                                     </div>
//                                   </div>
//                                   <div className="ci-user-btn mt-4">
//                                     {/* <Link
//                                       href="#"
//                                       onClick={(e) => e.preventDefault()}
//                                       className="userEditeBtn btn-main primary-btn small px-4 btn-second_main"
//                                     > */}
//                                   <div  className="userEditeBtn btn-main primary-btn small px-4 btn-second_main">
//                                       <input
//                                         type="file"
//                                         className="item-img file center-block filepreviewprofile"
//                                         onChange={handleLogoUpload}
//                                         accept="image/*"
//                                       />
//                                       Click to upload image
//                                       </div>
//                                     {/* </Link> */}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-xl-8">
//                             <div className="mb-2">
//                               <label htmlFor="name" className="form-label mb-0">
//                                 Coin Name{" "}
//                                 <sup className="text-danger fs-7">*</sup>
//                               </label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Please enter name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="mb-2">
//                               <label
//                                 htmlFor="symbol"
//                                 className="form-label mb-0"
//                               >
//                                 Symbol <sup className="text-danger fs-7">*</sup>
//                               </label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="symbol"
//                                 id="symbol"
//                                 placeholder="Symbol Here"
//                                 value={formData.symbol}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="mb-2">
//                               <label
//                                 htmlFor="description"
//                                 className="form-label mb-0"
//                               >
//                                 Description{" "}
//                                 <sup className="text-danger fs-7">*</sup>
//                               </label>
//                               <textarea
//                                 className="form-control"
//                                 rows="2"
//                                 name="description"
//                                 id="description"
//                                 placeholder="Enter Description Here"
//                                 value={formData.description}
//                                 onChange={handleInputChange}
//                               ></textarea>
//                             </div>
//                           </div>
//                           <div className="col-xl-12">
//                             <label>Categories (select at least one)*</label>
//                             <div className="checkboxflex mb-2">
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="artificialIntelligence"
//                                   checked={
//                                     formData.categories.artificialIntelligence
//                                   }
//                                   onChange={handleInputChange}
//                                 />
//                                 <label> Artificial Intelligence </label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="gambling"
//                                   checked={formData.categories.gambling}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Gambling</label>
//                               </div>
//                               {/* Add the rest of the checkboxes following the same pattern */}
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="nftPlatform"
//                                   checked={formData.categories.nftPlatform}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>NFT Platform</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="other"
//                                   checked={formData.categories.other}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Other</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="defiv"
//                                   checked={formData.categories.defiv}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>DeFiv</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="gaming"
//                                   checked={formData.categories.gaming}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Gaming</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="playToEarn"
//                                   checked={formData.categories.playToEarn}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Play To Earn</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="pumpFunTokens"
//                                   checked={formData.categories.pumpFunTokens}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Pump.fun Tokens</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="fanToken"
//                                   checked={formData.categories.fanToken}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Fan Token</label>
//                               </div>
//                               <div className="listing-category">
//                                 <input
//                                   type="checkbox"
//                                   name="memecoins"
//                                   checked={formData.categories.memecoins}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Memecoins</label>
//                               </div>
//                               <div className="listing-category mb-2">
//                                 <input
//                                   type="checkbox"
//                                   name="utilityToken"
//                                   checked={formData.categories.utilityToken}
//                                   onChange={handleInputChange}
//                                 />
//                                 <label>Utility Token</label>
//                               </div>
//                               <small className="text-danger">
//                                 Select all categories that apply to your token.
//                               </small>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="text-end mt-4">
//                       <div className="main_flex">
//                         <button
//                           type="button"
//                           id="back_button"
//                           className={`btn-main primary-btn shadow ${
//                             currentTab === 0 ? "d-none" : ""
//                           }`}
//                           onClick={back}
//                         >
//                           Back
//                         </button>
//                         <button
//                           type="button"
//                           id="next_button"
//                           className={`btn-main primary-btn btn-second_main shadow ${
//                             currentTab === 3 ? "d-none" : ""
//                           }`}
//                           onClick={next}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                       </div>

//                       {/* Tab 2: Address Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 1 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="mb-3">
//                           <label htmlFor="websiteLink" className="form-label">
//                             Project Website{" "}
//                             <sup className="text-danger fs-5">*</sup>
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="websiteLink"
//                             id="websiteLink"
//                             placeholder="Please enter website link"
//                             value={formData.websiteLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="telegramLink" className="form-label">
//                             Telegram link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="telegramLink"
//                             id="telegramLink"
//                             placeholder="Please enter Telegram link"
//                             value={formData.telegramLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="xLink" className="form-label">
//                             Twitter link
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="xLink"
//                             id="xLink"
//                             placeholder="Please enter X link"
//                             value={formData.xLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="discordLink" className="form-label">
//                             Discord link
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="discordLink"
//                             id="discordLink"
//                             placeholder="Please enter Discord link"
//                             value={formData.discordLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="youtubeLink" className="form-label">
//                             Facebook link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="youtubeLink"
//                             id="youtubeLink"
//                             placeholder="Please enter YouTube link"
//                             value={formData.youtubeLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="youtubeLink" className="form-label">
//                             Instagram link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="youtubeLink"
//                             id="youtubeLink"
//                             placeholder="Please enter YouTube link"
//                             value={formData.youtubeLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="youtubeLink" className="form-label">
//                             Reddit link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="youtubeLink"
//                             id="youtubeLink"
//                             placeholder="Please enter YouTube link"
//                             value={formData.youtubeLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="youtubeLink" className="form-label">
//                             Meddium link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="youtubeLink"
//                             id="youtubeLink"
//                             placeholder="Please enter YouTube link"
//                             value={formData.youtubeLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label
//                             htmlFor="whitepaperLink"
//                             className="form-label"
//                           >
//                             Whitepaper link
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="whitepaperLink"
//                             id="whitepaperLink"
//                             placeholder="Please enter whitepaper link"
//                             value={formData.whitepaperLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="text-end mt-4">
//                       <div className="main_flex">
//                         <button
//                           type="button"
//                           id="back_button"
//                           className={`btn-main primary-btn shadow ${
//                             currentTab === 0 ? "d-none" : ""
//                           }`}
//                           onClick={back}
//                         >
//                           Back
//                         </button>
//                         <button
//                           type="button"
//                           id="next_button"
//                           className={`btn-main primary-btn btn-second_main shadow ${
//                             currentTab === 3 ? "d-none" : ""
//                           }`}
//                           onClick={next}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                       </div>

//                       {/* Tab 3: Company Details (same as Address Details in your original code) */}
//                       <div
//                         className={`tab ${
//                           currentTab === 2 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="mb-3">
//                           <label htmlFor="companyName" className="form-label">
//                             Company Name
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="companyName"
//                             id="companyName"
//                             placeholder="Enter your company name"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="companyEmail" className="form-label">
//                             Company Email
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             name="companyEmail"
//                             id="companyEmail"
//                             placeholder="Enter company email"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label
//                             htmlFor="companyContact"
//                             className="form-label"
//                           >
//                             Company Contact
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="companyContact"
//                             id="companyContact"
//                             placeholder="Enter company contact number"
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label
//                             htmlFor="companyAddress"
//                             className="form-label"
//                           >
//                             Company Address
//                           </label>
//                           <textarea
//                             className="form-control"
//                             name="companyAddress"
//                             id="companyAddress"
//                             rows="3"
//                             placeholder="Enter company address"
//                           ></textarea>
//                         </div>
//                         <div className="text-end mt-4">
//                       <div className="main_flex">
//                         <button
//                           type="button"
//                           id="back_button"
//                           className={`btn-main primary-btn shadow ${
//                             currentTab === 0 ? "d-none" : ""
//                           }`}
//                           onClick={back}
//                         >
//                           Back
//                         </button>
//                         <button
//                           type="button"
//                           id="next_button"
//                           className={`btn-main primary-btn btn-second_main shadow ${
//                             currentTab === 5 ? "d-none" : ""
//                           }`}
//                           onClick={next}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                       </div>

//                       {/* Tab 4: details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 3 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="row">
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Total Coin / Token Supply: 
                              
//                             </label>
//                             <sup className="text-danger fs-7">*(Number only)</sup>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               placeholder="Enter your total coins"
//                               name="totalSupply"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Total Qty
//                             </label>
//                             <sup className="text-danger fs-7">*(Number only)</sup>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                              placeholder="Enter your total qty"
//                               name="presaleQty"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                              Price
//                             </label>
//                             <sup className="text-danger fs-7">*(USD only)</sup>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                              placeholder="Price"
//                               name="presaleQty"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               start Date
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="date"
                             
//                               name="startDate"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               end Date
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="date"
                              
//                               name="endDate"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               soft Cap
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                              placeholder="price"
//                               name="softCap"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               hard Cap
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                              placeholder="price"
//                               name="hardCap"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               personal Cap
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               placeholder="price"
//                               name="personalCap"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3"> 
//                             <label className="form-label text-capitalize">
//                             ICO/IDO Buy Link
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               placeholder="Enter your link"
//                               name="buyLink"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               funding Stage
//                             </label>
                                                         
//                             <select name="fundingStage" className="form-select form-control">
//                               <option selected>Select Funding Stage</option>
//                               <option value="Privatesale">Privatesale</option>
//                               <option value="Presale">Presale</option>
//                               <option value="Publicsale">Publicsale</option>
//                               <option value="ICO">ICO</option>
//                               <option value="IEO">IEO</option>
//                             </select>
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               launchpad
//                             </label>
//                             <select
//                               name="coin_token"
//                               value={formData.launchpad}
//                               onChange={handleInputChange}
//                               className="form-select form-control"
//                             >
//                               {launchpadOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//                             </select>
//                           </div>
                          
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                             Country from Coin / Token Issued:
//                             </label>
//                             <select class="form-select form-control" aria-label="country-coin" id="country-coin" name="country">
//                      <option value="">Please choose</option>
//                                        <option value="Afghanistan">Afghanistan</option>
//                                  <option value="Albania">Albania</option>
//                                  <option value="Algeria">Algeria</option>
//                                  <option value="American Samoa">American Samoa</option>
//                                  <option value="Andorra">Andorra</option>
//                                  <option value="Angola">Angola</option>
//                                  <option value="Anguilla">Anguilla</option>
//                                  <option value="Antarctica">Antarctica</option>
//                                  <option value="Antigua And Barbuda">Antigua And Barbuda</option>
//                                  <option value="Argentina">Argentina</option>
//                                  <option value="Armenia">Armenia</option>
//                                  <option value="Aruba">Aruba</option>
//                                  <option value="Australia">Australia</option>
//                                  <option value="Austria">Austria</option>
//                                  <option value="Azerbaijan">Azerbaijan</option>
//                                  <option value="Bahamas The">Bahamas The</option>
//                                  <option value="Bahrain">Bahrain</option>
//                                  <option value="Bangladesh">Bangladesh</option>
//                                  <option value="Barbados">Barbados</option>
//                                  <option value="Belarus">Belarus</option>
//                                  <option value="Belgium">Belgium</option>
//                                  <option value="Belize">Belize</option>
//                                  <option value="Benin">Benin</option>
//                                  <option value="Bermuda">Bermuda</option>
//                                  <option value="Bhutan">Bhutan</option>
//                                  <option value="Bolivia">Bolivia</option>
//                                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
//                                  <option value="Botswana">Botswana</option>
//                                  <option value="Bouvet Island">Bouvet Island</option>
//                                  <option value="Brazil">Brazil</option>
//                                  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
//                                  <option value="Brunei">Brunei</option>
//                                  <option value="Bulgaria">Bulgaria</option>
//                                  <option value="Burkina Faso">Burkina Faso</option>
//                                  <option value="Burundi">Burundi</option>
//                                  <option value="Cambodia">Cambodia</option>
//                                  <option value="Cameroon">Cameroon</option>
//                                  <option value="Canada">Canada</option>
//                                  <option value="Cape Verde">Cape Verde</option>
//                                  <option value="Cayman Islands">Cayman Islands</option>
//                                  <option value="Central African Republic">Central African Republic</option>
//                                  <option value="Chad">Chad</option>
//                                  <option value="Chile">Chile</option>
//                                  <option value="China">China</option>
//                                  <option value="Christmas Island">Christmas Island</option>
//                                  <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
//                                  <option value="Colombia">Colombia</option>
//                                  <option value="Comoros">Comoros</option>
//                                  <option value="Republic Of The Congo">Republic Of The Congo</option>
//                                  <option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option>
//                                  <option value="Cook Islands">Cook Islands</option>
//                                  <option value="Costa Rica">Costa Rica</option>
//                                  <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option>
//                                  <option value="Croatia">Croatia</option>
//                                  <option value="Cuba">Cuba</option>
//                                  <option value="Cyprus">Cyprus</option>
//                                  <option value="Czechia">Czechia</option>
//                                  <option value="Denmark">Denmark</option>
//                                  <option value="Djibouti">Djibouti</option>
//                                  <option value="Dominica">Dominica</option>
//                                  <option value="Dominican Republic">Dominican Republic</option>
//                                  <option value="East Timor">East Timor</option>
//                                  <option value="Ecuador">Ecuador</option>
//                                  <option value="Egypt">Egypt</option>
//                                  <option value="El Salvador">El Salvador</option>
//                                  <option value="Equatorial Guinea">Equatorial Guinea</option>
//                                  <option value="Eritrea">Eritrea</option>
//                                  <option value="Estonia">Estonia</option>
//                                  <option value="Ethiopia">Ethiopia</option>
//                                  <option value="External Territories of Australia">External Territories of Australia</option>
//                                  <option value="Falkland Islands">Falkland Islands</option>
//                                  <option value="Faroe Islands">Faroe Islands</option>
//                                  <option value="Fiji Islands">Fiji Islands</option>
//                                  <option value="Finland">Finland</option>
//                                  <option value="France">France</option>
//                                  <option value="French Guiana">French Guiana</option>
//                                  <option value="French Polynesia">French Polynesia</option>
//                                  <option value="French Southern Territories">French Southern Territories</option>
//                                  <option value="Gabon">Gabon</option>
//                                  <option value="Gambia The">Gambia The</option>
//                                  <option value="Georgia">Georgia</option>
//                                  <option value="Germany">Germany</option>
//                                  <option value="Ghana">Ghana</option>
//                                  <option value="Gibraltar">Gibraltar</option>
//                                  <option value="Greece">Greece</option>
//                                  <option value="Greenland">Greenland</option>
//                                  <option value="Grenada">Grenada</option>
//                                  <option value="Guadeloupe">Guadeloupe</option>
//                                  <option value="Guam">Guam</option>
//                                  <option value="Guatemala">Guatemala</option>
//                                  <option value="Guernsey and Alderney">Guernsey and Alderney</option>
//                                  <option value="Guinea">Guinea</option>
//                                  <option value="Guinea-Bissau">Guinea-Bissau</option>
//                                  <option value="Guyana">Guyana</option>
//                                  <option value="Haiti">Haiti</option>
//                                  <option value="Heard and McDonald Islands">Heard and McDonald Islands</option>
//                                  <option value="Honduras">Honduras</option>
//                                  <option value="Hong Kong">Hong Kong</option>
//                                  <option value="Hungary">Hungary</option>
//                                  <option value="Iceland">Iceland</option>
//                                  <option value="India">India</option>
//                                  <option value="Indonesia">Indonesia</option>
//                                  <option value="Iran">Iran</option>
//                                  <option value="Iraq">Iraq</option>
//                                  <option value="Ireland">Ireland</option>
//                                  <option value="Israel">Israel</option>
//                                  <option value="Italy">Italy</option>
//                                  <option value="Jamaica">Jamaica</option>
//                                  <option value="Japan">Japan</option>
//                                  <option value="Jersey">Jersey</option>
//                                  <option value="Jordan">Jordan</option>
//                                  <option value="Kazakhstan">Kazakhstan</option>
//                                  <option value="Kenya">Kenya</option>
//                                  <option value="Kiribati">Kiribati</option>
//                                  <option value="Korea North">Korea North</option>
//                                  <option value="Korea South">Korea South</option>
//                                  <option value="Kuwait">Kuwait</option>
//                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
//                                  <option value="Laos">Laos</option>
//                                  <option value="Latvia">Latvia</option>
//                                  <option value="Lebanon">Lebanon</option>
//                                  <option value="Lesotho">Lesotho</option>
//                                  <option value="Liberia">Liberia</option>
//                                  <option value="Libya">Libya</option>
//                                  <option value="Liechtenstein">Liechtenstein</option>
//                                  <option value="Lithuania">Lithuania</option>
//                                  <option value="Luxembourg">Luxembourg</option>
//                                  <option value="Macau S.A.R.">Macau S.A.R.</option>
//                                  <option value="Macedonia">Macedonia</option>
//                                  <option value="Madagascar">Madagascar</option>
//                                  <option value="Malawi">Malawi</option>
//                                  <option value="Malaysia">Malaysia</option>
//                                  <option value="Maldives">Maldives</option>
//                                  <option value="Mali">Mali</option>
//                                  <option value="Malta">Malta</option>
//                                  <option value="Man (Isle of)">Man (Isle of)</option>
//                                  <option value="Marshall Islands">Marshall Islands</option>
//                                  <option value="Martinique">Martinique</option>
//                                  <option value="Mauritania">Mauritania</option>
//                                  <option value="Mauritius">Mauritius</option>
//                                  <option value="Mayotte">Mayotte</option>
//                                  <option value="Mexico">Mexico</option>
//                                  <option value="Micronesia">Micronesia</option>
//                                  <option value="Moldova">Moldova</option>
//                                  <option value="Monaco">Monaco</option>
//                                  <option value="Mongolia">Mongolia</option>
//                                  <option value="Montserrat">Montserrat</option>
//                                  <option value="Morocco">Morocco</option>
//                                  <option value="Mozambique">Mozambique</option>
//                                  <option value="Myanmar">Myanmar</option>
//                                  <option value="Namibia">Namibia</option>
//                                  <option value="Nauru">Nauru</option>
//                                  <option value="Nepal">Nepal</option>
//                                  <option value="Netherlands Antilles">Netherlands Antilles</option>
//                                  <option value="Netherlands">Netherlands</option>
//                                  <option value="New Caledonia">New Caledonia</option>
//                                  <option value="New Zealand">New Zealand</option>
//                                  <option value="Nicaragua">Nicaragua</option>
//                                  <option value="Niger">Niger</option>
//                                  <option value="Nigeria">Nigeria</option>
//                                  <option value="Niue">Niue</option>
//                                  <option value="Norfolk Island">Norfolk Island</option>
//                                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
//                                  <option value="Norway">Norway</option>
//                                  <option value="Oman">Oman</option>
//                                  <option value="Pakistan">Pakistan</option>
//                                  <option value="Palau">Palau</option>
//                                  <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
//                                  <option value="Panama">Panama</option>
//                                  <option value="Papua new Guinea">Papua new Guinea</option>
//                                  <option value="Paraguay">Paraguay</option>
//                                  <option value="Peru">Peru</option>
//                                  <option value="Philippines">Philippines</option>
//                                  <option value="Pitcairn Island">Pitcairn Island</option>
//                                  <option value="Poland">Poland</option>
//                                  <option value="Portugal">Portugal</option>
//                                  <option value="Puerto Rico">Puerto Rico</option>
//                                  <option value="Qatar">Qatar</option>
//                                  <option value="Reunion">Reunion</option>
//                                  <option value="Romania">Romania</option>
//                                  <option value="Russia">Russia</option>
//                                  <option value="Rwanda">Rwanda</option>
//                                  <option value="Saint Helena">Saint Helena</option>
//                                  <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
//                                  <option value="Saint Lucia">Saint Lucia</option>
//                                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
//                                  <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
//                                  <option value="Samoa">Samoa</option>
//                                  <option value="San Marino">San Marino</option>
//                                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
//                                  <option value="Saudi Arabia">Saudi Arabia</option>
//                                  <option value="Senegal">Senegal</option>
//                                  <option value="Serbia">Serbia</option>
//                                  <option value="Seychelles">Seychelles</option>
//                                  <option value="Sierra Leone">Sierra Leone</option>
//                                  <option value="Singapore">Singapore</option>
//                                  <option value="Slovakia">Slovakia</option>
//                                  <option value="Slovenia">Slovenia</option>
//                                  <option value="Smaller Territories of the UK">Smaller Territories of the UK</option>
//                                  <option value="Solomon Islands">Solomon Islands</option>
//                                  <option value="Somalia">Somalia</option>
//                                  <option value="South Africa">South Africa</option>
//                                  <option value="South Georgia">South Georgia</option>
//                                  <option value="South Sudan">South Sudan</option>
//                                  <option value="Spain">Spain</option>
//                                  <option value="Sri Lanka">Sri Lanka</option>
//                                  <option value="Sudan">Sudan</option>
//                                  <option value="Suriname">Suriname</option>
//                                  <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
//                                  <option value="Swaziland">Swaziland</option>
//                                  <option value="Sweden">Sweden</option>
//                                  <option value="Switzerland">Switzerland</option>
//                                  <option value="Syria">Syria</option>
//                                  <option value="Taiwan">Taiwan</option>
//                                  <option value="Tajikistan">Tajikistan</option>
//                                  <option value="Tanzania">Tanzania</option>
//                                  <option value="Thailand">Thailand</option>
//                                  <option value="Togo">Togo</option>
//                                  <option value="Tokelau">Tokelau</option>
//                                  <option value="Tonga">Tonga</option>
//                                  <option value="Trinidad And Tobago">Trinidad And Tobago</option>
//                                  <option value="Tunisia">Tunisia</option>
//                                  <option value="Turkey">Turkey</option>
//                                  <option value="Turkmenistan">Turkmenistan</option>
//                                  <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
//                                  <option value="Tuvalu">Tuvalu</option>
//                                  <option value="Uganda">Uganda</option>
//                                  <option value="Ukraine">Ukraine</option>
//                                  <option value="United Arab Emirates">United Arab Emirates</option>
//                                  <option value="United Kingdom">United Kingdom</option>
//                                  <option value="United States">United States</option>
//                                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
//                                  <option value="Uruguay">Uruguay</option>
//                                  <option value="Uzbekistan">Uzbekistan</option>
//                                  <option value="Vanuatu">Vanuatu</option>
//                                  <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
//                                  <option value="Venezuela">Venezuela</option>
//                                  <option value="Vietnam">Vietnam</option>
//                                  <option value="Virgin Islands (British)">Virgin Islands (British)</option>
//                                  <option value="Virgin Islands (US)">Virgin Islands (US)</option>
//                                  <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
//                                  <option value="Western Sahara">Western Sahara</option>
//                                  <option value="Yemen">Yemen</option>
//                                  <option value="Yugoslavia">Yugoslavia</option>
//                                  <option value="Zambia">Zambia</option>
//                                  <option value="Zimbabwe">Zimbabwe</option>
//                                  <option value="Online Event">Online Event</option>
//                                  </select>
//                           </div>
//                         </div>
//                         <div className="text-end mt-4">
//                       <div className="main_flex">
//                         <button
//                           type="button"
//                           id="back_button"
//                           className={`btn-main primary-btn shadow ${
//                             currentTab === 0 ? "d-none" : ""
//                           }`}
//                           onClick={back}
//                         >
//                           Back
//                         </button>
//                         <button
//                           type="button"
//                           id="next_button"
//                           className={`btn-main primary-btn btn-second_main shadow ${
//                             currentTab === 5 ? "d-none" : ""
//                           }`}
//                           onClick={next}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                       </div>

//                       {/* Tab 4: Finish */}
//                       <div
//                         className={`tab ${
//                           currentTab === 4 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="row">
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label">Price</label>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               defaultValue
//                               name="price"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label">Currency</label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               defaultValue="USD"
//                               name="currency"
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label">Fees</label>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               defaultValue
//                               name="fees"
//                             />
//                           </div>
//                         </div>
//                         <div className="text-end mt-4">
//                       <div className="main_flex">
//                         <button
//                           type="button"
//                           id="back_button"
//                           className={`btn-main primary-btn shadow ${
//                             currentTab === 0 ? "d-none" : ""
//                           }`}
//                           onClick={back}
//                         >
//                           Back
//                         </button>
//                         <button
//                           type="button"
//                           id="next_button"
//                           className={`btn-main primary-btn btn-second_main shadow ${
//                             currentTab === 5 ? "d-none" : ""
//                           }`}
//                           onClick={next}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                       </div>
//                       {/* Tab 4: Finish */}
//                       <div
//                         className={`tab ${
//                           currentTab === 5 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="text-center">
//                           <p>All Set! Please submit to continue.</p>
//                           <p>
//                             Thank you for submitting your coin to our platform.
//                           </p>
//                           <p>
//                             Our team will review your submission and will get
//                             back to you soon.
//                           </p>
//                           <button
//                             type="submit"
//                             className="btn-main primary-btn btn-second_main shadow mt-3"
//                           >
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Navigation buttons */}
//                     {/* <div className="text-end mt-4">
//                       <div className="main_flex">
//                         <button
//                           type="button"
//                           id="back_button"
//                           className={`btn-main primary-btn shadow ${
//                             currentTab === 0 ? "d-none" : ""
//                           }`}
//                           onClick={back}
//                         >
//                           Back
//                         </button>
//                         <button
//                           type="button"
//                           id="next_button"
//                           className={`btn-main primary-btn btn-second_main shadow ${
//                             currentTab === 3 ? "d-none" : ""
//                           }`}
//                           onClick={next}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div> */}
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default SubmitCoin;


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// function SubmitCoin() {
//   // State to track current tab
//   const [currentTab, setCurrentTab] = useState(0);
//   const [formData, setFormData] = useState({
//     // General ICO/IDO details
//     fund_stage: "",
//     launchpad: "",
//     other_launchpad: "",
//     type: "",
//     coin_name: "",
//     alias: "",
//     slug: "",
//     image: null,
//     start_time: "",
//     end_time: "",
//     total_coin: "",
//     quantity_of_coin: "",
//     ico_price: "",
//     website: "",
//     soft_cap: "",
//     hard_cap: "",
//     personal_cap: "",
//     contract_address: "",
//     description: "",
//     country: "",
//     where_to_buy: "",
    
//     // Social media links
//     social_media_url: "",
//     twitter: "",
//     instagram: "",
//     reddit: "",
//     medium: "",
//     telegram: "",
//     discord: "",
    
//     // Contact and transaction details
//     user_contact_type: "",
//     user_contact: "",
//     ico_ido_type: "", 
//     plan: "",
//     total_amount: "",
//     transaction_id: "",
//     market_email: "",
//     wallet_address: "",
//     coin_token_address: "",
//     coin_token: "",
//     blockchain: "",
//     ticker: "",
    
//     // Personal details
//     logo: null,
//     name: "",
//     symbol: "",
    
//     // Company details
//     companyName: "",
//     companyEmail: "",
//     companyContact: "",
//     companyAddress: "",
    
//     // Pricing details
//     price: "",
//     currency: "USD",
//     fees: "",
    
//     categories: {
//       artificialIntelligence: false,
//       gambling: false,
//       nftPlatform: false,
//       other: false,
//       defiv: false,
//       gaming: false,
//       playToEarn: false,
//       pumpFunTokens: false,
//       fanToken: false,
//       memecoins: false,
//       utilityToken: false
//     },
    
//     // Address details
//     websiteLink: "",
//     telegramLink: "",
//     xLink: "",
//     discordLink: "",
//     youtubeLink: "",
//     facebookLink: "",
//     instagramLink: "",
//     redditLink: "",
//     mediumLink: "",
//     whitepaperLink: ""
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         categories: {
//           ...formData.categories,
//           [name]: checked
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   // Handle logo upload
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       logo: file
//     });
//   };

//   // Navigation functions
//   const next = () => {
//     if (currentTab < 5) {
//       setCurrentTab(currentTab + 1);
//     }
//   };

//   const back = () => {
//     if (currentTab > 0) {
//       setCurrentTab(currentTab - 1);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log("Form submitted:", formData);
//     // You would typically send this data to your API endpoint
//   };

//   const launchpadOptions = [
//     { value: "", label: "Select Project Type" },
//     { value: "dao-maker", label: "DAO Maker Launchpad" },
//     { value: "bscpad", label: "BSCPad" },
//     { value: "trustswap", label: "TrustSwap" },
//     // ... all other options remain the same
//   ];

//   return (
//     <>
//       <section className="brdcrumb">
//         <div className="container">
//           <ul className="mb-0">
//             <li>
//               <Link href="/" title="Home">
//                 Home
//               </Link>
//             </li>
//             <li>Submit Coin</li>
//           </ul>
//         </div>
//       </section>
//       <section className="py-4 loginform submitcoin">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="contact-us-form">
//                 <div className="row">
//                   <div className="col-xl-12 text-center">
//                     <h5 className="h2 fw-bold mb-4">Submit new coin</h5>
//                   </div>
//                   <form onSubmit={handleSubmit}>
//                     <div className="top_pills">
//                       <nav className="nav nav-pills nav-fill">
//                         {[
//                           "Coin Details",
//                           "Address Details",
//                           "Company Details",
//                           "Listing Details",
//                           "Pricing Details",
//                           "Finish"
//                         ].map((tabName, index) => (
//                           <a
//                             key={index}
//                             className={`nav-link tab-pills ${
//                               currentTab === index ? "active" : ""
//                             }`}
//                             href="#"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               setCurrentTab(index);
//                             }}
//                           >
//                             {tabName}
//                           </a>
//                         ))}
//                       </nav>
//                     </div>
//                     <div>
//                       {/* Tab 1: Coin Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 0 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="row">
//                           <div className="col-xl-12 text-center w-75 m-auto">
//                             <p className="fw-bold">
//                               Please complete the steps to add a new coin to
//                               Crypto Presale. After approval your project will
//                               be visible on our platform.
//                             </p>
//                           </div>
//                           <div className="col-xl-4">
//                             <div className="mb-3">
//                               <label htmlFor="logo" className="form-label">
//                                 Coin Logo
//                               </label>
//                               <div className="form-group">
//                                 <div className="confirm-identity">
//                                   <div className="ci-user">
//                                     <div className="ci-user-picture">
//                                       <img
//                                         src={
//                                           formData.logo
//                                             ? URL.createObjectURL(formData.logo)
//                                             : "/avtar.webp"
//                                         }
//                                         id="item-img-output"
//                                         className="imgpreviewPrf img-fluid"
//                                         alt="Logo preview"
//                                       />
//                                     </div>
//                                   </div>
//                                   <div className="ci-user-btn mt-4">
//                                     <div className="userEditeBtn btn-main primary-btn small px-4 btn-second_main">
//                                       <input
//                                         type="file"
//                                         className="item-img file center-block filepreviewprofile"
//                                         onChange={handleLogoUpload}
//                                         accept="image/*"
//                                       />
//                                       Click to upload image
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-xl-8">
//                             <div className="mb-2">
//                               <label htmlFor="name" className="form-label mb-0">
//                                 Coin Name{" "}
//                                 <sup className="text-danger fs-7">*</sup>
//                               </label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Please enter name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>
//                             <div className="mb-2">
//                               <label
//                                 htmlFor="symbol"
//                                 className="form-label mb-0"
//                               >
//                                 Symbol <sup className="text-danger fs-7">*</sup>
//                               </label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="symbol"
//                                 id="symbol"
//                                 placeholder="Symbol Here"
//                                 value={formData.symbol}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>
//                             <div className="mb-2">
//                               <label
//                                 htmlFor="description"
//                                 className="form-label mb-0"
//                               >
//                                 Description{" "}
//                                 <sup className="text-danger fs-7">*</sup>
//                               </label>
//                               <textarea
//                                 className="form-control"
//                                 rows="2"
//                                 name="description"
//                                 id="description"
//                                 placeholder="Enter Description Here"
//                                 value={formData.description}
//                                 onChange={handleInputChange}
//                                 required
//                               ></textarea>
//                             </div>
//                           </div>
//                           <div className="col-xl-12">
//                             <label>Categories (select at least one)*</label>
//                             <div className="checkboxflex mb-2">
//                               {[
//                                 { name: "artificialIntelligence", label: "Artificial Intelligence" },
//                                 { name: "gambling", label: "Gambling" },
//                                 { name: "nftPlatform", label: "NFT Platform" },
//                                 { name: "other", label: "Other" },
//                                 { name: "defiv", label: "DeFiv" },
//                                 { name: "gaming", label: "Gaming" },
//                                 { name: "playToEarn", label: "Play To Earn" },
//                                 { name: "pumpFunTokens", label: "Pump.fun Tokens" },
//                                 { name: "fanToken", label: "Fan Token" },
//                                 { name: "memecoins", label: "Memecoins" },
//                                 { name: "utilityToken", label: "Utility Token" }
//                               ].map((category) => (
//                                 <div key={category.name} className="listing-category">
//                                   <input
//                                     type="checkbox"
//                                     name={category.name}
//                                     checked={formData.categories[category.name]}
//                                     onChange={handleInputChange}
//                                   />
//                                   <label> {category.label} </label>
//                                 </div>
//                               ))}
//                               <small className="text-danger">
//                                 Select all categories that apply to your token.
//                               </small>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Tab 2: Address Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 1 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="mb-3">
//                           <label htmlFor="websiteLink" className="form-label">
//                             Project Website{" "}
//                             <sup className="text-danger fs-5">*</sup>
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="websiteLink"
//                             id="websiteLink"
//                             placeholder="Please enter website link"
//                             value={formData.websiteLink}
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="telegramLink" className="form-label">
//                             Telegram link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="telegramLink"
//                             id="telegramLink"
//                             placeholder="Please enter Telegram link"
//                             value={formData.telegramLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="xLink" className="form-label">
//                             Twitter link
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="xLink"
//                             id="xLink"
//                             placeholder="Please enter X link"
//                             value={formData.xLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="discordLink" className="form-label">
//                             Discord link
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="discordLink"
//                             id="discordLink"
//                             placeholder="Please enter Discord link"
//                             value={formData.discordLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="facebookLink" className="form-label">
//                             Facebook link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="facebookLink"
//                             id="facebookLink"
//                             placeholder="Please enter Facebook link"
//                             value={formData.facebookLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="instagramLink" className="form-label">
//                             Instagram link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="instagramLink"
//                             id="instagramLink"
//                             placeholder="Please enter Instagram link"
//                             value={formData.instagramLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="redditLink" className="form-label">
//                             Reddit link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="redditLink"
//                             id="redditLink"
//                             placeholder="Please enter Reddit link"
//                             value={formData.redditLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="mediumLink" className="form-label">
//                             Medium link{" "}
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="mediumLink"
//                             id="mediumLink"
//                             placeholder="Please enter Medium link"
//                             value={formData.mediumLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label
//                             htmlFor="whitepaperLink"
//                             className="form-label"
//                           >
//                             Whitepaper link
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="whitepaperLink"
//                             id="whitepaperLink"
//                             placeholder="Please enter whitepaper link"
//                             value={formData.whitepaperLink}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                       </div>

//                       {/* Tab 3: Company Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 2 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="mb-3">
//                           <label htmlFor="companyName" className="form-label">
//                             Company Name
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="companyName"
//                             id="companyName"
//                             placeholder="Enter your company name"
//                             value={formData.companyName}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label htmlFor="companyEmail" className="form-label">
//                             Company Email
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             name="companyEmail"
//                             id="companyEmail"
//                             placeholder="Enter company email"
//                             value={formData.companyEmail}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label
//                             htmlFor="companyContact"
//                             className="form-label"
//                           >
//                             Company Contact
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="companyContact"
//                             id="companyContact"
//                             placeholder="Enter company contact number"
//                             value={formData.companyContact}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                         <div className="mb-3">
//                           <label
//                             htmlFor="companyAddress"
//                             className="form-label"
//                           >
//                             Company Address
//                           </label>
//                           <textarea
//                             className="form-control"
//                             name="companyAddress"
//                             id="companyAddress"
//                             rows="3"
//                             placeholder="Enter company address"
//                             value={formData.companyAddress}
//                             onChange={handleInputChange}
//                           ></textarea>
//                         </div>
//                       </div>

//                       {/* Tab 4: Listing Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 3 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="row">
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Total Coin / Token Supply: 
//                             </label>
//                             <sup className="text-danger fs-7">*(Number only)</sup>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               placeholder="Enter your total coins"
//                               name="total_coin"
//                               value={formData.total_coin}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Total Qty
//                             </label>
//                             <sup className="text-danger fs-7">*(Number only)</sup>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               placeholder="Enter your total qty"
//                               name="quantity_of_coin"
//                               value={formData.quantity_of_coin}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                              Price
//                             </label>
//                             <sup className="text-danger fs-7">*(USD only)</sup>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               placeholder="Price"
//                               name="ico_price"
//                               value={formData.ico_price}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Start Date
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="date"
//                               name="start_time"
//                               value={formData.start_time}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               End Date
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="date"
//                               name="end_time"
//                               value={formData.end_time}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Soft Cap
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               placeholder="Soft cap"
//                               name="soft_cap"
//                               value={formData.soft_cap}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Hard Cap
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               placeholder="Hard cap"
//                               name="hard_cap"
//                               value={formData.hard_cap}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Personal Cap
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               placeholder="Personal cap"
//                               name="personal_cap"
//                               value={formData.personal_cap}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3"> 
//                             <label className="form-label text-capitalize">
//                             ICO/IDO Buy Link
//                             </label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               placeholder="Enter your link"
//                               name="where_to_buy"
//                               value={formData.where_to_buy}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Funding Stage
//                             </label>
//                             <select 
//                               name="fund_stage" 
//                               className="form-select form-control"
//                               value={formData.fund_stage}
//                               onChange={handleInputChange}
//                             >
//                               <option value="">Select Funding Stage</option>
//                               <option value="Privatesale">Privatesale</option>
//                               <option value="Presale">Presale</option>
//                               <option value="Publicsale">Publicsale</option>
//                               <option value="ICO">ICO</option>
//                               <option value="IEO">IEO</option>
//                             </select>
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Launchpad
//                             </label>
//                             <select
//                               name="launchpad"
//                               value={formData.launchpad}
//                               onChange={handleInputChange}
//                               className="form-select form-control"
//                             >
//                               {launchpadOptions.map((option) => (
//                                 <option key={option.value} value={option.value}>
//                                   {option.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
                          
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label text-capitalize">
//                               Country from Coin / Token Issued:
//                             </label>
//                             <select 
//                               className="form-select form-control" 
//                               aria-label="country-coin" 
//                               id="country-coin" 
//                               name="country"
//                               value={formData.country}
//                               onChange={handleInputChange}
//                             >
//                               <option value="">Please choose</option>
//                               <option value="United States">United States</option>
//                               <option value="United Kingdom">United Kingdom</option>
//                               {/* Add more countries or consider a separate array for this */}
//                             </select>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Tab 5: Pricing Details */}
//                       <div
//                         className={`tab ${
//                           currentTab === 4 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="row">
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label">Price</label>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               name="price"
//                               value={formData.price}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label">Currency</label>
//                             <input
//                               className="form-control"
//                               required
//                               type="text"
//                               defaultValue="USD"
//                               name="currency"
//                               value={formData.currency}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <label className="form-label">Fees</label>
//                             <input
//                               className="form-control"
//                               required
//                               type="number"
//                               name="fees"
//                               value={formData.fees}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Tab 6: Finish */}
//                       <div
//                         className={`tab ${
//                           currentTab === 5 ? "d-block" : "d-none"
//                         }`}
//                       >
//                         <div className="text-center">
//                           <p>All Set! Please submit to continue.</p>
//                           <p>
//                             Thank you for submitting your coin to our platform.
//                           </p>
//                           <p>
//                             Our team will review your submission and will get
//                             back to you soon.
//                           </p>
//                           <button
//                             type="submit"
//                             className="btn-main primary-btn btn-second_main shadow mt-3"
//                           >
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Navigation buttons - Only show if not on the final tab */}
//                     {currentTab !== 5 && (
//                       <div className="text-end mt-4">
//                         <div className="main_flex">
//                           {currentTab > 0 && (
//                             <button
//                               type="button"
//                               id="back_button"
//                               className="btn-main primary-btn shadow"
//                               onClick={back}
//                             >
//                               Back
//                             </button>
//                           )}
//                           <button
//                             type="button"
//                             id="next_button"
//                             className="btn-main primary-btn btn-second_main shadow"
//                             onClick={next}
//                           >
//                             Next
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default SubmitCoin;


"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { useAuth } from '../hooks/authContext';
import {  useRouter } from 'next/navigation';

function SubmitCoin() {
  // State to track current tab
  const [currentTab, setCurrentTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' });
   const { isLoggedIn, logout,user } = useAuth();
 const [loading, setLoading] = useState(true); 
  const router = useRouter();

  const [formData, setFormData] = useState({
    // General ICO/IDO details
    fund_stage: "",
    user_id : isLoggedIn ? user.id : "" || 0,
    launchpad: "",
    other_launchpad: "",
    type: "",
    coin_name: "",
    alias: "",
    slug: "",
    image: null,
    start_time: "",
    end_time: "",
    total_coin: "",
    quantity_of_coin: "",
    ico_price: "",
    website: "",
    soft_cap: "",
    hard_cap: "",
    personal_cap: "",
    contract_address: "",
    description: "",
    country: "",
    where_to_buy: "",
    
    // Social media links
    social_media_url: "",
    twitter: "",
    instagram: "",
    reddit: "",
    medium: "",
    telegram: "", 
    discord: "",
    
    // Contact and transaction details
    user_contact_type: "",
    user_contact: "",
    ico_ido_type: "0", 
    plan: "",
    total_amount: "",
    trasaction_id: "",
    market_email: "",
    wallet_address: "",
    coin_token_address: "",
    coin_token: "",
    blockchain: "",
    ticker: "",
    
    // Personal details
    name: "",
    symbol: "",
    
    // Company details
    companyName: "",
    companyEmail: "",
    companyContact: "",
    companyAddress: "",
    
    // Pricing details
    price: "",
    currency: "USD",
    fees: "",
    
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
      utilityToken: false
    },
    
    // Address details
    websiteLink: "",
    telegramLink: "",
    xLink: "",
    discordLink: "",
    youtubeLink: "",
    facebookLink: "",
    instagramLink: "",
    redditLink: "",
    mediumLink: "",
    whitepaperLink: ""
  });

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, router]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loader/spinner component
  }
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        categories: {
          ...formData.categories,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  // Navigation functions
  const next = () => {
    if (currentTab < 4) {
      setCurrentTab(currentTab + 1);
    }
  };

  const back = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  // Function to generate a slug from the name
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', message: '' });
    
    try {
      // Create a FormData object to handle the file upload
      const submitFormData = new FormData();
      submitFormData.append("user_id", formData.user_id); 
      // Add basic coin information
      submitFormData.append("coin_name", formData.name); 
      submitFormData.append("ticker", formData.symbol);
      submitFormData.append("description", formData.description);
      
      // Generate slug if not provided
      const slug = formData.slug || generateSlug(formData.name);
      submitFormData.append("slug", slug);
      
      // Add file if present
      if (formData.image) {
        submitFormData.append("image", formData.image);
      }
      
      // Add website and social links
      submitFormData.append("website", formData.websiteLink);
      submitFormData.append("telegram", formData.telegramLink);
      submitFormData.append("twitter", formData.xLink);
      submitFormData.append("discord", formData.discordLink);
      submitFormData.append("instagram", formData.instagramLink);
      submitFormData.append("reddit", formData.redditLink);
      submitFormData.append("medium", formData.mediumLink);
      
      // Add ICO/IDO details
      submitFormData.append("fund_stage", formData.fund_stage);
      submitFormData.append("launchpad", formData.launchpad);
      submitFormData.append("other_launchpad", formData.other_launchpad);
      submitFormData.append("type", formData.type);
      submitFormData.append("alias", formData.alias || "");
      submitFormData.append("start_time", formData.start_time);
      submitFormData.append("end_time", formData.end_time);
      submitFormData.append("total_coin", formData.total_coin);
      submitFormData.append("quantity_of_coin", formData.quantity_of_coin);
      submitFormData.append("ico_price", formData.ico_price);
      submitFormData.append("soft_cap", formData.soft_cap);
      submitFormData.append("hard_cap", formData.hard_cap);
      submitFormData.append("personal_cap", formData.personal_cap);
      submitFormData.append("contract_address", formData.contract_address || "");
      submitFormData.append("country", formData.country);
      submitFormData.append("where_to_buy", formData.where_to_buy);
      
      // Add contact and transaction details
      submitFormData.append("social_media_url", formData.social_media_url || "");
      submitFormData.append("user_contact_type", formData.user_contact_type || "");
      submitFormData.append("user_contact", formData.user_contact || "");
      submitFormData.append("ico_ido_type", formData.ico_ido_type || "0");
      submitFormData.append("plan", formData.plan || "");
      submitFormData.append("total_amount", formData.total_amount || "0");
      submitFormData.append("trasaction_id", formData.trasaction_id || "");
      submitFormData.append("market_email", formData.market_email || formData.companyEmail || "");
      submitFormData.append("wallet_address", formData.wallet_address || "");
      submitFormData.append("coin_token_address", formData.coin_token_address || "");
      submitFormData.append("coin_token", formData.coin_token || "");
      submitFormData.append("blockchain", formData.blockchain || "");
      
      // Add user ID if available (you might get this from authentication context)
      // submitFormData.append("user_id", userId);
      
      // Submit the form data to the API
      const response = await fetch('/api/submit_ico_request', {
        method: 'POST',
        body: submitFormData,
      });
      
      const result = await response.json();
      console.log("api is done");
      
      if (result.success) {
        setSubmitMessage({
          type: 'success',
          message: result.message || 'Coin submitted successfully! Our team will review your submission.'
        });
        
        // Optionally reset form or redirect
        // setFormData({ ... }); // Reset form
        // window.location.href = '/submission-success'; // Redirect
      } else {
        setSubmitMessage({
          type: 'error',
          message: result.message || 'Failed to submit the coin. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        message: 'An error occurred while submitting the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const launchpadOptions = [
    { value: 0, label: "Select Project Type" },
    { value: 1, label: "DAO Maker Launchpad" },
    { value: 2, label: "BSCPad" },
    { value: 3, label: "TrustSwap" },
    { value: 4, label: "BullStarter" },
    { value: 5, label: "Polkastarter" },
    { value: 6, label: "Seedify" },
    { value: 7, label: "RedKite" },
    { value: 8, label: "Bounce" },
    { value: 9, label: "Paid Ignition" },
    { value: 10, label: "ChainBoost" },
    { value: 11, label: "GameFi" },
    { value: 12, label: "Trustpad" },
    { value: 13, label: "Starter" },
    { value: 14, label: "DuckSTARTER" },
    { value: 15, label: "InfinityPad" },
    { value: 16, label: "Binance" },
    { value: 17, label: "Solstarter" },
    { value: 18, label: "Solanium" },
    { value: 19, label: "WeStarter" },
    { value: 20, label: "BSClaunch" },
    { value: 21, label: "MoonStarter" },
    { value: 22, label: "ZENDIT" },
    { value: 23, label: "KrystalGO" },
    { value: 24, label: "Gamestarter" },
    { value: 25, label: "Enjinstarter" },
    { value: 26, label: "Oxbull" },
    { value: 27, label: "SharkPad" },
    { value: 28, label: "SafeLaunch" },
    { value: 29, label: "PinkSale" },
    { value: 30, label: "LaunchZone" },
    { value: 31, label: "Poolz" },
    { value: 32, label: "METAVPAD" },
    { value: 33, label: "BinStarter" },
    { value: 34, label: "Kommunitas" },
    { value: 35, label: "TrustFi" },
    { value: 36, label: "UpLift" },
    { value: 37, label: "DAOStarter" },
    { value: 38, label: "Synapse Network" },
    { value: 39, label: "A2DAO" },
    { value: 40, label: "GameZone" },
    { value: 41, label: "MoonEdge" },
    { value: 42, label: "Seeded Network" },
    { value: 43, label: "TruePNL" },
    { value: 44, label: "DxSale" },
    { value: 45, label: "Prostarter" },
    { value: 46, label: "SuperLauncher" },
    { value: 47, label: "VentUp" },
    { value: 48, label: "HAPI Launchpad" },
    { value: 49, label: "Paragen" },
    { value: 50, label: "Babylons" },
    { value: 51, label: "TokenSoft" },
    { value: 52, label: "CyberFi Samurai" },
    { value: 53, label: "UniCrypt" },
    { value: 54, label: "Launchpool" },
    { value: 55, label: "Scaleswap" },
    { value: 56, label: "Unicrypt Network" },
    { value: 57, label: "Solcubator" },
    { value: 58, label: "SolRazr" },
    { value: 59, label: "TrustLaunch" },
    { value: 60, label: "CardStarter" },
    { value: 61, label: "AdaPad" },
    { value: 62, label: "OccamRazer" },
    { value: 63, label: "Vent Finance" },
    { value: 64, label: "Trustpad Launchpad" },
    { value: 65, label: "RoseonPad" },
    { value: 66, label: "DAOlaunch" },
    { value: 67, label: "GAGARIN" },
    { value: 68, label: "NFTb" },
    { value: 69, label: "Binance NFT" },
    { value: 70, label: "Solanium Launchpad" },
    { value: 71, label: "Binstarter Launchpad" },
    { value: 72, label: "Occam.fi" },
    { value: 73, label: "Paid Network" },
    { value: 74, label: "Cardence" },
    { value: 75, label: "Synapse Launchpad" },
    { value: 76, label: "Krystal IDO" },
    { value: 77, label: "Firestarter" },
    { value: 78, label: "TronPad" },
    { value: 79, label: "TronStarter" },
    { value: 80, label: "Terra Virtua" },
    { value: 81, label: "NFTLaunch" },
    { value: 82, label: "Solstarter Launchpad" },
    { value: 83, label: "BabylonDAO" },
    { value: 84, label: "DAOLaunchpad" },
    { value: 85, label: "Parastarter" },
    { value: 86, label: "MISO" },
    { value: 87, label: "SpacePad" },
    { value: 88, label: "NovaLaunch" },
    { value: 89, label: "ZeroSwap" },
    { value: 90, label: "truffle" }
  ];


  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>Submit Coin</li>
          </ul>
        </div>
      </section>
      <section className="py-4 loginform submitcoin">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-us-form">
                <div className="row">
                  <div className="col-xl-12 text-center">
                    <h5 className="h2 fw-bold mb-4">Submit new coin</h5>
                  </div>
                  
                  {/* Display submission message if available */}
                  {submitMessage.message && (
                    <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-danger'} text-center`}>
                      {submitMessage.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="top_pills">
                      <nav className="nav nav-pills nav-fill">
                        {[
                          "Coin Details",
                          "Address Details",
                          
                          "Listing Details",
                          "Pricing Details",
                          "Finish"
                        ].map((tabName, index) => (
                          <a
                            key={index}
                            className={`nav-link tab-pills ${
                              currentTab === index ? "active" : ""
                            }`}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentTab(index);
                            }}
                          >
                            {tabName}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div>
                      {/* Tab 1: Coin Details */}
                      <div
                        className={`tab ${
                          currentTab === 0 ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="row">
                          <div className="col-xl-12 text-center w-75 m-auto">
                            <p className="fw-bold">
                              Please complete the steps to add a new coin to
                              Crypto Presale. After approval your project will
                              be visible on our platform.
                            </p>
                          </div>
                          <div className="col-xl-4">
                            <div className="mb-3">
                              <label htmlFor="logo" className="form-label">
                                Coin Logo
                              </label>
                              <div className="form-group">
                                <div className="confirm-identity">
                                  <div className="ci-user">
                                    <div className="ci-user-picture">
                                      <img
                                        src={
                                          formData.image
                                            ? URL.createObjectURL(formData.image)
                                            : "/avtar.webp"
                                        }
                                        id="item-img-output"
                                        className="imgpreviewPrf img-fluid"
                                        alt="Logo preview"
                                      />
                                    </div>
                                  </div>
                                  <div className="ci-user-btn mt-4">
                                    <div className="userEditeBtn btn-main primary-btn small px-4 btn-second_main">
                                      <input
                                        type="file"
                                        className="item-img file center-block filepreviewprofile"
                                        onChange={handleLogoUpload}
                                        accept="image/*"
                                      />
                                      Click to upload image
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8">
                            <div className="mb-2">
                              <label htmlFor="name" className="form-label mb-0">
                                Coin Name{" "}
                                <sup className="text-danger fs-7">*</sup>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Please enter name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="mb-2">
                              <label
                                htmlFor="symbol"
                                className="form-label mb-0"
                              >
                                Symbol <sup className="text-danger fs-7">*</sup>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="symbol"
                                id="symbol"
                                placeholder="Symbol Here"
                                value={formData.symbol}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="mb-2">
                              <label
                                htmlFor="description"
                                className="form-label mb-0"
                              >
                                Description{" "}
                                <sup className="text-danger fs-7">*</sup>
                              </label>
                              <textarea
                                className="form-control"
                                rows="2"
                                name="description"
                                id="description"
                                placeholder="Enter Description Here"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <label>Categories (select at least one)*</label>
                            <div className="checkboxflex mb-2">
                              {[
                                { name: "artificialIntelligence", label: "Artificial Intelligence" },
                                { name: "gambling", label: "Gambling" },
                                { name: "nftPlatform", label: "NFT Platform" },
                                { name: "other", label: "Other" },
                                { name: "defiv", label: "DeFiv" },
                                { name: "gaming", label: "Gaming" },
                                { name: "playToEarn", label: "Play To Earn" },
                                { name: "pumpFunTokens", label: "Pump.fun Tokens" },
                                { name: "fanToken", label: "Fan Token" },
                                { name: "memecoins", label: "Memecoins" },
                                { name: "utilityToken", label: "Utility Token" }
                              ].map((category) => (
                                <div key={category.name} className="listing-category">
                                  <input
                                    type="checkbox"
                                    name={category.name}
                                    checked={formData.categories[category.name]}
                                    onChange={handleInputChange}
                                  />
                                  <label> {category.label} </label>
                                </div>
                              ))}
                              <small className="text-danger">
                                Select all categories that apply to your token.
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tab 2: Address Details */}
                      <div
                        className={`tab ${
                          currentTab === 1 ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="mb-3">
                          <label htmlFor="websiteLink" className="form-label">
                            Project Website{" "}
                            <sup className="text-danger fs-5">*</sup>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="websiteLink"
                            id="websiteLink"
                            placeholder="Please enter website link"
                            value={formData.websiteLink}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="telegramLink" className="form-label">
                            Telegram link{" "}
                          </label>
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
                          <label htmlFor="xLink" className="form-label">
                            Twitter link
                          </label>
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
                          <label htmlFor="discordLink" className="form-label">
                            Discord link
                          </label>
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
                          <label htmlFor="facebookLink" className="form-label">
                            Facebook link{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="facebookLink"
                            id="facebookLink"
                            placeholder="Please enter Facebook link"
                            value={formData.facebookLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="instagramLink" className="form-label">
                            Instagram link{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="instagramLink"
                            id="instagramLink"
                            placeholder="Please enter Instagram link"
                            value={formData.instagramLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="redditLink" className="form-label">
                            Reddit link{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="redditLink"
                            id="redditLink"
                            placeholder="Please enter Reddit link"
                            value={formData.redditLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mediumLink" className="form-label">
                            Medium link{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="mediumLink"
                            id="mediumLink"
                            placeholder="Please enter Medium link"
                            value={formData.mediumLink}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="whitepaperLink"
                            className="form-label"
                          >
                            Whitepaper link
                          </label>
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

                      {/* Tab 3: Company Details */}
                      <div
                        className={`tab ${
                          currentTab === 12 ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="mb-3">
                          <label htmlFor="companyName" className="form-label">
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            id="companyName"
                            placeholder="Enter your company name"
                            value={formData.companyName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="companyEmail" className="form-label">
                            Company Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="companyEmail"
                            id="companyEmail"
                            placeholder="Enter company email"
                            value={formData.companyEmail}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="companyContact"
                            className="form-label"
                          >
                            Company Contact
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="companyContact"
                            id="companyContact"
                            placeholder="Enter company contact number"
                            value={formData.companyContact}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="companyAddress"
                            className="form-label"
                          >
                            Company Address
                          </label>
                          <textarea
                            className="form-control"
                            name="companyAddress"
                            id="companyAddress"
                            rows="3"
                            placeholder="Enter company address"
                            value={formData.companyAddress}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>

                      {/* Tab 4: Listing Details */}
                      <div
                        className={`tab ${
                          currentTab === 2 ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Total Coin / Token Supply: 
                            </label>
                            <sup className="text-danger fs-7">*(Number only)</sup>
                            <input
                              className="form-control"
                              required
                              type="number"
                              placeholder="Enter your total coins"
                              name="total_coin"
                              value={formData.total_coin}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Total Qty
                            </label>
                            <sup className="text-danger fs-7">*(Number only)</sup>
                            <input
                              className="form-control"
                              required
                              type="number"
                              placeholder="Enter your total qty"
                              name="quantity_of_coin"
                              value={formData.quantity_of_coin}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                             Price
                            </label>
                            <sup className="text-danger fs-7">*(USD only)</sup>
                            <input
                              className="form-control"
                              required
                              type="number"
                              placeholder="Price"
                              name="ico_price"
                              value={formData.ico_price}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Start Date
                            </label>
                            <input
                              className="form-control"
                              required
                              type="date"
                              name="start_time"
                              value={formData.start_time}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              End Date
                            </label>
                            <input
                              className="form-control"
                              required
                              type="date"
                              name="end_time"
                              value={formData.end_time}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Soft Cap
                            </label>
                            <input
                              className="form-control"
                              required
                              type="text"
                              placeholder="Soft cap"
                              name="soft_cap"
                              value={formData.soft_cap}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Hard Cap
                            </label>
                            <input
                              className="form-control"
                              required
                              type="text"
                              placeholder="Hard cap"
                              name="hard_cap"
                              value={formData.hard_cap}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Personal Cap
                            </label>
                            <input
                              className="form-control"
                              required
                              type="text"
                              placeholder="Personal cap"
                              name="personal_cap"
                              value={formData.personal_cap}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3"> 
                            <label className="form-label text-capitalize">
                            ICO/IDO Buy Link
                            </label>
                            <input
                              className="form-control"
                              required
                              type="text"
                              placeholder="Enter your link"
                              name="where_to_buy"
                              value={formData.where_to_buy}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Funding Stage
                            </label>
                            <select 
                              name="fund_stage" 
                              className="form-select form-control"
                              value={formData.fund_stage}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Funding Stage</option>
                              <option value="1">Privatesale</option>
                              <option value="2">Presale</option>
                              <option value="3">Publicsale</option>
                              <option value="4">ICO</option>
                              <option value="5">IEO</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Launchpad
                            </label>
                            <select
                              name="launchpad"
                              value={formData.launchpad}
                              onChange={handleInputChange}
                              className="form-select form-control"
                            >
                              {launchpadOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-capitalize">
                              Country from Coin / Token Issued:
                            </label>
                            <select 
                              className="form-select form-control" 
                              aria-label="country-coin" 
                              id="country-coin" 
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                            >
                                 <option value="">Please choose</option>
                                       <option value="Afghanistan">Afghanistan</option>
                                 <option value="Albania">Albania</option>
                                 <option value="Algeria">Algeria</option>
                                 <option value="American Samoa">American Samoa</option>
                                 <option value="Andorra">Andorra</option>
                                 <option value="Angola">Angola</option>
                                 <option value="Anguilla">Anguilla</option>
                                 <option value="Antarctica">Antarctica</option>
                                 <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                                 <option value="Argentina">Argentina</option>
                                 <option value="Armenia">Armenia</option>
                                 <option value="Aruba">Aruba</option>
                                 <option value="Australia">Australia</option>
                                 <option value="Austria">Austria</option>
                                 <option value="Azerbaijan">Azerbaijan</option>
                                 <option value="Bahamas The">Bahamas The</option>
                                 <option value="Bahrain">Bahrain</option>
                                 <option value="Bangladesh">Bangladesh</option>
                                 <option value="Barbados">Barbados</option>
                                 <option value="Belarus">Belarus</option>
                                 <option value="Belgium">Belgium</option>
                                 <option value="Belize">Belize</option>
                                 <option value="Benin">Benin</option>
                                 <option value="Bermuda">Bermuda</option>
                                 <option value="Bhutan">Bhutan</option>
                                 <option value="Bolivia">Bolivia</option>
                                 <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                 <option value="Botswana">Botswana</option>
                                 <option value="Bouvet Island">Bouvet Island</option>
                                 <option value="Brazil">Brazil</option>
                                 <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                 <option value="Brunei">Brunei</option>
                                 <option value="Bulgaria">Bulgaria</option>
                                 <option value="Burkina Faso">Burkina Faso</option>
                                 <option value="Burundi">Burundi</option>
                                 <option value="Cambodia">Cambodia</option>
                                 <option value="Cameroon">Cameroon</option>
                                 <option value="Canada">Canada</option>
                                 <option value="Cape Verde">Cape Verde</option>
                                 <option value="Cayman Islands">Cayman Islands</option>
                                 <option value="Central African Republic">Central African Republic</option>
                                 <option value="Chad">Chad</option>
                                 <option value="Chile">Chile</option>
                                 <option value="China">China</option>
                                 <option value="Christmas Island">Christmas Island</option>
                                 <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                 <option value="Colombia">Colombia</option>
                                 <option value="Comoros">Comoros</option>
                                 <option value="Republic Of The Congo">Republic Of The Congo</option>
                                 <option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option>
                                 <option value="Cook Islands">Cook Islands</option>
                                 <option value="Costa Rica">Costa Rica</option>
                                 <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option>
                                 <option value="Croatia">Croatia</option>
                                 <option value="Cuba">Cuba</option>
                                 <option value="Cyprus">Cyprus</option>
                                 <option value="Czechia">Czechia</option>
                                 <option value="Denmark">Denmark</option>
                                 <option value="Djibouti">Djibouti</option>
                                 <option value="Dominica">Dominica</option>
                                 <option value="Dominican Republic">Dominican Republic</option>
                                 <option value="East Timor">East Timor</option>
                                 <option value="Ecuador">Ecuador</option>
                                 <option value="Egypt">Egypt</option>
                                 <option value="El Salvador">El Salvador</option>
                                 <option value="Equatorial Guinea">Equatorial Guinea</option>
                                 <option value="Eritrea">Eritrea</option>
                                 <option value="Estonia">Estonia</option>
                                 <option value="Ethiopia">Ethiopia</option>
                                 <option value="External Territories of Australia">External Territories of Australia</option>
                                 <option value="Falkland Islands">Falkland Islands</option>
                                 <option value="Faroe Islands">Faroe Islands</option>
                                 <option value="Fiji Islands">Fiji Islands</option>
                                 <option value="Finland">Finland</option>
                                 <option value="France">France</option>
                                 <option value="French Guiana">French Guiana</option>
                                 <option value="French Polynesia">French Polynesia</option>
                                 <option value="French Southern Territories">French Southern Territories</option>
                                 <option value="Gabon">Gabon</option>
                                 <option value="Gambia The">Gambia The</option>
                                 <option value="Georgia">Georgia</option>
                                 <option value="Germany">Germany</option>
                                 <option value="Ghana">Ghana</option>
                                 <option value="Gibraltar">Gibraltar</option>
                                 <option value="Greece">Greece</option>
                                 <option value="Greenland">Greenland</option>
                                 <option value="Grenada">Grenada</option>
                                 <option value="Guadeloupe">Guadeloupe</option>
                                 <option value="Guam">Guam</option>
                                 <option value="Guatemala">Guatemala</option>
                                 <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                 <option value="Guinea">Guinea</option>
                                 <option value="Guinea-Bissau">Guinea-Bissau</option>
                                 <option value="Guyana">Guyana</option>
                                 <option value="Haiti">Haiti</option>
                                 <option value="Heard and McDonald Islands">Heard and McDonald Islands</option>
                                 <option value="Honduras">Honduras</option>
                                 <option value="Hong Kong">Hong Kong</option>
                                 <option value="Hungary">Hungary</option>
                                 <option value="Iceland">Iceland</option>
                                 <option value="India">India</option>
                                 <option value="Indonesia">Indonesia</option>
                                 <option value="Iran">Iran</option>
                                 <option value="Iraq">Iraq</option>
                                 <option value="Ireland">Ireland</option>
                                 <option value="Israel">Israel</option>
                                 <option value="Italy">Italy</option>
                                 <option value="Jamaica">Jamaica</option>
                                 <option value="Japan">Japan</option>
                                 <option value="Jersey">Jersey</option>
                                 <option value="Jordan">Jordan</option>
                                 <option value="Kazakhstan">Kazakhstan</option>
                                 <option value="Kenya">Kenya</option>
                                 <option value="Kiribati">Kiribati</option>
                                 <option value="Korea North">Korea North</option>
                                 <option value="Korea South">Korea South</option>
                                 <option value="Kuwait">Kuwait</option>
                                 <option value="Kyrgyzstan">Kyrgyzstan</option>
                                 <option value="Laos">Laos</option>
                                 <option value="Latvia">Latvia</option>
                                 <option value="Lebanon">Lebanon</option>
                                 <option value="Lesotho">Lesotho</option>
                                 <option value="Liberia">Liberia</option>
                                 <option value="Libya">Libya</option>
                                 <option value="Liechtenstein">Liechtenstein</option>
                                 <option value="Lithuania">Lithuania</option>
                                 <option value="Luxembourg">Luxembourg</option>
                                 <option value="Macau S.A.R.">Macau S.A.R.</option>
                                 <option value="Macedonia">Macedonia</option>
                                 <option value="Madagascar">Madagascar</option>
                                 <option value="Malawi">Malawi</option>
                                 <option value="Malaysia">Malaysia</option>
                                 <option value="Maldives">Maldives</option>
                                 <option value="Mali">Mali</option>
                                 <option value="Malta">Malta</option>
                                 <option value="Man (Isle of)">Man (Isle of)</option>
                                 <option value="Marshall Islands">Marshall Islands</option>
                                 <option value="Martinique">Martinique</option>
                                 <option value="Mauritania">Mauritania</option>
                                 <option value="Mauritius">Mauritius</option>
                                 <option value="Mayotte">Mayotte</option>
                                 <option value="Mexico">Mexico</option>
                                 <option value="Micronesia">Micronesia</option>
                                 <option value="Moldova">Moldova</option>
                                 <option value="Monaco">Monaco</option>
                                 <option value="Mongolia">Mongolia</option>
                                 <option value="Montserrat">Montserrat</option>
                                 <option value="Morocco">Morocco</option>
                                 <option value="Mozambique">Mozambique</option>
                                 <option value="Myanmar">Myanmar</option>
                                 <option value="Namibia">Namibia</option>
                                 <option value="Nauru">Nauru</option>
                                 <option value="Nepal">Nepal</option>
                                 <option value="Netherlands Antilles">Netherlands Antilles</option>
                                 <option value="Netherlands">Netherlands</option>
                                 <option value="New Caledonia">New Caledonia</option>
                                 <option value="New Zealand">New Zealand</option>
                                 <option value="Nicaragua">Nicaragua</option>
                                 <option value="Niger">Niger</option>
                                 <option value="Nigeria">Nigeria</option>
                                 <option value="Niue">Niue</option>
                                 <option value="Norfolk Island">Norfolk Island</option>
                                 <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                 <option value="Norway">Norway</option>
                                 <option value="Oman">Oman</option>
                                 <option value="Pakistan">Pakistan</option>
                                 <option value="Palau">Palau</option>
                                 <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
                                 <option value="Panama">Panama</option>
                                 <option value="Papua new Guinea">Papua new Guinea</option>
                                 <option value="Paraguay">Paraguay</option>
                                 <option value="Peru">Peru</option>
                                 <option value="Philippines">Philippines</option>
                                 <option value="Pitcairn Island">Pitcairn Island</option>
                                 <option value="Poland">Poland</option>
                                 <option value="Portugal">Portugal</option>
                                 <option value="Puerto Rico">Puerto Rico</option>
                                 <option value="Qatar">Qatar</option>
                                 <option value="Reunion">Reunion</option>
                                 <option value="Romania">Romania</option>
                                 <option value="Russia">Russia</option>
                                 <option value="Rwanda">Rwanda</option>
                                 <option value="Saint Helena">Saint Helena</option>
                                 <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                 <option value="Saint Lucia">Saint Lucia</option>
                                 <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                 <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                 <option value="Samoa">Samoa</option>
                                 <option value="San Marino">San Marino</option>
                                 <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                 <option value="Saudi Arabia">Saudi Arabia</option>
                                 <option value="Senegal">Senegal</option>
                                 <option value="Serbia">Serbia</option>
                                 <option value="Seychelles">Seychelles</option>
                                 <option value="Sierra Leone">Sierra Leone</option>
                                 <option value="Singapore">Singapore</option>
                                 <option value="Slovakia">Slovakia</option>
                                 <option value="Slovenia">Slovenia</option>
                                 <option value="Smaller Territories of the UK">Smaller Territories of the UK</option>
                                 <option value="Solomon Islands">Solomon Islands</option>
                                 <option value="Somalia">Somalia</option>
                                 <option value="South Africa">South Africa</option>
                                 <option value="South Georgia">South Georgia</option>
                                 <option value="South Sudan">South Sudan</option>
                                 <option value="Spain">Spain</option>
                                 <option value="Sri Lanka">Sri Lanka</option>
                                 <option value="Sudan">Sudan</option>
                                 <option value="Suriname">Suriname</option>
                                 <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                 <option value="Swaziland">Swaziland</option>
                                 <option value="Sweden">Sweden</option>
                                 <option value="Switzerland">Switzerland</option>
                                 <option value="Syria">Syria</option>
                                 <option value="Taiwan">Taiwan</option>
                                 <option value="Tajikistan">Tajikistan</option>
                                 <option value="Tanzania">Tanzania</option>
                                 <option value="Thailand">Thailand</option>
                                 <option value="Togo">Togo</option>
                                 <option value="Tokelau">Tokelau</option>
                                 <option value="Tonga">Tonga</option>
                                 <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                 <option value="Tunisia">Tunisia</option>
                                 <option value="Turkey">Turkey</option>
                                 <option value="Turkmenistan">Turkmenistan</option>
                                 <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                 <option value="Tuvalu">Tuvalu</option>
                                 <option value="Uganda">Uganda</option>
                                 <option value="Ukraine">Ukraine</option>
                                 <option value="United Arab Emirates">United Arab Emirates</option>
                                 <option value="United Kingdom">United Kingdom</option>
                                 <option value="United States">United States</option>
                                 <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                 <option value="Uruguay">Uruguay</option>
                                 <option value="Uzbekistan">Uzbekistan</option>
                                 <option value="Vanuatu">Vanuatu</option>
                                 <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                                 <option value="Venezuela">Venezuela</option>
                                 <option value="Vietnam">Vietnam</option>
                                 <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                 <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                 <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                 <option value="Western Sahara">Western Sahara</option>
                                 <option value="Yemen">Yemen</option>
                                 <option value="Yugoslavia">Yugoslavia</option>
                                 <option value="Zambia">Zambia</option>
                                 <option value="Zimbabwe">Zimbabwe</option>
                                 <option value="Online Event">Online Event</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Tab 5: Pricing Details */}
                      <div
                        className={`tab ${
                          currentTab === 3 ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Price</label>
                            <input
                              className="form-control"
                              required
                              type="number"
                              name="price"
                              value={formData.price}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Currency</label>
                            <input
                              className="form-control"
                              required
                              type="text"
                              defaultValue="USD"
                              name="currency"
                              value={formData.currency}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Fees</label>
                            <input
                              className="form-control"
                              required
                              type="number"
                              name="fees"
                              value={formData.fees}
                              onChange={handleInputChange}
                            />
                       
                           </div>
                         </div>
                       </div>
                             {/* Tab 6: Finish */}
                       <div
                        className={`tab ${
                          currentTab === 4 ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="text-center">
                          <p>All Set! Please submit to continue.</p>
                          <p>
                            Thank you for submitting your coin to our platform.
                          </p>
                          <p>
                            Our team will review your submission and will get 
                            back to you soon.
                          </p>
                          <button
                            type="submit"
                            className="btn-main primary-btn btn-second_main shadow mt-3"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Navigation buttons - Only show if not on the final tab */}
                    {currentTab !== 4 && (
                      <div className="text-end mt-4">
                        <div className="main_flex">
                          {currentTab > 0 && (
                            <button
                              type="button"
                              id="back_button"
                              className="btn-main primary-btn shadow"
                              onClick={back}
                            >
                              Back
                            </button>
                          )}
                          <button
                            type="button"
                            id="next_button"
                            className="btn-main primary-btn btn-second_main shadow"
                            onClick={next}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
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
