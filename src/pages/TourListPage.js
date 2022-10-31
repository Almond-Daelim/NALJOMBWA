import React, { useEffect, useState } from 'react';
import Tour from '../Api/Tour/Tour';
import TourCard from '../components/common/Layout/TourCard';

const TourListPage = props => {
  const [tourData, setTourData] = useState([]);
  const TpageNo = props;
  const kw_result = encodeURIComponent(TpageNo.keyWord);

  const setData = newData => {
    setTourData(newData);
  };

  const getData = () => {
    return (
      <Tour
        pageNo={TpageNo.pageNo}
        stateProps={setData}
        keyWord={kw_result}
      />
    );
  };

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      {getData()}
      {tourData
        .filter(tourData => tourData.firstimage && tourData)
        .map((post, idx) => (
          <TourCard
            key={idx}
            data={post}
          />
        ))}
    </div>
  );
};

export default TourListPage;
