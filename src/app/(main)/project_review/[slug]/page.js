
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

// Format date utility - imported from your pasted code
function formatDate(dateString) {
  if (!dateString) return "";
  const [day, month, year] = dateString.split("-");
  return `${day}-${month}-${year}`;
}
 
// Metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const article = await fetchArticle(slug);
  
  if (!article || !article.success) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found'
    };
  }
  
  return {
    title: article.data.meta_title || article.data.title,
    description: article.data.meta_description || getExcerpt(article.data.content, 160)
  };
}

// Get excerpt from HTML description - imported from your pasted code
function getExcerpt(htmlContent, maxLength = 100) {
  if (!htmlContent) return "";
  // Server-side safe text extraction
  const textContent = htmlContent.replace(/<[^>]*>/g, '');
  
  return textContent.length <= maxLength 
    ? textContent 
    : textContent.substring(0, maxLength) + "...";
}

// Server-side data fetching for a single project review
async function fetchArticle(slug) {
  try {
    const config = {
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/project_preview/${slug}`,
      headers: {}
    };
    
    const response = await axios.request(config);
    
    if (response.data.success) {
      return {
        success: true,
        data: response.data.data
      };
    } else {
      return {
        success: false,
        error: "Failed to fetch article"
      };
    }
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      success: false,
      error: "Failed to fetch article"
    };
  }
}

// Default export for the page component
export default async function ProjectReviewPostDetail({ params }) {
  const { slug} = params;
  const article = await fetchArticle(slug);
  
  if (!article || !article.success) {
    return notFound();
  }
  
  const articleData = article.data;
  
  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/project-review" title="Project Review">
                Project Review
              </Link>
            </li>
            <li>{articleData.slug}</li>
          </ul>
        </div>
      </section>
      
      <section className="container mt-4 mb-5">
        <h1 className="blog-title">{articleData.title}</h1>
        
        <div className="blog-meta mb-4">
          <span className="me-3">By: {articleData.author || "Unknown Author"}</span>
          <span>Published: {formatDate(articleData.date)}</span>
          
          {articleData.tags && articleData.tags.length > 0 && (
            <div className="blog-tags mt-2">
              {articleData.tags.map((tag, index) => (
                <span key={index} className={`crypto-tag ${tag.toLowerCase()}-tag me-2`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {articleData.image && (
          <div className="blog-featured-image mb-4">
            <Image
              src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${articleData.image}`}
              alt={articleData.title}
              width={1200}
              height={600}
              className="img-fluid"
            />
          </div>
        )}
        
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: articleData.content }}
        />
      </section>
    </>
  );
}