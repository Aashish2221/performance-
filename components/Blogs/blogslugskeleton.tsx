const Blogslugskeleton = () => {
    return (
      <>
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
            {/* Main Content Skeleton */}
            <div className='col-span-12 md:col-span-8'>
              <div className='rounded-lg bg-gray-200 p-4'>
                <div className='animate-pulse'>
                  <div className='h-80 md:h-96 bg-gray-300 rounded-md mb-4'></div>
                  <div className='h-10 md:h-12 w-3/4 md:w-full bg-gray-300 rounded-md mb-2'></div>
                  <div className='h-8 md:h-10 w-1/2 md:w-full bg-gray-300 rounded-md'></div>
                  <div className='h-6 md:h-8 w-3/4 md:w-full bg-gray-300 rounded-md mt-4'></div>
                  <div className='h-6 md:h-8 w-full bg-gray-300 rounded-md mt-2'></div>
                  <div className='h-6 md:h-8 w-5/6 md:w-full bg-gray-300 rounded-md mt-2'></div>
                  <div className='h-6 md:h-8 w-full bg-gray-300 rounded-md mt-2'></div>
                </div>
              </div>
            </div>
            {/* Side Card Skeleton */}
            <div className='col-span-12 md:col-span-4'>
              <div className='rounded-lg bg-gray-200 p-4'>
                <div className='animate-pulse'>
                  <div className='h-80 md:h-96 bg-gray-300 rounded-md mb-4'></div>
                  <div className='h-10 md:h-12 w-3/4 md:w-full bg-gray-300 rounded-md mb-2'></div>
                  <div className='h-8 md:h-10 w-1/2 md:w-full bg-gray-300 rounded-md'></div>
                  <div className='h-6 md:h-8 w-3/4 md:w-full bg-gray-300 rounded-md mt-4'></div>
                  <div className='h-6 md:h-8 w-full bg-gray-300 rounded-md mt-2'></div>
                  <div className='h-6 md:h-8 w-5/6 md:w-full bg-gray-300 rounded-md mt-2'></div>
                  <div className='h-6 md:h-8 w-full bg-gray-300 rounded-md mt-2'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Blogslugskeleton;
  