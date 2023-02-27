import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../ui/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'asd',
};
