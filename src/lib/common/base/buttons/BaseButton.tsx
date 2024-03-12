import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | string;
  variant?: 'container' | 'border';
}

const BaseButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, disabled, variant = 'container' } = props;

  let buttonBgColor =
    variant === 'border'
      ? 'border border-[#FF0000] text-[#FF0000] cursor-pointer bg-transparent'
      : 'bg-[#FF0000] text-white cursor-pointer';

  if (disabled) {
    buttonBgColor = 'bg-[#808080] cursor-not-allowed';
  }

  return (
    <button
      className={`${buttonBgColor} w-[120px] h-[36px] rounded-[5px]`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
