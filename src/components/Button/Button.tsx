import { getButtonClasses } from '@/utils';
import { ButtonProps } from '@/interfaces';

const Button = ({ type = 'solid', children, onClick }: ButtonProps) => {
  const buttonClasses = getButtonClasses(type);

  return (
    <button
      className={`${buttonClasses} py-2 px-4 text-2xl font-light hover:scale-110 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
