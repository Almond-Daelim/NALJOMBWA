import React, { useState } from 'react';
import Tour from '../../../Api/Tour/Tour';
import CardSlier from './CardSlider';

const Slick = props => {
  const [tourData, setTourData] = useState([]);
  const TpageNo = props;
  const kw_result = encodeURIComponent(TpageNo.keyWord);
  const contentId = TpageNo.contentId;
  const contentTypeId = TpageNo.contentTypeId;
  const [loding, setLoding] = useState(true);

  const setData = newData => {
    setTourData(newData);
    setLoding(false);
  };

  const getData = () => {
    return (
      <Tour
        pageNo={TpageNo.pageNo}
        stateProps={setData}
        keyWord={kw_result}
        contentId={contentId}
        contentTypeId={contentTypeId}
      />
    );
  };

  return (
    <>
      {getData()}
      {console.log(tourData[0])}
      {loding ? <div /> : <CardSlier data={tourData} />}
    </>
  );
};
export default Slick;
