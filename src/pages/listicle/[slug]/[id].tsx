import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import ListicleSlug from '../../../components/ListicleSlug';

const Home: NextPage = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <ListicleSlug slug={slug} id={id} />;
};

export default Home;
