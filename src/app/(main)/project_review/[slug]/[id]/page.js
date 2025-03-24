"use client";
import { useParams } from 'next/navigation';
import ProjectReviewSlug from '@/components/ProjectReviewSlug';

const Home = () => {
  const { slug, id } = useParams(); // Correct way in App Router
  
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <ProjectReviewSlug slug={slug} id={id} />;
};

export default Home;
