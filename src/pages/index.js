import React from 'react';
import Switcher from '../components/common/darkmode/switcher'

const Home = () => {
  return (
    <div>
      <Switcher />
      <h1 className="m-5 text-blue-500 font-bold dark:bg-gray-900 ">Hello Home</h1>
    </div>
  );
};

export default Home;
