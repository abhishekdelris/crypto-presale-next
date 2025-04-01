// File: pages/guest-post/[slug]/[id].js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

function PostDetail4( {slug, id}) {
  const router = useRouter();
  // const { slug, id } = router.query;
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Only fetch when we have the ID
    if (!id) return;

    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`/api/project_preview/${id}`);
        if (response.data.success) {
          console.log("data........",response);
          
          setPost(response.data.data);
        } else {
          setError("Failed to fetch post details");
        }
      } catch (err) {
        setError("An error occurred while fetching post details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  // Validate the slug if needed
  useEffect(() => {
    if (post && slug) {
      const correctSlug = createSlug(post.title);
      if (correctSlug !== slug) {
        // Redirect to the correct URL if the slug is wrong
        router.replace(`/project_review/${correctSlug}/${id}`, undefined, { shallow: true });
      }
    }
  }, [post, slug, id, router]);

  // Same slug creation function as in your GuestPost component
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  if (loading) return <div className="loading">Loading post...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!post) return <div className="not-found">Post not found</div>;

  return (
    <>
      <section className="brdcrumb">
        <div className="container">
          <ul className="mb-0">
            <li>
              <Link href="/" title="Home">Home</Link>
            </li>
            <li>
              <Link href="/project_review" title="Guest Post">Project Review</Link>
            </li>
            <li>{post.title}</li>
          </ul>
        </div>
      </section>

      <section className="post-detail mt-2 mb-4">
        <div className="container">
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta">
            <span>By: {post.author}</span>
            <span className='ms-4'>Published: {post.date}</span>
          </div>
          
          <div className="post-featured-image">
            <Image
              src={`https://d3iuzwoiyg9qa8.cloudfront.net/webadmin/storage/${post.image}`}
              alt={post.title}
              width={800}
              height={400}
              layout="responsive"
              className='rounded mt-2'
            />
          </div>
          
          <div 
            className="post-content mt-4"
            dangerouslySetInnerHTML={{ __html: post.description }}
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
              {post.likes}
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

export default PostDetail4;