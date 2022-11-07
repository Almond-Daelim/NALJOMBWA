import { useState, useEffect } from 'react';
import WeatherData from './Datas/WeatherData';
import axios from 'axios';
import img from '../../assets/map.jpg';

const WeatherMap = () => {
  const [weather, setWeather] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const api = {
      key: '15b219f6bddece5f0895da2453e11ccb',
      base: 'https://api.openweathermap.org/data/2.5/',
      lang: 'kr',
      units: 'metric',
    };
    const dataList = WeatherData.map(data => {
      return data.city_id;
    });
    const city_id = dataList.join();
    const url = `${api.base}group?id=${city_id}&appid=${api.key}&units=${api.units}&lang=${api.lang}`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        console.log('성공');
        setWeather({
          data: data.list,
          loading: false,
        });
      })
      .catch(err => {
        console.log('실패');
        console.log(err);
        setApiError(err);
      });
  }, []);

  const test = test => {
    let city = null;
    let location = null;
    WeatherData.map(data => {
      if (test.id === parseInt(data.city_id)) {
        city = data.kr;
        location = data.location;
      }
      return null;
    });
    return {
      city,
      location,
    };
  };

  const makeWeatherMap = () => {
    return (
      <div class="border">
        <div class="max-w-xl relative">
          <img
            class="object-fill"
            src={img}
            alt="weather-map"
          />
          {weather.data.map((city, idx) => {
            let aa = test(city);
            let temp = Math.round(city.main.temp);
            return (
              <div
                key={idx}
                class={aa.location}
              >
                <span>{aa.city}</span>
                <span>{temp}°C</span>
                <img
                  class="inline-block"
                  src={`http://openweathermap.org/img/wn/${city.weather[0].icon.slice(
                    0,
                    -1,
                  )}d.png`}
                  alt="weatherIcon"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const check = () => {
    if (apiError) {
      return <div>정보없음</div>;
    } else if (weather) {
      return makeWeatherMap();
    } else {
      <div>정보없음</div>;
    }
  };

  return <div class="m-auto">{check()}</div>;
};

export default WeatherMap;
