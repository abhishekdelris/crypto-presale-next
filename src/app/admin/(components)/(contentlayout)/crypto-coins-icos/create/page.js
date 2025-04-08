// "use client";
// import React, { useState, Fragment } from "react";
// import {
//   Card,
//   Col,
//   Row,
//   ProgressBar,
//   Button,
//   Form,
//   Dropdown,
//   Table,
//   Pagination,
//   Container
// } from "react-bootstrap";
// import Link from "next/link";
// import {
//   BudgetTask,
//   MobileAppDesign,
//   ProjectBudget,
//   TASKS,
//   WebsiteAppDesign,
//   WebsiteDesign
// } from "../../../../../../../shared/data/dashboard/dashboarddata";
// import PageHeader from "../../../../../../../shared/layout-components/page-header/page-header";
// import Seo from "../../../../../../../shared/layout-components/seo/seo";
// const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
// import dynamic from "next/dynamic";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "suneditor/dist/css/suneditor.min.css";
// // import { useRouter,Link } from "next/router";
// import { useGuestPostSubmit } from "./useGuestPostSubmit";
// import RichTextEditor from "../../../../../../components/RichTextEditor";

// const Create = () => {
//   const { submitGuestPost, isLoading } = useGuestPostSubmit();
//   const [selectedFile, setSelectedFile] = useState("");
//   // const route = useRouter();
//   // Initial form state
//   const [formData, setFormData] = useState({
//     title: "",
//     alias: "",
//     h1_title: "",
//     h2_title: "",
//     img_alt_title: "",
//     is_gabbar: 1,
//     created_by: "",
//     author_name: "",
//     is_rss_feed: "",
//     dynamic_rss_feed: [],
//     image: null,
//     channel_id: "",
//     publishedAt: "",
//     description: "",
//     article: "",
//     breadcrumbs: "",
//     data_set: "",
//     discussion_forum: "",
//     faq: "",
//     image_metadata: "",
//     new_article: "",
//     paywalled_content: "",
//     profile: "",
//     organization: "",
//     review_snippets: "",
//     sitelinks: "",
//     video: "",
//     seo_title: "",
//     meta_keywords: "",
//     meta_description: ""
//   });

//   // const handleFileChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setSelectedFile(file);

//   //     // Create preview URL
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setPreviewUrl(reader.result);

//   //       // Save to localStorage
//   //       if (reader.result) {
//   //         localStorage.setItem('uploadedImage', reader.result);
//   //       }
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };
//   // Dynamic input change handler
//   // const handleInputChange = (e) => {
//   //   const { name, value, type, files, checked } = e.target;

//   //   setFormData((prevData) => {
//   //     // Handle different input types
//   //     switch (type) {
//   //       case "file":
//   //         return { ...prevData, [name]: files[0] };
//   //       case "checkbox":
//   //         // Handle multi-select checkboxes
//   //         if (name === "dynamic_rss_feed") {
//   //           const currentFeeds = prevData.dynamic_rss_feed || [];
//   //           return {
//   //             ...prevData,
//   //             dynamic_rss_feed: checked
//   //               ? [...currentFeeds, value]
//   //               : currentFeeds.filter((feed) => feed !== value)
//   //           };
//   //         }
//   //         return { ...prevData, [name]: checked };
//   //         default:
//   //           return {
//   //             ...prevData,
//   //             [name]: (name === 'is_gabbar' || name === 'channel_id' || name === 'is_rss_feed' || name === 'created_by' ) ? Number(value) : value
//   //           };
//   //     }
//   //   });
//   // };

//   // Handle SunEditor content change
//   const handleEditorChange = content => {
//     setFormData(prev => ({
//       ...prev,
//       description: content
//     }));
//   };

//   // Form submission handler
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Validate required fields
//   //   const requiredFields = [
//   //     "title",
//   //     "alias",

//   //   ];

//   //   const missingFields = requiredFields.filter((field) => !formData[field]);

//   //   if (missingFields.length > 0) {
//   //     toast.error(
//   //       `Please fill in all required fields: ${missingFields.join(", ")}`
//   //     );
//   //     return;
//   //   }
//   //   console.log("submitcontent..................!",formData);

//   //   // Submit the form data
//   //   const formData12 = new FormData();
//   //   formData12.append('file', selectedFile);

//   //   await submitGuestPost(formData);
//   // };

//   // new data for hanlde img upload

//   // Image change handler
//   const handleFileChange = e => {
//     const file = e.target.files[0];
//     if (file) {
//       // Create preview URL
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData(prev => ({
//           ...prev,
//           image: file, // Store the actual file
//           imagePreview: reader.result // Store preview URL
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Other input change handler remains the same
//   const handleInputChange = e => {
//     const { name, value, type, files, checked } = e.target;

//     setFormData(prevData => {
//       switch (type) {
//         case "file":
//           return { ...prevData, [name]: files[0] };
//         case "checkbox":
//           // Handle multi-select checkboxes (same as before)
//           if (name === "dynamic_rss_feed") {
//             const currentFeeds = prevData.dynamic_rss_feed || [];
//             return {
//               ...prevData,
//               dynamic_rss_feed: checked
//                 ? [...currentFeeds, value]
//                 : currentFeeds.filter(feed => feed !== value)
//             };
//           }
//           return { ...prevData, [name]: checked };
//         default:
//           return {
//             ...prevData,
//             [name]:
//               name === "is_gabbar" ||
//               name === "channel_id" ||
//               name === "is_rss_feed" ||
//               name === "created_by"
//                 ? Number(value)
//                 : value
//           };
//       }
//     });
//   };

//   // Form submission handler
//   const handleSubmit = async e => {
//     e.preventDefault();

//     // Validate required fields
//     const requiredFields = ["title", "alias"];
//     const missingFields = requiredFields.filter(field => !formData[field]);

//     if (missingFields.length > 0) {
//       toast.error(
//         `Please fill in all required fields: ${missingFields.join(", ")}`
//       );
//       return;
//     }

//     // Submit the form data
//     await submitGuestPost(formData);
//   };

//   // Reset form handler
//   const handleReset = () => {
//     setFormData({
//       title: "",
//       alias: "",
//       h1_title: "",
//       h2_title: "",
//       img_alt_title: "",
//       is_gabbar: "",
//       created_by: "",
//       author_name: "",
//       is_rss_feed: "",
//       dynamic_rss_feed: [],
//       image: null,
//       channel_id: "",
//       publishedAt: "",
//       description: "",
//       article: "",
//       breadcrumbs: "",
//       data_set: "",
//       discussion_forum: "",
//       faq: "",
//       image_metadata: "",
//       new_article: "",
//       paywalled_content: "",
//       profile: "",
//       organization: "",
//       review_snippets: "",
//       sitelinks: "",
//       video: "",
//       seo_title: "",
//       meta_keywords: "",
//       meta_description: ""
//     });
//   };

//   return (
//     <Fragment>
//       <Seo title={"Content"} />
//       <PageHeader title="Content" item="Content" active_item="Create" />
//       <ToastContainer />
//       {/* <!--Row--> */}
//       <form onSubmit={handleSubmit}>
//         <Row className="row-sm">
//           <div className="col-xl-12">
//             <div className="custom-card mg-b-20 card">
//               <div className="card-body">
//                 <div className="row">
//                   {/* Title Field */}
//                   <div className="col-xl-12 mb-3">
//                     <div>
//                       <label className="main-content-label mb-2">
//                         Create Content
//                       </label>
//                     </div>
//                   </div>
//                   <div className="form-group col-sm-12 col-xl-6">
//                     <label htmlFor="title" className="field-required">
//                       Title:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="title"
//                       type="text"
//                       id="title"
//                       value={formData.title}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Alias Field */}
//                   <div className="form-group col-sm-12 col-xl-6">
//                     <label htmlFor="alias" className="field-required">
//                       Alias:
//                     </label>{" "}
//                     <small className="text-danger">
//                       No numbers and special characters are allowed, only
//                       lowercase letters are allowed.
//                     </small>
//                     <input
//                       placeholder="eg. abc-xyz-bcd"
//                       className="form-control"
//                       name="alias"
//                       type="text"
//                       id="alias"
//                       value={formData.alias}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* H1 title Field */}
//                   <div className="form-group col-sm-6">
//                     <label htmlFor="h1_title" className="field-required">
//                       H1 Title:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="h1_title"
//                       type="text"
//                       id="h1_title"
//                       value={formData.h1_title}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* H2 title Field */}
//                   <div className="form-group col-sm-6">
//                     <label htmlFor="h2_title" className="field-required">
//                       H2 Title:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="h2_title"
//                       type="text"
//                       id="h2_title"
//                       value={formData.h2_title}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/*img_alt_title Field */}
//                   <div className="form-group col-sm-6">
//                     <label htmlFor="img_alt_title" className="field-required">
//                       Image Alt Title:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="img_alt_title"
//                       type="text"
//                       id="img_alt_title"
//                       value={formData.img_alt_title}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Status Field */}
//                   <div className="form-group col-sm-12 col-xl-6">
//                     <label htmlFor="is_gabbar" className="field-required">
//                       News Type:
//                     </label>
//                     <select
//                       className="form-control"
//                       id="is_gabbar"
//                       name="is_gabbar"
//                       value={formData.is_gabbar}
//                       onChange={handleInputChange}
//                     >
//                       <option value>Select News Type</option>
//                       <option value={1}>Gabbar News</option>
//                       <option value={2}>Press Release</option>
//                       <option value={3}>Sponsored</option>
//                       <option value={4}>Guest News</option>
//                       <option value={5}>Blog</option>
//                       <option value={6}>Price Prediction</option>
//                     </select>
//                   </div>

//                   <div className="form-group col-sm-12 col-xl-6">
//                     <label htmlFor="author_name">Created By:</label>
//                     <select
//                       className="form-control"
//                       name="created_by"
//                       value={formData.created_by}
//                       onChange={handleInputChange}
//                     >
//                       <option value="">Select Author</option>
//                       <option value={1}>Rohit Khandelwal</option>
//                       <option value={2}>Sudeep Saxena</option>
//                       <option value={3}>Akansha Vyas</option>
//                     </select>
//                   </div>
//                   {/* author Field */}
//                   <div className="form-group col-sm-12 col-xl-3">
//                     <label htmlFor="author_name">Author:</label>
//                     <select
//                       className="form-control"
//                       name="author_name"
//                       value={formData.author_name}
//                       onChange={handleInputChange}
//                     >
//                       <option value="">Select Author</option>
//                       <option value="Rohit Khandelwal">Rohit Khandelwal</option>
//                       <option value="Sudeep Saxena">Sudeep Saxena</option>
//                       <option value="Akansha Vyas">Akansha Vyas</option>
//                     </select>
//                   </div>
//                   {/* Title Field */}
//                   <div className="form-group col-sm-12 col-xl-3">
//                     <label htmlFor="author">Author Name:</label>{" "}
//                     <span className="text-danger">
//                       (When Author is not available in dropdown)
//                     </span>
//                     <input
//                       className="form-control"
//                       name="author"
//                       type="text"
//                       id="author"
//                       value={formData.author}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Status Field */}

//                   <div className="form-group col-sm-12 col-xl-6">
//                     <label htmlFor="is_rss_feed">Is RSS Feed:</label>
//                     <select
//                       className="form-control"
//                       id="is_rss_feed"
//                       name="is_rss_feed"
//                       value={formData.is_rss_feed}
//                       onChange={handleInputChange}
//                     >
//                       <option value="">Select RSS Feed Status</option>
//                       <option value="1">Yes</option>
//                       <option value="0">No</option>
//                       <option value="2">Review</option>
//                     </select>
//                   </div>
//                   {/* Rss Field */}
//                   <div className="form-group col-sm-12 col-xl-6">
//                     <label>Dynamic RSS Feed:</label>
//                     <div>
//                       {[
//                         { value: "1", label: "Daily Hunt" },
//                         { value: "2", label: "CMC" },
//                         { value: "3", label: "Suncrypto" },
//                         { value: "4", label: "Binance" }
//                       ].map(feed =>
//                         <div key={feed.value} className="form-check">
//                           <input
//                             type="checkbox"
//                             name="dynamic_rss_feed"
//                             value={feed.value}
//                             checked={formData.dynamic_rss_feed.includes(
//                               feed.value
//                             )}
//                             onChange={handleInputChange}
//                             className="form-check-input"
//                             id={`rss-${feed.value}`}
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor={`rss-${feed.value}`}
//                           >
//                             {feed.label}
//                           </label>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   {/* Image Field */}
//                   <div className="form-group col-sm-12 col-xl-6">
//                     <div className="form-label font-weight-normal">
//                       Coin / Token Image<span className="text-danger">*</span>
//                     </div>
//                     <div className="custom-file ">
//                       {/* Image Upload */}

//                       <label htmlFor="image" className="form-label">
//                         Image Upload
//                       </label>
//                       <input
//                         type="file"
//                         className="form-control"
//                         id="image"
//                         name="image"
//                         onChange={handleFileChange}
//                         accept="image/*"
//                       />
//                     </div>

//                     <div id="img-preview">
//                       {/* Image Preview */}
//                       {formData.imagePreview &&
//                         <div className="mt-2">
//                           <img
//                             src={formData.imagePreview}
//                             alt="Preview"
//                             style={{
//                               maxWidth: "200px",
//                               maxHeight: "200px",
//                               objectFit: "contain"
//                             }}
//                           />
//                         </div>}
//                     </div>
//                   </div>
//                   <div className="form-group col-sm-12 col-xl-3">
//                     <label htmlFor="channel_id" className="field-required">
//                       Select Channel:
//                     </label>
//                     <select
//                       className="form-control"
//                       name="channel_id"
//                       value={formData.channel_id}
//                       onChange={handleInputChange}
//                     >
//                       <option value>Select Channel</option>
//                       <option value={1}> Coin Gabbar</option>
//                       <option value={2}>Chainwire</option>
//                       <option value={3}>Coinzilla</option>
//                     </select>
//                   </div>
//                   {/* Publishedat Field */}
//                   <div className="form-group col-sm-12 col-xl-3">
//                     <label htmlFor="publishedAt" className="field-required">
//                       Published at:
//                     </label>
//                     <input
//                       className="form-control"
//                       type="datetime-local"
//                       name="publishedAt"
//                       defaultValue="2025-03-24T14:39"
//                       value={formData.publishedAt}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Description Field */}
//                   <div className="ql-wrapper ql-wrapper-demo mb-3">
//                     <label className="fw-medium form-label">
//                       Post Description
//                     </label>
//                     <div>
//                       <SunEditor
//                         onChange={handleEditorChange}
//                         setOptions={{
//                           height: 300,
//                           placeholder: "Enter your text here!!!",
//                           buttonList: [
//                             ["undo", "redo"],
//                             ["font", "fontSize"],
//                             ["bold", "underline", "italic", "strike"],
//                             ["fontColor", "hiliteColor"],
//                             ["removeFormat"],
//                             ["outdent", "indent"],
//                             ["align", "list"],
//                             ["link", "image"]
//                           ]
//                         }}
//                       />
//                       {/* <RichTextEditor 
//                       // richTextEditorHtml="Initial content" 
//                       onRichTextEditorChange={handleEditorChange}
//                       displayMode="EDIT"
//                       /> */}
//                     </div>
//                   </div>
//                   {/* article Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="article">Article:</label>
//                     <input
//                       className="form-control"
//                       name="article"
//                       type="text"
//                       id="article"
//                       value={formData.article}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* breadcrumbs Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="breadcrumbs">Breadcrumbs:</label>
//                     <input
//                       className="form-control"
//                       name="breadcrumbs"
//                       type="text"
//                       id="breadcrumbs"
//                       value={formData.breadcrumbs}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* course info Field */}
//                   {/* data set Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="data_set">Data set:</label>
//                     <input
//                       className="form-control"
//                       name="data_set"
//                       type="text"
//                       id="data_set"
//                       value={formData.data_set}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* discussion forum Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="discussion_forum">Discussion forum:</label>
//                     <input
//                       className="form-control"
//                       name="discussion_forum"
//                       type="text"
//                       id="discussion_forum"
//                       value={formData.discussion_forum}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* faq Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="faq">Faq:</label>
//                     <input
//                       className="form-control"
//                       name="faq"
//                       type="text"
//                       id="faq"
//                       value={formData.faq}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* image metadata Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="image_metadata">Image metadata:</label>
//                     <input
//                       className="form-control"
//                       name="image_metadata"
//                       type="text"
//                       id="image_metadata"
//                       value={formData.image_metadata}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* image metadata Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="new_article">New article:</label>
//                     <input
//                       className="form-control"
//                       name="new_article"
//                       type="text"
//                       id="new_article"
//                       value={formData.new_article}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* paywalled content Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="paywalled_content">
//                       Paywalled content:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="paywalled_content"
//                       type="text"
//                       id="paywalled_content"
//                       value={formData.paywalled_content}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* profile Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="profile">Profile:</label>
//                     <input
//                       className="form-control"
//                       name="profile"
//                       type="text"
//                       id="profile"
//                       value={formData.profile}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* organization Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="organization">Organization:</label>
//                     <input
//                       className="form-control"
//                       name="organization"
//                       type="text"
//                       id="organization"
//                       value={formData.alias}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* review snippets Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="review_snippets">Review snippets:</label>
//                     <input
//                       className="form-control"
//                       name="review_snippets"
//                       type="text"
//                       id="review_snippets"
//                       value={formData.review_snippets}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/*  sitelinks Field */}
//                   <div className="form-group col-sm-12 col-lg-6 col-xl-3">
//                     <label htmlFor="sitelinks">Site links:</label>
//                     <input
//                       className="form-control"
//                       name="sitelinks"
//                       type="text"
//                       id="sitelinks"
//                       value={formData.sitelinks}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/*  video Field */}
//                   <div className="form-group col-sm-12">
//                     <label htmlFor="video">Video:</label>
//                     <input
//                       className="form-control"
//                       name="video"
//                       type="text"
//                       id="video"
//                       value={formData.video}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Seo Title Field */}
//                   <div className="form-group col-sm-12">
//                     <label htmlFor="seo_title" className="field-required">
//                       Seo Title:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="seo_title"
//                       type="text"
//                       id="seo_title"
//                       value={formData.seo_title}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Meta Keywords Field */}
//                   <div className="form-group col-sm-12">
//                     <label htmlFor="meta_keywords" className="field-required">
//                       Meta Keywords:
//                     </label>
//                     <input
//                       className="form-control"
//                       name="meta_keywords"
//                       type="text"
//                       id="meta_keywords"
//                       value={formData.meta_keywords}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {/* Meta Description Field */}
//                   <div className="form-group col-sm-12">
//                     <label
//                       htmlFor="meta_description"
//                       className="field-required"
//                     >
//                       Meta Description:
//                     </label>
//                     <textarea
//                       className="form-control"
//                       name="meta_description"
//                       cols={50}
//                       rows={10}
//                       id="meta_description"
//                       defaultValue={""}
//                       value={formData.meta_description}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <link
//                     rel="stylesheet"
//                     type="text/css"
//                     href="http://192.168.1.7/kol-backend/public/assets/css/select2.min.css"
//                   />
//                   <style
//                     type="text/css"
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         "\n    span.select2-selection.select2-selection--single {\n        width: 100%;\n    }\n"
//                     }}
//                   />
//                   {/*  */}
//                 </div>
//                 {/* Submit and Reset Buttons */}
//                 <div className="col-12 mt-3">
//                   <button
//                     type="submit"
//                     className="btn btn-primary me-2"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Submitting..." : "Submit"}
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={handleReset}
//                     disabled={isLoading}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Row>
//       </form>
//     </Fragment>
//   );
// };

// export default Create;


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
//     detail_total_supply: '',
//     detail_qty_of_coin: '',
//     detail_ico_price: '',
//     detail_where_to_buy: '',
//     detail_start_date: '',
//     detail_end_date: '',
//     detail_fund_asking_for: '',
//     detail_accept_type: '',
//     detail_ico_ido_type: '',
//     detail_accept_type: '',
//     selectaccept_type: '',
//     detail_is_review: '',
//     detail_token_for_sale: '',
//     detail_percentage_of_supply: '',
//     privateSaleSelect: '',
//     detail_one_usdt: '',
//     detail_soft_cap: '',
//     detail_hard_cap: '',
//     detail_personal_cap: ''
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


import React, { useState, Fragment } from "react";
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
} from "../../../../../../../shared/data/dashboard/dashboarddata";
import PageHeader from "../../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../../shared/layout-components/seo/seo";
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "suneditor/dist/css/suneditor.min.css";
// import { useRouter,Link } from "next/router";
import { useGuestPostSubmit } from "./useGuestPostSubmit";



export default function create() {
  const [activeTab, setActiveTab] = useState(1);
  const { submitGuestPost, isLoading } = useGuestPostSubmit();
  const [formData, setFormData] = useState({
    // Tab 1 data
    cryptoMarkets: '', 
    ico_ido_type: '',
    coin_token: '',
    title: '',
    project_name: '',
    slug: '',
    blockchain: '',
    h1_title: '',
    h2_title: '',
    image: null,
    ico_project_id: '',
    sub_category_id: '',
    reddit: '',
    medium: '',
    linkedin: '',
    country: '',
    whitePaper: null,
    social_media_image: null,
    start_time: '',
    end_time: '',
    daysRemainingToStart: '',
    daysRemainingToEnd: '',
    total_supply_percent: '',
    soft_cap: '',
    hard_cap: '',
    personal_cap: '',
    accept_type: '',
    ico_price: '',
    fund_asking_for: '',
    where_to_buy: '',
    likes_counts: '',
    is_review: '',
    featured: '',
    is_active: '',
    is_guest: '',
    launchpad: '',
    website: '',
    description: '',
    seo_title: '', 
    meta_keywords: '',
    meta_description: '',
    imagePreview : '',
    // Tab 2 data - Various sale types
    private_sale_start_date: '',
      private_sale_end_date: '',
      private_sale_rate: '',
      private_sale_goal: '',
      private_sale_token_sold: '',
      private_sale_where_buy: '',
      pre_sale_start_date: '',
      pre_sale_end_date: '',
      pre_sale_rate: '',
      fundraisingGoal: '',
      pre_sale_token_sold: '',
      pre_sale_where_buy: '',
   
   
      public_sale_start_date: '',
      public_sale_end_date: '',
      public_sale_rate: '',
      public_sale_goal: '',
      public_sale_token_sold: '',
      public_sale_where_buy: '',
    
    
      ico_sale_start_date: '',
      ico_sale_end_date: '',
      ico_sale_rate: '',
      ico_sale_goal: '',
      ico_sale_token_sold: '',
      ico_sale_where_buy: '',
    
   
      ido_sale_start_date: '',
      ido_sale_end_date: '',
      ido_sale_rate: '',
      ido_sale_goal: '',
      ido_sale_token_sold: '',
      ido_sale_where_buy: '',
   
      ieo_sale_start_date: '',
      ieo_sale_end_date: '',
      ieo_sale_rate: '',
      ieo_sale_goal: '',
      ieo_sale_token_sold: '',
      ieo_sale_where_buy: '',
   
    
    // Tab 3 data
    article: '',
    discussion_forum: '',
    faq: '',
    new_article: '',
    product: '',
    review_snippets: '',
    breadcrumbs: '',
    events: '',
    image_metadata: '',
    paywalled_content: '',
    organization: '',
    sitelinks: '',
    
    // Tab 4 data
    one_usdt: '',
    detail_total_supply: '',
    detail_qty_of_coin: '',
    detail_ico_price: '',
    detail_where_to_buy: '',
    detail_start_date: '',
    detail_end_date: '',
    detail_fund_asking_for: '',
    detail_accept_type: '',
    detail_ico_ido_type: '',
    detail_accept_type: '',
    selectaccept_type: '',
    detail_is_review: '',
    detail_token_for_sale: '',
    detail_percentage_of_supply: '',
    privateSaleSelect: '',
    detail_one_usdt: '',
    detail_soft_cap: '',
    detail_hard_cap: '',
    detail_personal_cap: '' 
  });
 
  
    // State to track form data for each field set
  const [fieldSets, setFieldSets] = useState([{ id: 0, ...formData }]);
  const [nextId, setNextId] = useState(1);

  
     // Function to add a new field set
  const addNewFieldSet = () => {
    setFieldSets([...fieldSets, { id: nextId, ...formData }]);
    setNextId(nextId + 1);
  };
  
     // Function to remove a field set
  const removeFieldSet = (index) => {
    const updatedFieldSets = fieldSets.filter((_, i) => i !== index);
    setFieldSets(updatedFieldSets);
  };
  
  

     const handleChange = (e,index) => {
      const { name, value, type, files, checked } = e.target;
 
    setFormData({
      ...formData,
      [name]: value 
    });
   
    
    // Create a copy of the fieldSets array
    const updatedFieldSets = [...fieldSets];
    
    // Update the specific field in the correct field set
    updatedFieldSets[index] = {
      ...updatedFieldSets[index],
      [name]: value
    };
    
    setFieldSets(updatedFieldSets);
  };

  // Handle SunEditor content change
  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      description: content
    }));
  };


  // Navigation functions
  const next = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  };

  const back = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Handle form submission here.
     // Submit the form data
     await submitGuestPost(formData);
  };

  const launchpadOptions = [
    { value: "", label: "Select Project Type" },
    { value: "dao-maker", label: "DAO Maker Launchpad" },
    { value: "bscpad", label: "BSCPad" },
    { value: "trustswap", label: "TrustSwap" },
    { value: "bullstarter", label: "BullStarter" },
    { value: "occamrazer", label: "OccamRazer" },
    { value: "polkastarter", label: "Polkastarter" },
    { value: "starter", label: "Starter" },
    { value: "pancakeswap", label: "PancakeSwap" },
    { value: "paid-network", label: "PAID Network" },
    { value: "launchpool", label: "Launchpool" },
    { value: "red-kite", label: "Red Kite" },
    { value: "trustpad", label: "TrustPad" },
    { value: "enjinstarter", label: "Enjinstarter" },
    { value: "zendit", label: "ZENDIT" },
    { value: "poolz", label: "Poolz" },
    { value: "seedify", label: "Seedify" },
    { value: "gamefi", label: "GameFi" },
    { value: "gamestarter", label: "Gamestarter" },
    { value: "kommunitas", label: "Kommunitas" },
    { value: "truepnl", label: "TruePNL" },
    { value: "impossible-finance", label: "Impossible Finance" },
    { value: "binstarter", label: "BinStarter" },
    { value: "gagarin", label: "GAGARIN" },
    { value: "firestarter", label: "FireStarter" },
    { value: "spores-network", label: "Spores Network" },
    { value: "occamrazer-2", label: "OccamRazer" },
    { value: "tokensoft", label: "Tokensoft" },
    { value: "gempad", label: "Gempad" },
    { value: "gate-io", label: "Gate.io" },
    { value: "pinksale-finance", label: "pinksale Finance" },
    { value: "p2pb2b", label: "p2pb2b" },
    { value: "ixirpad", label: "ixirpad" },
    { value: "daostarter", label: "DaoStarter" },
    { value: "binance", label: "Binance" },
    { value: "kucoin", label: "Kucoin" },
    { value: "coinlist", label: "Coinlist" },
    { value: "crytfex", label: "Crytfex" },
    { value: "southxchange", label: "SouthXchange" },
    { value: "probit-global", label: "ProBit Global" },
    { value: "latoken", label: "Latoken" },
    { value: "peakdefi", label: "Peakdefi" },
    { value: "x-starter", label: "x-starter" },
    { value: "on-website", label: "On Website" },
    { value: "iskra", label: "ISKRA" },
    { value: "coinstore", label: "Coinstore" },
    { value: "bscstation", label: "BSCStation" },
    { value: "zelwin-finance", label: "ZELWIN Finance" },
    { value: "bitmart-launchpad", label: "BitMart Launchpad" },
    { value: "bitforex", label: "Bitforex" },
    { value: "vindax", label: "Vindax" },
    { value: "kanga-exchange", label: "Kanga Exchange" },
    { value: "kingdomstarter", label: "KingdomStarter" },
    { value: "xlaunchpad", label: "XLaunchpad" },
    { value: "infinitypad", label: "InfinityPad" },
    { value: "uplift", label: "Uplift" },
    { value: "bitget", label: "Bitget" },
    { value: "bybit", label: "Bybit" },
    { value: "dextrade", label: "DexTrade" },
    { value: "singularitydao", label: "SingularityDao" },
    { value: "zyberswap", label: "ZyberSwap" },
    { value: "razrfi-launchpad", label: "RazrFi Launchpad" },
    { value: "bsclaunch", label: "BSClaunch" },
    { value: "pancakeswap-2", label: "pancakeswap" },
    { value: "finlaunch", label: "finlaunch" },
    { value: "dao-maker-2", label: "Dao Maker" },
    { value: "bullperks", label: "Bullperks" },
    { value: "torkpad", label: "TorkPad" },
    { value: "republic", label: "Republic" },
    { value: "chaingpt", label: "Chaingpt" },
    { value: "koistarter", label: "KOIStarter" },
    { value: "indoex-io", label: "Indoex.io" },
    { value: "matic-launchpad", label: "Matic Launchpad" },
    { value: "bscs-launchpad", label: "BSCS Launchpad" },
    { value: "bitlink-launchpad", label: "Bitlink LaunchPad" },
    { value: "decubate", label: "Decubate" },
    { value: "coinlist-launchpad", label: "Coinlist LaunchPad" },
    { value: "bounce", label: "Bounce" },
    { value: "wepad-launchpad", label: "Wepad Launchpad" },
    { value: "synapse-network", label: "Synapse Network" },
    { value: "tonup", label: "TonUP" },
    { value: "impulse-finance", label: "Impulse Finance" },
    { value: "bakeryswap", label: "BakerySwap" },
    { value: "turtsat", label: "TurtSat" },
    { value: "flybtc", label: "FLYBTC" },
    { value: "ape-terminal", label: "Ape Terminal" },
    { value: "aitech-pad", label: "AITECH Pad" },
    { value: "moonstarter", label: "MoonStarter" },
    { value: "fjord-foundry", label: "Fjord Foundry" },
    { value: "starlaunch", label: "StarLaunch" },
    { value: "dojoswap", label: "DojoSwap" },
    { value: "solanium", label: "Solanium" },
    { value: "moonedge", label: "MoonEdge" },
    { value: "avalaunch", label: "Avalaunch" },
    { value: "gamespad", label: "Gamespad" },
    { value: "dexcheck", label: "Dexcheck" },
    { value: "velocore", label: "Velocore" },
    { value: "floorswap", label: "Floorswap" },
    { value: "paragen", label: "Paragen" },
    { value: "okx", label: "OKX" },
    { value: "port3-network", label: "Port3 Network" },
    { value: "turtsat-2", label: "TurtSat" },
    { value: "cetus", label: "Cetus" },
    { value: "spartadex", label: "SpartaDex" },
    { value: "finceptor", label: "Finceptor" },
    { value: "tenset-io", label: "TenseT.io" },
    { value: "superlauncher", label: "SuperLauncher" },
    { value: "bigone", label: "BigONE" },
    { value: "ronin", label: "Ronin" },
    { value: "brcstarter", label: "BRCStarter" },
    { value: "arbipad", label: "Arbipad" },
    { value: "seapad", label: "SeaPad" },
    { value: "magic-eden", label: "Magic Eden" },
    { value: "vent-finance", label: "Vent Finance" },
    { value: "avalaunch-2", label: "Avalaunch" },
    { value: "neolaunch", label: "neolaunch" },
    { value: "trustfi", label: "Trustfi" },
    { value: "de-fi-2-0", label: "De.Fi 2.0" },
    { value: "openpad", label: "OpenPad" },
    { value: "smithii", label: "Smithii" },
    { value: "dyor", label: "DYOR" },
    { value: "bitexen-global", label: "Bitexen Global" },
    { value: "siriuspad", label: "Siriuspad" },
    { value: "particle-network", label: "Particle Network" },
    { value: "bhero", label: "BHero" },
    { value: "tokenfi", label: "TokenFi" },
    { value: "eclipsefi", label: "Eclipsefi" },
    { value: "cryptohub", label: "CryptoHub" },
    { value: "unicorn-hunter", label: "Unicorn Hunter" },
    { value: "dappad", label: "Dappad" },
    { value: "zenix-launcher", label: "Zenix Launcher" },
    { value: "huostarter", label: "Huostarter" },
    { value: "pattieswap", label: "PattieSwap" },
    { value: "smithii-2", label: "Smithii" },
    { value: "octavia", label: "Octavia" },
    { value: "bit2me-global", label: "Bit2Me Global" },
    { value: "operation-phoenix", label: "Operation Phoenix" },
    { value: "ordify", label: "Ordify" },
    { value: "kredict", label: "KREDICT" },
    { value: "truepnl-2", label: "TruePNL" },
    { value: "jupiter", label: "Jupiter" },
    { value: "magic-square", label: "Magic Square" },
    { value: "eeseeio", label: "eeseeio" },
    { value: "dxsale", label: "DxSale" },
    { value: "solsale", label: "Solsale" },
    { value: "degenpad", label: "DegenPad" },
    { value: "elixir-games", label: "Elixir Games" },
    { value: "fantomstarter", label: "fantomstarter" },
    { value: "blastup", label: "Blastup" },
    { value: "axo", label: "axo" },
    { value: "tonsale", label: "TONSALE" },
    { value: "chainboost2", label: "chainboost2" },
    { value: "app-alphamind-co", label: "app alphamind.co" },
    { value: "bitstorage", label: "bitstorage" },
    { value: "borgpad", label: "BorgPad" },
    { value: "tokentool", label: "tokentool" },
    { value: "truffle", label: "truffle" }
  ];
   // Reset form handler
  const handleReset = () => {
    setFormData({
      // Tab 1 data
    cryptoMarkets: '', 
    ico_ido_type: 0,
    coin_token: '',
    title: '',
    project_name: '',
    slug: '',
    blockchain: '',
    h1_title: '',
    h2_title: '',
    image: null,
    ico_project_id: '',
    sub_category_id: '',
    reddit: '',
    medium: '',
    linkedin: '',
    country: '',
    whitePaper: null,
    social_media_image: null,
    start_time: '',
    end_time: '',
    daysRemainingToStart: '',
    daysRemainingToEnd: '',
    total_supply_percent: '',
    soft_cap: '',
    hard_cap: '',
    personal_cap: '',
    accept_type: '',
    ico_price: '',
    fund_asking_for: '',
    where_to_buy: '',
    likes_counts: '',
    is_review: '',
    featured: '',
    is_active: '',
    is_guest: '',
    launchpad: '',
    website: '',
    description: '',
    seo_title: '', 
    meta_keywords: '',
    meta_description: '',
    
    // Tab 2 data - Various sale types
   
      private_sale_start_date: '',
      private_sale_end_date: '',
      private_sale_rate: '',
      private_sale_goal: '',
      private_sale_token_sold: '',
      private_sale_where_buy: '',
 
    
      pre_sale_start_date: '',
      pre_sale_end_date: '',
      pre_sale_rate: '',
      pre_sale_goal: '',
      pre_sale_token_sold: '',
      pre_sale_where_buy: '',
  
      public_sale_start_date: '',
      public_sale_end_date: '',
      public_sale_rate: '',
      public_sale_goal: '',
      public_sale_token_sold: '',
      public_sale_where_buy: '',
  
      ico_sale_start_date: '',
      ico_sale_end_date: '',
      ico_sale_rate: '',
      ico_sale_goal: '',
      ico_sale_token_sold: '',
      ico_sale_where_buy: '',
 
      ido_sale_start_date: '',
      ido_sale_end_date: '',
      ido_sale_rate: '',
      ido_sale_goal: '',
      ido_sale_token_sold: '',
      ido_sale_where_buy: '',
  
      ieo_sale_start_date: '',
      ieo_sale_end_date: '',
      ieo_sale_rate: '',
      ieo_sale_goal: '',
      ieo_sale_token_sold: '',
      ieo_sale_where_buy: '',
 
    
    // Tab 3 data
    article: '',
    discussion_forum: '',
    faq: '',
    new_article: '',
    product: '',
    review_snippets: '',
    breadcrumbs: '',
    events: '',
    image_metadata: '',
    paywalled_content: '',
    organization: '',
    sitelinks: '',
    
    // Tab 4 data
    one_usdt: '',
    detail_total_supply: '',
    detail_qty_of_coin: '',
    detail_ico_price: '',
    detail_where_to_buy: '',
    detail_start_date: '',
    detail_end_date: '',
    detail_fund_asking_for: '',
    detail_accept_type: '',
    detail_ico_ido_type: '',
    detail_accept_type: '',
    selectaccept_type: '',
    detail_is_review: '',
    detail_token_for_sale: '',
    detail_percentage_of_supply: '',
    privateSaleSelect: '',
    detail_one_usdt: '',
    detail_soft_cap: '',
    detail_hard_cap: '',
    detail_personal_cap: ''
  });
}

  return (
    <>
      <Seo title={"Crypto Coins"} />
      <PageHeader
        title="Crypto Coins"
        item="Crypto Coins"
        active_item="Create"
      />
      {/* <ToastContainer /> */}

      <Row className="row-sm">
        <div className="col-xl-12">
          <div className="custom-card mg-b-20 card">
            <div className="card-body">
              <div className="row">
                <div className="container py-4 bg-white rounded ">
                  <div className="row"></div>
                  <ul className="nav nav-tabs mb-4 p-2">
                    <li className="nav-item flex-grow-1">
                      <button
                        className={`nav-link ${
                          activeTab === 1
                            ? "btn w-100 active bg-primary text-white"
                            : "btn w-100 active bg-dark text-white"
                        }`}
                        onClick={() => setActiveTab(1)}
                      >
                        Tab-1
                      </button>
                    </li>
                    <li className="nav-item flex-grow-1">
                      <button
                        className={`nav-link ${
                          activeTab === 2
                            ? "btn w-100 active bg-primary text-white"
                            : "btn w-100 active bg-dark text-white"
                        }`}
                        onClick={() => setActiveTab(2)}
                      >
                        Tab-2
                      </button>
                    </li>
                    <li className="nav-item flex-grow-1">
                      <button
                        className={`nav-link ${
                          activeTab === 3
                            ? "btn w-100 active bg-primary text-white"
                            : "btn w-100 active bg-dark text-white"
                        }`}
                        onClick={() => setActiveTab(3)}
                      >
                        Tab-3
                      </button>
                    </li>
                    <li className="nav-item flex-grow-1">
                      <button
                        className={`nav-link ${
                          activeTab === 4
                            ? "btn w-100 active bg-primary text-white"
                            : "btn w-100 active bg-dark text-white"
                        }`}
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
                        <div className="row mb-3">
                          <div className="form-group col-sm-12 col-xl-6">
                            <label className="form-label">
                              Coin Selects:
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              name="coin_token"
                              value={formData.coin_token}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option selected>Select Coin/Token</option>
                              <option value="coin">Coin</option>
                              <option value="token">Token</option>
                            </select>
                          </div>
                          <div className="form-group col-sm-12 col-xl-6">
                            <label className="form-label">
                              Ico/Ido<span className="text-danger">*</span>
                            </label>
                            <select
                              name="ico_ido_type"
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
                          <label className="form-label">
                            Title: <span className="text-danger">*</span>
                          </label>
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
                          <label className="form-label">
                            Project Name: <span className="text-danger">*</span>
                          </label>
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
                          <label className="form-label">
                            URL Slug: <span className="text-danger">*</span>
                          </label>
                          <div className="form-text mb-1">
                            No numbers and special characters are allowed, only
                            lowercase letters are allowed.
                          </div>
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
                          <label className="form-label">
                            Blockchain And Contract Address:{" "}
                            <span
                              className="text-danger"
                              style={{ fontSize: "smaller" }}
                            >
                              * No numbers and special characters are allowed,
                              only lowercase letters are allowed.
                            </span>{" "}
                          </label>
                          <div className="input-group">
                            <select
                              name="blockchainType"
                              className="form-select w-25"
                            >
                              <option selected>Select Blockchain</option>
                              <option value="Animoca Brands Portfolio">Animoca Brands Portfolio</option>
                              <option value="Arbitrum">Arbitrum</option>
                              <option value="Avalanche">Avalanche</option>
                              <option value="base"> base</option>
                              <option value="Binance-Smart-Chain">Binance-Smart-Chain</option>
                              <option value="Calaxy">Calaxy</option>
                              <option value="Cardano-Ecosystem">Cardano-Ecosystem</option>
                              <option value="CIRX">CIRX</option>
                              <option value="Coinbase-Ventures-Portofolio">Coinbase-Ventures-Portofolio</option>
                              <option value="Collectibles-Nfts"> Collectibles-Nfts</option>

                            </select>
                           
                            <input
                              type="text"
                              name="blockchain"
                              value={formData.blockchain}
                              onChange={handleChange}
                              className="form-control"
                            />
                            <button type="button" className="btn btn-primary">
                              Add
                            </button>
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
         {/* Image Field
                           <div className="form-group col-sm-12 col-xl-6">
                     <div className="form-label font-weight-normal">
                       Coin / Token Image<span className="text-danger">*</span>
                     </div>
                     <div className="custom-file ">
                  

                       <label htmlFor="image" className="form-label">
                         Image Upload
                       </label>
                       <input
                         type="file"
                         className="form-control"
                         id="image"
                         name="image"
                         onChange={handleFileChange}
                         accept="image/*"
                       />
                     </div>

                     <div id="img-preview">
                   
                       {formData.imagePreview &&
                         <div className="mt-2">
                           <img
                             src={formData.imagePreview}
                             alt="Preview"
                             style={{
                               maxWidth: "200px",
                               maxHeight: "200px",
                               objectFit: "contain"
                             }}
                           />
                         </div>}
                     </div>
                   </div> */}
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">
                              Coin / Token Image:
                            </label>
                            <div className="custom-file ">
                       {/* Image Upload */}

                      
                       <input
                         type="file"
                         className="form-control"
                         id="image"
                         name="image"
                         onChange={handleFileChange}
                         accept="image/*"
                       />
                     </div>

                     <div id="img-preview">
                       {/* Image Preview */}
                       {formData.imagePreview &&
                         <div className="mt-2">
                           <img
                             src={formData.imagePreview}
                             alt="Preview"
                             style={{
                               maxWidth: "200px",
                               maxHeight: "200px",
                               objectFit: "contain"
                             }}
                           />
                         </div>}
                     </div>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              Image Alt Title:
                            </label>
                            <input
                              type="text"
                              name="imageAltTitle"
                              className="form-control"
                            />
                          
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">
                              ICO Project Type:{" "}
                              <span className="text-danger">*</span>
                            </label>

                           
                            <select
                              name="ico_project_id"
                              value={formData.ico_project_id}
                              onChange={handleChange}
                              className="form-select"
                              required
                            >
                              <option selected>Select ICO Project Type</option>
                              <option value="1" >IDO</option>
                              <option value="3" >ICO</option>
                              <option value="4" >Token</option>
                              <option value="5" >IEO</option>
                              <option value="6" >Seed Sale</option>
                              <option value="7" >Community Event</option>
                              <option value="8" >Public Sale</option>
                              <option value="12" >IFO</option>
                              <option value="13" >Private Sale</option>
                              <option value="14" >Crowdloan</option>
                              <option value="15" >BEP-20</option>
                              <option value="16" >NFT</option>
                              <option value="17" >Protocol</option>
                              <option value="18" >Airdrop</option>
                              <option value="19" >Luna</option>
                              <option value="20" >CIRX</option>
                              <option value="21" >Base</option>
                              <option value="22" >PRESALE</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              Select Category:{" "}
                              <span className="text-danger">*</span>
                            </label>
                         
                            <select
                              name="selectCategory"
                              className="form-select"
                              required
                            >
                                <option selected>Select Category</option>
                    <option value="26" >
                MEME Token</option>
                    <option value="1" >
                NFT</option>
                    <option value="4" >
                Web3</option>
                    <option value="7" >
                Blockchain</option>
                    <option value="30" >
                Trading</option>
                    <option value="36" >
                DeFi</option>
                    <option value="45" >
                Metaverse</option>
                    <option value="49" >
                Marketplace</option>
                    <option value="53" >
                Marketing</option>
                    <option value="54" >
                Real World Asset</option>
                    <option value="55" >
                Social</option>
                    <option value="63" >
                Launchpad</option>
                    <option value="64" >
                Development</option>
                    <option value="67" >
                Gaming</option>
                    <option value="87" >
                artificial intelligence</option>
                            </select>
                          </div>
                        </div>

                       
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">
                              Select Sub Category:{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              name="sub_category_id"
                              value={formData.sub_category_id}
                              onChange={handleChange}
                              className="form-select"
                              required
                            >
                              <option selected>Select Sub Category</option>
                              <option value="E-Commerce">E-Commerce</option>
                              <option value="Travelling">Travelling</option>
                              <option value="Content">Content</option>
                              <option value="Social_Media">Social Media</option>
                              <option value="Video">Video</option>
                              <option value="Music">Music</option>
                              <option value="Fan_Base">Fan Base</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              Website: <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Telegram Group:
                            </label>
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
                            <label className="form-label">
                              Telegram Channel:
                            </label>
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
                            <label className="form-label">
                              Country: <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              White Paper (Word/PDF file):
                            </label>
                            <input
                              type="file"
                              name="whitePaper"
                              onChange={handleFileChange}
                              className="form-control"
                              accept=".pdf,.doc,.docx"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              Social Media Image:
                            </label>
                            <input
                              type="file"
                              name="social_media_image"
                              onChange={handleFileChange}
                              className="form-control"
                              accept="image/*"
                            />
                           
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">
                              Start Date: <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              End Date: <span className="text-danger">*</span>
                            </label>
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

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">
                              Total Coins / Tokens:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Accept type:{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              name="accept_type"
                              value={formData.accept_type}
                              onChange={handleChange}
                              className="form-select"
                              required
                            >
                              <option selected>Select Accept Type</option>
                              <option value="USDT">USDT</option>
                              <option value="BNB">BNB</option>
                              <option value="ETH">ETH</option>
                              <option value="SOL">SOL</option>
                              <option value="SUI">SUI</option>
                              <option value="TRC">TRC</option>
                              <option value="BTC">BTC</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              ICO Price (Convertible Currency to be shown):{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Fund Asking for (Convertible Currency to be
                              shown): <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Where to buy:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                              <option value="Select Featured">
                                Select Featured
                              </option>
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
                            <select name="fundingStage" className="form-select">
                              <option selected>Select Funding Stage</option>
                              <option value="Privatesale">Privatesale</option>
                              <option value="Presale">Presale</option>
                              <option value="Publicsale">Publicsale</option>
                              <option value="ICO">ICO</option>
                              <option value="IEO">IEO</option>
                            </select>
                          </div>
                        </div>

                      
                        <div className="row mb-3">
                          <div className="form-group col-sm-12 col-xl-6">
                            <label className="form-label">Launchpad</label>
                            <select
                              name="coin_token"
                              value={formData.launchpad}
                              onChange={handleChange}
                              className="form-select"
                            >
                              {launchpadOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
                            </select>
                          </div>
                          <div className="form-group col-sm-12 col-xl-6">
                            <label className="form-label">
                              Ico/Ido<span className="text-danger">*</span>
                            </label>
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
                        <div className="row ">
                          {/* article Field */}
                          <div className="form-group col-sm-12 col-lg-6 col-xl-6">
                            <label htmlFor="article">
                              decentralized finance:
                            </label>
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
                           
                             <select
                              name="breadcrumbs"
                              id="breadcrumbs"
                              value={formData.breadcrumbs}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option value="follow">Follow</option>
                              <option value="not_follow">Not Follow</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          {/* discussion forum Field */}
                          <div className="form-group col-sm-12 col-lg-6 col-xl-6">
                            <label htmlFor="discussion_forum">
                              New presale tokens:
                            </label>
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
                          <label
                            htmlFor="meta_keywords"
                            className="field-required"
                          >
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
                          <button type="button" className="btn btn-primary" onClick={next}>
                            Next
                          </button>
                          <button type="button" className="btn">
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tab 2, 3, and 4 would go here, following the same pattern */}
                    {activeTab === 2 && (
                      <div className="mb-4">
                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <h5 className="fw-bold" s>
                              Private Sale
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                              type="date"
                              name="private_sale_start_date"
                              value={formData.private_sale_start_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                              type="date"
                              name="private_sale_end_date"
                              value={formData.private_sale_end_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Token Sold:</label>
                            <input
                              type="text"
                              name="private_sale_token_sold"
                              value={formData.private_sale_token_sold}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Rate:</label>
                            <input
                              type="text"
                              name="private_sale_rate"
                              value={formData.private_sale_rate}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Fundraising Goal:
                            </label>
                            <input
                              type="text"
                              name="private_sale_goal"
                              value={formData.private_sale_goal}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Where to buy</label>
                            <input
                              type="text"
                              name="private_sale_where_buy"
                              value={formData.private_sale_where_buy}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <h5 className="fw-bold">
                              Pre Sale
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                              type="date"
                              name="pre_sale_start_date"
                              value={formData.pre_sale_start_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                              type="date"
                              name="pre_sale_end_date"
                              value={formData.pre_sale_end_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Token Sold:</label>
                            <input
                              type="text"
                              name="pre_sale_token_sold"
                              value={formData.pre_sale_token_sold}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Rate:</label>
                            <input
                              type="text"
                              name="pre_sale_rate"
                              value={formData.pre_sale_rate}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Fundraising Goal:
                            </label>
                            <input
                              type="text"
                              name="pre_sale_goal"
                              value={formData.pre_sale_goal}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Where to buy</label>
                            <input
                              type="text"
                              name="pre_sale_where_buy"
                              value={formData.pre_sale_where_buy}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <h5 className="fw-bold" s>
                              Public Sale
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                              type="date"
                              name="public_sale_start_date"
                              value={formData.public_sale_start_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                              type="date"
                              name="public_sale_end_date"
                              value={formData.public_sale_end_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Token Sold:</label>
                            <input
                              type="text"
                              name="public_sale_token_sold"
                              value={formData.public_sale_token_sold}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Rate:</label>
                            <input
                              type="text"
                              name="public_sale_rate"
                              value={formData.public_sale_rate}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Fundraising Goal:
                            </label>
                            <input
                              type="text"
                              name="public_sale_goal"
                              value={formData.public_sale_goal}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Where to buy</label>
                            <input
                              type="text"
                              name="public_sale_where_buy"
                              value={formData.public_sale_where_buy}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <h5 className="fw-bold" s>
                              ICO Sale
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                              type="date"
                              name="ico_sale_start_date"
                              value={formData.ico_sale_start_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                              type="date"
                              name="ico_sale_end_date"
                              value={formData.ico_sale_end_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Token Sold:</label>
                            <input
                              type="text"
                              name="ico_sale_token_sold"
                              value={formData.ico_sale_token_sold}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Rate:</label>
                            <input
                              type="text"
                              name="ico_sale_rate"
                              value={formData.ico_sale_rate}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Fundraising Goal:
                            </label>
                            <input
                              type="text"
                              name="ico_sale_goal"
                              value={formData.ico_sale_goal}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Where to buy</label>
                            <input
                              type="text"
                              name="ico_sale_where_buy"
                              value={formData.ico_sale_where_buy}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <h5 className="fw-bold" s>
                              IDO Sale
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                              type="date"
                              name="ido_sale_start_date"
                              value={formData.ido_sale_start_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                              type="date"
                              name="ido_sale_end_date"
                              value={formData.ido_sale_end_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Token Sold:</label>
                            <input
                              type="text"
                              name="ido_sale_token_sold"
                              value={formData.ido_sale_token_sold}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Rate:</label>
                            <input
                              type="text"
                              name="ido_sale_rate"
                              value={formData.ido_sale_rate}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Fundraising Goal:
                            </label>
                            <input
                              type="text"
                              name="ido_sale_goal"
                              value={formData.ido_sale_goal}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Where to buy</label>
                            <input
                              type="text"
                              name="ido_sale_where_buy"
                              value={formData.ido_sale_where_buy}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <h5 className="fw-bold" s>
                              IEO Sale
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                              type="date"
                              name="ieo_sale_start_date"
                              value={formData.ieo_sale_start_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                              type="date"
                              name="ieo_sale_end_date"
                              value={formData.ieo_sale_end_date}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Token Sold:</label>
                            <input
                              type="text"
                              name="ieo_sale_token_sold"
                              value={formData.ieo_sale_token_sold}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Rate:</label>
                            <input
                              type="text"
                              name="ieo_sale_rate"
                              value={formData.ieo_sale_rate}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Fundraising Goal:
                            </label>
                            <input
                              type="text"
                              name="ieo_sale_goal"
                              value={formData.ieo_sale_goal}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Where to buy</label>
                            <input
                              type="text"
                              name="ieo_sale_where_buy"
                              value={formData.ieo_sale_where_buy}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <button type="button" className="btn btn-primary" onClick={next}>
                            Next
                          </button>
                          <button type="button" className="btn " onClick={back}>
                            Back
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tab 3 is here  */}
                    {activeTab === 3 && (
                      <div className="mb-4">
                        <div className="row mb-3">
                          <div className="col mb-6">
                            <label className="form-label">
                              Article: <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Breadcrumbs:<span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Discussion forum:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Events:<span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Faq: <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Image metadata:
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              New article:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Paywalled content:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Product: <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Organization:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Review snippets:{" "}
                              <span className="text-danger">*</span>
                            </label>
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
                            <label className="form-label">
                              Site links: <span className="text-danger">*</span>
                            </label>
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
                          <button type="button" className="btn btn-primary" onClick={next}>
                            Next
                          </button>
                          <button type="reset" className="btn " onClick={back}>
                            Back
                          </button>
                        </div>
                      </div>
                    )}
                    {/* Tab 4 is here  */}
                    {activeTab === 4 && (
                      <div className="mb-4">
                        <div className="mb-3">
                          <label className="form-label">One Usdt:</label>
                          <input
                            name="one_usdt"
                            type="text"
                            value={formData.one_usdt}
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        <div className="row mb-3">
                          <div lassName="col-md-12">
                            <label className="form-label">
                              Add More Crypto Coins ICO:
                            </label>
                          </div>

                          {fieldSets.map((id, index) => (
                            <div key={id} className="mb-5 p-3 border rounded">
                              <h4>ICO Entry #{index + 1}</h4>

                              <div className="row mb-3">
                                <div className="col-md-12">
                                  <label className="form-label">
                                    Add More Crypto Coins ICO:
                                  </label>
                                </div>
                                <div className="col-md-2">
                                  <input
                                    type="number"
                                    name="detail_total_supply"
                                    placeholder="Total Supply"
                                    value={
                                      fieldSets[index]?.detail_total_supply ||
                                      ""
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-md-3">
                                  <input
                                    type="number"
                                    name="detail_qty_of_coin"
                                    value={
                                      fieldSets[index]?.detail_qty_of_coin || ""
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    placeholder="Quantity of coin"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-md-3">
                                  <input
                                    type="text"
                                    name="detail_ico_price"
                                    value={fieldSets[index]?.detail_ico_price || ""}
                                    onChange={(e) => handleChange(e, index)}
                                    placeholder="ICO Price"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <input
                                    type="text"
                                    name="detail_where_to_buy"
                                    value={
                                      fieldSets[index]?.detail_where_to_buy || ""
                                    }
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
                                    name="detail_start_date"
                                    value={fieldSets[index]?.detail_start_date || ""}
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-md-2">
                                  <input
                                    type="date"
                                    name="detail_end_date"
                                    value={fieldSets[index]?.detail_end_date || ""}
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <input
                                    type="text"
                                    name="detail_fund_asking_for"
                                    value={
                                      fieldSets[index]?.detail_fund_asking_for || ""
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    placeholder="Where to Buy"
                                    className="form-control"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <select
                                    name="detail_accept_type"
                                    value={
                                      fieldSets[index]?.detail_accept_type ||
                                      "Select Featured"
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-select"
                                  >
                                    <option value="Select Featured">
                                      Select ICO Project type
                                    </option>
                                   
                              <option value="1" >IDO</option>
                              <option value="3" >ICO</option>
                              <option value="4" >Token</option>
                              <option value="5" >IEO</option>
                              <option value="6" >Seed Sale</option>
                              <option value="7" >Community Event</option>
                              <option value="8" >Public Sale</option>
                              <option value="12" >IFO</option>
                              <option value="13" >Private Sale</option>
                              <option value="14" >Crowdloan</option>
                              <option value="15" >BEP-20</option>
                              <option value="16" >NFT</option>
                              <option value="17" >Protocol</option>
                              <option value="18" >Airdrop</option>
                              <option value="19" >Luna</option>
                              <option value="20" >CIRX</option>
                              <option value="21" >Base</option>
                              <option value="22" >PRESALE</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <div className="col-md-2">
                                  <select
                                    name="detail_ico_ido_type"
                                    value={
                                      fieldSets[index]?.detail_ico_ido_type ||
                                      "Select Featured"
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-select"
                                  >
                                    <option value="Select Featured">
                                      Select Ico / Ido
                                    </option>
                              <option value={0}>ICO</option>
                              <option value={1}>IDO</option>
                              <option value={2}>IEO</option>
                              <option value={3}>Presale</option>
                                  </select>
                                </div>
                                <div className="col-md-2">
                                  <select
                                    name="detail_accept_type"
                                    value={
                                      fieldSets[index]?.detail_accept_type ||
                                      "Select Featured"
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-select"
                                  >
                                    <option value="Select Featured">
                                      Select Project Type
                                    </option>        
                                    <option value="DAOMakerLaunchpad">DAO Maker Launchpad </option>
                                    <option value="BSCPad">BSCPad</option>
                                    <option value="TrustSwap">TrustSwap</option>
                                    <option value="BullStarter">BullStarter</option>
                                    <option value="OccamRazer">OccamRazer</option>
                                    <option value="Polkastarter">Polkastarter</option>
                                   
                                  </select>
                                </div>
                                <div className="col-md-2">
                                  <select
                                    name="selectaccept_type"
                                    value={
                                      fieldSets[index]?.selectaccept_type ||
                                      "Select Featured"
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-select"
                                  >
                                    <option value="Select Featured">
                                      Select Accept Type
                                    </option>
                                    <option value="USDT">USDT</option>  
                                    <option value="Ethereum">Ethereum</option>
                                    <option value="BNB">BNB</option>
                                  </select>
                                </div>
                                <div className="col-md-2">
                                  <select
                                    name="detail_is_review"
                                    value={
                                      fieldSets[index]?.detail_is_review ||
                                      "Select Featured"
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-select"
                                  >
                                    <option value="Select Featured">
                                      Select Is Review
                                    </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="col-md-4">
                                  <input
                                    type="text"
                                    name="detail_token_for_sale"
                                    value={fieldSets[index]?.detail_token_for_sale || ""}
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
                                    name="detail_percentage_of_supply"
                                    value={
                                      fieldSets[index]?.detail_percentage_of_supply ||
                                      ""
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-control"
                                    placeholder="Percentage For Supply"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <select
                                    name="privateSaleSelect"
                                    value={
                                      fieldSets[index]?.privateSaleSelect ||
                                      "Select Featured"
                                    }
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-select"
                                  >
                                  <option selected>Select Funding Stage</option>
                              <option value="Privatesale">Privatesale</option>
                              <option value="Presale">Presale</option>
                              <option value="Publicsale">Publicsale</option>
                              <option value="ICO">ICO</option>
                              <option value="IEO">IEO</option>
                                  </select>
                                </div>
                                <div className="col-md-4">
                                  <input
                                    type="text"
                                    name="detail_one_usdt"
                                    value={
                                      fieldSets[index]?.detail_one_usdt || ""
                                    }
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
                                    name="detail_soft_cap"
                                    value={fieldSets[index]?.detail_soft_cap || ""}
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-control"
                                    placeholder="Soft Cap 2"
                                  />
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    name="detail_hard_cap"
                                    value={fieldSets[index]?.detail_hard_cap || ""}
                                    onChange={(e) => handleChange(e, index)}
                                    className="form-control"
                                    placeholder="Hard Cap 2"
                                  />
                                </div>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    name="detail_personal_cap"
                                    value={
                                      fieldSets[index]?.detail_personal_cap || ""
                                    }
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
                              <button
                                className="btn btn-primary"
                                type="button"
                                onClick={addNewFieldSet}
                              >
                                Add New ICO
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                          <button type="button" className="btn btn-secodry" onClick={back}>
                            Back
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
      </Row>
    </>
  );
}