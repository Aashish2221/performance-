import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { toCurrency } from '@/utils/utilities';
const GoldPrice = ({ spotPrice, data }: any) => {
  return (
    <div className='flex h-full flex-col items-center rounded-lg bg-gray-100 p-1 sm:flex-row sm:p-2'>
      <span className='pr-2 pl-1 text-sm font-medium sm:px-0'>{data.name}</span>
      <div className='flex items-center sm:px-1'>
        <span className='text-xs font-medium text-primary sm:px-1 sm:text-sm'>
          {spotPrice && spotPrice.gold !== undefined
            ? toCurrency(data.currency)
            : 'N/A'}
        </span>
        {spotPrice && spotPrice.goldChange !== undefined ? (
          <>
            {spotPrice.goldChange < 0 ? (
              <MdArrowDropDown size={24} fill='#FF2A2A' />
            ) : (
              <MdArrowDropUp size={24} fill='#27D24A' />
            )}
            <span
              className={`text-xs font-medium sm:text-sm ${
                spotPrice.goldChange < 0 ? 'text-danger' : 'text-success'
              }`}
            >
              {Math.abs(data.goldChange)}
            </span>
          </>
        ) : (
          'N/A'
        )}
      </div>
    </div>
  );
};
export default GoldPrice;
