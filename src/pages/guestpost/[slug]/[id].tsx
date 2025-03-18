import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import PostDetail from '../../../components/PostDetail';

const Home: NextPage = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <PostDetail slug={slug} id={id} />;
};

export default Home;
