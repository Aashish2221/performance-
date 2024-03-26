import useToggle from '@/hooks/useToggle';
import Head from 'next/head';
import data from '@/data';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getBlogsData } from '@/services/spot-prices';
import InfiniteScroll from 'react-infinite-scroll-component';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import SearchSpinner from '@/components/Loaders/SearchSpinner';
const BlogCard = dynamic(() =>import ('@/components/Blogs/blogcard'))
const BlogSkeleton = dynamic(
  () => import('@/components/Blogs/indexskeleton')
);
const ShareModal = dynamic(
  () => import('@/components/ModalForm/ShareModal/shareModal')
);
export default function Blogs({
  title,
  description,
  initialBlogs
}: InferGetServerSidePropsType<typeof getServerSideProps> | any) {
  const [shareModal, toggleShareModal] = useToggle();
  const [share, setShare] = useState<any>(window.location.href);
  const [blogs, setBlogs] = useState<any[]>(initialBlogs);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [hydrate, setHydrated] = useState(true);

  const loadMoreBlogs = async () => {
    const nextPage = page + 1;
    let pageSize = 8;
    const newBlogs = await getBlogsData(pageSize, nextPage);
    if (newBlogs.length === 0) {
      setHasMore(false);
    } else {
      setBlogs((prevBlogs: any) => [...prevBlogs, ...newBlogs]);
      setPage(nextPage);
    }
  };
  const canonicalUrl = data.WEBSITEUrl + '/blogs';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:url' content={canonicalUrl} key={canonicalUrl} />
        <link rel='canonical' href={canonicalUrl} />
        {blogs.map((blog: any) => (
          <Link key={blog.id} rel='preload' as='image' href={blog.image} />
        ))}
      </Head>
      <Suspense fallback={<BlogSkeleton />}>
        {blogs[0].length === 0 ? (
          <BlogSkeleton />
        ) : (
          <div className='text-dark-black'>
            <h1 className='semibold container mx-auto mt-14 text-xl font-medium md:mt-16 md:text-2xl lg:mt-5'>
              Blog
            </h1>
            <InfiniteScroll
              dataLength={blogs.length}
              next={loadMoreBlogs}
              hasMore={hasMore}
              loader={<SearchSpinner />}
            >
              {/*  ----------------- blog section ------------- */}
              <section className='container mx-auto mt-14 grid grid-cols-12 gap-4 sm:mt-20 lg:mt-24 xl:mt-24 2xl:mt-28'>
                {blogs.map((blog: any) => (
                  <div
                    key={blog.id}
                    className='col-span-12 mx-auto mt-6 mb-10 h-[22rem] w-full rounded-[10px] shadow duration-300 hover:-translate-y-1 hover:scale-105 sm:col-span-6 sm:mb-20 sm:mt-6 sm:h-[23rem] lg:col-span-4 lg:mb-20 lg:mt-2 lg:h-96 2xl:col-span-3 2xl:h-[22rem]'
                  >
                    <Link
                      href={`/blogs/${blog.code}`}
                      as={`/blogs/${blog.code}`}
                      passHref
                      prefetch={false}
                    >
                      <BlogCard key={blog.id} blog={blog} />
                      <div className='flex sm:mt-1 2xl:mt-2'>
                        <span className='flex px-4 py-2 font-semibold text-primary shadow-none hover:underline hover:underline-offset-2 md:px-6 md:text-sm lg:px-4 lg:py-1 lg:text-sm'>
                          Read More
                          <BsArrowRight
                            className='ml-1 text-primary'
                            size={20}
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </section>
            </InfiniteScroll>
            {shareModal && (
              <ShareModal
                closeModal={toggleShareModal}
                shareUrl={share}
                p1={''}
                p2={''}
              />
            )}
          </div>
        )}
      </Suspense>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const isMobileDevice = req.headers['user-agent'] && /Mobi|Android/i.test(req.headers['user-agent']);
  const pageSize = isMobileDevice ? 3 : 8;
  res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59');
  const pageNumber = 1;
  const initialBlogs = await getBlogsData(pageSize, pageNumber);
  const blog = data.site.blog;
  const title = blog.page;
  const description = blog.description;
  return {
    props: { title, description, initialBlogs }
  };
};

