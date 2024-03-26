/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
const GoldChartSpotPriceAndChartsDesc = () => {
  return (
    <div>
      <div className='flex max-w-screen-2xl flex-col items-start justify-start gap-2 px-2 text-start'>
        <h2 className='pt-1 text-[18px] font-bold text-dark-black'>
          Gold Spot Price & Charts
        </h2>
        <span className='w-fit whitespace-normal text-[14px] font-normal'>
          In gold trading, the spot price of gold is used worldwide. Determining
          the spot price of gold is crucial to monitoring the demand for the
          precious metal as an investment. Numerous factors, including the need
          for safe havens and speculation in the futures market, cause it to
          fluctuate constantly.
        </span>
        <h2 className='text-[18px] font-bold text-dark-black'>
          {' '}
          What is the Gold Spot Price?
        </h2>
        <span className='w-fit whitespace-normal text-[14px] font-normal'>
          The current market value for the immediate purchase and sale of one
          ounce of gold is the spot price. Since market conditions and current
          events significantly impact the buying and selling of gold, it is
          imperative to stay informed about performance indicators like these,
          as the spot price of gold is subject to frequent fluctuations.
          Although troy ounces are the standard unit of measurement for gold
          prices, any quantity can be purchased or sold. Since most gold markets
          use real-time prices expressed in US dollars, the cost of an ounce of
          gold is the same everywhere. As a result, gold spot prices are
          universal.
        </span>
      </div>
    </div>
  );
};
export default GoldChartSpotPriceAndChartsDesc;
