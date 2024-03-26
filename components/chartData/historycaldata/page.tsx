import React, { Suspense, memo, useEffect, useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
type Props = {
  metal: string;
  spotpricedata: number;
};
const Historicaldatatable = memo(function Historicaldatatable({
  metal
}: Props) {
  const [historicalData, setHistoricalData] = useState([]);
  useEffect(() => {
    const worker = new Worker(
      new URL('public/WebWorker/historicaldatatable.worker', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = (e) => {
      setHistoricalData(e.data);
    };
    worker.postMessage(metal);
    return () => {
      worker.terminate();
    };
  }, [metal]);
  return (
    <div className='flex w-full flex-col items-center justify-center rounded-lg bg-white px-2 py-2 shadow-lg'>
      <table className='w-full bg-white sm:m-2'>
        <thead className='items-start text-center text-[18px] font-semibold text-dark-black'>
          <tr>
            <th className='px-1 py-1 text-start'>Time</th>
            <th className='px-1 py-1 text-start'>Change</th>
            <th className='px-1 py-1 text-start'>Change%</th>
          </tr>
        </thead>
        <tbody className='items-start justify-start text-center text-[15px] font-medium'>
          <Suspense
            fallback={
              <tr
                className='bg-white px-1 py-1 text-gray-700'
                key={'table1'}
              ></tr>
            }
          >
            {historicalData.map((data: any, index: number) => (
              <>
                <tr
                  className={
                    index % 2 === 0
                      ? ' bg-white px-1 py-1 text-gray-700'
                      : ' bg-gray-100 px-1 py-1 text-gray-700'
                  }
                  key={index}
                >
                  <td className='w-fit whitespace-normal px-2 py-1 text-start text-[12px]'>
                    {data.timeframe}
                  </td>
                  <td className='w-fit px-2 py-1'>
                    {Number(parseFloat(data.silverChange).toFixed(2)) < 0 ||
                    Number(parseFloat(data.goldChange).toFixed(2)) < 0 ? (
                      <div className='flex items-center'>
                        <MdArrowDropDown size={24} fill='#FF2A2A' />
                        <span className={'text-red-600'}>
                          {metal === 'Silver'
                            ? Math.abs(parseFloat(data.silverChange)).toFixed(2)
                            : Math.abs(parseFloat(data.goldChange)).toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <div className='flex items-center'>
                        <MdArrowDropUp size={24} fill='#27D24A' />
                        <span className={'text-green-600'}>
                          {metal === 'Silver'
                            ? Math.abs(parseFloat(data.silverChange)).toFixed(2)
                            : Math.abs(parseFloat(data.goldChange)).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className='w-fit px-2 py-1'>
                    {Number(parseFloat(data.silverChangePercent).toFixed(2)) <
                      0 ||
                    Number(parseFloat(data.goldChangePercent).toFixed(2)) <
                      0 ? (
                      <div className='flex items-center'>
                        <MdArrowDropDown size={24} fill='#FF2A2A' />
                        <span className='text-red-600'>
                          {metal === 'Silver'
                            ? Math.abs(
                                parseFloat(data.silverChangePercent)
                              ).toFixed(2) + '%'
                            : Math.abs(
                                parseFloat(data.goldChangePercent)
                              ).toFixed(2) + '%'}
                        </span>
                      </div>
                    ) : (
                      <div className='flex items-center'>
                        <MdArrowDropUp size={24} fill='#27D24A' />
                        <span className='text-green-600'>
                          {metal === 'Silver'
                            ? Math.abs(
                                parseFloat(data.silverChangePercent)
                              ).toFixed(2) + '%'
                            : Math.abs(
                                parseFloat(data.goldChangePercent)
                              ).toFixed(2) + '%'}
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              </>
            ))}
          </Suspense>
        </tbody>
      </table>
    </div>
  );
});
export default Historicaldatatable;
