import MiscSkeleton1 from '@/components/Loaders/Misc1/MiscSkeleton1';
import TopProductItem from '@/containers/home/TopProductItem';
import data from '@/data';
import { GetTopProductsBy } from '@/interfaces/typeinterfaces';
import { getTopProducts } from '@/services/spot-prices';
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
console.log(products)
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
      const response = await fetch(
        `${process.env.BASE_URL}/api/BestBullionDeals/GetHomePageProductsByLocation_SpotChart?GetBy=NearToSpot&Size=12&Pagenumber=${pageNumber}&MetalType=${searchKeyword}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const res = await response.json();
      const fetchedProducts = res.data.homePageProductDetails;

      if (fetchedProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts: any) => [...prevProducts, ...fetchedProducts]);
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLoadMore = () => {
    fetchProducts();
  };

  const itemListElement = products?.map(
    (product: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: 'https://www.bullionmentor.com/' + product.shortName
    })
  );
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
        <div className='container mx-auto py-8 md:mt-2  lg:mt-1'>
          <h1 className='mb-2 mt-3 text-lg font-bold md:text-xl lg:mt-0'>
            Explore the best prices of bullion with Bullion Mentor
          </h1>
          <p
            className='text-xs text-slate-600 md:text-base'
            dangerouslySetInnerHTML={{
              __html: topProducts.homepagecontent?.seoContent
            }}
          ></p>
        </div>
      </div>
      {hydrated === true ? (
        <div className='container mx-auto text-dark-black'>
          <div className='flex flex-col gap-2 md:grid md:grid-cols-5'>
            {/* ******************** LEFT ADVERTISEMENT ******************** */}
            <div className='hidden flex-col gap-4 sm:sticky sm:top-32 sm:h-fit sm:flex'>
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
                  dataLength={products.length}
                  next={handleLoadMore}
                  hasMore={hasMore}
                  loader={<SearchSpinner />}
                  scrollThreshold={0.3}
                >
                  <div
                    className={`grid gap-4 mb-5 ${
                      view === 'detailed'
                        ? 'grid-cols-1 xl:grid-cols-2'
                        : 'grid-cols-2 xl:grid-cols-3'
                    }`}
                  >
                    {products.map((product: any) => (
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
            <div className='sm:hidden flex-col gap-4 sm:sticky sm:top-32  sm:h-fit'>
              <div className='flex w-full items-center justify-center rounded-md '>
                <Image
                  src='https://res.cloudinary.com/bullionmentor/image/upload/Banners/Silver-Coins_gxr8un.webp'
                  alt=''
                  height={350}
                  width={550}
                  className='rounded-lg'
                  loading='eager'
                />
              </div>
              <div className='flex w-full items-center justify-center rounded-md'>
                <Image
                  src='https://res.cloudinary.com/bullionmentor/image/upload/v1689165092/Banners/Canadian-Maple-Leaf_c1juxl.webp'
                  alt=''
                  height={350}
                  width={550}
                  className='rounded-lg pt-4 lg:pt-0'
                  loading='eager'
                />
              </div>
            </div>
            {/* ******************** RIGHT ADVERTISEMENT ******************** */}
            <div className='hidden flex-col gap-4 pt-6 sm:sticky sm:top-32  sm:flex sm:h-fit lg:pt-0'>
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
        </div>
      ) : (
        <MiscSkeleton1 />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res
}) => {
  let getBy = query.getBy as GetTopProductsBy | undefined;
  const searchKeyword = query.code;
  getBy = 'NearToSpot';
  const size = 12 as number;
  const pageNumber = 1 as number;
  res.setHeader(
    'Cache-control',
    'public, sa-maxage=10, state-while-revalidate=59'
  );
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/BestBullionDeals/GetHomePageProductsByLocation_SpotChart?GetBy=${getBy}&Size=${size}&Pagenumber=${pageNumber}&MetalType=${searchKeyword}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const res = await response.json();
    const title = res.data.homepagecontent.metaTitle;
    const description = res.data.homepagecontent.metaDesc;
    const topProducts = res.data;
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
        topProducts: []
      }
    };
  }
};