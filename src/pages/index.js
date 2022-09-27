import React from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import Switcher from '../components/common/DarkMode/Switcher';

const Home = () => {
  return (
    <div>
      <Header />
      <Switcher />
      <Footer />
    </div>
  );
};

export default Home;
