import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | string;
}

const BaseButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, disabled } = props;

  const buttonBgColor = disabled
    ? 'bg-[#808080] cursor-not-allowed'
    : 'bg-[#FF0000] text-white cursor-pointer';

  return (
    <button
      className={`${buttonBgColor} w-[120px] h-[35px] rounded-[5px]`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
