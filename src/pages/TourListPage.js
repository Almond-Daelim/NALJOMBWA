import React, { useState } from 'react';
import Tour from '../Api/Tour/Tour';
import TourCard from '../components/common/Layout/TourCard';
import Spinner from '../components/common/Spinner/Spinner';

const TourListPage = props => {
  const [tourData, setTourData] = useState([]);
  const TpageNo = props;
  const kw_result = encodeURIComponent(TpageNo.keyWord);
  const contentId = TpageNo.contentId;
  const contentTypeId = TpageNo.contentTypeId;
  const [loding, setLoding] = useState(true);
  const tour_cnt = TpageNo.tour_cnt;

  const setData = newData => {
    setTourData(newData);
    setLoding(false);
  };

  // console.log('tourListPage호출');
  //  console.log(tourData);

  //  tourData
  //    .filter(tourData => tourData.contenttypeid === '12')
  //    .map((post, idx) => {
  //      setDetailData(post);
  //    });

  const getData = () => {
    return (
      <Tour
        pageNo={TpageNo.pageNo}
        stateProps={setData}
        keyWord={kw_result}
        contentId={contentId}
        contentTypeId={contentTypeId}
        tour_cnt={tour_cnt}
      />
    );
  };

  //  console.log(tourData);

  // return (
  //   <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
  //     {getData()}
  //     {tourData
  //       .filter(tourData => tourData.firstimage && tourData)
  //       .map((post, idx) => (
  //         <TourCard
  //           key={idx}
  //           data={post}
  //         />
  //       ))}
  //   </div>
  // );

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      {getData()}
      {loding ? (
        <Spinner />
      ) : (
        tourData
          .filter(tourData => tourData.firstimage && tourData)
          .map((post, idx) => (
            <TourCard
              key={idx}
              data={post}
            />
          ))
      )}
    </div>
  );
};

export default TourListPage;
