import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import { useState } from 'react';

const BlogSkeleton = () => {
  const [blogs, setBlogs] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div className='text-dark-black'>
      <h1 className='semibold container mx-auto mt-14 text-xl font-medium md:mt-16 md:text-2xl lg:mt-5'>
        Blog
      </h1>
      <section className='container mx-auto mt-14 grid grid-cols-12 gap-4 sm:mt-20 lg:mt-24 xl:mt-24 2xl:mt-28'>
        {blogs.map((blog: any) => (
          <Card key={blog.id} className='col-span-12 mx-auto mt-6 mb-10 h-[22rem] w-full duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md sm:col-span-6 sm:mb-20 sm:mt-6 sm:h-[23rem] lg:col-span-4 lg:mb-20 lg:mt-2 lg:h-96 2xl:col-span-3 2xl:h-[22rem]'>
            <div className='animate-pulse'>
              <div className='h-40 rounded-t-lg bg-gray-200'></div>
              <CardBody className='px-4 pt-2 sm:pt-3 md:mt-3 md:pt-2 lg:-mt-2 xl:mt-1'>
                <h3 className='mb-2 h-10 w-3/4 bg-gray-200'></h3>
                <p className='mb-4 h-10 w-full bg-gray-200'></p>
                <p className='h-6 w-1/2 bg-gray-200'></p>
              </CardBody>
              <CardFooter className='flex sm:mt-1 2xl:mt-2'>
                <div className='flex w-full justify-center bg-gray-200 px-4 py-2 font-semibold text-primary'>
                  <div className='w-4/5'></div>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};
export default BlogSkeleton;
