'use client';


import React, { useState,useEffect, Fragment } from "react";
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
import axios from 'axios';
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
    type: '',
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
    white_paper_url: '',
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
    quantity_of_coin: '',
    is_guest: '',
    launchpad: '',
    website: '',
    description: '',
    seo_title: '', 
    meta_keywords: '',
    meta_description: '',
    imagePreview : '',
    twitter: '',
    raddit: '',
    telegram: '',
    telegram_group:'',
    youtube_link: '',
    instagram: '',
    linkdin: '',
    discord: '',
    medium:'',
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
      is_trending:'',
      is_bestpresale: '',
      is_promoted: '',
    
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
 
  const [launchpads, setLaunchpads] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
    // State to track form data for each field set
  const [fieldSets, setFieldSets] = useState([{ id: 0, ...formData }]);
  const [nextId, setNextId] = useState(1);


    useEffect(() => {
      const fetchCategories = async () => {
        try {
          setLoading(true);
          // Replace with your actual API endpoint
          const response = await axios.get('/api/admin/categories');
          
          // Process the data
          const data = response.data.data; 
          
          // Filter out parent categories (parent_id === 0)
          const parentCategories = data.filter(item => item.parent_id === 0);
          
          setCategories(parentCategories);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch category data');
          setLoading(false);
          console.error('Error fetching category data:', err);
        }
      };
  
      fetchCategories();
    }, []);
  
    useEffect(() => {
      // Update subcategories when a category is selected
      if (selectedCategory === 0) {
        setSubcategories([]);
        return;
      }
  
      const fetchSubcategories = async () => {
        try {
          // Replace with your actual API endpoint
          const response = await axios.get('/api/admin/categories');
          
          // Process the data to get subcategories
          const data = response.data.data;
          
          // Filter subcategories based on the selected parent category
          const filteredSubcategories = data.filter(
            item => item.parent_id === selectedCategory
          );
          
          setSubcategories(filteredSubcategories);
        } catch (err) {
          console.error('Error fetching subcategories:', err);
          setSubcategories([]);
        }
      };
  
      // Simulate API call - in a real app, you might want to have a specific endpoint for subcategories
      fetchSubcategories();
    }, [selectedCategory]);
  
    const handleCategoryChange = (e) => {
      setSelectedCategory(parseInt(e.target.value));
    };
  
  
    useEffect(() => {
      const fetchLaunchpads = async () => {
        try {
          setLoading(true);
          // Replace with your actual API endpoint
          const response = await axios.get('/api/admin/launchpad');
          setLaunchpads(response.data.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch launchpad data');
          setLoading(false);
          console.error('Error fetching launchpad data:', err);
        }
      };
      fetchLaunchpads();
    }, []);
  
const launchpadOptions = [
  { value: 0, label: "Select Launchpad" },
  ...launchpads.map(launchpad => ({
    value: launchpad.id,
    label: launchpad.title
  }))
];
  
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

  // const launchpadOptions = [
  //   { value: 0, label: "Select Project Type" },
  //   { value: 1, label: "DAO Maker Launchpad" },
  //   { value: 2, label: "BSCPad" },
  //   { value: 3, label: "TrustSwap" },
  //   { value: 4, label: "BullStarter" },
  //   { value: 5, label: "Polkastarter" },
  //   { value: 6, label: "Seedify" },
  //   { value: 7, label: "RedKite" },
  //   { value: 8, label: "Bounce" },
  //   { value: 9, label: "Paid Ignition" },
  //   { value: 10, label: "ChainBoost" },
  //   { value: 11, label: "GameFi" },
  //   { value: 12, label: "Trustpad" },
  //   { value: 13, label: "Starter" },
  //   { value: 14, label: "DuckSTARTER" },
  //   { value: 15, label: "InfinityPad" },
  //   { value: 16, label: "Binance" },
  //   { value: 17, label: "Solstarter" },
  //   { value: 18, label: "Solanium" },
  //   { value: 19, label: "WeStarter" },
  //   { value: 20, label: "BSClaunch" },
  //   { value: 21, label: "MoonStarter" },
  //   { value: 22, label: "ZENDIT" },
  //   { value: 23, label: "KrystalGO" },
  //   { value: 24, label: "Gamestarter" },
  //   { value: 25, label: "Enjinstarter" },
  //   { value: 26, label: "Oxbull" },
  //   { value: 27, label: "SharkPad" },
  //   { value: 28, label: "SafeLaunch" },
  //   { value: 29, label: "PinkSale" },
  //   { value: 30, label: "LaunchZone" },
  //   { value: 31, label: "Poolz" },
  //   { value: 32, label: "METAVPAD" },
  //   { value: 33, label: "BinStarter" },
  //   { value: 34, label: "Kommunitas" },
  //   { value: 35, label: "TrustFi" },
  //   { value: 36, label: "UpLift" },
  //   { value: 37, label: "DAOStarter" },
  //   { value: 38, label: "Synapse Network" },
  //   { value: 39, label: "A2DAO" },
  //   { value: 40, label: "GameZone" },
  //   { value: 41, label: "MoonEdge" },
  //   { value: 42, label: "Seeded Network" },
  //   { value: 43, label: "TruePNL" },
  //   { value: 44, label: "DxSale" },
  //   { value: 45, label: "Prostarter" },
  //   { value: 46, label: "SuperLauncher" },
  //   { value: 47, label: "VentUp" },
  //   { value: 48, label: "HAPI Launchpad" },
  //   { value: 49, label: "Paragen" },
  //   { value: 50, label: "Babylons" },
  //   { value: 51, label: "TokenSoft" },
  //   { value: 52, label: "CyberFi Samurai" },
  //   { value: 53, label: "UniCrypt" },
  //   { value: 54, label: "Launchpool" },
  //   { value: 55, label: "Scaleswap" },
  //   { value: 56, label: "Unicrypt Network" },
  //   { value: 57, label: "Solcubator" },
  //   { value: 58, label: "SolRazr" },
  //   { value: 59, label: "TrustLaunch" }, 
  //   { value: 60, label: "CardStarter" },
  //   { value: 61, label: "AdaPad" },
  //   { value: 62, label: "OccamRazer" },
  //   { value: 63, label: "Vent Finance" },
  //   { value: 64, label: "Trustpad Launchpad" },
  //   { value: 65, label: "RoseonPad" },
  //   { value: 66, label: "DAOlaunch" },
  //   { value: 67, label: "GAGARIN" },
  //   { value: 68, label: "NFTb" },
  //   { value: 69, label: "Binance NFT" },
  //   { value: 70, label: "Solanium Launchpad" },
  //   { value: 71, label: "Binstarter Launchpad" },
  //   { value: 72, label: "Occam.fi" },
  //   { value: 73, label: "Paid Network" },
  //   { value: 74, label: "Cardence" },
  //   { value: 75, label: "Synapse Launchpad" },
  //   { value: 76, label: "Krystal IDO" },
  //   { value: 77, label: "Firestarter" },
  //   { value: 78, label: "TronPad" },
  //   { value: 79, label: "TronStarter" },
  //   { value: 80, label: "Terra Virtua" },
  //   { value: 81, label: "NFTLaunch" },
  //   { value: 82, label: "Solstarter Launchpad" },
  //   { value: 83, label: "BabylonDAO" },
  //   { value: 84, label: "DAOLaunchpad" },
  //   { value: 85, label: "Parastarter" },
  //   { value: 86, label: "MISO" },
  //   { value: 87, label: "SpacePad" },
  //   { value: 88, label: "NovaLaunch" },
  //   { value: 89, label: "ZeroSwap" },
  //   { value: 90, label: "truffle" }
  // ];
   // Reset form handler
  const handleReset = () => {
    setFormData({
      // Tab 1 data
    cryptoMarkets: '', 
    ico_ido_type: '',
    social_media_url,
    coin_token: '',
    title: '',
    type : '',
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
    category_id: '',
    telegram:'',
    
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
                              name="type"
                              value={formData.type}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option selected>Select Coin/Token</option>
                              <option value={1}>Coin</option>
                              <option value={0}>Token</option>
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

                      
<div className='row mb-4'>
                        <div className="form-group col-sm-12 col-xl-6">
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

                        <div className="form-group col-sm-12 col-xl-6">
                        <label className="form-label">
                            URL Slug: <span className="text-danger">*</span>
                            <span className="form-text mb-1">  (No numbers and special characters are allowed, only
                            lowercase letters are allowed.)</span>
                          </label>
                         
                          <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>
                        </div>
                        <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Coin / Token Code:<span className="text-danger">*</span></label>
                            <input
                            type="text"
                            name="alias"
                            value={formData.alias}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                                                          
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Is Best Presale:</label>
                            <select
                              name="is_bestpresale"
                              value={formData.is_bestpresale}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option selected>Select your Best presale</option>
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
                            </select>
                          </div>
                        </div>
 
<div className="row mb-3">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                            <label className="form-label">Is Featured:</label>
                            <select
                              name="featured"
                              value={formData.featured}
                              onChange={handleChange}
                              className="form-select form-control"
                            >
                              <option value="Select Featured">
                                Select Featured
                              </option>
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
                            </select>
                          </div>

                          </div>

                          <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">Is Trending:</label>
                            <select
                              name="is_trending"
                              value={formData.is_trending}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option selected>
                                Select Trending
                              </option>
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
                            </select>
                          </div>
                        
                          <div className="col-md-6">
                            <label className="form-label">Is Promoted:</label>
                            <select
                              name="is_promoted"
                              value={formData.is_promoted}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option selected>Select Promoted</option>
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
                            </select>
                          </div>
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
                          <div className='row input-group'>
                          <div className="col-md-6">
                            <select
                              
                              name="blockchain"
                              value={formData.blockchain}
                              onChange={handleChange}
                              className="form-select form-control"
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
                            </div>
                            
                           <div className='col-md-4'>
                            <input
                              type="text"
                              name="contract_address"
                              value={formData.contract_address}
                              onChange={handleChange}
                              className="form-control"
                              placeholder='contract Address'
                            />
                            </div>
                            <div className='col-md-2'><button type="button" className="btn btn-primary">
                              Add
                            </button>
                            </div>
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
                          <div className="col-md-4">
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
                              <option value="2" >ICO</option>
                              <option value="3" >Token</option>
                              <option value="4" >IEO</option>
                              <option value="5" >Seed Sale</option>
                              <option value="6" >Community Event</option>
                              <option value="7" >Public Sale</option>
                              <option value="8" >IFO</option>
                              <option value="9" >Private Sale</option>
                              <option value="10" >Crowdloan</option>
                              <option value="11" >BEP-20</option>
                              <option value="12" >NFT</option>
                              <option value="13" >Protocol</option>
                              <option value="14" >Airdrop</option>
                              <option value="15" >Luna</option>
                              <option value="16" >CIRX</option>
                              <option value="17" >Base</option>
                              <option value="18" >PRESALE</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Select Category:{" "}
                              <span className="text-danger">*</span>
                            </label>
                         
                            <select
                              name="category_id"
                              className="form-select"
                              value={selectedCategory}
                              onChange={handleCategoryChange}
                              required
                            >
                   <option value={0}>Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
                            </select>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              Website: <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="website"
                              value={formData.website}
                              onChange={handleChange}
                              className="form-control"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>

                       
                                <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="form-label">
                              Select Sub Category:{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              name="sub_category_id"
                              value={formData.sub_category_id}
                              onChange={handleChange}
                              className="form-select"
                              disabled={subcategories.length === 0}
                              
                            >
                               <option value={0}>
              {selectedCategory === 0 
                ? "Select a category first" 
                : subcategories.length === 0 
                  ? "No subcategories available" 
                  : "Select a subcategory"}
            </option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.title}
              </option>
            ))}
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                            Social Media Link: <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="social_media_url"
                              value={formData.social_media_url}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter your social media link"
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Twitter:</label>
                            <input
                              type="text"
                              name="twitter"
                              value={formData.twitter}
                              onChange={handleChange}
                              placeholder="https://twitter.com"
                              className="form-control"
                            />
                          </div>
                        </div>

                        {/* Social Media Links Section */}
                        <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="form-label">Raddit:</label>
                            <input
                              type="text"
                              name="raddit"
                              value={formData.raddit}
                              onChange={handleChange}
                              placeholder=""
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Telegram Group:
                            </label>
                            <input
                              type="text"
                              name="telegram_group"
                              placeholder=""
                              value={formData.telegram_group}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Telegram Channel:
                            </label>
                            <input
                              type="text"
                              name="telegram"
                              placeholder=""
                              value={formData.telegram}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="form-label">
                              Medium:
                            </label>
                            <input
                              type="text"
                              name="medium"
                              value={formData.medium}
                              onChange={handleChange}
                              placeholder=""
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Discord:
                            </label>
                            <input
                              type="text"
                              name="discord"
                              value={formData.discord}
                              onChange={handleChange}
                              placeholder=""
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">YouTube link:</label>
                            <input
                              type="text"
                              name="youtube_link"
                              value={formData.youtube_link}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="form-label">Linkdin:</label>
                            <input
                              type="text"
                              name="linkdin"
                              value={formData.linkdin}
                              onChange={handleChange}
                              className="form-control"
                            />  
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Instagram:</label>
                            <input
                              type="text"
                              name="instagram"
                              value={formData.instagram}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Email:</label>
                            <input
                              type="text"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                        
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
                          <div className="col-md-6">
                            <label className="form-label">White Paper Url:</label>
                            <input
                              type="text"
                              name="white_paper_url"
                              value={formData.white_paper_url}
                              onChange={handleChange}
                              className="form-control"
                              
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
                            <label className="form-label">Quantity of Coin / Token offered in ICO:<span className="text-danger">*</span></label>
                            <input
                              type="text"
                              name="quantity_of_coin"
                              value={formData.quantity_of_coin}
                              onChange={handleChange}
                              className="form-control"
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
                              type="number"
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
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
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
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
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
                              <option value={1}>Yes</option>
                              <option value={0}>No</option>
                            </select>
                          </div>
                        </div>

                        <div className="row mb-3">
                        
                        <div className="form-group col-sm-12 col-xl-6">
                            <label className="form-label">Launchpad</label>
                            <select
                              name="launchpad"
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
                            <label htmlFor="finance">
                              decentralized finance:
                            </label>
                            <input
                              className="form-control"
                              name="finance"
                              type="text"
                              id="finance"
                              value={formData.finance}
                              onChange={handleChange}
                            />
                          </div>
                          {/* breadcrumbs Field */}
                          <div className="form-group col-sm-12 col-lg-6 col-xl-6">
                            <label htmlFor="is_follow">Is follow:</label>
                           
                             <select
                              name="is_follow"
                              id="is_follow"
                              value={formData.is_follow}
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
                            <label htmlFor="is_follow">Is follow:</label>
                            <select
                              name="is_follow"
                              id="is_follow"
                              value={formData.is_follow}
                              onChange={handleChange}
                              className="form-select"
                            >
                              <option value="follow">Follow</option>
                              <option value="not_follow">Not Follow</option>
                            </select>
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