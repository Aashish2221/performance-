/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
const GoldChartFaq = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <>
      <h3 className='px-2 pt-2 text-[18px] font-bold text-dark-black'>FAQs</h3>
      <div className='flex-row sm:flex'>
        <div className='w-full md:w-1/2'>
          <Accordion type='single' collapsible className='flex w-full flex-col'>
            <AccordionItem
              value='item-1'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)] lg:w-full'
            >
              <AccordionTrigger
                onClick={() => handleOpen(1)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 1 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is Gold Bullion?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Pure and precious metals are called &quot;bullion&quot;. Gold
                bullion are gold bars or coins made mainly for investment
                purposes. Typically, pure gold content ranges from .995 to .9999
                in gold bars and coins. Their costs and the current price of
                gold are determined by their weight and purity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-3'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(3)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 3 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                Why Does the Price of Gold Fluctuate?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Due to an increase in the number of currency units in
                circulation, which are greater in number than the amount of gold
                ounces available, prices tend to rise. Excessive money printing
                leads to more currency units chasing the same number of gold
                ounces. However, when governments behave responsibly and live
                within their means, the price of gold tends not to perform as
                well as other assets. The availability of mines also impacts
                gold prices. The demand for gold jewelry and geopolitical unrest
                are a few aspects of fluctuating gold prices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-5'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(5)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 5 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is the Highest Price of Gold in History?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                The highest price of gold in history was $2,171.36 per ounce,
                reached on December 1, 2023. Also, the COVID-19 pandemic caused
                the economic downturn, due to which the world recorded the
                highest gold price on March 8, 2022, of US $ 2,074.60.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-7'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(7)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 7 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What are bid and ask prices?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                The highest amount a buyer is willing to pay when buying shares
                of stock is referred to as the &quot;bid&quot;. On the other
                hand, the &quot;ask&quot; is the lowest amount at which a seller
                is ready to part with their commodity or shares. The difference
                between the ask or &quot;offer&quot; price and the bid
                price—typically lower—is called the spread.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-9'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(9)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 9 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What Causes the Gold Prices to Go Up?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Gold sold for about $20 per ounce a century ago. Gold prices per
                ounce have recently fluctuated between $1,200 and $1,900. That
                represents a significant nominal advancement over the previous
                century. The price of gold skyrocketed and is not without
                justification. This is also because of the significant currency
                depreciation used to quote gold prices. Regarding purchasing
                power, gold&apos;s value does not fluctuate over time.
                Naturally, there are significant cycles in which fluctuations in
                supply and demand, speculative activity, or manipulation can
                cause gold&apos;s value to fluctuate significantly. But gold,
                the ultimate form of money, will eventually reflect this
                depreciation by rising in value as long as the US Dollar Index
                continues declining.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='w-full md:w-1/2'>
          <Accordion type='single' collapsible className='flex w-full flex-col'>
            <AccordionItem
              value='item-2'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(2)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 2 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is a Troy Ounce?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                The troy ounce is the accepted unit of measurement for the
                weight of precious metals. This metric is equivalent to
                31.1034768 grams. So 1 troy ounce of gold means 31.1034768 grams
                of gold.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-4'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(4)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 4 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is Gold Bullion Worth?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Several factors can influence the value of gold - for instance,
                its form, weight, and price, which are constantly changing. The
                determination of gold&apos;s worth hinges on these crucial
                elements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-6'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(6)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 6 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                Which is a Better Investment Gold or Silver?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                For those who prefer stability over volatility, gold may be a
                better option because it is less prone to the wild fluctuations
                of the silver market. Investing in gold might be prudent to
                safeguard your wealth from inflation over an extended period.
                Conversely, silver could be a good choice for investors prepared
                to take on more significant risks in exchange for higher
                returns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-8'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(8)}
                className={`border-b-0 text-[15px] transition-colors ${
                  open === 8 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What Affects Spot Price?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Because so many things can influence the market, spot price
                constantly fluctuates. Among these elements are:
                <ul className='list-inside list-disc md:list-disc'>
                  <li className='font-bold'>
                    Politics:
                    <p className='font-thin'>
                      A political power shift has the power to affect spot
                      prices significantly; people tend to gravitate toward
                      safe-haven assets like precious metals if they are worried
                      about elections and policy changes, particularly those
                      that impact money.
                    </p>
                  </li>
                  <li className='font-bold'>
                    Economic developments:
                    <p className='font-thin'>
                      The federal government may alter interest rates, taxes, or
                      other policies. Spot prices may also fluctuate, and the
                      public&apos;s perception of the economy may shift from
                      favorable to unfavorable.
                    </p>
                  </li>
                  <li className='font-bold'>
                    Supply and demand:
                    <p className='font-thin'>
                      {' '}
                      the spot price of gold may fall during periods of excess
                      production and low demand, and the spot price may rise
                      during periods of limited production and high demand.
                    </p>
                  </li>
                  <li className='font-bold'>
                    Environmental conditions:
                    <p className='font-thin'>
                      environmental disasters and drastic changes also affect
                      the economy, which results in the fluctuation in spot
                      prices.
                    </p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default GoldChartFaq;
