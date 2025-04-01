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

export default function ContentViewPage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter(); 
  const { slug, id } = params;
 
  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await axios.get(`/api/admin/content/${id}`);
        setContent(response.data.data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <>
     <Seo title={"Content"} />
          <PageHeader title="Content" item="Content" active_item="Show Content" />
          <Row className="row-sm">
          <div className="col-xl-12">
            <div className="custom-card mg-b-20 card">
              <div className="card-body">
                <div className="row">
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
      
      {content.image && (
        <div className="mb-4">
          <img 
            src={content.image} 
            alt={content.title} 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      )}

      <div className="prose max-w-full"
      dangerouslySetInnerHTML={{ __html: content.description }}
      >
        
      </div>

      <div className="mt-6 flex space-x-4">
        <button 
          onClick={() => router.push(`/admin/content/edit/${id}`)}
          className="btn btn-success px-4 py-2 rounded"
        >
          Edit
        </button>
        <button 
          onClick={() => router.push('/admin/content')}
          className="btn btn-danger m-2 px-4 py-2 rounded"
        >
          Back to List
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Row>
    </>
  );
}