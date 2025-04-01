// "use client"
// import { useRouter } from "next/router";

// export default function ErrorPage({ statusCode }) {
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '50px' }}>
//       <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
//       <p>Oops! Something went wrong.</p>
//       <button onClick={handleBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
//         Go Back
//       </button>
//     </div>
//   ); 
// }

// ErrorPage.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };
 

"use client";
 
export default function ErrorPage({ statusCode = 404 }) {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{`Error ${statusCode}`}</h1>
      <p>Oops! Something went wrong.</p>
      <button onClick={handleBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Go Back
      </button>
    </div>
  );
}
