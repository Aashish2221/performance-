/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from 'next/dynamic';
import Link from 'next/link';
const AllproductsOnSpot = dynamic(
  () => import('@/components/chartData/NearToSpotProducts/page')
);
const GoldChartNearToSpotProducts = () => {
  return (
    <div>
      {/* -------------------- NEAR TO SPOT PRODUCTS -------------------- */}
      <div className='flex w-full flex-col items-center justify-start gap-2'>
        {/* -------------------- HEADING -------------------- */}
        <div className='flex w-full flex-row items-center justify-between pt-3'>
          <h3 className='text[15px] flex w-full flex-row items-start justify-start px-2 font-semibold text-dark-black'>
            Cheapest Coins, Bars & Rounds
          </h3>
          <div className=' mr-3 flex w-28 flex-row items-center justify-end'>
            <Link
              className='rounded-lg bg-black px-2 py-1 text-center text-[15px] text-white focus:bg-primary'
              href={'/near-to-spot/gold'}
              passHref
            >
              View All
            </Link>
          </div>
        </div>
        {/* -------------------- PRODUCTS LISTING -------------------- */}
        <div>
          <AllproductsOnSpot metalType='Gold' />
        </div>
      </div>
    </div>
  );
};
export default GoldChartNearToSpotProducts;
