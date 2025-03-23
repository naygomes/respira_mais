import { FC } from 'react';
import { getButtonClasses } from '@/utils';

type ButtonProps = {
  type: 'solid' | 'outline' | 'text';
  children: string;
};

const Button: FC<ButtonProps> = ({ type, children }) => {
  const buttonClasses = getButtonClasses(type);

  return (
    <button
      className={`${buttonClasses} py-2 px-4 text-3xl font-light hover:scale-110`}
    >
      {children}
    </button>
  );
};

export default Button;
