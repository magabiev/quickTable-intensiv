import Clock from '../../assets/icons/svg/Clock.tsx';
import { FC } from 'react';

interface IDurationProps {
  minutes?: number | string;
  type?: 'primary' | 'secondary';
}

const Duration: FC<IDurationProps> = ({ minutes = 0, type = 'primary' }) => {
  const color = type === 'primary' ? 'black' : '#7b7b7b';

  return (
    <div className="flex gap-x-1.5">
      <Clock color={color} />
      <span className={`text-[${color}] pt-[2px]`}>{minutes} min</span>
    </div>
  );
};

export default Duration;
