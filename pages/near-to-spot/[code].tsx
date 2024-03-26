import MiscSkeleton1 from '@/components/Loaders/Misc1/MiscSkeleton1';
import TopProductItem from '@/containers/home/TopProductItem';
import data from '@/data';
import { GetTopProductsBy } from '@/interfaces/typeinterfaces';
import { getNearToSpot } from '@/services/spot-prices';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Suspense, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoGridSharp } from 'react-icons/io5';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchSpinner from '@/components/Loaders/SearchSpinner';

export default function NearToSpot({
  title,
  description,
  searchKeyword,
  topProducts
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [view, setView] = useState<'detailed' | 'grid'>('grid');
  const [hydrated, setHydrated] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);
  const [products, setProducts] = useState(topProducts.homePageProductDetails);
  useEffect(() => {
    setHydrated(true);
  }, [topProducts]);
  useEffect(() => {
    setPageNumber(2);
    setHasMore(true);
    setProducts(topProducts.homePageProductDetails);
  }, [searchKeyword]);

  const fetchProducts = async () => {
    try {
      const res = await getNearToSpot(
        'NearToSpot',
        searchKeyword,
        12,
        pageNumber
      );
      if (res && res.data && res.data.homePageProductDetails.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts: any) => [
          ...prevProducts,
          ...res.data.homePageProductDetails
        ]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleLoadMore = () => {
    fetchProducts();
  };

  const itemListElement = products?.map((product: any, index: number) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: 'https://www.bullionmentor.com/' + product.shortName
  }));
  const trendingProductsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: itemListElement
  };
  return (
    <>
      {/* ******************** SEO CONTENT ******************** */}
      <Head>
        <title>{title}</title>
        <meta property='og:type' content={data.OGTags.home.type} />
        <meta
          property='og:url'
          content={`${process.env.WEBSITE_URL}/near-to-spot/${searchKeyword}`}
          key={`${process.env.WEBSITE_URL}/near-to-spot/${searchKeyword}`}
        />
        <link
          rel='canonical'
          href={`${process.env.WEBSITE_URL}/near-to-spot/${searchKeyword}`}
        />
        <link
          rel='preload'
          as='image'
          href='https://res.cloudinary.com/bullionmentor/image/upload/Banners/Royal-Canadian-Mint_xqgsz4.webp'
        />
        <link
          rel='preload'
          as='image'
          href='https://res.cloudinary.com/bullionmentor/image/upload/v1689165092/Banners/Canadian-Maple-Leaf_c1juxl.webp'
        />
        <link
          rel='preload'
          as='image'
          href='https://res.cloudinary.com/bullionmentor/image/upload/Banners/Bullion-Mentor-motive_anp3hj.webp'
        />
        <script
          async
          defer
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(trendingProductsSchema)
          }}
          key='product-jsonld'
        ></script>
      </Head>
      {/* ******************** GRADIENT ******************** */}
      <div className='bg-gradient-to-b from-secondary via-white to-white text-dark-black'>
        <div className='container mx-auto pt-8 md:mt-2  lg:mt-1'>
          <h1 className='mb-2 mt-3 text-lg font-bold md:text-xl lg:mt-0'>
            Explore the best prices of bullion with Bullion Mentor
          </h1>
          <p
            className='hidden text-xs text-slate-600 md:text-base lg:block'
            dangerouslySetInnerHTML={{
              __html: topProducts.homepagecontent?.seoContent
            }}
          ></p>
        </div>
      </div>
      {hydrated === true ? (
        <div className='container mx-auto text-dark-black'>
          <div className='sm:flex sm:flex-row'>
            {/* <div className='flex flex-col gap-2 md:grid md:grid-cols-5'> */}

            {/* ******************** LEFT ADVERTISEMENT ******************** */}
            <div className='hidden flex-col gap-4 sm:sticky sm:top-32 sm:block sm:w-[32%] md:h-fit md:flex-1   lg:flex lg:w-[20%]'>
              <div className='flex w-full items-center justify-center rounded-md '>
                <Image
                  src='https://res.cloudinary.com/bullionmentor/image/upload/Banners/Silver-Coins_gxr8un.webp'
                  alt=''
                  height={350}
                  width={350}
                  className='rounded-lg'
                  loading='eager'
                />
              </div>
              <div className='flex  w-full items-center justify-center rounded-md'>
                <Image
                  src='https://res.cloudinary.com/bullionmentor/image/upload/v1689165092/Banners/Canadian-Maple-Leaf_c1juxl.webp'
                  alt=''
                  height={350}
                  width={350}
                  className='rounded-lg pt-4 lg:pt-0'
                  loading='eager'
                />
              </div>
            </div>



            {/* ******************** PAGE CONTENT ******************** */}
            <div className='md:flex-2 sm:w-[68%] lg:w-[60%]'>
            <div className='flex flex-col gap-2 '>

              <div className='col-span-3 mx-0 grow gap-0 lg:mx-4 lg:gap-4'>
                {/* ******************** VIEW TOGGLE BUTTONS ******************** */}
                <div className='mb-4 hidden justify-end gap-6 md:flex'>
                  {/* ******************** DETAIL VIEW BUTTON ******************** */}
                  <button
                    onClick={() => setView('detailed')}
                    className={`flex items-center gap-2 px-4 py-2 ${
                      view === 'detailed'
                        ? 'rounded-md bg-primary text-white'
                        : 'bg-white'
                    }`}
                  >
                    <GiHamburgerMenu size={25} />
                    <span>Detailed View</span>
                  </button>
                  {/* ******************** GRID VIEW BUTTON ******************** */}
                  <button
                    onClick={() => setView('grid')}
                    className={`flex items-center gap-2 px-4 py-2 ${
                      view === 'grid'
                        ? 'rounded-md bg-primary text-white'
                        : 'bg-white'
                    }`}
                  >
                    <IoGridSharp size={25} />
                    <span>Grid View</span>
                  </button>
                </div>
                {/* ******************** PRODUCT LIST ******************** */}
                <Suspense>
                  <InfiniteScroll
                    dataLength={products?.length}
                    next={handleLoadMore}
                    hasMore={hasMore}
                    loader={<SearchSpinner />}
                    scrollThreshold={0.3}
                  >
                    <div
                      className={`mb-5 grid gap-4 ${
                        view === 'detailed'
                          ? 'grid-cols-1 xl:grid-cols-2'
                          : 'grid-cols-2 xl:grid-cols-3'
                      }`}
                    >
                      {products?.map((product: any) => (
                        <TopProductItem
                          view={view}
                          key={product.productId}
                          {...product}
                        />
                      ))}
                    </div>
                  </InfiniteScroll>
                </Suspense>
              </div>









              {/* ******************** LEFT ADVERTISEMENT for mobile view ******************** */}
              <div className='mx-2 flex-col gap-4 sm:hidden md:static md:top-[32px] md:h-fit'>
                <div className='flex w-full items-center justify-center rounded-md sm:hidden'>
                  <Image
                    src='https://res.cloudinary.com/bullionmentor/image/upload/Banners/Silver-Coins_gxr8un.webp'
                    alt=''
                    height={350}
                    width={550}
                    className='rounded-lg'
                    loading='lazy'
                  />
                </div>
                <div className='flex w-full items-center justify-center rounded-md'>
                  <Image
                    src='https://res.cloudinary.com/bullionmentor/image/upload/v1689165092/Banners/Canadian-Maple-Leaf_c1juxl.webp'
                    alt=''
                    height={350}
                    width={550}
                    className='rounded-lg pt-4 lg:pt-0'
                    loading='lazy'
                  />
                </div>
              </div>
              {/***************** SEO CONTENT TOP  FOR MOBILE VIEW *****************/}
              <div
                className={`text-justify' mx-2 text-sm text-slate-600 sm:container sm:mx-auto sm:mt-10 md:relative md:col-span-4 md:mt-5  md:text-base`}
              >
                <div className='text-dark-black  lg:hidden'>
                  <div className=' md:mt-2 lg:mt-1'>
                    <p
                      className='text-sm text-slate-600 md:text-base lg:hidden'
                      dangerouslySetInnerHTML={{
                        __html: topProducts.homepagecontent?.seoContent
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* ******************** RIGHT ADVERTISEMENT ******************** */}
            <div className='md:flex-3 hidden sm:w-[0%] md:ml-4 lg:flex lg:w-[20%]'>
              <div className='hidden flex-col gap-4 pt-6 sm:sticky sm:top-32 sm:h-fit sm:pt-0 lg:flex'>
                <div className='flex  w-full items-center justify-center rounded-md'>
                  <Image
                    src='https://res.cloudinary.com/bullionmentor/image/upload/Banners/Bullion-Mentor-motive_anp3hj.webp'
                    alt=''
                    height={500}
                    width={500}
                    className='rounded-lg'
                    loading='eager'
                  />
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      ) : (
        <MiscSkeleton1 />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res
}) => {
  let getBy = query.getBy as GetTopProductsBy | undefined;
  const searchKeyword = String(query.code);
  getBy = 'NearToSpot';

  const userAgent = req.headers['user-agent'];
  const isMobile = userAgent
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    : false;
  const size = isMobile ? 6 : 9;
  const pageNumber = 1 as number;
  res.setHeader(
    'Cache-control',
    'public, sa-maxage=10, state-while-revalidate=59'
  );

  try {
    const response = await getNearToSpot(
      getBy,
      searchKeyword,
      size,
      pageNumber
    );
    const title = response.data.homepagecontent.metaTitle;
    const description = response.data.homepagecontent.metaDesc;
    const topProducts = response.data;
    return {
      props: {
        title,
        description,
        searchKeyword,
        topProducts
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        title: '',
        description: '',
        searchKeyword: '',
        topProducts: {}
      }
    };
  }
};
