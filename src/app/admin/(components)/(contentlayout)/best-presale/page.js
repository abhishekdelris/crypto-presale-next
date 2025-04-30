"use client";
import { Fragment, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, Col, Row, Modal, Button, Pagination, Table } from "react-bootstrap";
import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../shared/layout-components/seo/seo";
import Link from "next/link";
import coinLogo from '@/images/altcoin.webp';
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Image from "next/image";

const BestPresale = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showActiveModal, setShowActiveModal] = useState(false);
    const [activePost, setActivePost] = useState(null);
    const [postToDelete, setPostToDelete] = useState(null);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10); // Number of posts per page
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);

    // Filter states
    const [filterOptions, setFilterOptions] = useState({
        search: "",
        coinSelect: "",
        isReview: "",
        isActive: "",
        ico_ido_type: "",
        category: "",
        subCategory: "",
        startDate: "",
        endDate: "",
        uploadStartDate: "",
        uploadEndDate: "",
        type: "",
        isGuest: "",
        isFeatured: "",
        icoProjectType: "",
        projectType: "",
        fundingStage: "",
        commonFilter: "",
        orderBy: ""
    });

    // Handle filter changes
    const handleFilterChange = (field, value) => {
        setFilterOptions(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Apply filters
    const applyFilters = () => {
        setCurrentPage(1); // Reset to first page when applying filters
        fetchPosts(1, filterOptions);
    };

    // Reset filters
    const resetFilters = () => {
        setFilterOptions({
            search: "",
            coinSelect: "",
            isReview: "",
            isActive: "",
            ico_ido_type: "",
            category: "",
            subCategory: "",
            startDate: "",
            endDate: "",
            uploadStartDate: "",
            uploadEndDate: "",
            type: "",
            isGuest: "",
            isFeatured: "",
            icoProjectType: "",
            projectType: "",
            fundingStage: "",
            commonFilter: "",
            orderBy: ""
        });
        setCurrentPage(1);
        fetchPosts(1, {});
    };

    // Export to CSV
    const exportToCSV = () => {
        // Implement CSV export functionality
        // This is just a placeholder - you'll need to implement the actual export
        toast.info("Exporting data to CSV...");
        
        // Example implementation:
        const csvContent = "data:text/csv;charset=utf-8," + 
            "ID,Name,Type,Slug,Code,Total,Created At\n" +
            posts.map(post => 
                `${post.id},${post.name},${post.ico_ido_type},${post.slug},${post.alias},${post.total_coin},${post.created_at}`
            ).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "crypto_coins.csv");
        document.body.appendChild(link);
        link.click();
    };

    const fetchPosts = useCallback(async (page = 1, filters = {}) => {
        try {
            setLoading(true);
            
            // Construct query params from filters
            const params = new URLSearchParams();
            params.append('page', page);
            params.append('limit', postsPerPage);
            
            // Add all active filters to query params
            if (typeof filters === 'string') {
                // Handle legacy search parameter
                params.append('search', encodeURIComponent(filters));
            } else if (typeof filters === 'object') {
                // Handle new filter object
                Object.entries(filters).forEach(([key, value]) => {
                    if (value !== "" && value !== null && value !== undefined) {
                        params.append(key, encodeURIComponent(value));
                    }
                });
            }
            
            const response = await axios.get(`/api/admin/best-presale?${params.toString()}`);
            
            setPosts(response.data.data);
            setTotalPosts(response.data.pagination.total);
            setTotalPages(response.data.pagination.totalPages);
            setHasNextPage(response.data.pagination.hasNextPage);
            setHasPrevPage(response.data.pagination.hasPrevPage);
            setCurrentPage(response.data.pagination.currentPage);
            
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
            toast.error("Failed to fetch posts");
        }
    }, [postsPerPage]);

    // Fetch posts when component mounts
    useEffect(() => {
        fetchPosts(currentPage, filterOptions);
    }, [fetchPosts, currentPage]);

    const handleView = (post) => {
        window.open(`/crypto-ico-details/${post.slug}`, '_blank');
    };

    const handleEdit = (post) => {
        window.open(`/admin/crypto-coins-icos/edit/${post.id}`, '_blank');
    };

    const handleDeleteConfirm = async () => {
        if (!postToDelete) return;

        try {
            await axios.delete(`/api/admin/crypto_coins/${postToDelete.id}`);
            
            // Refresh data after deletion
            fetchPosts(currentPage, filterOptions);
            
            // Close the modal
            setShowDeleteModal(false);
            
            // Show success toast
            toast.success("Post deleted successfully");
        } catch (err) {
            toast.error("Failed to delete post");
        }
    };

    const handleActiveConfirm = async () => {
        if (!activePost) return;

        try {
            await axios.put(`/api/admin/crypto_coins/active/${activePost.id}`);
            
            // Refresh data
            await fetchPosts(currentPage, filterOptions);
            
            // Close the modal
            setShowActiveModal(false);
            
            // Show success toast
            toast.success("Post Active Update successfully");
        } catch (err) {
            toast.error("Failed to Active Update post");
        }
    };
    
    const handleAddPost = () => {
        router.push("/admin/crypto-coins-icos/create");
    };

    const openActiveModal = (post) => {
        setActivePost(post);
        setShowActiveModal(true);
    };

    const openDeleteModal = (post) => {
        setPostToDelete(post);
        setShowDeleteModal(true);
    };

    const handleType = (type) => {
        switch (type) {
            case 0:
                return "ICO / Token";
            case 1:
                return "IDO / Token";
            case 2:
                return "IEO / Token";
            case 3:
                return "Presale / Token";
            default:
                return "ICO / Token";
        }
    };
     
    function formatISODate(isoDateString) {
        // Create a Date object from the ISO timestamp
        const date = new Date(isoDateString);
      
        // Array of month names
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
      
        // Get individual date components
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
      
        // Handle hours and minutes
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
      
        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // handle midnight (0 hours)
      
        // Combine into final format
        return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
    }

    // Change page
    const paginate = (pageNumber) => {
        if (pageNumber !== currentPage) {
            setCurrentPage(pageNumber);
        }
    };

    // Previous and Next page handlers
    const prevPage = () => {
        if (hasPrevPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (hasNextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading && posts.length === 0) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading posts: {error.message}</div>;
    }

    return (
        <Fragment>
            <Seo title={"Best Presale"} />
            <PageHeader title='Best Presale' item='Best Presale' active_item='All Best Presale to Buy' />
            <ToastContainer />

            <Row className="row-sm">
                <Col md={12} lg={12}>
                    <Card className="custom-card">
                        <Card.Header className="border-bottom-0 pb-0">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <label className="main-content-label my-auto mb-2">All Crypto Coins</label>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary me-2" onClick={handleAddPost}>ADD Post</button>
                                </div>
                            </div>
                            
                            {/* New Filter UI */}
                            <div className="filter-container mt-3 w-100">
                                <Row className="mb-3 g-3">
                                    <Col md={3}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Keyword Search..."
                                            value={filterOptions.search}
                                            onChange={(e) => handleFilterChange('search', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.coinSelect}
                                            onChange={(e) => handleFilterChange('coinSelect', e.target.value)}
                                        >
                                            <option value="">Coin Select...</option>
                                            <option value="1">Bitcoin</option>
                                            <option value="2">Ethereum</option>
                                            <option value="3">Binance Coin</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.isReview}
                                            onChange={(e) => handleFilterChange('isReview', e.target.value)}
                                        >
                                            <option value="">Select Is Review</option>
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.isActive}
                                            onChange={(e) => handleFilterChange('isActive', e.target.value)}
                                        >
                                            <option value="">Is Active</option>
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    </Col>
                                </Row>
                                
                                <Row className="mb-3 g-3">
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.ico_ido_type}
                                            onChange={(e) => handleFilterChange('ico_ido_type', e.target.value)}
                                        >
                                            <option value="">Select ICO / IDO</option>
                                            <option value={0}>ICO / Token</option>
                                            <option value={1}>IDO / Token</option>
                                             <option value={2}>IEO / Token</option>
                                            <option value={3}>Presale / Token</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.category}
                                            onChange={(e) => handleFilterChange('category', e.target.value)}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="1">Category 1</option>
                                            <option value="2">Category 2</option>
                                            {/* Add more as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Start Date"
                                            value={filterOptions.startDate}
                                            onChange={(e) => handleFilterChange('startDate', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="End Date"
                                            value={filterOptions.endDate}
                                            onChange={(e) => handleFilterChange('endDate', e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                
                                <Row className="mb-3 g-3">
                                    <Col md={3}>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Upload Start Date"
                                            value={filterOptions.uploadStartDate}
                                            onChange={(e) => handleFilterChange('uploadStartDate', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Upload End Date"
                                            value={filterOptions.uploadEndDate}
                                            onChange={(e) => handleFilterChange('uploadEndDate', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.subCategory}
                                            onChange={(e) => handleFilterChange('subCategory', e.target.value)}
                                        >
                                            <option value="">Select Sub Category</option>
                                            <option value="1">Sub Category 1</option>
                                            <option value="2">Sub Category 2</option>
                                            {/* Add more as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.type}
                                            onChange={(e) => handleFilterChange('type', e.target.value)}
                                        >
                                            <option value="">Coin / Token</option>
                                            <option value={1}>Coin</option>
                                            <option value={0}>Token</option>
                                        </select>
                                    </Col>
                                </Row>
                                
                                <Row className="mb-3 g-3">
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.isGuest}
                                            onChange={(e) => handleFilterChange('isGuest', e.target.value)}
                                        >
                                            <option value="">Select Is Guest</option>
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.isFeatured}
                                            onChange={(e) => handleFilterChange('isFeatured', e.target.value)}
                                        >
                                            <option value="">Select Featured</option>
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.icoProjectType}
                                            onChange={(e) => handleFilterChange('icoProjectType', e.target.value)}
                                        >
                                            <option value="">Select ICO Project Type</option>
                                            <option value="1">Type 1</option>
                                            <option value="2">Type 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.projectType}
                                            onChange={(e) => handleFilterChange('projectType', e.target.value)}
                                        >
                                            <option value="">Select Project Type</option>
                                            <option value="1">Type 1</option>
                                            <option value="2">Type 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </Col>
                                </Row>
                                
                                <Row className="mb-3 g-3">
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.fundingStage}
                                            onChange={(e) => handleFilterChange('fundingStage', e.target.value)}
                                        >
                                            <option value="">Select Funding Stage</option>
                                            <option value="1">Seed</option>
                                            <option value="2">Private Sale</option>
                                            <option value="3">Public Sale</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.commonFilter}
                                            onChange={(e) => handleFilterChange('commonFilter', e.target.value)}
                                        >
                                            <option value="">Select Common Filter</option>
                                            <option value="1">Filter 1</option>
                                            <option value="2">Filter 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3}>
                                        <select 
                                            className="form-select"
                                            value={filterOptions.orderBy}
                                            onChange={(e) => handleFilterChange('orderBy', e.target.value)}
                                        >
                                            <option value="">Select Order By</option>
                                            <option value="name_asc">Name (A-Z)</option>
                                            <option value="name_desc">Name (Z-A)</option>
                                            <option value="date_newest">Date (Newest)</option>
                                            <option value="date_oldest">Date (Oldest)</option>
                                            {/* Add more sorting options as needed */}
                                        </select>
                                    </Col>
                                    <Col md={3} className="d-flex justify-content-end">
                                        <Button variant="primary" className="me-2" onClick={applyFilters}>
                                            <i className="fa fa-search"></i> Search
                                        </Button>
                                        <Button variant="secondary" className="me-2" onClick={resetFilters}>
                                            <i className="fa fa-refresh"></i> Reset
                                        </Button>
                                        <Button variant="info" onClick={exportToCSV}>
                                            <i className="fa fa-download"></i> Export CSV
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Header>
                        
                        <Card.Body className="pt-2">
                            {loading && <div className="text-center">Loading data...</div>}
                            
                            <div className="">
                                <Table bordered responsive className="even-tbl">
                                    <thead>
                                        <tr>
                                            <th>Coin / Token Image</th>
                                            <th>Thumb</th>
                                            <th>Type</th>
                                            <th>Coin / Token Name</th>
                                            <th>URL Slug</th>
                                            <th>Coin / Token Code</th>
                                            <th>Total Coin / Token</th>
                                            <th>Uploaded At</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Guest</th>
                                            <th>Is Review</th>
                                            <th colSpan={3}>Action</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        {posts.length === 0 ? (
                                            <tr>
                                                <td colSpan="13" className="text-center">
                                                    {loading ? "Loading data..." : "No results found"}
                                                </td>
                                            </tr>
                                        ) : (
                                            posts.map((post) => (
                                                <tr key={post.id}>
                                                    <td>
                                                        <Image 
                                                            src={
                                                                post.image
                                                                    ? post.image.startsWith('https://d3iuzwoiyg9qa8.cloudfront.net/')
                                                                        ? post.image
                                                                        : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`
                                                                    : coinLogo
                                                            } 
                                                            alt="image" 
                                                            width={100} 
                                                            height={100} 
                                                            className="img-fluid" 
                                                        />
                                                    </td>
                                                    <td>
                                                        <Image 
                                                            src={
                                                                post.image
                                                                    ? post.image.startsWith('https://d3iuzwoiyg9qa8.cloudfront.net/')
                                                                        ? post.image
                                                                        : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`
                                                                    : coinLogo
                                                            } 
                                                            alt="image" 
                                                            width={100} 
                                                            height={100} 
                                                            className="img-fluid"
                                                        />
                                                    </td>
                                                    <td>{handleType(post.ico_ido_type)}</td>       
                                                    <td className="text-left text-nowrap">{post.name}</td>
                                                    <td className="text-left">
                                                        <Link href={`/crypto-ico-details/${post.slug}`} target="_blank" rel="noopener noreferrer nofollow">{post.slug}</Link>
                                                    </td>
                                                    <td>{post.alias}</td>
                                                    <td>{post.total_coin}</td>
                                                    <td>{formatISODate(post.created_at)}</td>
                                                    <td>{post.start_time}</td>
                                                    <td>
                                                        <span className="text-green">{post.end_time}</span>
                                                    </td>
                                                    <td>
                                                        {post.is_guest === 1 ? "Yes" : "No"}
                                                    </td> 
                                                    <td>
                                                        <strong className="text-green">{post.is_review === 1 ? "Yes" : "No"}</strong>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button className="btn btn-success" onClick={() => handleView(post)}>
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </button>
                                                            <button className="btn btn-primary" onClick={() => handleEdit(post)}>
                                                                <i className="fa fa-pen-square" aria-hidden="true"></i>
                                                            </button>
                                                            {post.is_review === 1 ? (
                                                                <button 
                                                                    type="button" 
                                                                    name="activeDeactive" 
                                                                    className="btn btn-dark" 
                                                                    onClick={() => openActiveModal(post)} 
                                                                    title="Click to Deactivate"
                                                                >
                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                </button>
                                                            ) : (
                                                                <button 
                                                                    type="button" 
                                                                    name="activeDeactive" 
                                                                    className="btn btn-dark" 
                                                                    onClick={() => openActiveModal(post)} 
                                                                    title="Click to activate"
                                                                >
                                                                    <i className="fa fa-times" aria-hidden="true" />
                                                                </button>
                                                            )}
                                                            <button 
                                                                type="submit" 
                                                                className="btn btn-danger btn-xs" 
                                                                onClick={() => openDeleteModal(post)}
                                                            >
                                                                <i className="fa fa-trash" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </Table>
                                
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                        .even-tbl {
                                            width: 100%;
                                        }
                                        .even-tbl tr th,.even-tbl tr td {
                                            border: 1px solid #ccc;
                                            text-transform: capitalize;
                                            vertical-align: middle;
                                            text-align: center;
                                        }
                                        .even-tbl tr th {
                                            color: #fff;
                                            background: #705ec8;
                                        }
                                        .even-tbl tbody {
                                            background: #fff;
                                        }
                                        .even-tbl tbody:nth-child(odd) {
                                            background: #eee;
                                        }
                                        .even-tbl tr td:first-child {
                                            text-align: left;
                                        }
                                        .submit-btn {
                                            border-radius: 50px;
                                            font-weight: 600;
                                            margin: auto;
                                            padding: 2px 14px;
                                            border: 1px solid #705ec8;
                                        }
                                    `
                                }} />
                            </div>

                            {totalPages > 0 && (
                                <div className="d-flex justify-content-end me-3">
                                    <Pagination className="mb-0">
                                        <Pagination.Prev 
                                            onClick={prevPage} 
                                            disabled={!hasPrevPage}
                                        />
                                        
                                        {(() => {
                                            const pageButtons = [];
                                            
                                            // Maximum number of page buttons to show at once
                                            const maxVisibleButtons = 10;
                                            
                                            let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
                                            let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
                                            
                                            // Adjust startPage if we're at the end of the range
                                            if (endPage - startPage + 1 < maxVisibleButtons) {
                                                startPage = Math.max(1, endPage - maxVisibleButtons + 1);
                                            }
                                            
                                            // First page button (always show)
                                            if (startPage > 1) {
                                                pageButtons.push(
                                                    <Pagination.Item 
                                                        key={1}
                                                        active={1 === currentPage}
                                                        onClick={() => paginate(1)}
                                                    >
                                                        1
                                                    </Pagination.Item>
                                                );
                                                
                                                // Add ellipsis if there's a gap
                                                if (startPage > 2) {
                                                    pageButtons.push(<Pagination.Ellipsis key="ellipsis-1" disabled />);
                                                }
                                            }
                                            
                                            // Main page buttons
                                            for (let i = startPage; i <= endPage; i++) {
                                                pageButtons.push(
                                                    <Pagination.Item 
                                                        key={i}
                                                        active={i === currentPage}
                                                        onClick={() => paginate(i)}
                                                    >
                                                        {i}
                                                    </Pagination.Item>
                                                );
                                            }
                                            
                                            // Last page button (always show)
                                            if (endPage < totalPages) {
                                                // Add ellipsis if there's a gap
                                                if (endPage < totalPages - 1) {
                                                    pageButtons.push(<Pagination.Ellipsis key="ellipsis-2" disabled />);
                                                }
                                                
                                                pageButtons.push(
                                                    <Pagination.Item 
                                                        key={totalPages}
                                                        active={totalPages === currentPage}
                                                        onClick={() => paginate(totalPages)}
                                                    >
                                                        {totalPages}
                                                    </Pagination.Item>
                                                );
                                            }
                                            
                                            return pageButtons;
                                        })()}
                                        
                                        <Pagination.Next 
                                            onClick={nextPage} 
                                            disabled={!hasNextPage}
                                        />
                                    </Pagination>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Active/Deactive Confirmation Modal */}
            <Modal show={showActiveModal} onHide={() => setShowActiveModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {activePost?.is_review === 1 ? 'Confirm Deactivate' : 'Confirm Activate'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to {activePost?.is_review === 1 ? 'deactivate' : 'activate'} this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowActiveModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleActiveConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default BestPresale;