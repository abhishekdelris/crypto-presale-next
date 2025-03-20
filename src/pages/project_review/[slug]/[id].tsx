import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import ProjectReviewSlug from '../../../components/ProjectReviewSlug';

const Home: NextPage = () => {
  const router = useRouter();
  const { slug, id } = router.query;
 
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <ProjectReviewSlug slug={slug} id={id} />;
};

export default Home;
