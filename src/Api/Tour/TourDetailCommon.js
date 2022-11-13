import { useEffect } from 'react';
import axios from 'axios';
const TourDetailCommon = props => {
  const service = props.pageNo;
  const pageNo = service;
  const contentId = props.contentId;
  const contentTypeId = props.contentTypeId;
  const setOverViewState = props.overviewState;
  const env = process.env;
  const service_check = pageNo === 2 ? 'detailIntro' : 'detailCommon';

  //api Assets
  const api = {
    key: env.REACT_APP_API_KEY,
    base: env.REACT_APP_BASE_URL,
    service: service_check,
    MobileOS: env.REACT_APP_MOBILE_OS,
    MoblieApp: env.REACT_APP_MOBILE_APP,
    listYN: env.REACT_APP_LISTYN,
    arrange: env.REACT_APP_ARRANGE,
    numOfRows: env.REACT_APP_NUM_OF_ROWS,
    pageNo: env.REACT_APP_PAGE_NO,
    _type: env.REACT_APP_TYPE,
  };

  //url
  let url = `${api.base}/${api.service}?serviceKey=${api.key}&numOfRows=${api.numOfRows}&pageNo=${api.pageNo}&MobileOS=${api.MobileOS}&MobileApp=${api.MoblieApp}&_type=${api._type}&contentId=${contentId}&contentTypeId=${contentTypeId}`;

  if (pageNo === 3) {
    url =
      url +
      `&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`;
  }

  console.log(url);

  //api fetch
  const callGetData = async url => {
    try {
      const response = await axios.get(url);
      setOverViewState(response.data.response.body.items.item);
    } catch (err) {
      console.log('Tour Api 불러오기 실패');
      console.log(err);
    }
  };

  //getData call
  useEffect(() => {
    callGetData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default TourDetailCommon;
