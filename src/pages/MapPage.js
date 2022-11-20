import React from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import WeatherMap from '../Api/Weather/WeatherMap';

const Map = () => {
  const getMap = () => {
    return (
      <div className="mt-10">
        <div className="mx-auto max-w-xl">
          <div className="mx-auto flex">
            <div className="w-1/3 text-2xl font-bold text-center bg-blue-100 pt-4 border-black dark:border-white border-x-4 border-t-4 dark:text-white dark:bg-slate-400">
              지역별 날씨
            </div>
            <div className="w-1/3 border-black dark:border-white border-b-4" />
            <div className="w-1/3 border-black dark:border-white border-b-4" />
          </div>
          <WeatherMap />
        </div>
      </div>
    );
  };

  return (
    <div className="dark:bg-slate-900">
      <Header />
      {getMap()}
      <Footer />
    </div>
  );
};

export default Map;
