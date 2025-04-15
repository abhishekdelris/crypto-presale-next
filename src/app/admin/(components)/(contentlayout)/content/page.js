"use client";
import { Fragment, useState, useEffect,useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, Col, Row, Modal, Button,Pagination,Table } from "react-bootstrap";
import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../shared/layout-components/seo/seo";
import Link from "next/link";
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import altcoinImage from "@/images/altcoin.webp"

const Content = () => { 
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [showActiveModal,setShowActiveModal] = useState(false); 
    const [activePost,setActivePost] = useState(null);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10); // Number of posts per page
 

  
    const fetchPosts = useCallback(async () => {
        try {
            const config = {
                method: 'get',
                url: '/api/admin/content',
            };

            const response = await axios.request(config);
            console.log("this is a content data....",response.data.data);
            
            setPosts(response.data.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false); 
            toast.error("Failed to fetch posts");
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

  
    

    const handleView = (post) => {
        router.push(`/admin/content/${post.slug}/${post.id}`);
    };

    const handleEdit = (post) => {
        router.push(`/admin/content/edit/${post.id}`);
    };

    const handleDeleteConfirm = async () => {
        if (!postToDelete) return;

        try {
            await axios.delete(`/api/admin/content/${postToDelete.id}`);
            
            // Remove the post from the local state
            setPosts(posts.filter(post => post.id !== postToDelete.id));
            
            // Close the modal
            setShowDeleteModal(false);
            
            // Show success toast
            toast.success("Post deleted successfully");
        } catch (err) {
            toast.error("Failed to delete post");
        }
    };
    
    const handleAddPost = () => {
        router.push("/admin/content/create");
    } 

    const handleActiveConfirm = async () => {
        if (!activePost) return;

        try {
            await axios.put(`/api/admin/content/active/${activePost.id}`);
            
            // Remove the post from the local state
            await fetchPosts();
            
            // Close the modal
            setShowActiveModal(false);
            
            // Show success toast
            toast.success("Post Active Update successfully");
        } catch (err) {
            toast.error("Failed to Active Update post");
        }
    };

    const openActiveModal = (post) => {
        setActivePost(post);
        setShowActiveModal(true);
    }

    const openDeleteModal = (post) => {
        setPostToDelete(post);
        setShowDeleteModal(true);
    };

   // Filtering and Pagination Logic
   const filteredPosts = searchQuery 
   ? posts.filter(post => 
       post?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post?.author?.toLowerCase().includes(searchQuery.toLowerCase())
     )
   : posts;
  
    const getPostType = (gabbarnews) => {
        switch (gabbarnews) {
          case 1:
            return "Gabbar News";
          case 2:
            return "Press Release";
          case 3:
            return "Sponsored";
          case 4:
            return "Guest News";
          case 5:
            return "Blog";
          case 6:
            return "Price Prediction";
          default:
            return "Gabbar News";
        }
      };
      const handleCreatedBy = (data) => {
                      switch (data) {
                        case 1:
                           return "Rohit Khandelwal";
                        case 2:
                            return "Sudeep Saxena";
                        case 3:
                           return "Akansha Vyas";
                        default:
                            return "Akansha Vyas";
                      }
      }

       // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Previous and Next page handlers
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading posts: {error.message}</div>;
    }

    return (
        <Fragment>
            <Seo title={"Content"} />
            <PageHeader title='Content' item='Content' active_item='All Content' />
            <ToastContainer />

            <Row className="row-sm">
                <Col md={12} lg={12}>
                    <Card className="custom-card">
                        <Card.Header className="border-bottom-0 pb-0">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <label className="main-content-label my-auto mb-2">All Content</label>
                                <div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center mt-xl-0">
                                    <button className="btn btn-primary me-2" onClick={handleAddPost}>ADD Post</button>
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
            <div className="">
  <Table bordered  responsive className="table even-tbl table-responsive border" id="cryptoNews-table">
    <thead>
      <tr>
        <th>Url to Image</th>
        <th>Thumb</th>
        <th>Author</th>
        <th>CREATED BY</th>
        <th>Title</th>
        {/* <th>Alias</th> */}
        {/* <th>Description</th> */}
        {/* <th>Url (if no link put N/A)</th> */}
        <th>Uploaded At</th>
        <th>Published at</th>
        <th>{/* Language */}Lan</th>
        <th>Gabbar News</th>
        <th>Is News/Blog</th>
        <th>SEO Check</th>
        <th colSpan={3}>Action</th>
      </tr>
    </thead>
    <tbody>
        { currentPosts.map((post) => (
                <tr key={post.id}>
                    <td><Image src={
                                post.image
                               ? post.image.startsWith('https://d3iuzwoiyg9qa8.cloudfront.net/')
                                 ? post.image
                                : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`
                               : altcoinImage
                               } alt="image" width={100} height={100} className="img-fluid"/></td>
                    <td><Image src={
                                post.image
                               ? post.image.startsWith('https://d3iuzwoiyg9qa8.cloudfront.net/')
                                 ? post.image
                                : `https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`
                               : altcoinImage
                               } alt="image" width={100} height={100} className="img-fluid"/></td>
                    <td>{post.author}</td>       
        <td className="text-left text-nowrap">{handleCreatedBy(post.createdby)}</td>
        <td className="text-left">
          <Link href={`/admin/content/${post.slug}/${post.id}`} >{post.title}</Link>
        </td>
       
        <td>{post.publishedAt}</td>
        <td>{post.uploadedAt}</td>
        <td>{post.lan}</td>
        <td>
      <span className="text-green">{getPostType(post.gabbarnews)}</span>
    </td>
        <td>
            {post.is_new_blog===0 ? "News" : "Blog"}
          
        </td>
        <td>
          <strong className="text-green"> {post.seo===1 ? "Yes" : "No"} </strong>
        </td>
      
        <td>
        
            <div className="btn-group">
              <button className="btn btn-success" onClick={() => handleView(post)}>
                <i className="fa fa-eye" aria-hidden="true" />
              </button>
              <button   className="btn btn-primary" onClick={() => handleEdit(post)}>
              <i className="fa fa-pen-square" aria-hidden="true"></i>
              </button>
              <input type="hidden" data-label="Crypto News" data-title="(Intermediate) Which blockchain uses the DPoS mechanism? Ari Quiz" data-id="id,175147" data-table="crypto_news" className="DataValue" />
              { post.is_review === 1 ? <button type="button" name="activeDeactive" className="btn btn-dark" onClick={() => openActiveModal(post)} title="Click to Deactivate"><i className="fa fa-check" aria-hidden="true" /></button> : <button type="button" name="activeDeactive" className="btn btn-dark" onClick={() => openActiveModal(post)} title="Click to activate"><i className="fa fa-times" aria-hidden="true" />   </button> }
              <button type="submit" className="btn btn-danger btn-xs" onClick={() => openDeleteModal(post)} ><i className="fa fa-trash" aria-hidden="true" /></button>
            </div>
        
        </td>
                </tr>
            ))}
     
     <style dangerouslySetInnerHTML={{__html: "\n    .even-tbl {\n        width: 100%;\n    }\n    .even-tbl tr th,.even-tbl tr td {\n        border: 1px solid #ccc;\n        text-transform: capitalize;\n        vertical-align: middle;\n        text-align: center;\n    }\n    .even-tbl tr th {\n        color: #fff;\n        background: #705ec8;\n    }\n    .even-tbl tbody {\n        background: #fff;\n    }\n    .even-tbl tbody:nth-child(odd) {\n        background: #eee;\n    }\n    .even-tbl tr td:first-child {\n        text-align: left;\n    }\n    .submit-btn {\n        border-radius: 50px;\n        font-weight: 600;\n        margin: auto;\n        padding: 2px 14px;\n        border: 1px solid #705ec8;\n    }\n" }} />		
  			<div className="card-footer clearfix">
  
  </div>
  
    </tbody>
  </Table>

</div>

            
             {/* Pagination Component */}
             {/* <div className="d-flex justify-content-end  me-3">
                <Pagination className="mb-0">
                    <Pagination.Prev 
                        onClick={prevPage} 
                        disabled={currentPage === 1}
                    />
                    {[...Array(Math.ceil(filteredPosts.length / postsPerPage))].map((_, index) => (
                        <Pagination.Item 
                            key={index + 1} 
                            active={index + 1 === currentPage}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next 
                        onClick={nextPage} 
                        disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
                    />
                </Pagination>
            </div> */}
            <div className="d-flex justify-content-end me-3">
    <Pagination className="mb-0">
        <Pagination.Prev 
            onClick={prevPage} 
            disabled={currentPage === 1}
        />
        
        {(() => {
            const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
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
            disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
        />
    </Pagination>
</div>
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
                    Are you sure you want to delete the post "{postToDelete?.title}"?
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

            <Modal show={showActiveModal} onHide={() => setShowActiveModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Active</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to Active the post "{activePost?.title}"?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowActiveModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleActiveConfirm}>
                        Conform
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default Content;

// "use client";
// import { Fragment, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { Card, Col, Row, Modal, Button, Pagination } from "react-bootstrap";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Link from "next/link";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
// import Seo from "../../../../../../shared/layout-components/seo/seo";

// // Dynamically import Select to prevent SSR
// const Select = dynamic(() => import("react-select"), { ssr: false });

// const GuestPosts = () => {
//     const router = useRouter();
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [showDeleteModal, setShowDeleteModal] = useState(false);
//     const [postToDelete, setPostToDelete] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const postsPerPage = 10;

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const response = await axios.get('/api/guestPost');
//             setPosts(response.data.data);
//             setLoading(false);
//         } catch (err) {
//             setError(err);
//             setLoading(false);
//             toast.error("Failed to fetch posts");
//         }
//     };

//     const handleDeleteConfirm = async () => {
//         if (!postToDelete) return;

//         try {
//             await axios.delete(`/api/guestPost/${postToDelete.id}`);
            
//             setPosts(posts.filter(post => post.id !== postToDelete.id));
//             setShowDeleteModal(false);
//             toast.success("Post deleted successfully");
//         } catch (err) {
//             toast.error("Failed to delete post");
//         }
//     };

//     const openDeleteModal = (post) => {
//         setPostToDelete(post);
//         setShowDeleteModal(true);
//     };

//     const filteredPosts = posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.author.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     // Pagination
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error loading posts: {error.message}</div>;
//     }

//     return (
//         <Fragment>
//             <Seo title="Guest Posts" />
//             <PageHeader title='Guest Posts' item='Content' active_item='Guest Posts' />
//             <ToastContainer />

//             <Row className="row-sm">
//                 <Col md={12} lg={12}>
//                     <Card className="custom-card">
//                         <Card.Header className="border-bottom-0 pb-0">
//                             <div className="d-flex justify-content-between align-items-center w-100">
//                                 <label className="main-content-label my-auto mb-2">All Guest Posts</label>
//                                 <div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center mt-xl-0">
//                                     <div className="d-flex mt-4 mt-lg-0">
//                                         <div className="filter-group d-inline-flex w-100">
//                                             <input 
//                                                 type="text" 
//                                                 value={searchQuery}
//                                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                                 className="form-control rounded-end-0" 
//                                                 placeholder="Search posts" 
//                                             />
//                                             <button type="button" className="btn btn-primary">
//                                                 <i className="fa fa-search"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Card.Header>
                        
//                         <Card.Body className="pt-2">
//                             <table className="table even-tbl table-responsive border" id="cryptoNews-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Image</th>
//                                         <th>Thumbnail</th>
//                                         <th>Author</th>
//                                         <th>Title</th>
//                                         <th>Published At</th>
//                                         <th>Uploaded At</th>
//                                         <th>Language</th>
//                                         <th>Type</th>
//                                         <th>SEO Check</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {currentPosts.map((post) => (
//                                         <tr key={post.id}>
//                                             <td>
//                                                 <Image 
//                                                     src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`} 
//                                                     alt={post.title} 
//                                                     width={100} 
//                                                     height={100}
//                                                     className="img-fluid"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <Image 
//                                                     src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`} 
//                                                     alt={post.title} 
//                                                     width={100} 
//                                                     height={100}
//                                                     className="img-fluid"
//                                                 />
//                                             </td>
//                                             <td>{post.author}</td>
//                                             <td>
//                                                 <Link 
//                                                     href={`/post/${post.id}`} 
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                 >
//                                                     {post.title}
//                                                 </Link>
//                                             </td>
//                                             <td>{post.publishedAt}</td>
//                                             <td>{post.uploadedAt}</td>
//                                             <td>{post.lan}</td>
//                                             <td>
//                                                 <span className="badge bg-success">News</span>
//                                             </td>
//                                             <td>
//                                                 <strong className="text-success">Yes</strong>
//                                             </td>
//                                             <td>
//                                                 <div className="btn-group">
//                                                     <Button 
//                                                         variant="success" 
//                                                         size="sm" 
//                                                         onClick={() => router.push(`/post/${post.id}`)}
//                                                     >
//                                                         <i className="fa fa-eye" aria-hidden="true" />
//                                                     </Button>
//                                                     <Button 
//                                                         variant="primary" 
//                                                         size="sm" 
//                                                         onClick={() => router.push(`/post/edit/${post.id}`)}
//                                                     >
//                                                         <i className="fa fa-pencil-square-o" aria-hidden="true" />
//                                                     </Button>
//                                                     <Button 
//                                                         variant="danger" 
//                                                         size="sm" 
//                                                         onClick={() => openDeleteModal(post)}
//                                                     >
//                                                         <i className="fa fa-trash" aria-hidden="true" />
//                                                     </Button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </Card.Body>

//                         <Pagination className="mt-3 justify-content-end">
//                             <Pagination.Prev 
//                                 onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)} 
//                                 disabled={currentPage === 1}
//                             />
//                             {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//                                 <Pagination.Item 
//                                     key={i} 
//                                     active={i + 1 === currentPage}
//                                     onClick={() => paginate(i + 1)}
//                                 >
//                                     {i + 1}
//                                 </Pagination.Item>
//                             ))}
//                             <Pagination.Next 
//                                 onClick={() => paginate(currentPage < Math.ceil(filteredPosts.length / postsPerPage) ? currentPage + 1 : currentPage)} 
//                                 disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
//                             />
//                         </Pagination>
//                     </Card>
//                 </Col>
//             </Row>
            
//             {/* Delete Confirmation Modal */}
//             <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Confirm Delete</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Are you sure you want to delete the post "{postToDelete?.title}"?
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="danger" onClick={handleDeleteConfirm}>
//                         Delete
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Fragment>
//     );
// };

// export default GuestPosts;