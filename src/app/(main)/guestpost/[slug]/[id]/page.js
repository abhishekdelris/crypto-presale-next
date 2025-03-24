"use client";
import { useParams } from 'next/navigation';
import GuestPostSlug from '@/components/GuestPostSlug';

const Home = () => {
  const { slug, id } = useParams(); // Correct way in App Router
  
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <GuestPostSlug slug={slug} id={id} />;
};

export default Home;
