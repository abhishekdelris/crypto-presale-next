// "use client"
// import React, { useState } from 'react';

// export default function CryptoTokenForm() {
//   const [activeTab, setActiveTab] = useState(1);
//   const [formData, setFormData] = useState({
//     // Tab 1 data
//     cryptoMarkets: '',
//     coin_token: '',
//     title: 'AK Parti new presale token: Blockchain Technology',
//     project_name: 'AK Parti token',
//     slug: 'AK Parti new presale token: Blockchain Technology',
//     blockchain: '27d2h9fYVjaFuatum1n9fXOvTkSSa2eHKhsXGqDaF',
//     h1_title: '',
//     h2_title: '',
//     image: null,
//     ico_project_id: 'PRESALE',
//     sub_category_id: 'Protocol',
//     reddit: '',
//     medium: '',
//     linkedin: '',
//     country: 'Other',
//     whitePaper: null,
//     social_media_image: null,
//     start_time: '2024-03-23',
//     end_time: '2024-04-04',
//     daysRemainingToStart: '',
//     daysRemainingToEnd: '',
//     total_supply_percent: '1000000000',
//     soft_cap: '500',
//     hard_cap: '12500',
//     personal_cap: '0.00',
//     accept_type: 'SOL',
//     ico_price: '',
//     fund_asking_for: '500000',
//     where_to_buy: 'https://akptoken.com/Turn_source=CardsReBuYm_medium=Website',
//     likes_counts: '121',
//     is_review: 'Yes',
//     featured: 'Select Featured',
//     is_active: 'Yes',
//     is_guest: 'No',
//     launchpad: '',
//     website: '',
//     description: '',
//     seo_title: 'AK Parti Token SAPT new presale token: Blockchain Platform', 
//     meta_keywords: 'AK Parti token, crypto presale, SAPT, best crypto presale, AK Parti token upcoming crypto presale, AK Party token big crypto presale, AK Party token technology, presale, AK Party Crypto token presale, AK Party cryptocurrency, AK Party Presale token sale, AK Party Presale, crypto invest, AK Party Presale crypto presale, AK Party Token presale 2024, best presale tokens',
//     meta_description: 'Explore the AK Parti token APP new presale tokens and be part of a revolutionary blockchain platform. Secure your tokens and the future of digital currency.',
    
//     // Tab 2 data - Various sale types
//     privateSale: {
//       start_time: '',
//       end_time: '',
//       rate: '',
//       fundraisingGoal: '',
//       tokenSold: '',
//       where_to_buy: ''
//     },
//     preSale: {
//       start_time: '',
//       end_time: '',
//       rate: '',
//       fundraisingGoal: '',
//       tokenSold: '',
//       where_to_buy: ''
//     },
//     publicSale: {
//       start_time: '',
//       end_time: '',
//       rate: '',
//       fundraisingGoal: '',
//       tokenSold: '',
//       where_to_buy: ''
//     },
//     icoSale: {
//       start_time: '',
//       end_time: '',
//       rate: '',
//       fundraisingGoal: '',
//       tokenSold: '',
//       where_to_buy: ''
//     },
//     idoSale: {
//       start_time: '',
//       end_time: '',
//       rate: '',
//       fundraisingGoal: '',
//       tokenSold: '',
//       where_to_buy: ''
//     },
//     ieoSale: {
//       start_time: '',
//       end_time: '',
//       rate: '',
//       fundraisingGoal: '',
//       tokenSold: '',
//       where_to_buy: ''
//     },
    
//     // Tab 3 data
//     article: 'AK Parti Presale token',
//     discussion_forum: 'Why invest in a crypto presale?',
//     faq: 'How to find the best crypto presales?',
//     new_article: 'AK Parti token',
//     product: 'AK Parti token Crypto presale',
//     review_snippets: 'How to buy presale crypto tokens?',
//     breadcrumbs: 'AK Parti Token sale presale',
//     events: 'AK Parti Best ICO presale investments',
//     image_metadata: 'AK Parti Upcoming crypto presale 2025',
//     paywalled_content: 'AK Parti Crypto presale 2025',
//     organization: '',
//     sitelinks: 'https://akptoken.com/',
    
//     // Tab 4 data
//     one_usdt: '',
//     total_supply_percent2: '',
//     quantity_of_coin: '',
//     ico_price2: '',
//     where_to_buy2: '',
//     dateStart: '',
//     dateEnd: '',
//     fund_asking_forFor: '',
//     selectProjectType: '',
//     selectIcoIdo: '',
//     selectProjectType2: '',
//     selectaccept_type: '',
//     selectis_review: '',
//     tokenForSale: '',
//     percentageForSupply: '',
//     privateSaleSelect: '',
//     one_usdtValue: '',
//     soft_cap2: '',
//     hard_cap2: '',
//     personal_cap2: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleNestedChange = (section, field, value) => {
//     setFormData({
//       ...formData,
//       [section]: {
//         ...formData[section],
//         [field]: value
//       }
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0]
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);
//     // Handle form submission here
//   };

//   return (
//     <div className="container py-4 bg-white rounded shadow">
//       <ul className="nav nav-tabs mb-4">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 1 ? 'active bg-primary text-white' : ''}`}
//             onClick={() => setActiveTab(1)}
//           >
//             Tab-1
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 2 ? 'active bg-primary text-white' : ''}`}
//             onClick={() => setActiveTab(2)}
//           >
//             Tab-2
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 3 ? 'active bg-primary text-white' : ''}`}
//             onClick={() => setActiveTab(3)}
//           >
//             Tab-3
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 4 ? 'active bg-primary text-white' : ''}`}
//             onClick={() => setActiveTab(4)}
//           >
//             Tab-4
//           </button>
//         </li>
//       </ul>

//       <form onSubmit={handleSubmit}>
//         {/* Tab 1 Content */}
//         {activeTab === 1 && (
//           <div className="mb-4">
//             <div className="mb-3">
//               <label className="form-label">Crypto Markets:</label>
//               <select
//                 name="cryptoMarkets"
//                 value={formData.cryptoMarkets}
//                 onChange={handleChange}
//                 className="form-select"
//               >
//                 <option value="">Select</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Coin Selects:</label>
//               <select
//                 name="coin_token"
//                 value={formData.coin_token}
//                 onChange={handleChange}
//                 className="form-select"
//               >
//                 <option value="">Select</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Title: <span className="text-danger">*</span></label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Project Name: <span className="text-danger">*</span></label>
//               <input
//                 type="text"
//                 name="project_name"
//                 value={formData.project_name}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">URL Slug: <span className="text-danger">*</span></label>
//               <div className="form-text mb-1">No numbers and special characters are allowed, only lowercase letters are allowed.</div>
//               <input
//                 type="text"
//                 name="slug"
//                 value={formData.slug}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Blockchain And Contract Address:</label>
//               <div className="input-group">
//                 <select
//                   name="blockchainType"
//                   className="form-select w-25"
//                 >
//                   <option>Solana Ecosystem</option>
//                 </select>
//                 <input
//                   type="text"
//                   name="blockchain"
//                   value={formData.blockchain}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//                 <button type="button" className="btn btn-primary">Add</button>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">H1 Title:</label>
//                 <input
//                   type="text"
//                   name="h1_title"
//                   value={formData.h1_title}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">H2 Title:</label>
//                 <input
//                   type="text"
//                   name="h2_title"
//                   value={formData.h2_title}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Coin / Token Image:</label>
//                 <div className="mt-2">
//                   <div className="d-flex align-items-center justify-content-center bg-info bg-opacity-25 rounded-circle" style={{width: "80px", height: "80px"}}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
//                       <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Image Alt Title:</label>
//                 <input
//                   type="text"
//                   name="imageAltTitle"
//                   className="form-control"
//                 />
//                 <button type="button" className="btn btn-primary mt-2">Browse</button>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">ICO Project Type: <span className="text-danger">*</span></label>
//                 <select
//                   name="ico_project_id"
//                   value={formData.ico_project_id}
//                   onChange={handleChange}
//                   className="form-select"
//                   required
//                 >
//                   <option value="PRESALE">PRESALE</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Select Category: <span className="text-danger">*</span></label>
//                 <select
//                   name="selectCategory"
//                   className="form-select"
//                   required
//                 >
//                   <option value="Blockchain">Blockchain</option>
//                 </select>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Select Sub Category: <span className="text-danger">*</span></label>
//                 <select
//                   name="sub_category_id"
//                   value={formData.sub_category_id}
//                   onChange={handleChange}
//                   className="form-select"
//                   required
//                 >
//                   <option value="Protocol">Protocol</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Website: <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="website"
//                   value={formData.website}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="https://akptoken.com/..."
//                   required
//                 />
//               </div>
//             </div>

//             {/* Social Media Links Section */}
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Twitter:</label>
//                 <input
//                   type="text"
//                   name="twitter"
//                   placeholder="https://twitter.com/@akptoken"
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Telegram Group:</label>
//                 <input
//                   type="text"
//                   name="telegramGroup"
//                   placeholder="https://t.me/akp_token"
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Telegram Channel:</label>
//                 <input
//                   type="text"
//                   name="telegramChannel"
//                   placeholder="https://t.me/akppartitoken"
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">YouTube link:</label>
//                 <input
//                   type="text"
//                   name="youtubeLink"
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Discord:</label>
//                 <input
//                   type="text"
//                   name="discord"
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Email:</label>
//                 <input
//                   type="text"
//                   name="email"
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Instagram:</label>
//                 <input
//                   type="text"
//                   name="instagram"
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Country: <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">White Paper (Word/PDF file):</label>
//                 <input
//                   type="file"
//                   name="whitePaper"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Social Media Image:</label>
//                 <input
//                   type="file"
//                   name="social_media_image"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//                 <button type="button" className="btn btn-primary mt-2">Browse</button>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Start Date: <span className="text-danger">*</span></label>
//                 <input
//                   type="date"
//                   name="start_time"
//                   value={formData.start_time}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//                 <small className="form-text text-muted">TBA</small>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">End Date: <span className="text-danger">*</span></label>
//                 <input
//                   type="date"
//                   name="end_time"
//                   value={formData.end_time}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//                 <small className="form-text text-muted">TBA</small>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Days Remaining to Start:</label>
//                 <input
//                   type="text"
//                   name="daysRemainingToStart"
//                   value={formData.daysRemainingToStart}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Days Remaining to End:</label>
//                 <input
//                   type="text"
//                   name="daysRemainingToEnd"
//                   value={formData.daysRemainingToEnd}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Total Coins / Tokens: <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="total_supply_percent"
//                   value={formData.total_supply_percent}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Soft Cap:</label>
//                 <input
//                   type="text"
//                   name="soft_cap"
//                   value={formData.soft_cap}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Hard Cap:</label>
//                 <input
//                   type="text"
//                   name="hard_cap"
//                   value={formData.hard_cap}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Personal Cap:</label>
//                 <input
//                   type="text"
//                   name="personal_cap"
//                   value={formData.personal_cap}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Accept type: <span className="text-danger">*</span></label>
//                 <select
//                   name="accept_type"
//                   value={formData.accept_type}
//                   onChange={handleChange}
//                   className="form-select"
//                   required
//                 >
//                   <option value="SOL">SOL</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">ICO Price (Convertible Currency to be shown): <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="ico_price"
//                   value={formData.ico_price}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//                 <small className="form-text text-muted">TBA</small>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Fund Asking for (Convertible Currency to be shown): <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="fund_asking_for"
//                   value={formData.fund_asking_for}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//                 <small className="form-text text-muted">TBA</small>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Where to buy: <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="where_to_buy"
//                   value={formData.where_to_buy}
//                   onChange={handleChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Likes Count:</label>
//                 <input
//                   type="text"
//                   name="likes_counts"
//                   value={formData.likes_counts}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Is Review:</label>
//                 <select
//                   name="is_review"
//                   value={formData.is_review}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Is Featured:</label>
//                 <select
//                   name="featured"
//                   value={formData.featured}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="Select Featured">Select Featured</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Is Active:</label>
//                 <select
//                   name="is_active"
//                   value={formData.is_active}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label className="form-label">Is good:</label>
//                 <select
//                   name="is_guest"
//                   value={formData.is_guest}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label className="form-label">Funding Stage:</label>
//                 <select
//                   name="fundingStage"
//                   className="form-select"
//                 >
//                   <option value="Presale">Presale</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Launchpad:</label>
//               <input
//                 type="text"
//                 name="launchpad"
//                 value={formData.launchpad}
//                 onChange={handleChange}
//                 className="form-control"
//               />
//             </div>
            
//             <div className="mb-3">
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </div>
//         )}
        
//         {/* Tab 2, 3, and 4 would go here, following the same pattern */}
//       </form>
//     </div>
//   );
// } 


'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  Card,
  Col,
  Row,
  ProgressBar,
  Button,
  Form,
  Dropdown,
  Table,
  Pagination,
  Container
} from "react-bootstrap";
import Link from "next/link";
import {
  BudgetTask,
  MobileAppDesign,
  ProjectBudget,
  TASKS,
  WebsiteAppDesign,
  WebsiteDesign
} from "../../../../../../../../shared/data/dashboard/dashboarddata";
import PageHeader from "../../../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../../../shared/layout-components/seo/seo";
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import dynamic from "next/dynamic";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "suneditor/dist/css/suneditor.min.css";


export default function CryptoTokenForm() {
  const [activeTab, setActiveTab] = useState(1);

  const [formData, setFormData] = useState({
    // Tab 1 data
    cryptoMarkets: '', 
    ico_ido_type: 0,
    coin_token: '',
    title: 'AK Parti new presale token: Blockchain Technology',
    project_name: 'AK Parti token',
    slug: 'AK Parti new presale token: Blockchain Technology',
    blockchain: '27d2h9fYVjaFuatum1n9fXOvTkSSa2eHKhsXGqDaF',
    h1_title: '',
    h2_title: '',
    image: null,
    ico_project_id: 'PRESALE',
    sub_category_id: 'Protocol',
    reddit: '',
    medium: '',
    linkedin: '',
    country: 'Other',
    whitePaper: null,
    social_media_image: null,
    start_time: '2024-03-23',
    end_time: '2024-04-04',
    daysRemainingToStart: '',
    daysRemainingToEnd: '',
    total_supply_percent: '1000000000',
    soft_cap: '500',
    hard_cap: '12500',
    personal_cap: '0.00',
    accept_type: 'SOL',
    ico_price: '',
    fund_asking_for: '500000',
    where_to_buy: 'https://akptoken.com/Turn_source=CardsReBuYm_medium=Website',
    likes_counts: '121',
    is_review: 'Yes',
    featured: 'Select Featured',
    is_active: 'Yes',
    is_guest: 'No',
    launchpad: '',
    website: '',
    description: '',
    seo_title: 'AK Parti Token SAPT new presale token: Blockchain Platform', 
    meta_keywords: 'AK Parti token, crypto presale, SAPT, best crypto presale, AK Parti token upcoming crypto presale, AK Party token big crypto presale, AK Party token technology, presale, AK Party Crypto token presale, AK Party cryptocurrency, AK Party Presale token sale, AK Party Presale, crypto invest, AK Party Presale crypto presale, AK Party Token presale 2024, best presale tokens',
    meta_description: 'Explore the AK Parti token APP new presale tokens and be part of a revolutionary blockchain platform. Secure your tokens and the future of digital currency.',
    
    // Tab 2 data - Various sale types
    privateSale: {
      private_sale_start_date: '',
      private_sale_end_date: '',
      private_sale_rate: '',
      private_sale_goal: '',
      private_sale_token_sold: '',
      private_sale_where_buy: ''
    },
    preSale: {
      pre_sale_start_date: '',
      pre_sale_end_date: '',
      pre_sale_rate: '',
      fundraisingGoal: '',
      pre_sale_token_sold: '',
      pre_sale_where_buy: ''
    },
    publicSale: {
      public_sale_start_date: '',
      public_sale_end_date: '',
      public_sale_rate: '',
      public_sale_goal: '',
      public_sale_token_sold: '',
      public_sale_where_buy: ''
    },
    icoSale: {
      ico_sale_start_date: '',
      ico_sale_end_date: '',
      ico_sale_rate: '',
      ico_sale_goal: '',
      ico_sale_token_sold: '',
      ico_sale_where_buy: ''
    },
    idoSale: {
      ido_sale_start_date: '',
      ido_sale_end_date: '',
      ido_sale_rate: '',
      ido_sale_goal: '',
      ido_sale_token_sold: '',
      ido_sale_where_buy: ''
    },
    ieoSale: {
      ieo_sale_start_date: '',
      ieo_sale_end_date: '',
      ieo_sale_rate: '',
      ieo_sale_goal: '',
      ieo_sale_token_sold: '',
      ieo_sale_where_buy: ''
    },
    
    // Tab 3 data
    article: 'AK Parti Presale token',
    discussion_forum: 'Why invest in a crypto presale?',
    faq: 'How to find the best crypto presales?',
    new_article: 'AK Parti token',
    product: 'AK Parti token Crypto presale',
    review_snippets: 'How to buy presale crypto tokens?',
    breadcrumbs: 'AK Parti Token sale presale',
    events: 'AK Parti Best ICO presale investments',
    image_metadata: 'AK Parti Upcoming crypto presale 2025',
    paywalled_content: 'AK Parti Crypto presale 2025',
    organization: '',
    sitelinks: 'https://akptoken.com/',
    
    // Tab 4 data
    one_usdt: '',
    total_supply_percent2: '',
    quantity_of_coin: '',
    ico_price2: '',
    where_to_buy2: '',
    dateStart: '',
    dateEnd: '',
    fund_asking_forFor: '',
    selectProjectType: '',
    selectIcoIdo: '',
    selectProjectType2: '',
    selectaccept_type: '',
    selectis_review: '',
    tokenForSale: '',
    percentageForSupply: '',
    privateSaleSelect: '',
    one_usdtValue: '',
    soft_cap2: '',
    hard_cap2: '',
    personal_cap2: ''
  });

  const [icoList, setIcoList] = useState([]);


 
   
  
    // State to track multiple sets of fields
    const [fieldSets, setFieldSets] = useState([0]);
    const [nextId, setNextId] = useState(1);
  
  
    const addNewFieldSet = () => {
      setFieldSets([...fieldSets, nextId]);
      setNextId(nextId + 1);
    };
  
    const removeFieldSet = (index) => {
      const updatedFieldSets = fieldSets.filter((_, i) => i !== index);
      setFieldSets(updatedFieldSets);
    };
  

  
  const handleDelete = (index) => {
    const newList = icoList.filter((_, i) => i !== index);
    setIcoList(newList);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
      // Create a copy of the form data and update the specific index
      const updatedFormData = [...fieldSets];
      
      // If this index doesn't have form data yet, initialize it
      if (!updatedFormData[index]) {
        updatedFormData[index] = { ...formData };
      }
      
      // Update the specific field
      updatedFormData[index] = {
        ...updatedFormData[index],
        [name]: value
      };
      
      setFieldSets(updatedFormData);
  };

  // Handle SunEditor content change
  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      description: content
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Handle form submission here
  };


  

  return (
  <>
    <Seo title={"Crypto Coins"} />
      <PageHeader title="Crypto Coins" item="Crypto Coins" active_item="Edit Crypto Coins" />
      {/* <ToastContainer /> */}

        <Row className="row-sm">
          <div className="col-xl-12">
            <div className="custom-card mg-b-20 card">
              <div className="card-body">
                <div className="row">
    <div className="container py-4 bg-white rounded ">
      <div className='row'></div>
      <ul className="nav nav-tabs mb-4 p-2">
        <li className="nav-item flex-grow-1">
          <button
            className={`nav-link ${activeTab === 1 ? 'btn w-100 active bg-primary text-white' : 'btn w-100 active bg-dark text-white'}`}
            onClick={() => setActiveTab(1)}
          >
            Tab-1
          </button>
        </li>
        <li className="nav-item flex-grow-1">
          <button
            className={`nav-link ${activeTab === 2 ? 'btn w-100 active bg-primary text-white' : 'btn w-100 active bg-dark text-white'}`}
            onClick={() => setActiveTab(2)}
          >
            Tab-2
          </button>
        </li>
        <li className="nav-item flex-grow-1">
          <button
            className={`nav-link ${activeTab === 3 ? 'btn w-100 active bg-primary text-white' : 'btn w-100 active bg-dark text-white'}`}
            onClick={() => setActiveTab(3)}
          >
            Tab-3
          </button>
        </li>
        <li className="nav-item flex-grow-1">
          <button
            className={`nav-link ${activeTab === 4 ? 'btn w-100 active bg-primary text-white' : 'btn w-100 active bg-dark text-white'}`}
            onClick={() => setActiveTab(4)}
          >
            Tab-4
          </button>
        </li>
      </ul>

      <form onSubmit={handleSubmit}> 
        {/* Tab 1 Content */}
        {activeTab === 1 && (
          <div className="mb-4">
            {/* <div className="mb-3">
              <label className="form-label">Crypto Markets:</label>
              <select
                name="cryptoMarkets"
                value={formData.cryptoMarkets}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select</option>
              </select>
            </div> */}

            <div className="row mb-3">
          
                  <div className='form-group col-sm-12 col-xl-6'>
              <label className="form-label">Coin Selects:<span className="text-danger">*</span></label>
              <select
                name="coin_token"
                value={formData.coin_token}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select</option>
              </select>
              </div>
              <div className="form-group col-sm-12 col-xl-6">
              <label className="form-label">Ico/Ido<span className="text-danger">*</span></label>
              <select
                name="coin_token"
                value={formData.ico_ido_type}
                onChange={handleChange}
                className="form-select"
              >
                <option selected>Select ICO/IDO</option>
                <option value={0}>ICO</option>
                <option value={1}>IDO</option>
                <option value={2}>IEO</option>
                <option value={3}>Presale</option>
              </select>
                  </div>
            </div>

           

            <div className="mb-3">
              <label className="form-label">Title: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Project Name: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="project_name"
                value={formData.project_name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
           
            <div className="mb-3">
              <label className="form-label">URL Slug: <span className="text-danger">*</span></label>
              <div className="form-text mb-1">No numbers and special characters are allowed, only lowercase letters are allowed.</div>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Blockchain And Contract Address: <span className="text-danger" style={{fontSize:"smaller"}}>* No numbers and special characters are allowed, only lowercase letters are allowed.</span> </label>
              <div className="input-group">
                <select
                  name="blockchainType"
                  className="form-select w-25"
                >
                  <option>Solana Ecosystem</option>
                </select>
                <input
                  type="text"
                  name="blockchain"
                  value={formData.blockchain}
                  onChange={handleChange}
                  className="form-control"
                />
                <button type="button" className="btn btn-primary">Add</button>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">H1 Title:</label>
                <input
                  type="text"
                  name="h1_title"
                  value={formData.h1_title}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">H2 Title:</label>
                <input
                  type="text"
                  name="h2_title"
                  value={formData.h2_title}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Coin / Token Image:</label>
                <div className="mt-2">
                  <div className="d-flex align-items-center justify-content-center bg-info bg-opacity-25 rounded-circle" style={{width: "80px", height: "80px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Image Alt Title:</label>
                <input
                  type="text"
                  name="imageAltTitle"
                  className="form-control"
                />
                <button type="button" className="btn btn-primary mt-2">Browse</button>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">ICO Project Type: <span className="text-danger">*</span></label>
                <select
                  name="ico_project_id"
                  value={formData.ico_project_id}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="PRESALE">PRESALE</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Select Category: <span className="text-danger">*</span></label>
                <select
                  name="selectCategory"
                  className="form-select"
                  required
                >
                  <option value="Blockchain">Blockchain</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Select Sub Category: <span className="text-danger">*</span></label>
                <select
                  name="sub_category_id"
                  value={formData.sub_category_id}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="Protocol">Protocol</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Website: <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="https://akptoken.com/..."
                  required
                />
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Twitter:</label>
                <input
                  type="text"
                  name="twitter"
                  placeholder="https://twitter.com/@akptoken"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Telegram Group:</label>
                <input
                  type="text"
                  name="telegramGroup"
                  placeholder="https://t.me/akp_token"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Telegram Channel:</label>
                <input
                  type="text"
                  name="telegramChannel"
                  placeholder="https://t.me/akppartitoken"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">YouTube link:</label>
                <input
                  type="text"
                  name="youtubeLink"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Discord:</label>
                <input
                  type="text"
                  name="discord"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Instagram:</label>
                <input
                  type="text"
                  name="instagram"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country: <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">White Paper (Word/PDF file):</label>
                <input
                  type="file"
                  name="whitePaper"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Social Media Image:</label>
                <input
                  type="file"
                  name="social_media_image"
                  onChange={handleFileChange}
                  className="form-control"
                />
                <button type="button" className="btn btn-primary mt-2">Browse</button>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Start Date: <span className="text-danger">*</span></label>
                <input
                  type="date"
                  name="start_time"
                  value={formData.start_time}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <small className="form-text text-muted">TBA</small>
              </div>
              <div className="col-md-6">
                <label className="form-label">End Date: <span className="text-danger">*</span></label>
                <input
                  type="date"
                  name="end_time"
                  value={formData.end_time}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <small className="form-text text-muted">TBA</small>
              </div>
            </div>

            {/* <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Days Remaining to Start:</label>
                <input
                  type="text"
                  name="daysRemainingToStart"
                  value={formData.daysRemainingToStart}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Days Remaining to End:</label>
                <input
                  type="text"
                  name="daysRemainingToEnd"
                  value={formData.daysRemainingToEnd}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div> */}

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Total Coins / Tokens: <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="total_supply_percent"
                  value={formData.total_supply_percent}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Soft Cap:</label>
                <input
                  type="text"
                  name="soft_cap"
                  value={formData.soft_cap}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Hard Cap:</label>
                <input
                  type="text"
                  name="hard_cap"
                  value={formData.hard_cap}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Personal Cap:</label>
                <input
                  type="text"
                  name="personal_cap"
                  value={formData.personal_cap}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Accept type: <span className="text-danger">*</span></label>
                <select
                  name="accept_type"
                  value={formData.accept_type}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="SOL">SOL</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">ICO Price (Convertible Currency to be shown): <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="ico_price"
                  value={formData.ico_price}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <small className="form-text text-muted">TBA</small>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Fund Asking for (Convertible Currency to be shown): <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="fund_asking_for"
                  value={formData.fund_asking_for}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <small className="form-text text-muted">TBA</small>
              </div>
              <div className="col-md-6">
                <label className="form-label">Where to buy: <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="where_to_buy"
                  value={formData.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Likes Count:</label>
                <input
                  type="text"
                  name="likes_counts"
                  value={formData.likes_counts}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Is Review:</label>
                <select
                  name="is_review"
                  value={formData.is_review}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Is Featured:</label>
                <select
                  name="featured"
                  value={formData.featured}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Select Featured">Select Featured</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Is Active:</label>
                <select
                  name="is_active"
                  value={formData.is_active}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Is guest:</label>
                <select
                  name="is_guest"
                  value={formData.is_guest}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Funding Stage:</label>
                <select
                  name="fundingStage"
                  className="form-select"
                >
                  <option value="Presale">Presale</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
          
          <div className='form-group col-sm-12 col-xl-6'>
      <label className="form-label">Launchpad</label>
      <select
        name="coin_token"
        value={formData.launchpad}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">Select</option>
      </select>
      </div>
      <div className="form-group col-sm-12 col-xl-6">
      <label className="form-label">Ico/Ido<span className="text-danger">*</span></label>
      <select
        name="coin_token"
        value={formData.ico_ido_type}
        onChange={handleChange}
        className="form-select"
      >
        <option selected>Select ICO/IDO</option>
        <option value={0}>ICO</option>
        <option value={1}>IDO</option>
        <option value={2}>IEO</option>
        <option value={3}>Presale</option>
      </select>
          </div>
    </div>
            {/* <div className="mb-3">
              <label className="form-label">Launchpad:</label>
              <input
                type="text"
                name="launchpad"
                value={formData.launchpad}
                onChange={handleChange}
                className="form-control"
              />
            </div> */}
             <div className="ql-wrapper ql-wrapper-demo mb-3">
                    <label className="fw-medium form-label">
                      Description
                    </label>
                    <div>
                      <SunEditor
                        onChange={handleEditorChange} 
                      
                        defaultValue={formData.description}
                        setOptions={{
                          height: 300,
                          placeholder: "Enter your text here!!!",
                          buttonList: [
                            ["undo", "redo"],
                            ["font", "fontSize"],
                            ["bold", "underline", "italic", "strike"],
                            ["fontColor", "hiliteColor"],
                            ["removeFormat"],
                            ["outdent", "indent"],
                            ["align", "list"],
                            ["link", "image"]
                          ]
                        }}
                      />
                    </div>
                    
                  </div>
               <div className='row '>
{/* article Field */}
<div className="form-group col-sm-12 col-lg-6 col-xl-6">
                    <label htmlFor="article">decentralized finance:</label>
                    <input
                      className="form-control"
                      name="article"
                      type="text"
                      id="article"
                      value={formData.article}
                      onChange={handleChange}
                    />
                  </div>
                  {/* breadcrumbs Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-6">
                    <label htmlFor="breadcrumbs">Is follow:</label>
                    <input
                      className="form-control"
                      name="breadcrumbs"
                      type="text"
                      id="breadcrumbs"
                      value={formData.breadcrumbs}
                      onChange={handleChange}
                    />
                  </div>
               </div>

               <div className='row'>
                   {/* discussion forum Field */}
                   <div className="form-group col-sm-12 col-lg-6 col-xl-6">
                    <label htmlFor="discussion_forum">New presale tokens:</label>
                    <input
                      className="form-control"
                      name="discussion_forum"
                      type="text"
                      id="discussion_forum"
                      value={formData.discussion_forum}
                      onChange={handleChange}
                    />
                  </div>
                  {/* faq Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-6">
                    <label htmlFor="faq">Is follow:</label>
                    <input
                      className="form-control"
                      name="faq"
                      type="text"
                      id="faq"
                      value={formData.faq}
                      onChange={handleChange}
                    />
                  </div>
               
               </div>
                 
               
                  {/* Seo Title Field */}
                  <div className="form-group col-sm-12">
                    <label htmlFor="seo_title" className="field-required">
                      Seo Title:
                    </label>
                    <input
                      className="form-control"
                      name="seo_title"
                      type="text"
                      id="seo_title"
                      value={formData.seo_title}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Meta Keywords Field */}
                  <div className="form-group col-sm-12">
                    <label htmlFor="meta_keywords" className="field-required">
                      Meta Keywords:
                    </label>
                    <input
                      className="form-control"
                      name="meta_keywords"
                      type="text"
                      id="meta_keywords"
                      value={formData.meta_keywords}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Meta Description Field */}
                  <div className="form-group col-sm-12">
                    <label
                      htmlFor="meta_description"
                      className="field-required"
                    >
                      Meta Description:
                    </label>
                    <textarea
                      className="form-control"
                      name="meta_description"
                      cols={50}
                      rows={10}
                      id="meta_description"
                      defaultValue={""}
                      value={formData.meta_description}
                      onChange={handleChange}
                    />
                  </div>
            
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="reset" className="btn ">Cancel</button>
            </div>
          </div>
        )}
        
        {/* Tab 2, 3, and 4 would go here, following the same pattern */}
        {activeTab === 2 && (
            <div className="mb-4">
               
               
               <div className="row mb-3">
                <div lassName="col-md-12"><h5 className='fw-bold's>Private Sale</h5></div>
            <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                    type='date'
                  name="start_time"
                  value={formData.privateSale.start_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                    type='date'
                  name="end_time"
                  value={formData.privateSale.end_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Token Sold:</label>
                <input
                    type='text'
                  name="tokenSold"
                  value={formData.privateSale.tokenSold}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Rate:</label>
                <input
                    type='text'
                  name="rate"
                  value={formData.privateSale.rate}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Fundraising Goal:</label>
                <input
                    type='text'
                  name="fundraisingGoal"
                  value={formData.privateSale.fundraisingGoal}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Where to buy</label>
                <input
                    type='text'
                  name="where_to_buy"
                  value={formData.privateSale.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
            </div>

            <div className="row mb-3">
                <div lassName="col-md-12"><h5 className='fw-bold's>Pre Sale</h5></div>
            <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                    type='date'
                  name="start_time"
                  value={formData.preSale.start_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                    type='date'
                  name="end_time"
                  value={formData.preSale.end_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Token Sold:</label>
                <input
                    type='text'
                  name="tokenSold"
                  value={formData.preSale.tokenSold}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Rate:</label>
                <input
                    type='text'
                  name="rate"
                  value={formData.preSale.rate}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Fundraising Goal:</label>
                <input
                    type='text'
                  name="fundraisingGoal"
                  value={formData.preSale.fundraisingGoal}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Where to buy</label>
                <input
                    type='text'
                  name="where_to_buy"
                  value={formData.preSale.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
            </div>


            <div className="row mb-3">
                <div lassName="col-md-12"><h5 className='fw-bold's>Public Sale</h5></div>
            <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                    type='date'
                  name="start_time"
                  value={formData.publicSale.start_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                    type='date'
                  name="end_time"
                  value={formData.publicSale.end_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Token Sold:</label>
                <input
                    type='text'
                  name="tokenSold"
                  value={formData.publicSale.tokenSold}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Rate:</label>
                <input
                    type='text'
                  name="rate"
                  value={formData.publicSale.rate}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Fundraising Goal:</label>
                <input
                    type='text'
                  name="fundraisingGoal"
                  value={formData.publicSale.fundraisingGoal}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Where to buy</label>
                <input
                    type='text'
                  name="where_to_buy"
                  value={formData.publicSale.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
            </div>


            <div className="row mb-3">
                <div lassName="col-md-12"><h5 className='fw-bold's>ICO Sale</h5></div>
            <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                    type='date'
                  name="start_time"
                  value={formData.icoSale.start_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                    type='date'
                  name="end_time"
                  value={formData.icoSale.end_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Token Sold:</label>
                <input
                    type='text'
                  name="tokenSold"
                  value={formData.icoSale.tokenSold}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Rate:</label>
                <input
                    type='text'
                  name="rate"
                  value={formData.icoSale.rate}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Fundraising Goal:</label>
                <input
                    type='text'
                  name="fundraisingGoal"
                  value={formData.icoSale.fundraisingGoal}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Where to buy</label>
                <input
                    type='text'
                  name="where_to_buy"
                  value={formData.icoSale.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
            </div>
               
            <div className="row mb-3">
                <div lassName="col-md-12"><h5 className='fw-bold's>IDO Sale</h5></div>
            <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                    type='date'
                  name="start_time"
                  value={formData.idoSale.start_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                    type='date'
                  name="end_time"
                  value={formData.idoSale.end_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Token Sold:</label>
                <input
                    type='text'
                  name="tokenSold"
                  value={formData.idoSale.tokenSold}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Rate:</label>
                <input
                    type='text'
                  name="rate"
                  value={formData.idoSale.rate}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Fundraising Goal:</label>
                <input
                    type='text'
                  name="fundraisingGoal"
                  value={formData.idoSale.fundraisingGoal}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Where to buy</label>
                <input
                    type='text'
                  name="where_to_buy"
                  value={formData.idoSale.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
            </div>

               
             
            <div className="row mb-3">
                <div lassName="col-md-12"><h5 className='fw-bold's>IEO Sale</h5></div>
            <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                    type='date'
                  name="start_time"
                  value={formData.ieoSale.start_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                    type='date'
                  name="end_time"
                  value={formData.ieoSale.end_time}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Token Sold:</label>
                <input
                    type='text'
                  name="tokenSold"
                  value={formData.ieoSale.tokenSold}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Rate:</label>
                <input
                    type='text'
                  name="rate"
                  value={formData.ieoSale.rate}
                  onChange={handleChange}
                  className="form-control"
                />
                  
              </div>
              <div className="col-md-4">
                <label className="form-label">Fundraising Goal:</label>
                <input
                    type='text'
                  name="fundraisingGoal"
                  value={formData.ieoSale.fundraisingGoal}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <label className="form-label">Where to buy</label>
                <input
                    type='text'
                  name="where_to_buy"
                  value={formData.ieoSale.where_to_buy}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
            </div>


            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="reset" className="btn ">Back</button>
            </div>
            </div>
        )}
        
        {/* Tab 3 is here  */}
        {activeTab===3 &&(

          <div className="mb-4">

            <div className="row mb-3">
            <div className="col mb-6">
              <label className="form-label">Article: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="article"
                value={formData.article}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col mb-6">
              <label className="form-label">Breadcrumbs:<span className="text-danger">*</span></label>
              <input
                type="text"
                name="breadcrumbs"
                value={formData.breadcrumbs}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            </div>
            <div className="row mb-3">
            <div className="col mb-6">
              <label className="form-label">Discussion forum: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="discussion_forum"
                value={formData.discussion_forum}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col mb-6">
              <label className="form-label">Events:<span className="text-danger">*</span></label>
              <input
                type="text"
                name="events"
                value={formData.events}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            </div>

            <div className="row mb-3">
            <div className="col mb-6">
              <label className="form-label">Faq: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="faq"
                value={formData.faq}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col mb-6">
              <label className="form-label">Image metadata:<span className="text-danger">*</span></label>
              <input
                type="text"
                name="image_metadata"
                value={formData.image_metadata}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            </div>

            <div className="row mb-3">
            <div className="col mb-6">
              <label className="form-label">New article: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="new_article"
                value={formData.new_article}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col mb-6">
              <label className="form-label">Paywalled content: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="paywalled_content"
                value={formData.paywalled_content}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            </div>


            <div className="row mb-3">
            <div className="col mb-6">
              <label className="form-label">Product: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col mb-6">
              <label className="form-label">Organization: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            </div>
            <div className="row mb-3">
            <div className="col mb-6">
              <label className="form-label">Review snippets: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="review_snippets"
                value={formData.review_snippets}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col mb-6">
              <label className="form-label">Site links: <span className="text-danger">*</span></label>
              <input
                type="text"
                name="sitelinks"
                value={formData.sitelinks}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="reset" className="btn ">Back</button>
            </div>
          </div>
        )}
        {/* Tab 4 is here  */}
        {activeTab === 4 &&(
          <div className="mb-4">

            <div className="mb-3">
              <label className="form-label">One Usdt:</label>
              <input
                name="one_usdt"
                type='text'
                value={formData.one_usdt}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className='row mb-3'>
            <div lassName="col-md-12"><label className="form-label">Add More Crypto Coins ICO:</label></div>
            {/* <div className="col-md-2">
                <input
                    type='number'
                  name="total_supply_percent2"
                  value={formData.total_supply_percent2}
                  onChange={handleChange}
                  className="form-control"
                  
                  />
              </div>
              <div className="col-md-3">
                <input
                    type='number'
                  name="quantity_of_coin"
                  value={formData.quantity_of_coin}
                  onChange={handleChange}
                  placeholder='Quantity of coin'
                  className="form-control"
                  />
              </div>
              <div className="col-md-3">
                <input
                    type='text'
                  name="ico_price2"
                  value={formData.ico_price2}
                  onChange={handleChange}
                  placeholder='ICO Price'
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
                <input
                    type='text'
                  name="where_to_buy2"
                  value={formData.where_to_buy2}
                  onChange={handleChange}
                  placeholder='Where to Buy'
                  className="form-control"
                  />
              </div>
            </div>

            <div className='row mb-3'>
            <div className="col-md-2    ">
                <input
                    type='date'
                  name="dateStart"
                  value={formData.dateStart}
                  onChange={handleChange}
                  className="form-control"
                  
                  />
              </div>
              <div className="col-md-2">
                <input
                    type='date'
                  name="dateEnd"
                  value={formData.dateEnd}
                  onChange={handleChange}
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
              <input
                    type='text'
                  name="fund_asking_forFor"
                  value={formData.fund_asking_forFor}
                  onChange={handleChange}
                  placeholder='Where to Buy'
                  className="form-control"
                  />
              </div>
              <div className="col-md-4">
              <select
                  name="selectProjectType"
                  value={formData.selectProjectType}
                  onChange={handleChange}
                  className="form-select"
                > 
                  <option value="Select Featured">Select Project type</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            
            </div>
            <div className='row mb-3'>
              <div className="col-md-2">
              <select
                  name="selectIcoIdo"
                  value={formData.selectIcoIdo}
                  onChange={handleChange}
                  className="form-select"
                > 
                  <option value="Select Featured">Select Ico / Ido</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-2">
              <select
                  name="selectProjectType2  "
                  value={formData.selectProjectType2}
                  onChange={handleChange}
                  className="form-select"
                > 
                  <option value="Select Featured">Select Project Type</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-2">
              <select
                  name="selectaccept_type  "
                  value={formData.selectaccept_type}
                  onChange={handleChange}
                  className="form-select"
                > 
                  <option value="Select Featured">Select Accept Type</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-2">
              <select
                  name="selectis_review  "
                  value={formData.selectis_review}
                  onChange={handleChange}
                  className="form-select"
                > 
                  <option value="Select Featured">Select Is Review</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-4">
                <input
                    type='text'
                  name="tokenForSale"
                  value={formData.tokenForSale}
                  onChange={handleChange}
                  className="form-control"
                  placeholder='Token For Sale'
                  />
              </div>
            </div>

            <div className='row mb-3'>
              <div className="col-md-4">
              <input
                    type='text'
                  name="percentageForSupply"
                  value={formData.percentageForSupply}
                  onChange={handleChange}
                  className="form-control"
                  placeholder='Percentage For Supply'
                  />
              </div>
              <div className="col-md-4">
              <select
                  name="privateSaleSelect"
                  value={formData.privateSaleSelect}
                  onChange={handleChange}
                  className="form-select"
                > 
                  <option value="Select Featured"> Private Sale Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="col-md-4">
              <input
                    type='text'
                  name="one_usdtValue"
                  value={formData.one_usdtValue}
                  onChange={handleChange}
                  className="form-control"
                  placeholder='1 Usdt'
                  />
              </div>
            </div>
            <div className='row mb-3'>
            <div className="col-3">
              <input
                    type='text'
                  name="soft_cap2"
                  value={formData.soft_cap2}
                  onChange={handleChange}
                  className="form-control"
                  placeholder='Soft Cap 2'
                  />
              </div>
              <div className="col-3">
              <input
                    type='text'
                  name="hard_cap2"
                  value={formData.hard_cap2}
                  onChange={handleChange}
                  className="form-control"
                  placeholder='Hard Cap 2'
                  />
              </div>
              <div className="col-3">
              <input
                    type='text'
                  name="personal_cap2"
                  value={formData.personal_cap2}
                  onChange={handleChange}
                  className="form-control"
                  placeholder='Personal Cap2'
                  />
              </div>
              <div className='col-3'>
          <button className='btn  btn-primary' type='button' >Add</button>
        </div> */}

{fieldSets.map((id, index) => (
        <div key={id} className="mb-5 p-3 border rounded">
          <h4>ICO Entry #{index + 1}</h4>
          
          <div className="row mb-3">
            <div className="col-md-12">
              <label className="form-label">Add More Crypto Coins ICO:</label>
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="total_supply_percent2"
                placeholder='Total Supply'
                value={fieldSets[index]?.total_supply_percent2 || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="quantity_of_coin"
                value={fieldSets[index]?.quantity_of_coin || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="Quantity of coin"
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="ico_price2"
                value={fieldSets[index]?.ico_price2 || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="ICO Price"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="where_to_buy2"
                value={fieldSets[index]?.where_to_buy2 || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="Where to Buy"
                className="form-control"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <input
                type="date"
                name="dateStart"
                value={fieldSets[index]?.dateStart || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <input
                type="date"
                name="dateEnd"
                value={fieldSets[index]?.dateEnd || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="fund_asking_forFor"
                value={fieldSets[index]?.fund_asking_forFor || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="Where to Buy"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <select
                name="selectProjectType"
                value={fieldSets[index]?.selectProjectType || 'Select Featured'}
                onChange={(e) => handleChange(e, index)}
                className="form-select"
              >
                <option value="Select Featured">Select Project type</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <select
                name="selectIcoIdo"
                value={fieldSets[index]?.selectIcoIdo || 'Select Featured'}
                onChange={(e) => handleChange(e, index)}
                className="form-select"
              >
                <option value="Select Featured">Select Ico / Ido</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                name="selectProjectType2"
                value={fieldSets[index]?.selectProjectType2 || 'Select Featured'}
                onChange={(e) => handleChange(e, index)}
                className="form-select"
              >
                <option value="Select Featured">Select Project Type</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                name="selectaccept_type"
                value={fieldSets[index]?.selectaccept_type || 'Select Featured'}
                onChange={(e) => handleChange(e, index)}
                className="form-select"
              >
                <option value="Select Featured">Select Accept Type</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                name="selectis_review"
                value={fieldSets[index]?.selectis_review || 'Select Featured'}
                onChange={(e) => handleChange(e, index)}
                className="form-select"
              >
                <option value="Select Featured">Select Is Review</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="tokenForSale"
                value={fieldSets[index]?.tokenForSale || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
                placeholder="Token For Sale"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <input
                type="text"
                name="percentageForSupply"
                value={fieldSets[index]?.percentageForSupply || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
                placeholder="Percentage For Supply"
              />
            </div>
            <div className="col-md-4">
              <select
                name="privateSaleSelect"
                value={fieldSets[index]?.privateSaleSelect || 'Select Featured'}
                onChange={(e) => handleChange(e, index)}
                className="form-select"
              >
                <option value="Select Featured">Private Sale Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="one_usdtValue"
                value={fieldSets[index]?.one_usdtValue || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
                placeholder="1 Usdt"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-3">
              <input
                type="text"
                name="soft_cap2"
                value={fieldSets[index]?.soft_cap2 || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
                placeholder="Soft Cap 2"
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="hard_cap2"
                value={fieldSets[index]?.hard_cap2 || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
                placeholder="Hard Cap 2"
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="personal_cap2"
                value={fieldSets[index]?.personal_cap2 || ''}
                onChange={(e) => handleChange(e, index)}
                className="form-control"
                placeholder="Personal Cap2"
              />
            </div>
            <div className="col-3">
              {index > 0 && (
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => removeFieldSet(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="row mb-3">
        <div className="col-12">
          <button className="btn btn-primary" type="button" onClick={addNewFieldSet}>
            Add New ICO
          </button>
        </div>
      </div>
     
            </div>

               <div className="mb-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </div>
        )}

      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Row>
    </>
    );
}