import Price from './index.tsx';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Price> = {
  component: Price,
};

export default meta;
type Story = StoryObj<typeof Price>;

export const Default: Story = {
  render: () => <Price amount={9.99} />,
};
