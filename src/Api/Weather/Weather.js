import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const api = {
      key: '15b219f6bddece5f0895da2453e11ccb',
      base: 'https://api.openweathermap.org/data/2.5/',
      lang: 'kr',
      units: 'metric',
    };
    const city = 'Seoul';
    const url = `${api.base}weather?q=${city}&appid=${api.key}&units=${api.units}&lang=${api.lang}`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        console.log('성공');
        console.log(res);
        setWeather({
          id: data.weather[0].id,
          temperature: data.main.temp,
          main: data.weather[0].main,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          name: data.name,
          loading: false,
        });
      })
      .catch(err => {
        console.log('실패');
      });
  }, []);

  return (
    <div class="flex w-[256px] h-[286px] rounded-lg shadow-lg">
      <div class="m-auto">
        <span class="block text-center font-bold">{`${weather.name}`}</span>
        <img
          src={weather.icon}
          alt="weatherIcon"
        />
        <span class="block text-center font-bold">{`${weather.temperature}℃`}</span>
        <span class="block text-center font-bold">{`${weather.main}`}</span>
      </div>
    </div>
  );
};

export default Weather;
