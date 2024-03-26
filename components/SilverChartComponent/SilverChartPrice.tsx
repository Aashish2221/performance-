import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { toCurrency } from '@/utils/utilities';
const SilverChartPrice = ({ spotPrice, data }: any) => {
  return (
    <div>
      <div className='flex flex-col items-center rounded-lg bg-gray-100 p-1 sm:flex-row sm:p-2'>
        <span className='text-sm font-medium'>{data.name}</span>
        <div className='flex items-center'>
          <span className='px-1 text-sm font-medium text-primary'>
            {spotPrice && spotPrice.silver !== undefined
              ? toCurrency(data.currency)
              : 'N/A'}
          </span>
          {spotPrice && spotPrice.silverChange !== undefined ? (
            <>
              {spotPrice.silverChange < 0 ? (
                <MdArrowDropDown size={24} fill='#FF2A2A' />
              ) : (
                <MdArrowDropUp size={24} fill='#27D24A' />
              )}
              <span
                className={`text-sm font-medium ${
                  spotPrice.silverChange < 0 ? 'text-danger' : 'text-success'
                }`}
              >
                {Math.abs(data.silverChange)}
              </span>
            </>
          ) : (
            'N/A'
          )}
        </div>
      </div>
    </div>
  );
};
export default SilverChartPrice;
