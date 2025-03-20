import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import BlogSlug from '../../../components/BlogSlug';

const Home: NextPage = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <BlogSlug slug={slug} id={id} />;
};

export default Home;
