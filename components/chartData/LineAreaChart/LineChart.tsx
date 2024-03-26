import React, { Suspense, useEffect, useRef } from 'react';
import { ScriptableContext } from 'chart.js';
import Chart from 'chart.js/auto';
import dayjs from 'dayjs';
const LineChart = ({
  chartdata,
  TimeFrame,
  Number,
  currentSpotPrice,
  metal
}: any) => {
  const chartRef = useRef<Chart | null>(null);
  useEffect(() => {
    setTimeout(() => {
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        if (ctx) {
          const newChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: [
                ...chartdata
                  .filter((x: { dateNTime: any }) => x.dateNTime)
                  .map((x: { dateNTime: string }) => {
                    if (TimeFrame === 'week') {
                      return dayjs(x.dateNTime.slice(0, 10)).format('D MMM');
                    } else if (
                      (TimeFrame === 'month' && Number === 12) ||
                      (TimeFrame === 'month' && Number === 60) ||
                      (TimeFrame === 'month' && Number === 120) ||
                      (TimeFrame === 'month' && Number === 500)
                    ) {
                      return dayjs(x.dateNTime.slice(0, 10)).format('MMM YY');
                    } else if (TimeFrame === 'month') {
                      return dayjs(x.dateNTime.slice(0, 10)).format('D MMM');
                    } else if (TimeFrame === 'year' && Number === 1) {
                      return dayjs(x.dateNTime.slice(0, 10)).format('MMM YY');
                    } else {
                      return x.dateNTime.slice(0, 10);
                    }
                  }),
                currentSpotPrice.dateNTime.slice(0, 10)
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
                  data: chartdata
                    .map((dataPoint: { silver: any; gold: any }) => {
                      return metal === 'Silver'
                        ? dataPoint.silver
                        : dataPoint.gold;
                    })
                    .concat([
                      metal === 'Silver'
                        ? currentSpotPrice.silver
                        : currentSpotPrice.gold
                    ])
                }
              ]
            },
            options: {
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
            }
          });
          chartRef.current = newChart;
        }
      }
    }, 0);
  }, [chartdata, metal,currentSpotPrice]);
  return (
    <>
      <Suspense
        fallback={
          <section className='h-[200px] w-full items-start bg-gray-100 sm:w-[350px] md:h-[300px] 2xl:w-[1050px]'></section>
        }
      >
        <canvas
          id='myChart'
          width='400'
          height='400'
          className='h-[200px] items-start bg-gray-100 sm:w-[700px] md:h-[300px] 2xl:w-[1050px]'
        ></canvas>
      </Suspense>
    </>
  );
};
export default LineChart;
