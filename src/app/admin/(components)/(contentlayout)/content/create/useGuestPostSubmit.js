// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export const useGuestPostSubmit = () => {
//     const [isLoading, setIsLoading] = useState(false);

//     const submitGuestPost = async (formData) => {
//         // Create FormData for submission
//         console.log("formData.....",formData);
        
//         const submitData = new FormData();
//         console.log("formData.....123456",submitData);
//         // Append all form fields
//         Object.keys(formData).forEach(key => {
//             console.log("data....",key);
            
//             if (key === 'dynamic_rss_feed') {
//                 // Handle dynamic RSS feed checkboxes
//                 formData[key].forEach(value => {
//                     submitData.append('dynamic_rss_feed[]', value);
//                 });
//             } else if (formData[key] instanceof File) {
//                 // Handle file uploads
//                 submitData.append(key, formData[key]);
//             } else {
//                 submitData.append(key, formData[key] || '');
//             }
//         });

//         try {
//             setIsLoading(true);

//             // Make the API call
//             const response = await axios.post('/api/admin/content/create', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             // Handle successful submission
//             if (response.data.success) {
//                 toast.success('Content created successfully!');
//                 return response.data;
//             } else {
//                 toast.error(response.data.message || 'Failed to create content');
//                 return null;
//             }
//         } catch (error) {
//             // Handle errors
//             console.error('Content submission error:', error);
//             toast.error(
//                 error.response?.data?.message || 
//                 'An error occurred while submitting the content'
//             );
//             return null;
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return { submitGuestPost, isLoading };
// };

// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export const useGuestPostSubmit = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const submitGuestPost = async (formData) => {
//     try {
//       setIsLoading(true);

//       // Send formData as JSON to your Prisma-based API route
//       const response = await axios.post('/api/admin/content/create', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.data.success) {
//         toast.success('Content created successfully!');
//         return response.data;
//       } else {
//         toast.error(response.data.message || 'Failed to create content');
//         return null;
//       }
//     } catch (error) {
//       console.error('Content submission error:', error);
//       toast.error(
//         error.response?.data?.message ||
//           'An error occurred while submitting the content'
//       );
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { submitGuestPost, isLoading };
// };

import { useState } from 'react'; 
import axios from 'axios'; 
import { toast } from 'react-toastify';  
import { useRouter } from 'next/navigation';


export const useGuestPostSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const submitGuestPost = async (formData) => {
    try {
      setIsLoading(true);
      
      // Create FormData for multipart upload
      const formDataToSubmit = new FormData();
      
      // Append all fields to FormData
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== undefined) {
          if (key === 'dynamic_rss_feed' && Array.isArray(formData[key])) {
            // Handle multi-select fields
            formDataToSubmit.append(key, formData[key].join(','));
          } else if (key === 'image' && formData[key] instanceof File) {
            // Append file directly
            formDataToSubmit.append(key, formData[key]);
          } else {
            // Append other fields as strings
            formDataToSubmit.append(key, String(formData[key]));
          }
        }
      });
      
      // Send FormData to API
      const response = await axios.post('/api/admin/content/create', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.data.success) {
        toast.success('Content created successfully!');
        router.push("/admin/content");
        return response.data;
      } else {
        toast.error(response.data.message || 'Failed to create content');
        return null;
      }
    } catch (error) {
      console.error('Content submission error:', error);
      toast.error(
        error.response?.data?.message || 
        'An error occurred while submitting the content'
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  return { submitGuestPost, isLoading };
};

export async function getServerSideProps() {
  const res = await fetch(`https://...`)
  const projects = await res.json()
 
  return { props: { projects } }
}
 
export default function Dashboard({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}