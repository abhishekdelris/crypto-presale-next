"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ErrorPage({ statusCode }) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // This will ensure `useRouter` is used after the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBack = () => {
    router.back();
  };

  if (!isMounted) {
    return null; // Or a loading spinner if needed
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>Oops! Something went wrong.</p>
      <button onClick={handleBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Go Back
      </button>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
