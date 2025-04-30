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


export default function ContentEditPage() {
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    alias: '',
    h1_title: '',
    h2_title: '',
    img_alt_title: '',
    is_gabbar: 1,
    created_by: '',
    author_name: '',
    is_rss_feed: '', 
    dynamic_rss_feed: [],
    image: null,
    channel_id: '',
    publishedAt: '',
    article: '',
    breadcrumbs: '',
    data_set: '',
    discussion_forum: '',
    faq: '',
    image_metadata: '',
    new_article: '',
    paywalled_content: '',
    profile: '',
    organization: '',
    review_snippets: '',
    sitelinks: '',
    video: '',
    seo_title: '',
    meta_keywords: '',   
    meta_description: ''
    // Add other fields from your crypto_news table
  });
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await axios.get(`/api/admin/content/${id}`);
        console.log("this is a response data..........",response);
        
        setFormData(response.data.data);
        const data = response.data.data;
        setFormData({
          title: data.title || '',
          description: data.description || '',
          alias: data.alias || '',
          h1_title: data.h1_title || '',
          h2_title: data.h2_title || '',
          img_alt_title: data.img_alt_title || '',
          is_gabbar: data.is_gabbar || '',
          created_by: data.created_by || '',
          author_name: data.author_name || '',
          is_rss_feed: data.is_rss_feed || '', 
          dynamic_rss_feed: data.dynamic_rss_feed || '',
          image: data.image || '',
          channel_id: data.channel_id || '',
          publishedAt: data.publishedAt || '',
          article: data.article || '',
          breadcrumbs: data.breadcrumbs || '',
          data_set: data.data_set || '',
          discussion_forum: data.discussion_forum || '',
          faq: data.faq || '',
          image_metadata: data.image_metadata || '',
          new_article: data.new_article || '',
          paywalled_content: data.paywalled_content || '',
          profile: data.profile || '',
          organization: data.organization || '',
          review_snippets: data.review_snippets || '',
          sitelinks: data.sitelinks || '',
          video: data.video || '',
          seo_title: data.seo_title || '',
          meta_keywords: data.meta_keywords || '',   
          meta_description: data.meta_description || ''
        })
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch content');
        setLoading(false);
        router.push('/admin/content');
      } 
    }

    if (id) {
      fetchContent();
    } 
  }, [id, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`/api/admin/content/${id}`, formData);
      toast.success('Content updated successfully');
      router.push(`/admin/content/${formData.alias}/${id}`);
    } catch (error) {
      toast.error('Failed to update content');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

    // Handle SunEditor content change
    const handleEditorChange = (content) => {
      setFormData((prev) => ({
        ...prev,
        description: content
      }));
    };
// Image change handler
const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        image: file, // Store the actual file
        imagePreview: reader.result // Store preview URL
      }));
    };
    reader.readAsDataURL(file);
  }
};

// const [formData, setFormData] = useState({
//   title: '',
//   description: '',
//   alias: '',
//   h1_title: '',
//   h2_title: '',
//   img_alt_title: '',
//   is_gabbar: 1,
//   created_by: '',
//   author_name: '',
//   is_rss_feed: '', 
//   dynamic_rss_feed: [],
//   image: null,
//   imagePreview: null,
//   channel_id: '',
//   publishedAt: '',
//   article: '',
//   breadcrumbs: '',
//   data_set: '',
//   discussion_forum: '',
//   faq: '',
//   image_metadata: '',
//   new_article: '',
//   paywalled_content: '',
//   profile: '',
//   organization: '',
//   review_snippets: '',
//   sitelinks: '',
//   video: '',
//   seo_title: '',
//   meta_keywords: '',   
//   meta_description: ''
// });
// const [loading, setLoading] = useState(true);
// const params = useParams();
// const router = useRouter();
// const { id } = params;

// useEffect(() => {
//   async function fetchContent() {
//     try {
//       const response = await axios.get(`/api/admin/content/${id}`);
      
//       // Update formData with response, handling image separately
//       const contentData = response.data.data;
//       setFormData(prev => ({
//         ...contentData,
//         imagePreview: contentData.image ? 
//           (contentData.image.startsWith('http') ? 
//             contentData.image : 
//             `${window.location.origin}${contentData.image}`) 
//           : null,
//         image: null // Reset actual file
//       }));
//       setLoading(false);
//     } catch (error) {
//       toast.error('Failed to fetch content');
//       setLoading(false);
//       router.push('/admin/content');
//     }
//   }

//   if (id) {
//     fetchContent();
//   }
// }, [id, router]);

// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   try {
//     // Create FormData for multipart/form-data submission
//     const submitFormData = new FormData();

//     // Append all text fields
//     Object.keys(formData).forEach(key => {
//       // Special handling for specific fields
//       if (key === 'dynamic_rss_feed' && formData[key]) {
//         // Convert array to comma-separated string
//         submitFormData.append(key, formData[key].join(','));
//       } else if (key !== 'image' && key !== 'imagePreview') {
//         // Append all text fields except image-related ones
//         submitFormData.append(key, formData[key] || '');
//       }
//     });

//     // Append image file if it exists
//     if (formData.image instanceof File) {
//       submitFormData.append('image', formData.image);
//     }

//     // Send multipart/form-data request
//     const response = await axios.put(`/api/admin/content/${id}`, submitFormData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });

//     toast.success('Content updated successfully');
//     router.push(`/admin/content/${formData.alias}/${id}`);
//   } catch (error) {
//     console.error('Update error:', error);
//     toast.error('Failed to update content');
//   }
// };

// const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   if (type === 'checkbox') {
//     // Handle dynamic_rss_feed checkboxes
//     if (name === 'dynamic_rss_feed') {
//       setFormData(prev => ({
//         ...prev,
//         dynamic_rss_feed: checked
//           ? [...(prev.dynamic_rss_feed || []), value]
//           : (prev.dynamic_rss_feed || []).filter(item => item !== value)
//       }));
//     }
//   } else {
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }
// };

// // Image change handler
// const handleFileChange = (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     // Create preview URL
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData(prev => ({
//         ...prev,
//         image: file, // Store the actual file
//         imagePreview: reader.result // Store preview URL
//       }));
//     };
//     reader.readAsDataURL(file);
//   }
// };

// // Handle SunEditor content change
// const handleEditorChange = (content) => {
//   setFormData((prev) => ({
//     ...prev,
//     description: content
//   }));
// };

// if (loading) {
//   return <div>Loading...</div>;
// }

  return (
  <>
   <Seo title={"Content"} />
      <PageHeader title="Content" item="Content" active_item="Edit Content" />
      {/* <ToastContainer /> */}

   
      <form onSubmit={handleSubmit}>
        <Row className="row-sm">
          <div className="col-xl-12">
            <div className="custom-card mg-b-20 card">
              <div className="card-body">
                <div className="row">
                  {/* Title Field */}
                  <div className="col-xl-12 mb-3">
                    <div>
                      <label className="main-content-label mb-2">
                      Edit Content
                      </label>
                    </div>
                  </div>
                  <div className="form-group col-sm-12 col-xl-6">
                    <label htmlFor="title" className="field-required">
                      Title:
                    </label>
                    <input
                      className="form-control"
                      name="title"
                      type="text"
                      id="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Alias Field */}
                  <div className="form-group col-sm-12 col-xl-6">
                    <label htmlFor="alias" className="field-required">
                      Alias:
                    </label>{" "}
                    <small className="text-danger">
                      No numbers and special characters are allowed, only
                      lowercase letters are allowed.
                    </small>
                    <input
                      placeholder="eg. abc-xyz-bcd"
                      className="form-control"
                      name="alias"
                      type="text"
                      id="alias"
                      value={formData.alias}
                      onChange={handleChange}
                    />
                  </div>
                  {/* H1 title Field */}
                  <div className="form-group col-sm-6">
                    <label htmlFor="h1_title" className="field-required">
                      H1 Title:
                    </label>
                    <input
                      className="form-control"
                      name="h1_title"
                      type="text"
                      id="h1_title"
                      value={formData.h1_title}
                      onChange={handleChange}
                    />
                  </div>
                  {/* H2 title Field */}
                  <div className="form-group col-sm-6">
                    <label htmlFor="h2_title" className="field-required">
                      H2 Title:
                    </label>
                    <input
                      className="form-control"
                      name="h2_title"
                      type="text"
                      id="h2_title"
                      value={formData.h2_title}
                      onChange={handleChange}
                    />
                  </div>
                  {/*img_alt_title Field */}
                  <div className="form-group col-sm-6">
                    <label htmlFor="img_alt_title" className="field-required">
                      Image Alt Title:
                    </label>
                    <input
                      className="form-control"
                      name="img_alt_title"
                      type="text"
                      id="img_alt_title"
                      value={formData.img_alt_title}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Status Field */}
                  <div className="form-group col-sm-12 col-xl-6">
                    <label htmlFor="is_gabbar" className="field-required">
                      News Type:
                    </label>
                    <select
                      className="form-control"
                      id="is_gabbar"
                      name="is_gabbar"
                      value={formData.is_gabbar}
                      onChange={handleChange}
                    >
                      <option value>Select News Type</option>
                      <option value={1}>Gabbar News</option>
                      <option value={2}>Press Release</option>
                      <option value={3}>Sponsored</option>
                      <option value={4}>Guest News</option>
                      <option value={5}>Blog</option>
                      <option value={6}>Price Prediction</option>
                    </select>
                  </div>

                  <div className="form-group col-sm-12 col-xl-6">
                    <label htmlFor="author_name">Created By:</label>
                    <select
                      className="form-control"
                      name="created_by"
                      value={formData.created_by}
                      onChange={handleChange}
                    >
                      <option value="">Select Author</option>
                      <option value={1}>Rohit Khandelwal</option>
                      <option value={2}>Sudeep Saxena</option>
                      <option value={3}>Akansha Vyas</option>
                    </select>
                  </div>
                  {/* author Field */}
                  <div className="form-group col-sm-12 col-xl-3">
                    <label htmlFor="author_name">Author:</label>
                    <select
                      className="form-control"
                      name="author_name"
                      value={formData.author_name}
                      onChange={handleChange}
                    >
                      <option value="">Select Author</option>
                      <option value="Rohit Khandelwal">Rohit Khandelwal</option>
                      <option value="Sudeep Saxena">Sudeep Saxena</option>
                      <option value="Akansha Vyas">Akansha Vyas</option>
                    </select>
                  </div>
                  {/* Title Field */}
                  <div className="form-group col-sm-12 col-xl-3">
                    <label htmlFor="author">Author Name:</label>{" "}
                    <span className="text-danger">
                      (When Author is not available in dropdown)
                    </span>
                    <input
                      className="form-control"
                      name="author"
                      type="text"
                      id="author"
                      value={formData.author}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Status Field */}

                  <div className="form-group col-sm-12 col-xl-6">
                    <label htmlFor="is_rss_feed">Is RSS Feed:</label>
                    <select
                      className="form-control"
                      id="is_rss_feed"
                      name="is_rss_feed"
                      value={formData.is_rss_feed}
                      onChange={handleChange}
                    >
                      <option value="">Select RSS Feed Status</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                      <option value="2">Review</option>
                    </select>
                  </div>
                  {/* Rss Field */}
                  <div className="form-group col-sm-12 col-xl-6">
                    <label>Dynamic RSS Feed:</label>
                    <div>
                      {[
                        { value: "1", label: "Daily Hunt" },
                        { value: "2", label: "CMC" },
                        { value: "3", label: "Suncrypto" },
                        { value: "4", label: "Binance" }
                      ].map((feed) => (
                        <div key={feed.value} className="form-check">
                          <input
                            type="checkbox"
                            name="dynamic_rss_feed"
                            value={feed.value}
                            checked={formData.dynamic_rss_feed.includes(
                              feed.value
                            )}
                            onChange={handleChange}
                            className="form-check-input"
                            id={`rss-${feed.value}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`rss-${feed.value}`}
                          >
                            {feed.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Image Field */}
                  <div className="form-group col-sm-12 col-xl-6">
                    <div className="form-label font-weight-normal">
                      Coin / Token Image<span className="text-danger">*</span>
                    </div>
                    <div className="custom-file ">
                      {/* Image Upload */}

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
                       {/* Image Preview */}
        {formData.imagePreview && (
          <div className="mt-2">
            <img 
              src={formData.imagePreview} 
              alt="Preview" 
              style={{ 
                maxWidth: '200px', 
                maxHeight: '200px', 
                objectFit: 'contain' 
              }} 
            />
          </div>
        )}
     
                    </div>
                  </div>
                  <div className="form-group col-sm-12 col-xl-3">
                    <label htmlFor="channel_id" className="field-required">
                      Select Channel:
                    </label>
                    <select
                      className="form-control"
                      name="channel_id"
                      value={formData.channel_id}
                      onChange={handleChange}
                    >
                      <option value>Select Channel</option>
                      <option value={1}> Coin Gabbar</option>
                      <option value={2}>Chainwire</option>
                      <option value={3}>Coinzilla</option>
                    </select>
                  </div>
                  {/* Publishedat Field */}
                  <div className="form-group col-sm-12 col-xl-3">
                    <label htmlFor="publishedAt" className="field-required">
                      Published at:
                    </label>
                    <input
                      className="form-control"
                      type="datetime-local"
                      name="publishedAt"
                      defaultValue="2025-03-24T14:39"
                      value={formData.publishedAt}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Description Field */}
                  <div className="ql-wrapper ql-wrapper-demo mb-3">
                    <label className="fw-medium form-label">
                      Post Description
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
                  {/* article Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="article">Article:</label>
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
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="breadcrumbs">Breadcrumbs:</label>
                    <input
                      className="form-control"
                      name="breadcrumbs"
                      type="text"
                      id="breadcrumbs"
                      value={formData.breadcrumbs}
                      onChange={handleChange}
                    />
                  </div>
                  {/* course info Field */}
                  {/* data set Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="data_set">Data set:</label>
                    <input
                      className="form-control"
                      name="data_set"
                      type="text"
                      id="data_set"
                      value={formData.data_set}
                      onChange={handleChange}
                    />
                  </div>
                  {/* discussion forum Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="discussion_forum">Discussion forum:</label>
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
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="faq">Faq:</label>
                    <input
                      className="form-control"
                      name="faq"
                      type="text"
                      id="faq"
                      value={formData.faq}
                      onChange={handleChange}
                    />
                  </div>
                  {/* image metadata Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="image_metadata">Image metadata:</label>
                    <input
                      className="form-control"
                      name="image_metadata"
                      type="text"
                      id="image_metadata"
                      value={formData.image_metadata}
                      onChange={handleChange}
                    />
                  </div>
                  {/* image metadata Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="new_article">New article:</label>
                    <input
                      className="form-control"
                      name="new_article"
                      type="text"
                      id="new_article"
                      value={formData.new_article}
                      onChange={handleChange}
                    />
                  </div>
                  {/* paywalled content Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="paywalled_content">
                      Paywalled content:
                    </label>
                    <input
                      className="form-control"
                      name="paywalled_content"
                      type="text"
                      id="paywalled_content"
                      value={formData.paywalled_content}
                      onChange={handleChange}
                    />
                  </div>
                  {/* profile Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="profile">Profile:</label>
                    <input
                      className="form-control"
                      name="profile"
                      type="text"
                      id="profile"
                      value={formData.profile}
                      onChange={handleChange}
                    />
                  </div>
                  {/* organization Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="organization">Organization:</label>
                    <input
                      className="form-control"
                      name="organization"
                      type="text"
                      id="organization"
                      value={formData.alias}
                      onChange={handleChange}
                    />
                  </div>
                  {/* review snippets Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="review_snippets">Review snippets:</label>
                    <input
                      className="form-control"
                      name="review_snippets"
                      type="text"
                      id="review_snippets"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  sitelinks Field */}
                  <div className="form-group col-sm-12 col-lg-6 col-xl-3">
                    <label htmlFor="sitelinks">Site links:</label>
                    <input
                      className="form-control"
                      name="sitelinks"
                      type="text"
                      id="sitelinks"
                      value={formData.sitelinks}
                      onChange={handleChange}
                    />
                  </div>
                  {/*  video Field */}
                  <div className="form-group col-sm-12">
                    <label htmlFor="video">Video:</label>
                    <input
                      className="form-control"
                      name="video"
                      type="text"
                      id="video"
                      value={formData.video}
                      onChange={handleChange}
                    />
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
                  <link
                    rel="stylesheet"
                    type="text/css"
                    href="http://192.168.1.7/kol-backend/public/assets/css/select2.min.css"
                  />
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n    span.select2-selection.select2-selection--single {\n        width: 100%;\n    }\n"
                    }}
                  />
                  {/*  */}
                </div>
                {/* Submit and Reset Buttons */}
                <div className="col-12 mt-3">
                
          <button 
            type="submit" 
            className="btn btn-primary px-4 py-2 rounded"
          >
            Update Content
          </button>
          <button 
            type="button"
            
            onClick={() => router.push('/admin/content')}
            className="btn btn-danger px-4 py-2 m-2 rounded"
          >
            Cancel
          </button>
        
                </div>
              </div>
            </div>
          </div>
        </Row>
      </form>
   
  </>
  );
}





// 'use client'
// import React, { useState,useEffect, Fragment } from "react";
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
// } from "../../../../../../../../shared/data/dashboard/dashboarddata";
// import PageHeader from "../../../../../../../../shared/layout-components/page-header/page-header";
// import Seo from "../../../../../../../../shared/layout-components/seo/seo";
// const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
// import dynamic from "next/dynamic";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "suneditor/dist/css/suneditor.min.css";

// import { useParams, useRouter } from 'next/navigation'; 

// const ContentEditPage = () => {



//   const [isLoading, setIsLoading] = useState(false);
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

//   const params = useParams();
//   const router = useRouter();
//   const { id } = params;


//   useEffect(() => {
//     async function fetchContent() {
//       try {
//         const response = await axios.get(`/api/admin/content/${id}`);
//         setFormData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         toast.error('Failed to fetch content');
//         setLoading(false);
//         router.push('/admin/content');
//       }
//     }

//     if (id) {
//       fetchContent();
//     }
//   }, [id, router]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       await axios.put(`/api/admin/content/${id}`, formData);
//       toast.success('Content updated successfully');
//       router.push(`/admin/content/${formData.alias}/${id}`);
//     } catch (error) {
//       toast.error('Failed to update content');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };


//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   // Handle SunEditor content change
//   const handleEditorChange = (content) => {
//     setFormData((prev) => ({
//       ...prev,
//       description: content
//     }));
//   };

 
// // new data for hanlde img upload

//   // Image change handler
//   const handleFileChange = (e) => {
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
//   const handleInputChange = (e) => {
//     const { name, value, type, files, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // setFormData((prevData) => {
//     //   switch (type) {
//     //     case "file":
//     //       return { ...prevData, [name]: files[0] };
//     //     case "checkbox":
//     //       // Handle multi-select checkboxes (same as before)
//     //       if (name === "dynamic_rss_feed") {
//     //         const currentFeeds = prevData.dynamic_rss_feed || [];
//     //         return {
//     //           ...prevData,
//     //           dynamic_rss_feed: checked
//     //             ? [...currentFeeds, value]
//     //             : currentFeeds.filter((feed) => feed !== value)
//     //         };
//     //       }
//     //       return { ...prevData, [name]: checked };
//     //     default:
//     //       return { 
//     //         ...prevData, 
//     //         [name]: (name === 'is_gabbar' || name === 'channel_id' || name === 'is_rss_feed' || name === 'created_by') 
//     //           ? Number(value) 
//     //           : value 
//     //       };
//     //   }
//     // });
//   };

//   // // Form submission handler
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Validate required fields
//   //   const requiredFields = ["title", "alias"];
//   //   const missingFields = requiredFields.filter((field) => !formData[field]);

//   //   if (missingFields.length > 0) {
//   //     toast.error(
//   //       `Please fill in all required fields: ${missingFields.join(", ")}`
//   //     );
//   //     return;
//   //   }

//   //   // Submit the form data
//   //   await submitGuestPost(formData);
//   // };


//   // Reset form handler
//   // const handleReset = () => {
//   //   setFormData({
//   //     title: "",
//   //     alias: "",
//   //     h1_title: "",
//   //     h2_title: "",
//   //     img_alt_title: "",
//   //     is_gabbar: "",
//   //     created_by: "",
//   //     author_name: "",
//   //     is_rss_feed: "",
//   //     dynamic_rss_feed: [],
//   //     image: null,
//   //     channel_id: "",
//   //     publishedAt: "",
//   //     description: "",
//   //     article: "",
//   //     breadcrumbs: "",
//   //     data_set: "",
//   //     discussion_forum: "",
//   //     faq: "",
//   //     image_metadata: "",
//   //     new_article: "",
//   //     paywalled_content: "",
//   //     profile: "",
//   //     organization: "",
//   //     review_snippets: "",
//   //     sitelinks: "",
//   //     video: "",
//   //     seo_title: "",
//   //     meta_keywords: "",
//   //     meta_description: ""
//   //   });
//   // };

//   return (
//     <Fragment>
//       <Seo title={"Content"} />
//       <PageHeader title="Content" item="Content" active_item="Edit Content" />
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
//                       Edit Content
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
//                       ].map((feed) => (
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
//                       ))}
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
//                        {/* Image Preview */}
//         {formData.imagePreview && (
//           <div className="mt-2">
//             <img 
//               src={formData.imagePreview} 
//               alt="Preview" 
//               style={{ 
//                 maxWidth: '200px', 
//                 maxHeight: '200px', 
//                 objectFit: 'contain' 
//               }} 
//             />
//           </div>
//         )}
     
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
//                       value={formData.organization}
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

// export default ContentEditPage;
