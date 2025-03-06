import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Advertise from '../../components/Advertise';

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Advertise />
    <Footer />
    </>
  );
};

export default Home;