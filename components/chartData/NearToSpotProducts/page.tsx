/* eslint-disable @next/next/link-passhref */
// import { selectUser } from '@/features/userSlice';
import { ProductItem } from '@/interfaces/typeinterfaces';
import React, { useEffect, useState } from 'react';
import TopProductItem from '@/containers/home/TopProductItem';
interface AllproductsOnSpotProps {
  metalType: string;
}
const AllproductsOnSpot: React.FC<AllproductsOnSpotProps> = ({ metalType }) => {
  const [neartospotProducts, setNeartospotProducts] = useState<ProductItem[]>(
    []
  );
  useEffect(() => {
    const worker = new Worker(
      new URL('public/WebWorker/topProductsWorker', import.meta.url)
    );
    worker.addEventListener('message', (event) => {
      setNeartospotProducts(event.data);
    });
    worker.postMessage({ metalType });
    return () => {
      worker.terminate();
    };
  }, [metalType]);
  const itemListElement = neartospotProducts
    .slice(0, 6)
    .map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.bullionmentor.com/charts/${product.shortName}` 
    }));
  const trendingProductsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement
  };
  return (
    <>
      <head>
        <script
          async
          defer
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(trendingProductsSchema)
          }}
          key='product-jsonld'
        />
      </head>
      <div
        className={`m-5 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:gap-y-4 lg:grid-cols-6`}
      >
        {neartospotProducts.slice(0, 6).map((product) => (
          <TopProductItem view='grid' key={product.productId} {...product} />
        ))}
      </div>
    </>
  );
};
export default AllproductsOnSpot;
