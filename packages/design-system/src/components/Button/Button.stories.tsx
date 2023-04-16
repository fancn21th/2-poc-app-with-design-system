// Button.stories.ts|tsx
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = (args: JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />;

Primary.args = {
  label: 'Button',
  onClick: () => {
    return null;
  },
};
