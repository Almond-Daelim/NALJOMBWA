import React, { useState } from 'react';
import Button from '../components/common/Button/Button';
import ArrowButton from '../components/common/Button/ArrowButton/ArrowButton';
import Switcher from '../components/common/DarkMode/Switcher';
import Weather from '../Api/Weather/Weather';
import TourListPage from './TourListPage';

const MainPage = () => {
  const [cityName, setCityName] = useState(null);
  const handleClickRight = () => {
    alert('right');
  };
  const handleClickLeft = () => {
    alert('left');
  };
  const moveCityData = x => {
    console.log(x);
    setCityName(x);
  };
  return (
    <>
      <div class="max-w-2xl py-4 pl-7 bg-emerald-200">
        <Weather moveCityData={moveCityData} />
        <h3>오늘의 관광지 추천!</h3>
        <div>{cityName}</div>
        <Button
          title={'의 추천 관광지 \n 리스트 보러 가기 →'}
          onPress={() => alert('asdf')}
        />
      </div>
      <Switcher />
      <ArrowButton
        direction="left"
        onPress={() => handleClickLeft()}
      />
      <ArrowButton
        direction="right"
        onPress={() => handleClickRight()}
      />
      {cityName ? (
        <TourListPage
          pageNo={1}
          keyWord={cityName}
        />
      ) : (
        <div>정보없음</div>
      )}
    </>
  );
};

export default MainPage;
