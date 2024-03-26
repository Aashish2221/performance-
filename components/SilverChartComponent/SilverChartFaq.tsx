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
const Faq = () => {
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
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]  lg:w-full'
            >
              <AccordionTrigger
                onClick={() => handleOpen(1)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 1 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is Silver Bullion?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Silver bars are frequently referred to as silver bullion;
                however, this is a partial description. Any investment-grade
                silver offered in bars or coins with a purity of at least .995
                or .999 is silver bullion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-3'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(3)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 3 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is a Troy Ounce?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                A troy ounce is a Middle Ages-era unit of measurement used to
                weigh precious metals. The troy ounce, named after Troyes,
                France, is currently the industry standard for measuring
                precious metals such as gold, silver, and platinum. A troy ounce
                weighs 31.1034768 grams, more than an avoirdupois pound, which
                weighs 28.3495 grams. About 10% heavier than an avoirdupois
                ounce, the troy ounce is also called "t oz" or "oz t". The
                prices of valuable metals, like the spot prices of gold or
                silver, are usually indicated per troy ounce in international
                markets.
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
                What Factors Influence the Price of Silver?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Numerous factors impact the price of silver, such as:
                <ul className='list-inside list-disc md:list-disc'>
                  <li>
                    Fluctuations in the demand and supply within the commercial
                    and investment domains.
                  </li>
                  <li>
                    The economy&apos;s condition and the rate of inflation.
                  </li>
                  <li>Interest rates and monetary policy.</li>
                  <li>
                    Geopolitical turmoil and fluctuations in currency values are
                    two instances.
                  </li>
                  <li>
                    Technological advancements impact the industrial use of
                    silver.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-7'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(7)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 7 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                How is the Silver Spot Price Determined?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                To determine the spot price of silver, one must utilize the
                futures contract prices of the closest contract with the most
                excellent trading volume. The COMEX, a division of the Chicago
                Mercantile Exchange, is the primary exchange used to determine
                the silver spot price.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-9'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(9)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 9 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is a Premium Over the Spot Price of Silver?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                An extra charge added to the purchase of a silver bullion
                product is a premium over the spot silver price. Every product
                made of silver has a premium over the spot price, albeit some
                products have more significant premiums than others.
                Additionally, different dealers may charge varying premiums for
                their goods. On Bullion Mentor, you can compare the prices of
                various bullion products and make an informed decision.
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
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 2 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is the Silver Price Today?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Silver bullion prices are set and adjusted by the world market,
                which involves individuals and companies that buy and sell
                silver and are closely linked to the price of silver futures.
                The Commodity Exchange Inc. (COMEX), the New York Mercantile
                Exchange (NYMEX), the London Bullion Market (LBM), and the
                Chinese Gold and Silver Exchange Society (CGSE) are notable for
                their worldwide silver buyers and recognized precious metal
                exchanges. You can effortlessly monitor daily silver prices with
                BullionMentor.com, where you can also compare the best deals
                reputable dealers offer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-4'
              className='border-blue-gray-100  mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(4)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 4 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                Who Buys Silver?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Banks, big investment groups, and individuals are all actively
                purchase silver. Silver is also bought for use in various other
                industries, including electronics, aircraft, medical, and
                automobile industries. Individual investors also carefully check
                the price of an ounce of silver to safeguard their financial
                position. Similar to gold, silver is used as an investment to
                protect against the depreciation of fiat currencies. On the
                other hand, some acquire silver to have money to purchase goods
                and services if the dollar collapses.
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
                Is it a Good Time to Invest in Silver?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                Indeed, silver prices have increased by more than 5% since the
                start of the year in 2023. According to some experts, demand for
                silver may outpace supply, resulting in price support of at
                least $22 per ounce for the rest of the year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-8'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(8)}
                className={`border-b-0 text-start text-[15px] transition-colors ${
                  open === 8 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                Is the Spot Price of Silver Frequently Fluctuating?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                The price of silver on the spot is constantly changing. Recall
                that there is inherent risk associated with all investments. One
                of the main reasons so many investors hold a portion of their
                portfolio in precious metals like silver and gold is the overall
                favorable historical trend in the spot price. Silver is also an
                excellent hedge against inflation and uncertainty; you may
                reduce risk and counteract more volatile stocks by balancing
                riskier assets with the more reliable silver. One investment
                approach for silver is dollar-cost averaging. It entails
                regularly investing a predetermined sum of money into silver
                over an extended period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-10'
              className='border-blue-gray-100 mb-2 h-fit w-full rounded-[15px] px-2 py-1 shadow-[4px_4px_4px_rgba(0,0,0,0.10)]'
            >
              <AccordionTrigger
                onClick={() => handleOpen(10)}
                className={`border-b-0 text-start text-[15px] transition-colors  ${
                  open === 10 ? 'text-primary hover:!text-primary' : ''
                }`}
              >
                What is the Equivalent Amount of Silver Measured in Troy Ounces
                in a Kilogram?
              </AccordionTrigger>
              <AccordionContent className='pt-0 text-base font-normal'>
                It's important to note that 32.15 troy ounces can be found in
                every kilogram of silver. If you buy larger quantities of
                silver, you can decrease the average cost per gram.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Faq;
