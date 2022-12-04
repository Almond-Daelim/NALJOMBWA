import React, { useState } from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import Weather from '../Api/Weather/Weather';
import TourListPage from './TourListPage';

const Rec = () => {
  const [cityName, setCityName] = useState(null);
  const getData = () => <Weather moveCityData={moveCityData} />;
  const moveCityData = x => {
    setCityName(x);
  };

  const style = {
    display: 'none',
  };

  return (
    <div className="dark:bg-slate-900">
      <Header />
      <div style={style}>{getData()}</div>
      <div className="max-w-screen-2xl mx-auto">
        <h3 className="w-[50%] text-2xl font-bold mt-10 mb-4 md:text-left text-center md:ml-20 ml-0 dark:text-white">
          <span className="w-full font-bold text-center dark:text-white relative">
            {cityName}
            <p className="before:content-[''] before:inline-block w-[100%] h-[20px] bg-yellow-200 absolute top-2 mix-blend-multiply dark:bg-gray-500" />
          </span>
          의 전체 관광지 목록!
        </h3>
        {cityName ? (
          <TourListPage
            pageNo={1}
            keyWord={cityName}
            tour_cnt={100}
          />
        ) : (
          <div>정보없음</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Rec;
