import LoadingDiv from '../lib/common/skeletons/LoadingDiv';

export default function Loading() {
  return (
    <div className='p-[20px]'>
      <LoadingDiv className='w-[300px] h-[40px]' />
      <div className='grid grid-cols-3 gap-[20px] mt-[20px]'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <LoadingDiv key={index} className='w-full h-[150px] rounded-md' />
          ))}
      </div>
      <LoadingDiv className='w-[650px] h-[130px] rounded-md mt-[30px]' />
      <LoadingDiv className='w-full h-[200px] rounded-md mt-[65px]' />
    </div>
  );
}
