import { useRouter } from 'next/navigation';
import ListicleSlug from '../../../components/ListicleSlug';

const Home = () => {
  const router = useRouter();
  const { slug, id } = router.query;
 
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <ListicleSlug slug={slug} id={id} />;
};

export default Home;