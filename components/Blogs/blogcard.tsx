import Image from "next/image";
export default function BlogCard({ blog }: any) {
    return (
      <>
        <div className='mx-1 -mt-16 h-40 shadow-none sm:mt-[-4rem] sm:h-44 md:-mt-20 md:h-48 lg:-mt-[65px] lg:h-52 xl:mx-2 xl:-mt-20'>
          <Image
            src={blog.image}
            alt={blog.title}
            height={300}
            width={400}
            className='h-40 w-full rounded-[17px] px-1 sm:h-44 md:h-48 lg:h-48 xl:h-52'
            loading='eager'
            priority
          />
        </div>
        <div className='px-4 pt-2 sm:pt-3 md:mt-3 md:pt-2 lg:-mt-2 xl:mt-1'>
          <h3 className='h-10 text-[1.125rem] font-semibold leading-5 md:h-9'>
            {blog.title}
          </h3>
          <p className='h-10 pt-6 text-[0.95rem] leading-[1.4rem] text-gray-500'>
            {blog.shortDescription.length <= 29
              ? blog.shortDescription
              : blog.shortDescription.slice(0, 100) + '...'}
          </p>
          <h4 className='pt-24 text-xs font-normal italic text-[#5c5b5b] md:pt-20 lg:pt-24 2xl:pt-[4.5rem]'>
            By BullionMentor on{' '}
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            }).format(new Date(blog.publishdate))}
          </h4>
        </div>
      </>
    );
  }
  