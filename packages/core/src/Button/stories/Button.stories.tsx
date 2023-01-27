import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from '../Button';
import { ButtonProps } from '../Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Componente Button con todas sus variantes',
    docs: {
      description: {
        component: 'Componente de nerdearla',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Click me!',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me!',
  disabled: false,
};
