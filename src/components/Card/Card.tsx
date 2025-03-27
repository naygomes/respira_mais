import { CardProps } from '@/interfaces';
import { Text } from '@/components';

const Card = ({ title, iqarLevel, chartData }: CardProps) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-primary font-bold text-xl">{title}</h1>
      <p className="text-dark text-xs text-xl">
        Qualidade do Ar: <b>{iqarLevel}</b>
      </p>
    </div>
  );
};

export default Card;
