import React, { InputHTMLAttributes } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const BaseInput: React.FC<BaseInputProps> = (props) => {
  const { error } = props;

  let borderColor = 'border-[#808080]';

  if (error) {
    borderColor = 'border-[#FF0000]';
  }

  return (
    <div className={`border ${borderColor} w-full px-[10px] py-[5px]`}>
      <input
        className='border-none outline-none w-full bg-transparent'
        {...props}
      />
    </div>
  );
};

export default BaseInput;
