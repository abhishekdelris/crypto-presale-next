// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PresalePricingTab = () => {
//   const [formData, setFormData] = useState({
//     totalSupply: '',
//     presaleQuantity: '',
//     startDate: '',
//     endDate: '',
//     softCap: '',
//     hardCap: '',
//     personalCap: '',
//     buyLink: '',
//     fundingStage: 'seed',
//     launchpad: '',
//     country: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ 
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Pricing data submitted:', formData);
//     // Here you would typically send the data to your backend
//   };

//   // Options for dropdown selectors
//   const fundingStageOptions = [
//     { value: 'seed', label: 'Seed Round' },
//     { value: 'private', label: 'Private Sale' },
//     { value: 'public', label: 'Public Sale' },
//     { value: 'ido', label: 'Initial DEX Offering (IDO)' },
//     { value: 'ico', label: 'Initial Coin Offering (ICO)' },
//   ];

//   const launchpadOptions = [
//     { value: 'pinksale', label: 'PinkSale' },
//     { value: 'dxsale', label: 'DxSale' },
//     { value: 'unicrypt', label: 'Unicrypt' },
//     { value: 'polkastarter', label: 'Polkastarter' },
//     { value: 'trustpad', label: 'TrustPad' },
//     { value: 'other', label: 'Other' },
//   ];

//   const countryOptions = [
//     { value: 'us', label: 'United States' },
//     { value: 'uk', label: 'United Kingdom' },
//     { value: 'sg', label: 'Singapore' },
//     { value: 'ch', label: 'Switzerland' },
//     { value: 'ae', label: 'United Arab Emirates' },
//     { value: 'global', label: 'Global' },
//     { value: 'other', label: 'Other' },
//   ];

//   return (
//     <div className="container py-5">
//       <div className="card shadow">
//         <div className="card-header bg-primary text-white">
//           <h4 className="mb-0">Add Pricing Details</h4>
//         </div>
//         <div className="card-body">
//           {/* Progress Bar */}
//           <div className="mb-4">
//             <div className="d-flex justify-content-between align-items-center mb-1">
//               <span className="text-primary">Step 2 of 4</span>
//               <span className="text-muted">Pricing Details</span>
//             </div>
//             <div className="progress" style={{ height: "10px" }}>
//               <div 
//                 className="progress-bar bg-primary" 
//                 role="progressbar" 
//                 style={{ width: "50%" }} 
//                 aria-valuenow="50" 
//                 aria-valuemin="0" 
//                 aria-valuemax="100"
//               ></div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             {/* Token Supply Section */}
//             <div className="card mb-4">
//               <div className="card-header bg-light">
//                 <h5 className="mb-0">
//                   <i className="bi bi-coin me-2"></i>
//                   Token Supply Information
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label htmlFor="totalSupply" className="form-label">
//                       Total Supply <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="totalSupply"
//                         name="totalSupply"
//                         value={formData.totalSupply}
//                         onChange={handleInputChange}
//                         placeholder="100,000,000"
//                         
//                       />
//                       <span className="input-group-text">Tokens</span>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="presaleQuantity" className="form-label">
//                       Presale Quantity <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="presaleQuantity"
//                         name="presaleQuantity"
//                         value={formData.presaleQuantity}
//                         onChange={handleInputChange}
//                         placeholder="20,000,000"
//                         
//                       />
//                       <span className="input-group-text">Tokens</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Date Range Section */}
//             <div className="card mb-4">
//               <div className="card-header bg-light">
//                 <h5 className="mb-0">
//                   <i className="bi bi-calendar-date me-2"></i>
//                   Sale Timeline
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label htmlFor="startDate" className="form-label">
//                       Start Date <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="datetime-local"
//                       className="form-control"
//                       id="startDate"
//                       name="startDate"
//                       value={formData.startDate}
//                       onChange={handleInputChange}
//                       
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="endDate" className="form-label">
//                       End Date <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="datetime-local"
//                       className="form-control"
//                       id="endDate"
//                       name="endDate"
//                       value={formData.endDate}
//                       onChange={handleInputChange}
//                       
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Funding Caps Section */}
//             <div className="card mb-4">
//               <div className="card-header bg-light">
//                 <h5 className="mb-0">
//                   <i className="bi bi-cash-stack me-2"></i>
//                   Funding Caps
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row g-3">
//                   <div className="col-md-4">
//                     <label htmlFor="softCap" className="form-label">
//                       Soft Cap (USD)
//                     </label>
//                     <div className="input-group">
//                       <span className="input-group-text">$</span>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="softCap"
//                         name="softCap"
//                         value={formData.softCap}
//                         onChange={handleInputChange}
//                         placeholder="50,000"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <label htmlFor="hardCap" className="form-label">
//                       Hard Cap (USD) <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <span className="input-group-text">$</span>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="hardCap"
//                         name="hardCap"
//                         value={formData.hardCap}
//                         onChange={handleInputChange}
//                         placeholder="200,000"
//                         
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <label htmlFor="personalCap" className="form-label">
//                       Personal Cap (USD)
//                     </label>
//                     <div className="input-group">
//                       <span className="input-group-text">$</span>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="personalCap"
//                         name="personalCap"
//                         value={formData.personalCap}
//                         onChange={handleInputChange}
//                         placeholder="5,000"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sale Details Section */}
//             <div className="card mb-4">
//               <div className="card-header bg-light">
//                 <h5 className="mb-0">
//                   <i className="bi bi-shop me-2"></i>
//                   Sale Details
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label htmlFor="buyLink" className="form-label">
//                       Buy Link <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <span className="input-group-text">
//                         <i className="bi bi-link-45deg"></i>
//                       </span>
//                       <input
//                         type="url"
//                         className="form-control"
//                         id="buyLink"
//                         name="buyLink"
//                         value={formData.buyLink}
//                         onChange={handleInputChange}
//                         placeholder="https://example.com/buy"
//                         
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="fundingStage" className="form-label">
//                       Funding Stage <span className="text-danger">*</span>
//                     </label>
//                     <select
//                       className="form-select"
//                       id="fundingStage"
//                       name="fundingStage"
//                       value={formData.fundingStage}
//                       onChange={handleInputChange}
//                       
//                     >
//                       {fundingStageOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="launchpad" className="form-label">
//                       Launchpad <span className="text-danger">*</span>
//                     </label>
//                     <select
//                       className="form-select"
//                       id="launchpad"
//                       name="launchpad"
//                       value={formData.launchpad}
//                       onChange={handleInputChange}
//                       
//                     >
//                       <option value="" disabled>Select Launchpad</option>
//                       {launchpadOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="country" className="form-label">
//                       Country <span className="text-danger">*</span>
//                     </label>
//                     <select
//                       className="form-select"
//                       id="country"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       
//                     >
//                       <option value="" disabled>Select Country</option>
//                       {countryOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form Navigation */}
//             <div className="d-flex justify-content-between mt-4">
//               <button type="button" className="btn btn-outline-secondary">
//                 <i className="bi bi-arrow-left me-2"></i>
//                 Previous
//               </button>
//               <button type="submit" className="btn btn-primary">
//                 Next
//                 <i className="bi bi-arrow-right ms-2"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PresalePricingTab;

// "use client"
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Card, Form, Button, ProgressBar } from 'react-bootstrap';

// const PresaleForm = () => {
//   // Track current step
//   const [currentStep, setCurrentStep] = useState(1);
  
//   // Combined form data for all steps
//   const [formData, setFormData] = useState({
//     // Step 1: Basic Info
//     tokenName: '',
//     tokenSymbol: '',
//     decimals: '18',
//     tokenType: 'erc20',
//     website: '',
//     telegram: '',
//     twitter: '',
    
//     // Step 2: Pricing Details
//     totalSupply: '',
//     presaleQuantity: '',
//     startDate: '',
//     endDate: '',
//     softCap: '',
//     hardCap: '',
//     personalCap: '',
//     buyLink: '',
//     fundingStage: 'seed',
//     launchpad: '',
//     country: '',
    
//     // Step 3: Tokenomics
//     presalePrice: '',
//     listingPrice: '',
//     liquidityPercentage: '60',
//     lockDuration: '180',
//     vestingPeriod: '',
//     releaseSchedule: 'linear',
    
//     // Step 4: KYC & Audit
//     kycStatus: 'pending',
//     auditStatus: 'pending',
//     kycProvider: '',
//     auditProvider: '',
//     smartContractAddress: '',
//     whitelistEnabled: false,
//     whitelistEndDate: '',
//   });

//   // Options for dropdown selectors
//   const tokenTypeOptions = [
//     { value: 'erc20', label: 'ERC-20 (Ethereum)' },
//     { value: 'bep20', label: 'BEP-20 (Binance Smart Chain)' },
//     { value: 'polygon', label: 'Polygon' },
//     { value: 'solana', label: 'Solana' },
//     { value: 'other', label: 'Other' },
//   ];

//   const fundingStageOptions = [
//     { value: 'seed', label: 'Seed Round' },
//     { value: 'private', label: 'Private Sale' },
//     { value: 'public', label: 'Public Sale' },
//     { value: 'ido', label: 'Initial DEX Offering (IDO)' },
//     { value: 'ico', label: 'Initial Coin Offering (ICO)' },
//   ];

//   const launchpadOptions = [
//     { value: 'pinksale', label: 'PinkSale' },
//     { value: 'dxsale', label: 'DxSale' },
//     { value: 'unicrypt', label: 'Unicrypt' },
//     { value: 'polkastarter', label: 'Polkastarter' },
//     { value: 'trustpad', label: 'TrustPad' },
//     { value: 'other', label: 'Other' },
//   ];

//   const countryOptions = [
//     { value: 'us', label: 'United States' },
//     { value: 'uk', label: 'United Kingdom' },
//     { value: 'sg', label: 'Singapore' },
//     { value: 'ch', label: 'Switzerland' },
//     { value: 'ae', label: 'United Arab Emirates' },
//     { value: 'global', label: 'Global' },
//     { value: 'other', label: 'Other' },
//   ];

//   const releaseScheduleOptions = [
//     { value: 'linear', label: 'Linear Release' },
//     { value: 'monthly', label: 'Monthly Releases' },
//     { value: 'quarterly', label: 'Quarterly Releases' },
//     { value: 'milestone', label: 'Milestone Based' },
//     { value: 'cliff', label: 'Cliff Vesting' },
//   ];

//   const kycProviderOptions = [
//     { value: 'certik', label: 'CertiK' },
//     { value: 'hacken', label: 'Hacken' },
//     { value: 'solidity', label: 'Solidity Finance' },
//     { value: 'assure', label: 'AssureDeFi' },
//     { value: 'other', label: 'Other' },
//   ];

//   const auditProviderOptions = [
//     { value: 'certik', label: 'CertiK' },
//     { value: 'hacken', label: 'Hacken' },
//     { value: 'solidity', label: 'Solidity Finance' },
//     { value: 'consensys', label: 'ConsenSys Diligence' },
//     { value: 'other', label: 'Other' },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     // setFormData({
//     //   ...formData,
//     //   [name]: type === 'checkbox' ? checked : value,
//     // });
//   };

//   const nextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('All form data submitted:', formData);
//     // Here you would typically send the data to your backend
//     alert('Form submitted successfully!');
//   };

//   // Progress percentage
//   const progress = (currentStep / 4) * 100;

//   // Step 1: Basic Information Form
//   const renderStep1 = () => (
//     <>
//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-info-circle me-2"></i>
//             Basic Token Information
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="tokenName">
//                 Token Name <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-coin"></i>
//                 </span>
//                 <Form.Control
//                   type="text"
//                   id="tokenName"
//                   name="tokenName"
//                   value={formData.tokenName}
//                   onChange={handleInputChange}
//                   placeholder="e.g. Bitcoin"
                  
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="tokenSymbol">
//                 Token Symbol <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-currency-exchange"></i>
//                 </span>
//                 <Form.Control
//                   type="text"
//                   id="tokenSymbol"
//                   name="tokenSymbol"
//                   value={formData.tokenSymbol}
//                 //   onChange={handleInputChange}
//                   placeholder="e.g. BTC"
//                   maxLength={10}
                  
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="decimals">
//                 Decimals <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="number"
//                 id="decimals"
//                 name="decimals"
//                 value={formData.decimals}
//                 onChange={handleInputChange}
//                 min="0"
//                 max="18"
                
//               />
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="tokenType">
//                 Token Type <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Select
//                 id="tokenType"
//                 name="tokenType"
//                 value={formData.tokenType}
//                 onChange={handleInputChange}
                
//               >
//                 {tokenTypeOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-link-45deg me-2"></i>
//             Social & Website Links
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-12">
//               <Form.Label htmlFor="website">
//                 Website <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-globe"></i>
//                 </span>
//                 <Form.Control
//                   type="url"
//                   id="website"
//                   name="website"
//                   value={formData.website}
//                   onChange={handleInputChange}
//                   placeholder="https://example.com"
                  
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="telegram">
//                 Telegram
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-telegram"></i>
//                 </span>
//                 <Form.Control
//                   type="url"
//                   id="telegram"
//                   name="telegram"
//                   value={formData.telegram}
//                   onChange={handleInputChange}
//                   placeholder="https://t.me/yourproject"
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="twitter">
//                 Twitter
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-twitter"></i>
//                 </span>
//                 <Form.Control
//                   type="url"
//                   id="twitter"
//                   name="twitter"
//                   value={formData.twitter}
//                   onChange={handleInputChange}
//                   placeholder="https://twitter.com/yourproject"
//                 />
//               </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );

//   // Step 2: Pricing Details Form
//   const renderStep2 = () => (
//     <>
//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-coin me-2"></i>
//             Token Supply Information
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="totalSupply">
//                 Total Supply <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <Form.Control
//                   type="number"
//                   id="totalSupply"
//                   name="totalSupply"
//                   value={formData.totalSupply}
//                   onChange={handleInputChange}
//                   placeholder="100,000,000"
                  
//                 />
//                 <span className="input-group-text">Tokens</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="presaleQuantity">
//                 Presale Quantity <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <Form.Control
//                   type="number"
//                   id="presaleQuantity"
//                   name="presaleQuantity"
//                   value={formData.presaleQuantity}
//                   onChange={handleInputChange}
//                   placeholder="20,000,000"
                  
//                 />
//                 <span className="input-group-text">Tokens</span>
//               </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-calendar-date me-2"></i>
//             Sale Timeline
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="startDate">
//                 Start Date <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 id="startDate"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleInputChange}
                
//               />
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="endDate">
//                 End Date <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 id="endDate"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleInputChange}
                
//               />
//             </div>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-cash-stack me-2"></i>
//             Funding Caps
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-4">
//               <Form.Label htmlFor="softCap">
//                 Soft Cap (USD)
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">$</span>
//                 <Form.Control
//                   type="number"
//                   id="softCap"
//                   name="softCap"
//                   value={formData.softCap}
//                   onChange={handleInputChange}
//                   placeholder="50,000"
//                 />
//               </div>
//             </div>
//             <div className="col-md-4">
//               <Form.Label htmlFor="hardCap">
//                 Hard Cap (USD) <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">$</span>
//                 <Form.Control
//                   type="number"
//                   id="hardCap"
//                   name="hardCap"
//                   value={formData.hardCap}
//                   onChange={handleInputChange}
//                   placeholder="200,000"
                  
//                 />
//               </div>
//             </div>
//             <div className="col-md-4">
//               <Form.Label htmlFor="personalCap">
//                 Personal Cap (USD)
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">$</span>
//                 <Form.Control
//                   type="number"
//                   id="personalCap"
//                   name="personalCap"
//                   value={formData.personalCap}
//                   onChange={handleInputChange}
//                   placeholder="5,000"
//                 />
//               </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-shop me-2"></i>
//             Sale Details
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="buyLink">
//                 Buy Link <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-link-45deg"></i>
//                 </span>
//                 <Form.Control
//                   type="url"
//                   id="buyLink"
//                   name="buyLink"
//                   value={formData.buyLink}
//                   onChange={handleInputChange}
//                   placeholder="https://example.com/buy"
                  
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="fundingStage">
//                 Funding Stage <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Select
//                 id="fundingStage"
//                 name="fundingStage"
//                 value={formData.fundingStage}
//                 onChange={handleInputChange}
                
//               >
//                 {fundingStageOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="launchpad">
//                 Launchpad <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Select
//                 id="launchpad"
//                 name="launchpad"
//                 value={formData.launchpad}
//                 onChange={handleInputChange}
                
//               >
//                 <option value="" disabled>Select Launchpad</option>
//                 {launchpadOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="country">
//                 Country <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
                
//               >
//                 <option value="" disabled>Select Country</option>
//                 {countryOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );

//   // Step 3: Tokenomics Form
//   const renderStep3 = () => (
//     <>
//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-graph-up-arrow me-2"></i>
//             Token Pricing
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="presalePrice">
//                 Presale Token Price (USD) <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">$</span>
//                 <Form.Control
//                   type="number"
//                   id="presalePrice"
//                   name="presalePrice"
//                   value={formData.presalePrice}
//                   onChange={handleInputChange}
//                   placeholder="0.01"
//                   step="0.000001"
                  
//                 />
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="listingPrice">
//                 Listing Token Price (USD) <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">$</span>
//                 <Form.Control
//                   type="number"
//                   id="listingPrice"
//                   name="listingPrice"
//                   value={formData.listingPrice}
//                   onChange={handleInputChange}
//                   placeholder="0.015"
//                   step="0.000001"
                  
//                 />
//               </div>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-shield-lock me-2"></i>
//             Liquidity & Vesting
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="liquidityPercentage">
//                 Liquidity Percentage <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <Form.Control
//                   type="number"
//                   id="liquidityPercentage"
//                   name="liquidityPercentage"
//                   value={formData.liquidityPercentage}
//                   onChange={handleInputChange}
//                   min="0"
//                   max="100"
//                   placeholder="60"
                  
//                 />
//                 <span className="input-group-text">%</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="lockDuration">
//                 Liquidity Lock Duration (days) <span className="text-danger">*</span>
//               </Form.Label>
//               <div className="input-group">
//                 <Form.Control
//                   type="number"
//                   id="lockDuration"
//                   name="lockDuration"
//                   value={formData.lockDuration}
//                   onChange={handleInputChange}
//                   min="30"
//                   placeholder="180"
                  
//                 />
//                 <span className="input-group-text">days</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="vestingPeriod">
//                 Vesting Period (months)
//               </Form.Label>
//               <div className="input-group">
//                 <Form.Control
//                   type="number"
//                   id="vestingPeriod"
//                   name="vestingPeriod"
//                   value={formData.vestingPeriod}
//                   onChange={handleInputChange}
//                   min="0"
//                   placeholder="6"
//                 />
//                 <span className="input-group-text">months</span>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="releaseSchedule">
//                 Token Release Schedule
//               </Form.Label>
//               <Form.Select
//                 id="releaseSchedule"
//                 name="releaseSchedule"
//                 value={formData.releaseSchedule}
//                 onChange={handleInputChange}
//               >
//                 {releaseScheduleOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );

//   // Step 4: KYC & Audit Form
//   const renderStep4 = () => (
//     <>
//       <Card className="mb-4">
//         <Card.Header className="bg-light">
//           <h5 className="mb-0">
//             <i className="bi bi-shield-check me-2"></i>
//             KYC & Audit Information
//           </h5>
//         </Card.Header>
//         <Card.Body>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <Form.Label htmlFor="kycStatus">
//                 KYC Status <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Select
//                 id="kycStatus"
//                 name="kycStatus"
//                 value={formData.kycStatus}
//                 onChange={handleInputChange}
                
//               >
//                 <option value="completed">Completed</option>
//                 <option value="pending">Pending</option>
//                 <option value="not_started">Not Started</option>
//               </Form.Select>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="auditStatus">
//                 Audit Status <span className="text-danger">*</span>
//               </Form.Label>
//               <Form.Select
//                 id="auditStatus"
//                 name="auditStatus"
//                 value={formData.auditStatus}
//                 onChange={handleInputChange}
                
//               >
//                 <option value="completed">Completed</option>
//                 <option value="pending">Pending</option>
//                 <option value="not_started">Not Started</option>
//               </Form.Select>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="kycProvider">
//                 KYC Provider
//               </Form.Label>
//               <Form.Select
//                 id="kycProvider"
//                 name="kycProvider"
//                 value={formData.kycProvider}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select KYC Provider</option>
//                 {kycProviderOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//             <div className="col-md-6">
//               <Form.Label htmlFor="auditProvider">
//                 Audit Provider
//               </Form.Label>
//               <Form.Select
//                 id="auditProvider"
//                 name="auditProvider"
//                 value={formData.auditProvider}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select Audit Provider</option>
//                 {auditProviderOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//             <div className="col-md-12">
//               <Form.Label htmlFor="smartContractAddress">
//                 Smart Contract Address
//               </Form.Label>
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="bi bi-file-earmark-code"></i>
//                 </span>
//                 <Form.Control
//                   type="text"
//                   id="smartContractAddress"
//                   name="smartContractAddress"
//                   value={formData.smartContractAddress}
//                   onChange={handleInputChange}
//                   placeholder="0x..."
//                 />
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-check mt-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="whitelistEnabled"
//                   name="whitelistEnabled"
//                   checked={formData.whitelistEnabled}
//                   onChange={handleInputChange}
//                 />
//                 <label className="form-check-label" htmlFor="whitelistEnabled">
//                   Enable Whitelist
//                 </label>
//               </div>
//             </div>
//             {formData.whitelistEnabled && (
//               <div className="col-md-6">
//                 <Form.Label htmlFor="whitelistEndDate">
//                   Whitelist End Date
//                 </Form.Label>
//                 <Form.Control
//                   type="datetime-local"
//                   id="whitelistEndDate"
//                   name="whitelistEndDate"
//                   value={formData.whitelistEndDate}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             )}
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );

//   return (
//     <Container className="py-5">
//       <Card className="shadow">
//         <Card.Header className="bg-primary text-white">
//           <h4 className="mb-0">Presale Token Setup</h4>
//         </Card.Header>
//         <Card.Body>
//           {/* Progress Bar */}
//           <div className="mb-4">
//             <div className="d-flex justify-content-between align-items-center mb-1">
//               <span className="text-primary">Step {currentStep} of 4</span>
//               <span className="text-muted">
//                 {currentStep === 1 && "Basic Information"}
//                 {currentStep === 2 && "Pricing Details"}
//                 {currentStep === 3 && "Tokenomics"}
//                 {currentStep === 4 && "KYC & Audit"}
//               </span>
//             </div>
//             <ProgressBar 
//               now={progress} 
//               style={{ height: "10px" }} 
//               variant="primary" 
//               aria-valuemin="0" 
//               aria-valuemax="100" 
//             />
//           </div>

//           <Form onSubmit={currentStep === 4 ? handleSubmit : nextStep}>
//             {/* Show the current step form - Corrected to match step numbers */}
//             {currentStep === 1 && renderStep1()}
//             {currentStep === 2 && renderStep2()}
//             {currentStep === 3 && renderStep3()}
//             {currentStep === 4 && renderStep4()}

//             {/* Navigation Buttons */}
//             <div className="d-flex justify-content-between mt-4">
//               {currentStep > 1 && (
//                 <Button variant="outline-secondary" onClick={prevStep}>
//                   <i className="bi bi-arrow-left me-2"></i>
//                   Previous
//                 </Button>
//               )}
//               {currentStep === 1 && (
//                 <div></div>
//               )}
//               {currentStep < 4 ? (
//                 <Button variant="primary" type="submit">
//                   Next
//                   <i className="bi bi-arrow-right ms-2"></i>
//                 </Button>
//               ) : (
//                 <Button variant="success" type="submit">
//                   Submit
//                   <i className="bi bi-check-circle ms-2"></i>
//                 </Button>
//               )}
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default PresaleForm;
"use client";
import React, { useState } from "react";

export default function SubmitListingForm() {
  const [activeTab, setActiveTab] = useState("listing");
  const [formData, setFormData] = useState({
    totalSupply: "1000000",
    presaleQty: "500000",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    softCap: "100 ETH",
    hardCap: "500 ETH",
    personalCap: "5 ETH",
    buyLink: "https://example.com/buy",
    fundingStage: "Pre-seed",
    launchpad: "LaunchX",
    country: "United States",
    price: "0.05",
    currency: "ETH",
    fees: "2.5",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // API call can be placed here
  };

  return (
    <div className="container mt-5 mb-4">
      {/* Tabs Navigation */}
      <div className="contact-us-form">
        <h2 className="text-center">Update Listing</h2>
        <ul className="nav nav-tabs d-flex justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "listing" ? "active" : ""}`}
              onClick={() => setActiveTab("listing")}
            >
              Listing Details
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "pricing" ? "active" : ""}`}
              onClick={() => setActiveTab("pricing")}
            >
              Pricing Details
            </button>
          </li>
        </ul>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="mt-4">
          {activeTab === "listing" && (
            <div className="row">
              {[
                "totalSupply",
                "presaleQty",
                "startDate",
                "endDate",
                "softCap",
                "hardCap",
                "personalCap",
                "buyLink",
                "fundingStage",
                "launchpad",
                "country",
              ].map((field) => (
                <div className="col-md-6 mb-3" key={field}>
                  <label className="form-label text-capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={
                      field === "startDate" || field === "endDate"
                        ? "date"
                        : "text"
                    }
                    className="form-control"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <div className="d-flex justify-content-between">
                <div></div>
                <button className="btn btn-primary" type="submit">
                  Next
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="row">
              {[
                { label: "Price", name: "price", type: "number" },
                { label: "Currency", name: "currency", type: "text" },
                { label: "Fees", name: "fees", type: "number" },
              ].map(({ label, name, type }) => (
                <div className="col-md-6 mb-3" key={name}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    className="form-control"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <button type="submit" className="btn btn-primary">
                Submit Listing
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}