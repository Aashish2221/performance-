/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Suspense, useEffect, useState } from 'react';
import data from '@/data';
import Head from 'next/head';
import LineAreaChart from '@/components/chartData/LineAreaChart/page';
import { chartData } from '@/interfaces/typeinterfaces';
import { getChartData } from '@/services/spot-prices';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { pricePerGram, pricePerKilo } from '@/utils/utilities';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/userSlice';
import dynamic from 'next/dynamic';
import SilverChartPrice from '@/components/SilverChartComponent/SilverChartPrice';
import ChartSkeleton from '@/components/Loaders/Chart/ChartSkeleton';
const SilverChartFaq = dynamic(
  () => import('@/components/SilverChartComponent/SilverChartFaq')
);
const SilverChartNearToSpotProducts = dynamic(
  () =>
    import('@/components/SilverChartComponent/SilverChartNearToSpotProducts')
);
const SilverSpotPriceAndCharts = dynamic(
  () =>
    import(
      '@/components/SilverChartComponent/SilverChartSpotPriceAndChartsDesc'
    )
);
const Historicaldatatable = dynamic(
  () => import('@/components/chartData/historycaldata/page')
);

const silverChart = ({
  title,
  chartData
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const select = useSelector(selectUser);
  const spotPrice = select.spotPrices;
  const [selected, setSelected] = useState<'Silver' | 'Gold'>('Silver');
  const [change, setChange] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [currentSpotPriceData, setCurrentSpotPriceData] = useState<chartData>({
    dateNTime: '',
    silver: 0,
    gold: 0
  });
  let today = new Date();
  useEffect(() => {
    const currentSpotPrice = async () => {
      setCurrentSpotPriceData({
        dateNTime: `${
          today.getMonth() + 1
        }/${today.getDate()}/${today.getFullYear()}`,
        silver: spotPrice.silver,
        gold: spotPrice.gold
      });
      setChange(spotPrice.silverChange);
    };
    currentSpotPrice();
    setHydrated(true);
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:type' content={data.OGTags.home.type} />
        <meta
          property='og:url'
          content={`${process.env.WEBSITE_URL}/silver-spot-price`}
          key={`${process.env.WEBSITE_URL}/silver-spot-price`}
        />
        <link
          rel='canonical'
          href={`${process.env.WEBSITE_URL}/silver-spot-price`}
        />
      </Head>
      <Suspense fallback={<ChartSkeleton />}>
        {/* {hydrated === true ? ( */}
        <div className='container mx-auto flex w-full flex-col gap-2 overflow-clip px-2 py-2 text-dark-black'>
          <h1 className='mt-10 text-[18px] font-semibold sm:mt-12 sm:px-2 sm:text-2xl lg:mt-2 xl:mt-2 2xl:mt-2'>
            Silver Spot Price
          </h1>
          <div className='flex flex-col gap-2 py-1 text-[15px] font-medium sm:px-2'>
            <h2>Live Metal Spot Price(24hrs)</h2>
            <div className='flex flex-row gap-1 sm:gap-2 '>
              {/* -------------------- SILVER PRICE PER OUNCE -------------------- */}
              <SilverChartPrice
                spotPrice={spotPrice}
                data={{
                  name: 'Silver Price Per Ounce:',
                  currency: spotPrice.silver,
                  silverChange: spotPrice.silverChange
                }}
              />
              {/* -------------------- SILVER PRICE PER GRAM -------------------- */}
              <SilverChartPrice
                spotPrice={spotPrice}
                data={{
                  name: 'Silver Price Per Gram:',
                  currency: pricePerGram(spotPrice.silver),
                  silverChange: pricePerGram(spotPrice.silverChange)
                }}
              />
              {/* -------------------- SILVER PRICE PER KILO -------------------- */}
              <SilverChartPrice
                spotPrice={spotPrice}
                data={{
                  name: 'Silver Price Per Kilo:',
                  currency: pricePerKilo(spotPrice.silver),
                  silverChange: pricePerKilo(spotPrice.silverChange)
                }}
              />
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 px-2 text-lg font-semibold  lg:flex-row'>
            <div className='mb-4 flex flex-col'>
              Spot Price Chart
              <span className='flex w-full gap-4 text-[14px]'>
                <button
                  className={`${
                    selected === 'Silver'
                      ? 'border-b-[3px] border-primary font-semibold text-primary'
                      : ' font-semibold text-dark-black'
                  }`}
                  onClick={() => {
                    setSelected('Silver'), setChange(spotPrice.silverChange);
                  }}
                >
                  Silver
                </button>
                <button
                  className={`${
                    selected === 'Gold'
                      ? ' border-b-[3px] border-primary font-semibold text-primary'
                      : 'font-semibold text-dark-black'
                  }`}
                  onClick={() => {
                    setSelected('Gold'), setChange(spotPrice.goldChange);
                  }}
                >
                  Gold
                </button>
              </span>
              <span className='flex w-full'>
                <LineAreaChart
                  metal={selected}
                  currentSpotPrice={currentSpotPriceData}
                  initialchartData={chartData}
                  initchange={change}
                />
              </span>
            </div>
            <span className='flex h-full w-full flex-col'>
              <span className='mb-4'>Historical Spot Prices</span>
              <Historicaldatatable metal={selected} spotpricedata={change} />
            </span>
          </div>
          {/* -------------------- NEAR TO SPOT PRODUCTS -------------------- */}
          <SilverChartNearToSpotProducts />
          <SilverSpotPriceAndCharts />
          <SilverChartFaq />
        </div>
      </Suspense>
    </>
  );
};
export default silverChart;
export const getServerSideProps: GetServerSideProps<{
  title: any;
  chartData: chartData[];
}> = async ({ res }): Promise<any> => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=60'
  );
  const response = await getChartData(1, 'week', false);
  const chartData = response.data;
  const title = data.site.silver.page;

  return {
    props: {
      title,
      chartData
    }
  };
};
