import Image from "next/image";
export const BlogSideCard = ({ blogData }: any) => {
    return (
      <div className='container rounded-md shadow-md shadow-slate-300'>
        <Image
          src={blogData?.image ?? ''}
          alt={blogData?.title}
          height={800}
          width={800}
          className='p-4 lg:w-full'
          loading='lazy'
        />
        <p className='p-4 text-justify text-sm leading-[1.4rem] text-[#5c5b5b]'>
          {blogData.shortDescription}
        </p>
      </div>
    );
  };