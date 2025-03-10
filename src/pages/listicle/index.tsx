import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Advertise from '../../components/Advertise';
import NewTemplate from '@/components/NewTemplate';

const Home: NextPage = () => {
  return (
    <>
    <Header />
    {/* <Advertise /> */}
    <NewTemplate />
    <Footer />
    </>
  );
};

export default Home;