/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { chartData } from '@/interfaces/typeinterfaces';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/userSlice';
import BidAskChangePercenAndFromTo from '@/components/chartData/LineAreaChart/BidAskChangePercenAndFromTo';
import Filter from '@/components/chartData/LineAreaChart/Filter';
import dynamic from 'next/dynamic';
const LineChart = dynamic(
  () => import('@/components/chartData/LineAreaChart/LineChart')
);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
type metalProps = {
  metal: string;
  currentSpotPrice: chartData;
  initialchartData: chartData[];
  initchange: number;
};
const LineAreaChart = ({
  metal,
  currentSpotPrice,
  initialchartData,
  initchange
}: metalProps) => {
  const [chartdata, setChartData] = useState(initialchartData);
  const [Number, setNumber] = useState(1);
  const [TimeFrame, setTimeFrame] = useState('week');
  const select = useSelector(selectUser);
  return (
    <div className='mt-2 flex h-[400px] w-full flex-col items-center justify-center rounded-xl bg-gray-100 shadow-lg sm:m-2'>
      <div className='mt-2 flex w-full flex-col justify-start text-[15px] font-semibold text-dark-black md:flex-row md:justify-between lg:text-[20px]'>
        <h2 className='flex w-full items-start px-1 py-1 text-start'>
          {metal} Spot Price Chart
        </h2>
        <ul className='flex h-fit w-full flex-row items-start justify-start gap-1 px-1 py-1 text-sm text-gray-700 md:items-end md:justify-end'>
          <Filter
            data={{
              Number: 1,
              TimeFrame: 'week',
              label: '1W',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 2,
              TimeFrame: 'week',
              label: '2W',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 1,
              TimeFrame: 'month',
              label: '1M',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 3,
              TimeFrame: 'month',
              label: '3M',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 6,
              TimeFrame: 'month',
              label: '6M',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 12,
              TimeFrame: 'month',
              label: '1Y',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 60,
              TimeFrame: 'month',
              label: '5Y',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 120,
              TimeFrame: 'month',
              label: '10Y',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
          <Filter
            data={{
              Number: 500,
              TimeFrame: 'month',
              label: 'All',
              setChartData,
              setNumber,
              setTimeFrame
            }}
            TimeFrame={TimeFrame}
            Number={Number}
          ></Filter>
        </ul>
      </div>
      <BidAskChangePercenAndFromTo
        metal={metal}
        currentSpotPrice={currentSpotPrice}
        initchange={initchange}
        select={select}
        chartdata={chartdata}
      />
      <div className='flex  h-[200px] w-full items-start justify-start px-1 py-1 md:h-[300px] '>
        <LineChart
          chartdata={chartdata}
          TimeFrame={TimeFrame}
          Number={Number}
          currentSpotPrice={currentSpotPrice}
          metal={metal}
        />
      </div>
    </div>
  );
};
export default LineAreaChart;
