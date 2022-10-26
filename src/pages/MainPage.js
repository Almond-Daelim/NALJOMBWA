import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TourList from '../components/common/Layout/TourList';
import Tour from '../Api/Tour/Tour';

const MainPage = () => {
  return <Tour service={0} />;
};

export default MainPage;
