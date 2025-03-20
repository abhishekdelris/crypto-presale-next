import { useRouter } from 'next/router';
import BlogSlug from '../../../components/BlogSlug';

const Home = () => {
  const router = useRouter();
  const { slug, id } = router.query;
 
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <BlogSlug slug={slug} id={id} />;
};

export default Home;
