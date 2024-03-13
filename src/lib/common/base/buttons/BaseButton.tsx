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
      ? 'border border-[#f84040] text-[#f84040] cursor-pointer bg-transparent'
      : 'bg-[#f84040] text-white cursor-pointer';

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
