import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
// import Advertise from '../../components/Advertise';
import Listicle from '@/components/Listicle';

const Home: NextPage = () => {
  return (
    <>
    <Header />
    {/* <Advertise /> */}
    <Listicle />
    <Footer />
    </>
  );
};

export default Home; 