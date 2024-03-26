import React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { toPercent } from '@/utils/utilities';
const BidAskChangePercenAndFromTo = ({
  metal,
  currentSpotPrice,
  initchange,
  select,
  chartdata
}: any) => {
  return (
    <>
      <div className='flex w-full flex-col items-start justify-between px-1 py-1 md:-mt-5'>
        <div className='flex flex-row items-center justify-start gap-5'>
          <span className='text-lg font-semibold text-primary'>
            USD $
            {metal === 'Silver'
              ? currentSpotPrice?.silver
              : currentSpotPrice?.gold}
          </span>
          <div className='flex items-center'>
            {initchange < 0 ? (
              <MdArrowDropDown size={24} fill='#FF2A2A' />
            ) : (
              <MdArrowDropUp size={24} fill='#27D24A' />
            )}
            <span
              className={`text-sm font-semibold ${
                initchange < 0 ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {Math.abs(initchange)}
            </span>
          </div>
        </div>
        <div className='items-between flex w-full flex-col justify-between  gap-2 md:flex-row'>
          <div className='flex flex-row items-start justify-start gap-2 lg:gap-8'>
            <span className='text-sm font-medium text-gray-700'>
              Bid $
              {select.spotPrices && metal === 'Silver'
                ? select.spotPrices.silverBid || 'N/A'
                : (select.spotPrices && select.spotPrices.goldBid) || 'N/A'}
            </span>

            <span className='text-sm font-medium text-gray-700'>
              Ask $
              {select.spotPrices && metal === 'Silver'
                ? select.spotPrices.silver || 'N/A'
                : (select.spotPrices && select.spotPrices.gold) || 'N/A'}
            </span>

            <div className='fix flex items-center gap-1 text-center text-sm font-medium text-gray-700'>
              Change Percent
              <span
                className={`flex items-center space-x-1 ${
                  metal === 'Silver'
                    ? select.spotPrices.silverChangePercent >= 0
                      ? 'text-green-600'
                      : 'text-red-600'
                    : select.spotPrices.goldChangePercent >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {metal === 'Silver' ? (
                  select.spotPrices.silverChangePercent > 0 ? (
                    <MdArrowDropUp size={16} fill='#27D24A' />
                  ) : (
                    <MdArrowDropDown size={16} fill='#FF2A2A' />
                  )
                ) : select.spotPrices.goldChangePercent > 0 ? (
                  <MdArrowDropUp size={16} fill='#27D24A' />
                ) : (
                  <MdArrowDropDown size={16} fill='#FF2A2A' />
                )}
                {toPercent(
                  metal === 'Silver'
                    ? Math.abs(select.spotPrices.silverChangePercent)
                    : Math.abs(select.spotPrices.goldChangePercent)
                )}
                %
              </span>
            </div>
          </div>
          <div className='flex flex-row items-end justify-end gap-2 whitespace-normal text-sm font-medium'>
            From{' '}
            <span className='relative bg-gray-300 text-gray-700'>
              {chartdata[0].dateNTime.slice(0, 10)}
            </span>
            To{' '}
            <span className='relative bg-gray-300 text-gray-700'>
              {currentSpotPrice.dateNTime}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BidAskChangePercenAndFromTo;
