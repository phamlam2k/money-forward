'use client';

interface ITotalItemProps {
  title: string;
  value: string | number;
}

const TotalItem = ({ title, value }: ITotalItemProps) => {
  return (
    <div className='flex flex-col items-center py-[40px] border shadow-lg rounded-md'>
      <div>
        <h1 className='text-[22px]'>{title}</h1>
      </div>

      <div>
        <h1 className='text-[22px] font-bold'>{value}</h1>
      </div>
    </div>
  );
};

export default TotalItem;
