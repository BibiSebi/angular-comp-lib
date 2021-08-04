// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '@gfe/pattern-lib/src/lib/button';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
export default {
  title: 'Library/Button',
  component: ButtonComponent,
  badges: [BADGE.DEPRECATED, BADGE.OBSOLETE]

} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,

});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'second',
};

