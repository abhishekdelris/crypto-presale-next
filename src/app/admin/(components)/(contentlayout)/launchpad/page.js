"use client";
import { Fragment, useState, useEffect } from "react";
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
import { Api } from "@mui/icons-material";


const CryptoCoins = () => {
    const [showData,setShowData] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [searchQuery, setSearchQuery] = useState(""); 
    const itemsPerpage = 15;
    const infolaunchpad = async ()=>{
        try {
            const response = await axios.get('/api/admin/launchpad');
            const result = await response.data;
            if(result.success === true)
            {
                setShowData(result.data);
            }
            console.log(showData);
        } catch (error) {
            console.log("data is not render",error.message);
        }
    };
    useEffect(()=>{
        infolaunchpad();
    },[])
    
    const filteredPosts = searchQuery 
   ? showData.filter((post) => 
        post?.title?.toLowerCase().includes(searchQuery.toLowerCase()) 
     )
   : showData;
     
    const endOffset = itemOffset+itemsPerpage;
    const currentItems = filteredPosts.slice(itemOffset,endOffset);
    const pagecount =Math.ceil(filteredPosts.length / itemsPerpage);
     const pagechange =(selectedPage)=>{
        
            if (selectedPage === 'prev') {
                const newOffset = Math.max(itemOffset - itemsPerpage, 0);
                setItemOffset(newOffset);
            } else if (selectedPage === 'next') {
                const newOffset = Math.min(itemOffset + itemsPerpage, (pagecount - 1) * itemsPerpage);
                setItemOffset(newOffset);
            } else {
                const newOffset = ((selectedPage - 1) * itemsPerpage) % filteredPosts.length;
                setItemOffset(newOffset);
            }
    }
    return (
        <Fragment>
            <Seo title={"Best Presale"} />
            <PageHeader title='Best Presale' item='Best Presale' active_item='All Best Presale To Buy' />
            <ToastContainer />

            <Row className="row-sm">
                <Col md={12} lg={12}>
                    <Card className="custom-card">
                        <Card.Header className="border-bottom-0 pb-0">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <label className="main-content-label my-auto mb-2">Launchpad</label>
                                <div className="col-xl-9 col-lg-12 d-lg-flex justify-content-end align-items-center mt-xl-0">
                                    <button className="btn btn-primary me-2" >ADD Post</button>
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
                      
                     
                        <Card.Body className="">
                           <Table  className=" table-bordered bg-light">
                           
                            <thead >
                                <tr className=" ">
                                    <th className=" bg-primary" >Title</th>
                                    <th className=" bg-primary">Launchpad Url</th>
                                    <th className=" text-center bg-primary">Action</th>
                                </tr>
                            </thead>
                            <tbody className="mb-3 fs-6">
                                {currentItems.map((data)=>(
                                    <tr key={data.id}>
                                    <td>{data.title}</td>
                                    <td>{data.launchpad_url}</td>
                                    <td >
                                        <form className="d-flex justify-content-center m-2">
                                        <div className="btn-group">
                                              <button className="btn btn-success">
                                                <i className="fa fa-eye" aria-hidden="true" />
                                              </button>
                                              <button   className="btn btn-primary" >
                                              <i className="fa fa-pen-square" aria-hidden="true"></i>
                                              </button>
                                              <input type="hidden" data-label="Crypto News" data-title="(Intermediate) Which blockchain uses the DPoS mechanism? Ari Quiz" data-id="id,175147" data-table="crypto_news" className="DataValue" />
                                              <button type="button" name="activeDeactive" className="btn btn-dark" title="Click to Deactivate"><i className="fa fa-check" aria-hidden="true"/></button>
                                              <button type="submit" className="btn btn-danger btn-xs" ><i className="fa fa-trash" aria-hidden="true" /></button>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                ))}
                                
                            </tbody>
                            </Table>
                            <Pagination>
                                                                                                                    
                                <Pagination.Prev onClick={() => pagechange('prev')} />

                                    {[...Array(pagecount)].map((_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            onClick={() => pagechange(index + 1)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}

                                <Pagination.Next onClick={() => pagechange('next')} />
                               
                            </Pagination> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    
        </Fragment>
    );
};

export default CryptoCoins;
