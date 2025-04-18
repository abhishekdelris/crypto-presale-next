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
import { Api, Category } from "@mui/icons-material";


const CryptoCoins = () => {
    const [showData,setShowData] = useState([]);
     const [itemOffset, setItemOffset] = useState(0);
     const [searchQuery, setSearchQuery] = useState({
        title:"",
        select_Category: 1,
        select_parentchild: null,
        select_subcategory: null,
     });
     const options = [
        { label: 'selectCategory' },
        { value: 1, label: 'Category' },
        { value: 2, label: 'Sub Category' },
      ]
      
            const itemsPerpage = 15;

    const fetchdataproject = async ()=>{
        try {
            const response = await axios.get("/api/admin/project_categories");
            const result = await response.data;
            if (result.success === true)
                {
                    setShowData(result.data);
                } 
            console.log("this is my api response", showData);
        } catch (error) {
            console.log("data is not catch",error.message)
        }
        
    };
    useEffect(()=>{
        fetchdataproject();
},[]);

const filteredPosts = searchQuery 
? showData.filter((post) => 
    post?.title?.toLowerCase().includes(searchQuery.title.toLowerCase())
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
                            <div className="d-flex flex-column justify-content-between align-items-center w-100">
                                <div className=" col-12 d-flex flex-row justify-content-between ">
                                    <label className="main-content-label my-auto mb-2">Project Categories</label>
                                    <button className="btn btn-primary me-2" >ADD Post</button>
                                </div>
                                <div className=" col-12 m-0 p-0 row row-cols-1 row-cols-lg-5 g-2 g-lg-3 d-flex justify-content-between align-items-center mt-xl-0">
                                    <div className=" col">
                                        <div className="filter-group d-inline-flex w-100">
                                            <input 
                                                type="text" 
                                                value={searchQuery.title}
                                                onChange={(e) => 
                                                    setSearchQuery({title:e.target.value})}
                                                className="form-control w-100 rounded-2" 
                                                placeholder="search" 
                                            />
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="filter-group d-inline-flex w-100">
                                           <Select  className="form-control p-0 w-100 rounded-2 border border-light "   options={options} /*onChange={(e) => setSearchQuery({select_Category:e.target.value})}*/ />
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="filter-group d-inline-flex w-100">
                                            < select
                                                type="text" 
                                                //value={searchQuery.select_parentchild}
                                                //onChange={(e) => setSearchQuery({select_parentchild:e.target.value})}
                                                className="form-select w-100 rounded-end-0" 
                                                 
                                            >
                                                <option selected>Select Parent/child</option>
                                                <option value={0}>Category</option>
                                                <option value={1}>Sub Category</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="filter-group d-inline-flex w-100">
                                            < select
                                                type="text" 
                                                //value={searchQuery.select_subcategory}
                                                //onChange={(e) => setSearchQuery({select_subcategory:e.target.value})}
                                                className="form-select w-100 rounded-end-0" 
                                               
                                            >
                                                <option selected>Select Sub Category</option>
                                                <option value={0}>Category</option>
                                                <option value={1}>Sub Category</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="filter-group d-inline-flex w-100">
                                        <button type="reset" className="btn btn-primary m-2">
                                                <i className="fa fa-search"></i>
                                            </button>
                                            <button type="button" className="btn btn-primary m-2">
                                                <i className="fa fa-refresh"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                      
                     
                        <Card.Body className="">
                           <Table  className=" table-bordered bg-light">
                           
                            <thead >
                                <tr className="text-capitalize">
                                    <th className=" text-capitalize bg-primary">Id</th>
                                    <th className=" text-capitalize bg-primary">Parent Type</th>
                                    <th className=" text-capitalize bg-primary">Type</th>
                                    <th className=" text-capitalize bg-primary">Categories</th>
                                    <th className=" text-capitalize bg-primary text-center">Sequence</th>
                                    <th className=" text-capitalize bg-primary text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="mb-3 fs-6">
                                {currentItems.map((data)=>(
                                   <tr key={data.id}>
                                   <td>{data.parent_id}</td>
                                   <td>{data.title}</td>
                                   <td>{data.title}</td>
                                   <td>{data.is_active === 1?"Category":"Sub Category"}</td>
                                   <td className="text-center">{data.sequence}</td>
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
