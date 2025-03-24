"use client";
import { useParams } from 'next/navigation';
import BlogSlug from '@/components/BlogSlug';

const Home = () => {
  const { slug, id } = useParams(); // Correct way in App Router
  
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <BlogSlug slug={slug} id={id} />;
};

export default Home;

