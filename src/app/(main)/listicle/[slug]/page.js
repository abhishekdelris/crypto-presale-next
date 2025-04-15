// app/blog/[slug]/[id]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

async function ListiclePostDetail({ params }) {
  const { slug } = params;
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
              <Link href="/listicle" title="Listicle">
               Listicle
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
          <span>Published: {articleData.date}</span>
          
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

// Server-side data fetching for a single blog article
async function fetchArticle(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listicle/${slug}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      success: false,
      error: "Failed to fetch article"
    };
  }
}

export default ListiclePostDetail;