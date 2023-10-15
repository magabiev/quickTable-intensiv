import { StoryObj, Meta } from '@storybook/react';
import pizza from '../../assets/img.png';
import ProductCard from './index.tsx';

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  argTypes: {
    isViewed: {
      control: 'boolean',
      defaultValue: false,
      description: 'Просмотрена ли карточка',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    title: 'ProductCard',
    price: 9.99,
    src: pizza,
    calories: 44,
  },
};
