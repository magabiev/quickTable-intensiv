import Price from '../Price';
import Duration from '../Duration';
import Bag from '../../assets/icons/svg/Bag.tsx';
import { FC } from 'react';
import { cn } from '../../utils/cn.ts';

interface IProductCardProps {
  title: string;
  price: number;
  src: string;
  calories: string | number;
  isViewed?: boolean;
}

const ProductCard: FC<IProductCardProps> = ({
  title,
  price,
  src,
  calories,
  isViewed = false,
}) => {
  const viewedStyles = cn(
    [isViewed, 'opacity-50'],
    'bg-[#f8f8f8] rounded-3xl py-[24px] px-[20px] flex flex-col gap-2 items-center w-[330px]'
  );

  return (
    <div className={viewedStyles}>
      <div className="text-2xl font-semibold">{title}</div>
      <Price amount={price} />
      <img alt="productImage" className="w-[200px]" src={src} />
      <div className="flex justify-between items-center w-[100%]">
        <div>
          <div className="font-bold mb-1.5">
            🔥<span className="ml-1">{calories}</span> Calories
          </div>
          <Duration minutes={20} />
        </div>
        <div className="p-3 bg-white rounded-2xl shadow-[0_8px_24px_rgba(149, 157, 165, 0.2)]">
          <Bag strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
