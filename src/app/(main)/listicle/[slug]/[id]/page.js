"use client";
import { useParams } from 'next/navigation';
import ListicleSlug from '@/components/ListicleSlug';

const Home = () => {
  const { slug, id } = useParams(); // Correct way in App Router
  
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <ListicleSlug slug={slug} id={id} />;
};

export default Home;

