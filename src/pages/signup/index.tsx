import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Signup from '../../components/Signup'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Signup />
    <Footer />
    </>
  );
};

export default Home;