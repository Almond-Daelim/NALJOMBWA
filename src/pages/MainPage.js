import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [apiList, setApiList] = useState('/areaBasedList');
  const keywWord = '안양';
  const kw_result = encodeURIComponent(keywWord);
  const api = {
    key: 'jE3ugMXmJI0yag2gClOOzYsaGhuRCsAy6yRix3i4CzyIKUAEbYeBEwTzAmr847RBStVkvt6rkKxqa8ziDhOqlQ%3D%3D',
    base: 'https://apis.data.go.kr/B551011/KorService',
    MobileOS: 'ETC',
    MoblieApp: 'NALJOMBWA',
    listYN: 'Y',
    arrange: 'C',
    numOfRows: '20',
    pageNo: '1',
    _type: 'json',
  };
  const url = `${api.base}/searchKeyword?serviceKey=${api.key}&numOfRows=${api.numOfRows}&pageNo=${api.pageNo}&MobileOS=${api.MobileOS}&MobileApp=${api.MoblieApp}&_type=${api._type}&listYN=${api.listYN}&arrange=${api.arrange}&keyword=${kw_result}`;
  useEffect(() => {
    (async () => {
      const response = await fetch(url);

      const json = await response.json();

      setData(json.response.body.items.item);
    })();
  }, []);

  // if (keywWord && keywWord) {
  //   const kw_result = encodeURIComponent(keywWord);
  //   setApiList('/searchKeyword');
  //   (async () => {
  //     const res = await fetch(url + `&keyword=${kw_result}`);
  //     console.log(url + `&keyword=${kw_result}`);
  //     const json = await res.json();
  //     setData(json.response.body.items.item);
  //   })();
  // }

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

export default MainPage;
