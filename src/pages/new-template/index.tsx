import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import NewTemplate from '../../components/NewTemplate'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <NewTemplate />
    <Footer />
    </>
  );
};

export default Home;