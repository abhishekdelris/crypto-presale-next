// "use client";
// import { Fragment, useState, useEffect } from "react";
// import axios from "axios";
// import { Card, Col, Row } from "react-bootstrap";
// import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
// import Seo from "../../../../../../shared/layout-components/seo/seo";
// import Link from "next/link";
// const Select = dynamic(() => import("react-select"), { ssr: false });
// import dynamic from "next/dynamic";

// const GuestPosts = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const config = {
//                     method: 'get',
//                     url: '/api/guestPost',
                   
//                 };

//                 const response = await axios.request(config);
                
//                 // Assuming the API returns an array of posts
//                 setPosts(response.data.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         fetchPosts();
//     }, []);

//     const filteredPosts = posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.author.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error loading posts: {error.message}</div>;
//     }

//     return (
//         <Fragment>
//             <Seo title={"Guest Posts"} />
//             <PageHeader title='Guest Posts' item='Content' active_item='Guest Posts' />

//             <Row className="row-sm">
//                 <Col md={12} lg={12}>
//                     <Card className="custom-card">
//                         <Card.Header className="border-bottom-0 pb-0">
//                             <div className="d-flex justify-content-between align-items-center w-100">
//                                 <label className="main-content-label my-auto  mb-2">All Guest Posts</label>
// 								<div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center  mt-xl-0">
// 									<div className="d-flex mt-4 mt-lg-0">
// 										<div className="filter-group d-inline-flex w-100">
// 											<input type="text" value={searchQuery}  className="form-control rounded-end-0" placeholder="search" />
// 											<button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
// 										</div>
// 									</div>
// 									<div className="d-sm-flex mt-4 mt-lg-0 ms-3">
// 										<div className="filter-group d-flex align-items-center mb-2 mb-sm-0">
// 											<label className="me-2">Location</label>

// 											<Select options={"Location"} className="wd-150" classNamePrefix="Select2" placeholder="All" />
// 										</div>
// 										<div className="filter-group ms-3 d-flex align-items-center">
// 											<label className="me-2">Status</label>

// 											<Select options={"Status"} className="wd-150" classNamePrefix="Select2" placeholder="Any" />
// 										</div>
// 									</div>
// 								</div>
//                             </div>
//                         </Card.Header>
						
//                         <Card.Body className="pt-2">
//                             <div className="table-responsive border border-bottom-0">
//                                 <table className="table table-striped table-hover mb-0 text-nowrap text-md-nowrap">
//                                     <thead>
//                                         <tr className="border-bottom">
//                                             <th>ID</th>
//                                             <th>Title</th>
//                                             <th>Author</th>
//                                             <th>Date</th>
//                                             <th>Likes</th>
//                                             <th>Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {filteredPosts.map((post) => (
//                                             <tr key={post.id} className="border-bottom">
//                                                 <td>{post.id}</td>
//                                                 <td>
//                                                     <Link href={`/post/${post.slug}`}>
//                                                         {post.title}
//                                                     </Link>
//                                                 </td>
//                                                 <td>{post.author}</td>
//                                                 <td>{post.date}</td>
//                                                 <td>{post.likes}</td>
//                                                 <td>
//                                                     <div className="btn-list">
//                                                         <Link href={`/post/${post.slug}`} className="btn btn-sm btn-primary">
//                                                             View
//                                                         </Link>
// 														<Link href={`/post/${post.slug}`} className="btn btn-sm btn-success">
//                                                             Edit
//                                                         </Link>
// 														<Link href={`/post/${post.slug}`} className="btn btn-sm btn-danger">
//                                                             Delete
//                                                         </Link>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Fragment>
//     );
// };

// export default GuestPosts;


"use client";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, Col, Row, Modal, Button,Pagination } from "react-bootstrap";
import PageHeader from "../../../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../../../shared/layout-components/seo/seo";
import Link from "next/link";
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";

const GuestPosts = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const config = {
                method: 'get',
                url: '/api/guestPost',
            };

            const response = await axios.request(config);
            
            setPosts(response.data.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
            toast.error("Failed to fetch posts");
        }
    };

    const handleView = (slug) => {
        router.push(`/post/${slug}`);
    };

    const handleEdit = (slug) => {
        router.push(`/post/edit/${slug}`);
    };

    const handleDeleteConfirm = async () => {
        if (!postToDelete) return;

        try {
            await axios.delete(`/api/guestPost/${postToDelete.id}`);
            
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

    const openDeleteModal = (post) => {
        setPostToDelete(post);
        setShowDeleteModal(true);
    };

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading posts: {error.message}</div>;
    }

    return (
        <Fragment>
            <Seo title={"Guest Posts"} />
            <PageHeader title='Guest Posts' item='Content' active_item='Guest Posts' />
            <ToastContainer />

            <Row className="row-sm">
                <Col md={12} lg={12}>
                    <Card className="custom-card">
                        <Card.Header className="border-bottom-0 pb-0">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <label className="main-content-label my-auto mb-2">All Guest Posts</label>
                                <div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center mt-xl-0">
                                    <button className="btn btn-primary me-2">ADD Post</button>
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
            <div className="card-body">
  <table className="table even-tbl table-responsive border" id="cryptoNews-table">
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
        { filteredPosts.map((post) => (
                <tr key={post.id}>
                    <td><Image src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`} alt="image" width={100} height={100}/></td>
                    <td><Image src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`} alt="image" width={100} height={100}/></td>
                    <td>{post.author}</td>       
        <td className="text-left text-nowrap">{post.author}</td>
        <td className="text-left">
          <Link href="https://www.coingabbar.com/en/crypto-currency-news/intermediate-which-blockchain-uses-the-dpos-mechanism-ari-quiz" target="_blank">{post.title}</Link>
        </td>
       
        <td>{post.publishedAt}</td>
        <td>{post.uploadedAt}</td>
        <td>{post.lan}</td>
        <td>
          <span className="text-green">News</span>
        </td>
        <td>
          News
        </td>
        <td>
          <strong className="text-green"> Yes </strong>
        </td>
        {/* <td>0</td> */}
        <td>
          <form method="POST" action="http://192.168.1.7/coingabbar-webadmin/en/crypto-news/175147" acceptCharset="UTF-8"><input name="_method" type="hidden" defaultValue="DELETE" /><input name="_token" type="hidden" defaultValue="28Nu3MviQUWgwx8mGvY46zC4SROxfnQN971ELsWl" />
            <div className="btn-group">
              <a href="http://192.168.1.7/coingabbar-webadmin/en/crypto-news/175147" className="btn btn-success">
                <i className="fa fa-eye" aria-hidden="true" />
              </a>
              <a href="http://192.168.1.7/coingabbar-webadmin/en/crypto-news/175147/edit" className="btn btn-primary">
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
              </a>
              <input type="hidden" data-label="Crypto News" data-title="(Intermediate) Which blockchain uses the DPoS mechanism? Ari Quiz" data-id="id,175147" data-table="crypto_news" className="DataValue" />
              <button type="button" name="activeDeactive" className="btn btn-dark" value={1} title="Click to Deactivate"><i className="fa fa-check" aria-hidden="true" />                      </button>
              <button type="submit" className="btn btn-danger btn-xs" onclick="return confirm('Are you sure?')"><i className="fa fa-trash" aria-hidden="true" /></button>
            </div>
          </form>
        </td>
                </tr>
            ))}
     
    
  
    </tbody>
  </table>
  <style dangerouslySetInnerHTML={{__html: "\n    .even-tbl {\n        width: 100%;\n    }\n    .even-tbl tr th,.even-tbl tr td {\n        border: 1px solid #ccc;\n        text-transform: capitalize;\n        vertical-align: middle;\n        text-align: center;\n    }\n    .even-tbl tr th {\n        color: #fff;\n        background: #705ec8;\n    }\n    .even-tbl tbody {\n        background: #fff;\n    }\n    .even-tbl tbody:nth-child(odd) {\n        background: #eee;\n    }\n    .even-tbl tr td:first-child {\n        text-align: left;\n    }\n    .submit-btn {\n        border-radius: 50px;\n        font-weight: 600;\n        margin: auto;\n        padding: 2px 14px;\n        border: 1px solid #705ec8;\n    }\n" }} />					<div className="card-footer clearfix">
  
  </div>
</div>

             </Card.Body>
             <Pagination className="mt-3 justify-content-end">
								<Pagination.Item>Prev</Pagination.Item>
								<Pagination.Item active>{1}</Pagination.Item>
								<Pagination.Item>{2}</Pagination.Item>
								<Pagination.Item>{3}</Pagination.Item>
								<Pagination.Item>{4}</Pagination.Item>
								<Pagination.Item>Next</Pagination.Item>
							</Pagination>
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
        </Fragment>
    );
};

export default GuestPosts;

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