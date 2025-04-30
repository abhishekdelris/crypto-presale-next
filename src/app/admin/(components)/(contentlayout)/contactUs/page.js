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
 
const ContactUs = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showActiveModal, setShowActiveModal] = useState(false);
    const [activePost, setActivePost] = useState(null);
    const [postToDelete, setPostToDelete] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10); // Number of posts per page
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);

    // Filter states
    const [filterOptions, setFilterOptions] = useState({
        search: ""
    });

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
            
            const response = await axios.get(`/api/admin/contact-us?${params.toString()}`);
            
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
                                                       <label className="main-content-label my-auto mb-2">All Content</label>
                                                       <div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center mt-xl-0">
                                                           {/* <button className="btn btn-primary me-2" onClick={handleAddPost}>ADD Post</button> */}
                                                           <div className="d-flex mt-4 mt-lg-0">
                                                               <div className="filter-group d-inline-flex w-100">
                                                                   <input 
                                                                       type="text" 
                                                                       value={searchQuery}
                                                                       onChange={(e) => setSearchQuery(e.target.value)}
                                                                       className="form-control rounded-end-0" 
                                                                       placeholder="search" 
                                                                   />
                                                                   <button type="button" className="btn btn-primary">
                                                                       <i className="fa fa-search"></i>
                                                                   </button>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </Card.Header>
                        
                        <Card.Body className="pt-2">
                            {loading && <div className="text-center">Loading data...</div>}
                            
                            <div className="">
                                <Table bordered responsive className="even-tbl">
                                    <thead>
                                        <tr>
                                        <th>Name</th>
        <th>Email</th>
        <th>Inquiry Type</th>
        <th>Message</th>
        <th>Replied</th>
        <th>Created At</th>
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
                                                    <td className="text-left text-nowrap">{post.name}</td>
                                                    <td>{post.email}</td>
                                                    <td className="text-left">
                                                        {post.inquiry_type }
                                                    </td>
                                                    <td>{post.message}</td>
                                                    <td>{post.replied ? "Yes" : "No"}</td>
                                                    <td>{formatISODate(post.created_at)}</td>
                                                  
                                                    <td>
                                                        <div className="btn-group">
                                                            <button className="btn btn-success" onClick={() => handleView(post)}>
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </button>
                                                            <button className="btn btn-primary" onClick={() => handleEdit(post)}>
                                                                <i className="fa fa-pen-square" aria-hidden="true"></i>
                                                            </button>
                                                            
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
 
        
        </Fragment>
    );
};

export default ContactUs;