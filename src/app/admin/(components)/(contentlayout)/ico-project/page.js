"use client";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, Col, Row, Modal, Button, Pagination, Table } from "react-bootstrap";
import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../shared/layout-components/seo/seo";
import Link from "next/link";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";

// Dynamically import Select component to avoid SSR issues
const Select = dynamic(() => import("react-select"), { ssr: false });

const ICOProjects = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState(null);
    
    // Function to fetch data with server-side pagination and search
    const fetchProjects = async (page = 1, limit = itemsPerPage, search = searchQuery) => {
        setLoading(true); 
        try {
            const response = await axios.get('/api/admin/ico_project', {
                params: {
                    page,
                    limit,
                    search
                }
            });
            
            const result = response.data;
            
            if (result.success === true) {
                setProjects(result.data);
                setTotalPages(result.pagination.totalPages);
                setTotalItems(result.pagination.total);
                setCurrentPage(result.pagination.currentPage);
            } else {
                toast.error("Failed to fetch projects");
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
            toast.error("An error occurred while fetching projects");
        } finally {
            setLoading(false);
        }
    };

    // Initial data fetch
    useEffect(() => {
        fetchProjects();
    }, []);

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1); // Reset to first page when searching
        fetchProjects(1, itemsPerPage, searchQuery);
    };

    // Handle page change
    const handlePageChange = (page) => {
        if (page === 'prev') {
            const newPage = Math.max(currentPage - 1, 1);
            setCurrentPage(newPage);
            fetchProjects(newPage, itemsPerPage, searchQuery);
        } else if (page === 'next') {
            const newPage = Math.min(currentPage + 1, totalPages);
            setCurrentPage(newPage);
            fetchProjects(newPage, itemsPerPage, searchQuery);
        } else {
            setCurrentPage(page);
            fetchProjects(page, itemsPerPage, searchQuery);
        }
    };

    // Handle adding new project
    const handleAddProject = () => {
        router.push('/admin/dashboard/crypto/ico_project/add');
    };

    // Handle project viewing
    const handleViewProject = (id) => {
        router.push(`/admin/dashboard/crypto/ico_project/view/${id}`);
    };

    // Handle project editing
    const handleEditProject = (id) => {
        router.push(`/admin/dashboard/crypto/ico_project/edit/${id}`);
    };

    // Handle project deletion confirmation
    const confirmDelete = (project) => {
        setProjectToDelete(project);
        setShowDeleteModal(true);
    };

    // Handle project deletion
    const handleDeleteProject = async () => {
        if (!projectToDelete) return;
        
        try {
            const response = await axios.delete(`/api/admin/ico_project/${projectToDelete.id}`);
            
            if (response.data.success) {
                toast.success("Project deleted successfully");
                // Refresh data
                fetchProjects(currentPage, itemsPerPage, searchQuery);
            } else {
                toast.error("Failed to delete project");
            }
        } catch (error) {
            console.error("Error deleting project:", error.message);
            toast.error("An error occurred while deleting the project");
        } finally {
            setShowDeleteModal(false);
            setProjectToDelete(null);
        }
    };

    // Handle project status toggle
    const handleToggleStatus = async (id, currentStatus) => {
        try {
            const response = await axios.patch(`/api/admin/ico_project/${id}/status`, {
                status: !currentStatus
            });
            
            if (response.data.success) {
                toast.success(`Project ${currentStatus ? 'deactivated' : 'activated'} successfully`);
                // Refresh data
                fetchProjects(currentPage, itemsPerPage, searchQuery);
            } else {
                toast.error("Failed to update project status");
            }
        } catch (error) {
            console.error("Error updating project status:", error.message);
            toast.error("An error occurred while updating project status");
        }
    };

    // Generate pagination items
    const renderPaginationItems = () => {
        const items = [];
        
        // Display first page
        if (currentPage > 3) {
            items.push(
                <Pagination.Item 
                    key={1} 
                    onClick={() => handlePageChange(1)}
                >
                    1
                </Pagination.Item>
            );
            
            if (currentPage > 4) {
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
            }
        }
        
        // Display pages around current page
        for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
            items.push(
                <Pagination.Item 
                    key={i} 
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }
        
        // Display last page
        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) {
                items.push(<Pagination.Ellipsis key="ellipsis2" />);
            }
            
            items.push(
                <Pagination.Item 
                    key={totalPages} 
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </Pagination.Item>
            );
        }
        
        return items;
    };

    return (
        <Fragment>
            <Seo title="ICO Projects" />
            <PageHeader title='ICO Projects' item='ICO Projects' active_item='All ICO Projects' />
            <ToastContainer />

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the project "{projectToDelete?.title}"?
                    This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteProject}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="row-sm">
                <Col md={12} lg={12}>
                    <Card className="custom-card">
                        <Card.Header className="border-bottom-0 pb-0">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <label className="main-content-label my-auto mb-2">ICO Projects</label>
                                <div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center mt-xl-0">
                                    <Button className="btn btn-primary me-2" onClick={handleAddProject}>
                                        ADD Project
                                    </Button>
                                    <div className="d-flex mt-4 mt-lg-0">
                                        <form onSubmit={handleSearch} className="d-flex">
                                            <div className="filter-group d-inline-flex w-100">
                                                <input 
                                                    type="text" 
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="form-control rounded-end-0" 
                                                    placeholder="Search by title, symbol, or slug" 
                                                />
                                                <Button type="submit" className="btn btn-primary">
                                                    <i className="fa fa-search"></i>
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                      
                        <Card.Body>
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Table className="table-bordered bg-light">
                                        <thead>
                                            <tr>
                                                <th className="bg-primary">Title</th>
                                                <th className="bg-primary">Symbol</th>
                                                <th className="bg-primary">Slug</th>
                                                <th className="text-center bg-primary">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="mb-3 fs-6">
                                            {projects.length > 0 ? (
                                                projects.map((project) => (
                                                    <tr key={project.id}>
                                                        <td>{project.title}</td>
                                                        <td>{project.symbol}</td>
                                                        <td>{project.slug}</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center m-2">
                                                                <div className="btn-group">
                                                                    <Button 
                                                                        className="btn btn-success"
                                                                        onClick={() => handleViewProject(project.id)}
                                                                    >
                                                                        <i className="fa fa-eye" aria-hidden="true" />
                                                                    </Button>
                                                                    <Button 
                                                                        className="btn btn-primary"
                                                                        onClick={() => handleEditProject(project.id)}
                                                                    >
                                                                        <i className="fa fa-pen-square" aria-hidden="true"></i>
                                                                    </Button>
                                                                    <Button 
                                                                        type="button" 
                                                                        className={`btn ${project.is_active ? 'btn-dark' : 'btn-secondary'}`}
                                                                        title={project.is_active ? "Click to Deactivate" : "Click to Activate"}
                                                                        onClick={() => handleToggleStatus(project.id, project.is_active)}
                                                                    >
                                                                        <i className={`fa ${project.is_active ? 'fa-check' : 'fa-times'}`} aria-hidden="true"/>
                                                                    </Button>
                                                                    <Button 
                                                                        type="button" 
                                                                        className="btn btn-danger"
                                                                        onClick={() => confirmDelete(project)}
                                                                    >
                                                                        <i className="fa fa-trash" aria-hidden="true" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        No projects found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                    
                                    {totalPages > 0 && (
                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <div>
                                                Showing {projects.length} of {totalItems} entries
                                            </div>
                                            <Pagination>
                                                <Pagination.Prev 
                                                    onClick={() => handlePageChange('prev')} 
                                                    disabled={currentPage === 1}
                                                />
                                                {renderPaginationItems()}
                                                <Pagination.Next 
                                                    onClick={() => handlePageChange('next')}
                                                    disabled={currentPage === totalPages}
                                                />
                                            </Pagination>
                                        </div>
                                    )}
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ICOProjects;