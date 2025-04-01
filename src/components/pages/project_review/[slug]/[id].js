import { useRouter } from 'next/navigation';
import ProjectReviewSlug from '../../../components/ProjectReviewSlug';

const Home = () => {
  const router = useRouter();
  const { slug, id } = router.query;
 
  if (!slug || !id) {
    return <p>Loading...</p>;
  }

  return <ProjectReviewSlug slug={slug} id={id} />;
};

export default Home;