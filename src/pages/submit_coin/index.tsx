import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import SubmitCoin from '../../components/SubmitCoin'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <SubmitCoin />
    <Footer />
    </>
  );
};

export default Home;