// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button primary label="Button" />,
};
