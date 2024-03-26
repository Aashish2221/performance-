import React from 'react';
import { GridViewSkeleton } from '@/components/Loaders/Grid/GridViewSkeleton';
const SilverChartSkeleton = () => {
  return (
    <div>
      <div className='container mx-auto flex w-full flex-col gap-2 overflow-clip px-2 py-2 text-dark-black'>
        <h1 className='mt-10 w-full text-[18px] font-semibold sm:mt-12 sm:px-2 sm:text-2xl lg:mt-2 xl:mt-2 2xl:mt-2'>
          Silver Spot Price
        </h1>
        <div className='flex flex-col gap-2 py-1 text-[15px] font-medium sm:w-fit sm:px-2'>
          <h2>Live Metal Spot Price(24hrs)</h2>
          <div className='flex w-full flex-row items-start justify-start gap-1 sm:gap-2 '>
            <div className='flex gap-2'>
              <div className=' h-[72px] w-[100px] animate-pulse rounded-lg bg-gray-200 md:h-[56px] md:w-[250px]'></div>
              <div className=' h-[72px] w-[100px] animate-pulse rounded-lg bg-gray-200 md:h-[56px] md:w-[250px]'></div>
              <div className=' h-[72px] w-[100px] animate-pulse rounded-lg bg-gray-200 md:h-[56px] md:w-[250px]'></div>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col gap-4 px-2 text-lg font-semibold text-dark-black lg:flex-row'>
          <div className='flex flex-col items-start justify-start text-start'>
            Spot Price Chart
            <span className='flex w-full flex-row items-center justify-start gap-4 text-[14px]'>
              <button className={`${' font-semibold text-dark-black'}`}>
                Silver
              </button>
              <button className={`${'font-semibold text-dark-black'}`}>
                Gold
              </button>
            </span>
            <div className='mt-2  h-[400px] w-full  animate-pulse rounded-xl bg-gray-200 sm:m-2 md:w-[650px]'></div>
          </div>
          <span className='flex h-full w-full flex-col items-start justify-start gap-2 text-start'>
            <span className='mt-3 px-2 py-3 text-start md:py-0'>
              Historical Spot Prices
            </span>
            <div className=' h-[376px] w-full  animate-pulse  items-center rounded-lg bg-gray-300 px-2 py-2' />
          </span>
        </div>
        <div>
          {/* -------------------- NEAR TO SPOT PRODUCTS -------------------- */}
          <div className='flex w-full flex-col items-center justify-start gap-2'>
            {/* -------------------- HEADING -------------------- */}
            <div className='flex w-full flex-row items-center justify-between'>
              <h3 className='text[15px] flex w-full flex-row items-start justify-start px-2 font-semibold text-dark-black'>
                Cheapest Coins, Bars & Rounds
              </h3>
              <div className=' mr-3 flex h-[30px] w-28 rounded-lg bg-gray-300'></div>
            </div>
            {/* -------------------- PRODUCTS LISTING -------------------- */}
            <div>
              <div
                className={`m-5 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:gap-y-4 lg:grid-cols-6 `}
              >
                {Array(6)
                  .fill(null)
                  .map((values: any, index: number) => (
                    <GridViewSkeleton key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className='h-[200px] animate-pulse rounded bg-gray-200 px-4 py-2'></div>
      </div>
    </div>
  );
};

export default SilverChartSkeleton;
