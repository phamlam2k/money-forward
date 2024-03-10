interface ITotalItemProps {
  title: string;
  value: string | number;
}

const TotalItem = ({ title, value }: ITotalItemProps) => {
  return (
    <div className='flex flex-col items-center p-[10px] border border-[#808080]'>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default TotalItem;
