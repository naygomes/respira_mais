import { CardProps } from '@/interfaces';
import { LineChart } from '@/components';

const Card = ({ title, iqarLevel, recommendation, chartData }: CardProps) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-primary font-bold text-xl">{title}</h1>
      <p
        className="text-dark text-xs text-xl"
        style={{ margin: 0, marginTop: '1rem' }}
      >
        Qualidade do Ar: <b>{iqarLevel}</b>
      </p>
      <p className="text-dark text-xs text-xl">
        Recomendação: <b>{recommendation}</b>
      </p>
      <LineChart datasets={chartData} />
    </div>
  );
};

export default Card;
