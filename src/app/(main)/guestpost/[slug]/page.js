// app/guestpost/[slug]/[id]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

async function GuestPostDetail({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);
  
  if (!post || !post.success) {
    return notFound();
  }
  
  const postData = post.data;
  
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
              <Link href="/guestpost" title="Guest Posts">
                Guest Posts
              </Link>
            </li>
            <li>{postData.slug}</li>
          </ul>
        </div>
      </section>
      
      <section className='mb-4'>
        <div className="container">
          <h1 className="post-title mt-2">{postData.title}</h1>
          
          <div className="post-meta">
            <span>By: {postData.author}</span>
            <span>Date: {postData.date}</span>
          </div>
          
          {postData.image && (
            <div className="post-image">
              <Image
                src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${postData.image}`}
                alt={postData.title}
                width={800}
              height={400}
              layout="responsive"
              className='rounded mt-2'
              />
            </div>
          )}
          
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: postData.description }}
          />
           <div className="interaction-bar">
            <div className="like-button">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              {postData.likes}
            </div>
            <div className="share-button">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={18} cy={5} r={3} />
                <circle cx={6} cy={12} r={3} />
                <circle cx={18} cy={19} r={3} />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



// Metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const article = await fetchPost(slug);
  
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

// Server-side data fetching for a single post
async function fetchPost(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guestPost/${slug}`, {
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
    console.error("Error fetching post:", error);
    return {
      success: false,
      error: "Failed to fetch post"
    };
  }
}

export default GuestPostDetail;