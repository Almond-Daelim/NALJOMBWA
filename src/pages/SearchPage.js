import React from 'react';
import { useParams } from 'react-router-dom';
import TourListPage from './TourListPage';

const SearchPage = () => {
  const params = useParams();
  const kw = params.search_KW;

  const getData = () => {
    return (
      <TourListPage
        pageNo={1}
        keyWord={params.search_KW}
      />
    );
  };

  if (kw !== '') {
    return <>{getData()}</>;
  } else {
    console.log('kw값이 없습니다.');
  }

  return;
};

export default SearchPage;
