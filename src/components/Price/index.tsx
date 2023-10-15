import { FC } from 'react';

export interface IPriceProps {
  amount: number;
}

const Price: FC<IPriceProps> = ({ amount }) => {
  return (
    <span className="font-semibold text-2xl">
      <span className="text-green-700 mr-0.5">$</span>
      {amount}
    </span>
  );
};

export default Price;
