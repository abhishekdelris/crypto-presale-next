// // File: pages/api/crypto-news.js
// import { executeQuery } from "../../lib/db";  // Assuming you have a database connection utility

// export default async function handler(req, res) {
//   try {
//     // Connect to database and execute query
//     const results = await executeQuery({
//         query: "SELECT * FROM `crypto_news` WHERE is_gabbar = 4"
//     });
    
//     // Return the results as JSON
//     res.status(200).json({ success: true, data: results });
//   } catch (error) {
//     console.error('Error fetching crypto news:', error);
//     res.status(500).json({ success: false, message: 'Failed to fetch crypto news' });
//   }
// }   

// File: pages/api/guestPost.js
import { executeQuery } from '../../../lib/db'; // You'll need to create this database utility

export default async function handler(req, res) {
  try {
    // Get guest posts from the database
    const guestPosts = await executeQuery({
      query: "SELECT * FROM `crypto_news` WHERE is_gabbar = 4 ORDER BY created_at DESC"
     }
        );
    
    // Format the data to match your frontend component's needs
    const formattedPosts = guestPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.description || post.short_description || '',
      image: post.image || '/images/blog.webp', // Fallback to default image if none exists
      author: post.author || 'Deepak Choudhary',
      date: formatDate(post.created_at || new Date()),
      likes: post.likes_counts || 0,
      slug : post.alias|| "abc",
      
    }));
    
    // Return the formatted posts
    res.status(200).json({ 
      success: true, 
      data: formattedPosts 
    });
  } catch (error) {
    console.error('Error fetching guest posts:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch guest posts' 
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