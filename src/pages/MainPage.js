import React, { useEffect, useState } from 'react';

const MainPage = () => {
  const [data, setData] = useState([]);
  const kewWord = '억새';

  console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=jE3ugMXmJI0yag2gClOOzYsaGhuRCsAy6yRix3i4CzyIKUAEbYeBEwTzAmr847RBStVkvt6rkKxqa8ziDhOqlQ%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C`,
      );

      const json = await response.json();

      setData(json.response.body.items.item);
    })();
  }, []);

  const searchTest = data
    .filter(data => 0 === data.title.indexOf(kewWord))
    .map((post, idx) => {
      return (
        <div key={idx}>
          <ul>
            <ul className=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
              <img
                className="w-[100%] h-[100%] object-cover rounded-[10px]"
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

  const listItems = data
    .filter(data => data.firstimage && data)
    .map((post, idx) => {
      return (
        <div key={idx}>
          <ul>
            <ul className=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
              <img
                className="w-[100%] h-[100%] object-cover rounded-[10px]"
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
      {searchTest}
    </div>
  );
};

export default MainPage;
