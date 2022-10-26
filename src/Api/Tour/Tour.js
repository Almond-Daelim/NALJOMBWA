import { useState, useEffect } from 'react';
import axios from 'axios';

const Tour = service => {
  const [data, setData] = useState([]);

  const env = process.env;
  const service_check =
    service.service === 0 ? 'areaBasedList' : 'searchKeyword';

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
    (async () => {
      const response = await fetch(url);

      const json = await response.json();

      setData(json.response.body.items.item);
    })();
  }, []);

  /*  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        const json = response.json();
        console.log('성공');
        console.log(json);
        setData({
          firstimage: json.response.body.items.item.firstimage,
          title: json.response.body.items.item.title,
          addr1: json.response.body.items.item.addr1,
        });
      })
      .catch(err => {
        console.log('실패');
        console.log(err.message);
      });
  }, []);*/

  const listItems = data
    .filter(data => data.firstimage && data)
    .map((post, idx) => {
      return (
        <div key={idx}>
          <ul>
            <ul class=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
              <img
                class="w-[100%] h-[100%] object-cover rounded-[10px]"
                src={post.firstimage}
                alt={post.title + '이미지'}
              />
            </ul>
            <li>{post.title}</li>
            <li>{post.addr1}</li>
          </ul>
        </div>
      );
    });

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      {listItems}
    </div>
  );
};

export default Tour;
