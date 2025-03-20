
import { useRouter } from 'next/router';
import GuestPostSlug from '../../../components/GuestPostSlug';

const Home = () => {
  const router = useRouter();
  const { slug, id } = router.query;
 
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <GuestPostSlug slug={slug} id={id} />;
};

export default Home;