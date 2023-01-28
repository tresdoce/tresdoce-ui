import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Example from '../Example';
import { ExampleProps } from '../Example.types';

export default {
  title: 'Components/Example',
  component: Example,
  parameters: {
    componentSubtitle: 'Componente de ejemplo',
    docs: {
      description: {
        component:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Lorem Ipsum is simply dummy text...',
    },
  },
} as Meta<typeof Example>;

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem Ipsum is simply dummy text...',
};
