import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResponsiveGrid } from "./responsive-grid";

export default {
  title: 'Example/ResponsiveGrid',
  component: ResponsiveGrid,
  argTypes: {},
} as ComponentMeta<typeof ResponsiveGrid>;

const Template: ComponentStory<typeof ResponsiveGrid> = (args) => <ResponsiveGrid {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  // label: 'Button',
};
