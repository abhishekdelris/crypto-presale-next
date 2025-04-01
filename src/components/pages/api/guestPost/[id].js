// File: pages/api/guestPost/[id].js
import { executeQuery } from '../../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // Get specific guest post from database
    const result = await executeQuery({
      query: "SELECT * FROM `crypto_news` WHERE id = ? AND is_gabbar = 4",
      values: [id]
    });
    
    // Check if post exists
    if (result.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }
    
    const post = result[0];
    
    // Format the post data
    const formattedPost = {
      id: post.id,
      title: post.title,
      description: post.description || post.short_description || '',
      image: post.image || '/images/blog.webp',
      author: post.author || 'Deepak Choudhary',
      date: formatDate(post.created_at || new Date()),
      likes: post.likes_counts || 0,
      slug: post.alias || "abc",
      // Add any additional fields needed for the detail page
      content: post.description || '',
      meta_title: post.meta_title || post.title,
      meta_description: post.meta_description || '',
      created_at: post.created_at,
      updated_at: post.updated_at,
    };
    
    res.status(200).json({ 
      success: true, 
      data: formattedPost 
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}

// Helper function to format dates in DD-MM-YYYY format
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}-${month}-${year}`;
}