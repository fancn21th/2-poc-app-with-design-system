// Button.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
