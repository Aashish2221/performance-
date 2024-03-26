import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getBlogDetails } from '@/services/spot-prices';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import data from '@/data';
import { BlogSideCard } from '@/components/Blogs/blogsidecard';
import Blogslugskeleton from '@/components/Blogs/blogslugskeleton';

const Blog = ({
  title,
  description,
  blogData
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { code } = router.query;
  const formattedPath = `/blogs/${code}`;
  const canonicalUrl = data.WEBSITEUrl + formattedPath;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:url' content={canonicalUrl} key={canonicalUrl} />
        <link rel='canonical' href={canonicalUrl} />
      </Head>
      {blogData.length === 0 ? (
        <Blogslugskeleton />
      ) : (
        <div className='grid-col container mx-auto grid'>
          <div className='mx-auto mt-16 grid max-w-[1400px] grid-cols-12 gap-0 text-dark-black sm:container sm:gap-4 md:mt-10'>
            <div className='col-span-12 md:col-span-8'>
              <span className='lg:grid-col gap-1 lg:grid'>
                {blogData.image && (
                  <Image
                    src={blogData.image}
                    alt={blogData.title}
                    height={800}
                    width={800}
                    className='rounded-md lg:w-full'
                    loading='lazy'
                  />
                )}
                <header className='pt-5 text-lg font-semibold text-primary md:text-2xl md:font-medium'>
                  <h1>{blogData.title}</h1>
                </header>
                <section className='-mb-5 pt-4 text-xs font-bold italic text-[#5c5b5b]'>
                  <h6>
                    By BullionMentor on{' '}
                    {new Intl.DateTimeFormat('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    }).format(new Date(blogData.publishdate))}
                  </h6>
                </section>
                <div
                  id='innerText'
                  className='pt-2 text-justify text-[0.95rem] leading-[1.4rem] text-[#5c5b5b]'
                  dangerouslySetInnerHTML={{ __html: blogData?.description }}
                ></div>
              </span>
            </div>
            <div className='hidden md:col-span-4 md:block'>
              <BlogSideCard blogData={blogData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Blog;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const code = params?.code as string;
    const blogData = await getBlogDetails(code);
    const title = blogData.metatitle;
    const description = blogData.metaDescription;
    return { props: { title, description, blogData } };
  } catch (error) {
    return { notFound: true };
  }
};
