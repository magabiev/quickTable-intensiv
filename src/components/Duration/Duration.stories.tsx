import { StoryObj, Meta } from '@storybook/react';
import Duration from './index.tsx';

const meta: Meta<typeof Duration> = {
  component: Duration,
  argTypes: {
    type: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'Типы внешнего вида',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Duration>;

export const Default: Story = {
  args: {
    minutes: 20,
  },
};
