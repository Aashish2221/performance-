/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend,ScriptableContext} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartData } from '@/interfaces/typeinterfaces';
import { getChartData } from '@/services/spot-prices';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/userSlice';
import { toCurrency, toPercent } from '@/utils/utilities';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend
);
type metalProps = {
metal: string;
currentSpotPrice: chartData;
initialchartData: chartData[];
initfrom: string;
initto: string;
initchange: number;
initHigh: number;
initlow: number;
};
const LineAreaChart = ({
  metal,currentSpotPrice,initialchartData,initfrom,initto,initchange,initHigh,initlow
}: metalProps) => {
  const [chartdata, setChartData] = useState(initialchartData);
  const [Number, setNumber] = useState(3);
  const [TimeFrame, setTimeFrame] = useState('month');
  const [initialdata, setInitialData] = useState(true);
  const select = useSelector(selectUser)
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
  useEffect(() => {
    initFetch(Number, TimeFrame);
  }, [metal, Number, TimeFrame]);
  const initFetch = async (Number: number, TimeFrame: string) => {
    setNumber(Number);
    setTimeFrame(TimeFrame);
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
    }else {
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
    setChartData(filteredData);
  };
  return (
    <div className='sm:m-2 mt-2 flex h-fit flex-col items-center justify-center rounded-xl bg-gray-100 shadow-lg w-full'>
      <div className='mt-2 flex w-full flex-col justify-start text-[15px] font-semibold text-dark-black md:flex-row md:justify-between lg:text-[20px]'>
        <h2 className='flex w-full items-start px-1 py-1 text-start'>
          {metal} Spot Price Chart
        </h2>
        <ul className='flex h-fit w-full flex-row items-start justify-start gap-1 px-1 py-1 text-sm text-gray-700 md:items-end md:justify-end'>
          <li
            onClick={() => {
              initFetch(1, 'week'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='week'&&Number===1)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              1W
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(2, 'week'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='week'&&Number===2)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              2W
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(1, 'month'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===1)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              1M
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(3, 'month'), setInitialData(false);
            }}
          >
          <button
          className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===3)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              3M
          </button>

          </li>
          <li
            onClick={() => {
              initFetch(6, 'month'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===6)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              6M
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(12, 'month'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===12)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              1Y
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(60, 'month'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===60)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              5Y
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(120, 'month'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===120)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              10Y
            </button>
          </li>
          <li
            onClick={() => {
              initFetch(500, 'month'), setInitialData(false);
            }}
          >
            <button className={`relative block rounded-[30%] ${(TimeFrame==='month'&&Number===500)?('bg-primary'):('bg-gray-300')} px-1 sm:px-2 py-1 sm:py-2`}>
              All
            </button>
          </li>
        </ul>
      </div>
      <div className='flex w-full flex-col items-start justify-between px-1 py-1 md:-mt-5'>
        <div className='flex flex-row items-center justify-start gap-5'>
          <span className='text-lg font-semibold text-primary'>
            USD $
            {metal === 'Silver'
              ? currentSpotPrice?.silver
              : currentSpotPrice?.gold}
          </span>
          <div className="flex items-center">
            {initchange < 0 ? (
              <MdArrowDropDown size={24} fill="#FF2A2A" />
            ) : (
              <MdArrowDropUp size={24} fill="#27D24A" />
            )}
            <span className={`text-sm font-semibold ${initchange < 0 ? "text-red-600" : "text-green-600"}`}>
              {Math.abs(initchange)}
            </span>
          </div>
        </div>
        <div className='items-between flex w-full flex-col justify-between  gap-2 md:flex-row'>
          <div className='flex flex-row items-start justify-start gap-2 lg:gap-8'>
            <span className='text-sm font-medium text-gray-700'>
              Bid ${select.spotPrices && metal === 'Silver' ? (select.spotPrices.silverBid || 'N/A') : (select.spotPrices && select.spotPrices.goldBid || 'N/A')}
            </span>


            <span className='text-sm font-medium text-gray-700'>
              Ask ${select.spotPrices && metal === 'Silver' ? (select.spotPrices.silver || 'N/A') : (select.spotPrices && select.spotPrices.gold || 'N/A')}
            </span>

            <div className='text-sm font-medium text-gray-700 flex gap-1 items-center text-center fix'>
              Change Percent
              <span className={`flex items-center space-x-1 ${metal === "Silver" ? (select.spotPrices.silverChangePercent >= 0 ? 'text-green-600' : 'text-red-600') : (select.spotPrices.goldChangePercent >= 0 ? 'text-green-600' : 'text-red-600')}`}>
                {metal === "Silver" ?
                  (select.spotPrices.silverChangePercent > 0 ? <MdArrowDropUp size={16} fill="#27D24A" /> : <MdArrowDropDown size={16} fill="#FF2A2A" />)
                  :
                  (select.spotPrices.goldChangePercent > 0 ? <MdArrowDropUp size={16} fill="#27D24A" /> : <MdArrowDropDown size={16} fill="#FF2A2A" />)
                }
                {toPercent(metal === "Silver" ? Math.abs(select.spotPrices.silverChangePercent) : Math.abs(select.spotPrices.goldChangePercent))}%
              </span>
            </div>


          </div>
          <div className='flex flex-row items-end justify-end gap-2 whitespace-normal text-sm font-medium'>
            From{' '}
            <span className='relative bg-gray-300 text-gray-700'>
              {chartdata[0].dateNTime.slice(0,10)}
            </span>
            To{' '}
            <span className='relative bg-gray-300 text-gray-700'>
              {currentSpotPrice.dateNTime}
            </span>
          </div>
        </div>
      </div>
      <div className='flex h-fit w-full items-start justify-start  py-1'>
        <Suspense
          fallback={
            <section className='h-[200px] items-start bg-gray-100 w-full sm:w-[350px] md:h-[300px] 2xl:w-[1050px]'></section>
          }
        >
          <Line
            className='h-[200px] items-start bg-gray-100 sm:w-[700px] md:h-[300px] 2xl:w-[1050px]'
            data={{
              labels: [
                ...chartdata
                  .filter((x) => x.dateNTime)
                  .map((x) => {
                    if (TimeFrame === 'week') {
                      return dayjs(x.dateNTime.slice(0, 10)).format('D MMM');
                    } else if (TimeFrame === 'month' && Number===12 || TimeFrame === 'month' && Number===60 || TimeFrame==='month' && Number===120 || TimeFrame === 'month' && Number === 500) {
                      return dayjs(x.dateNTime.slice(0, 10)).format('MMM YY');
                    }else if (TimeFrame === 'month') {
                      return dayjs(x.dateNTime.slice(0, 10)).format('D MMM');
                    } else if (TimeFrame === 'year' && Number === 1) {
                      return dayjs(x.dateNTime.slice(0, 10)).format('MMM YY');
                    } else {
                      return x.dateNTime.slice(0, 10);
                    }
                  }), currentSpotPrice.dateNTime.slice(0, 10)
              ],
              datasets: [
                {
                  label: `${metal} Spot Prices`,
                  fill: true,
                  pointRadius: 0,
                  backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgb(255, 175, 71,1)');
                    gradient.addColorStop(1, 'rgb(255, 175, 71,0)');
                    return gradient;
                  },
                  borderColor: 'rgb(255, 175, 71)',
                  borderWidth: 2,
                  data: chartdata.map((dataPoint) => {
                    return metal === 'Silver' ? dataPoint.silver : dataPoint.gold;
                  }).concat([metal === 'Silver' ? currentSpotPrice.silver : currentSpotPrice.gold])
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                tooltip: {
                  mode: 'index',
                  intersect: false
                }
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              scales: {
                x: {
                  grid: {
                    display: false
                  },
                  ticks: {
                    color: 'black',
                    maxTicksLimit: 14,
                    padding: 1,
                    font: {
                      size: 10
                    }
                  }
                },
                y: {
                  grid: {
                    display: true
                  },
                  ticks: {
                    color: 'black',
                    padding: 1,
                    font: {
                      size: 10
                    }
                  }
                }
              }
            }}
          />
        </Suspense>
      </div>
    </div>
  );
};
export default LineAreaChart;
