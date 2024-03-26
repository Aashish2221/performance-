import React, { useEffect, useState } from 'react';
import { getChartData } from '@/services/spot-prices';

const Filter = ({ data, TimeFrame, Number }: any) => {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrLarger(window.innerWidth >= 550);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const initFetch = async (Number: number, TimeFrame: string) => {
    data.setNumber(Number);
    data.setTimeFrame(TimeFrame);
    const response = await getChartData(Number, TimeFrame, false);
    const allResponse = [...response.data];
    let filteredData = allResponse;
    if (isTabletOrLarger) {
      if (Number === 1 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 3 === 0);
      } else if (Number === 3 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 5 === 0);
      } else if (Number === 6 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 12 === 1);
      } else if (Number === 12 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 11 === 1);
      } else if (Number === 60 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 18 === 1);
      } else if (Number === 120 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 50 === 0);
      } else if (Number === 500 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 400 === 0);
      }
    } else {
      if (Number === 2 && TimeFrame === 'week') {
        filteredData = allResponse.filter((_, index) => index % 3 === 0);
      } else if (Number === 1 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 5 === 0);
      } else if (Number === 3 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 15 === 0);
      } else if (Number === 6 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 30 === 1);
      } else if (Number === 12 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 60 === 1);
      } else if (Number === 60 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 300 === 1);
      } else if (Number === 120 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 600 === 0);
      } else if (Number === 500 && TimeFrame === 'month') {
        filteredData = allResponse.filter((_, index) => index % 700 === 0);
      }
    }
    data.setChartData(filteredData);
  };

  return (
    <>
      <li
        onClick={() => {
          initFetch(data.Number, data.TimeFrame);
        }}
      >
        <button
          className={`relative block rounded-[30%] ${
            TimeFrame === data.TimeFrame && Number === data.Number
              ? 'bg-primary'
              : 'bg-gray-300'
          } px-1 py-1 sm:px-2 sm:py-2`}
        >
          {data.label}
        </button>
      </li>
    </>
  );
};

export default Filter;
