import { useState, useEffect } from 'react';
import axios from 'axios';
import TourCard from '../../components/common/Layout/TourCard';

const Tour = service => {
  const [data, setData] = useState([]);
  const pageNo = service.pageNo;
  const env = process.env;
  const service_check = pageNo === 0 ? 'areaBasedList' : 'searchKeyword';

  const api = {
    key: env.REACT_APP_API_KEY,
    base: env.REACT_APP_BASE_URL,
    service: service_check,
    MobileOS: env.MOBILE_OS,
    MoblieApp: env.MOBILE_APP,
    listYN: 'Y',
    arrange: 'C',
    numOfRows: env.NUM_OF_ROWS,
    pageNo: env.PAGE_NO,
    _type: 'json',
  };
  const url = `${api.base}/${api.service}?serviceKey=${api.key}&numOfRows=${api.numOfRows}&pageNo=${api.pageNo}&MobileOS=${api.MobileOS}&MobileApp=${api.MoblieApp}&_type=${api._type}&listYN=${api.listYN}&arrange=${api.arrange}`;

  useEffect(() => {
    getData(url);
  }, []);

  const getData = async url => {
    try {
      const response = await axios.get(url);
      setData(response.data.response.body.items.item);
    } catch (err) {
      console.log('Tour Api 불러오기 실패');
    }
  };

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      {data
        .filter(data => data.firstimage && data)
        .map((post, idx) => (
          <TourCard
            key={idx}
            data={post}
          />
        ))}
      ;
    </div>
  );
};

export default Tour;
