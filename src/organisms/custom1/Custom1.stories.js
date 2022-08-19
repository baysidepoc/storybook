import React from "react";
import { Custom1 } from "./Custom1";

export default {
  title: "Organisms/FAQ Page",
  component: Custom1,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Custom1 {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  type: "secondary",
  semantic: "info",
  buttonContent: "Hello",
  compact: false,
};

export const Compact = Template.bind({});
Compact.args = {
  type: "primary",
  semantic: "good",
  buttonContent: "Hello",
  compact: false,
};
