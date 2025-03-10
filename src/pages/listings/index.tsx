import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Listings from '../../components/Listings'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Listings />
    <Footer />
    </>
  );
};

export default Home;