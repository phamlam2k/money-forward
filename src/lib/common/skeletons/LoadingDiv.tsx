type ILoadingDivProps = {
  className: string;
};

const LoadingDiv = ({ className }: ILoadingDivProps) => {
  return <div className={`animate-pulse bg-slate-200 ${className}`}></div>;
};

export default LoadingDiv;
