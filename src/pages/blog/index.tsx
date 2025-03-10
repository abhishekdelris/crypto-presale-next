import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Blog from '../../components/Blog'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Blog />
    <Footer />
    </>
  );
};

export default Home;