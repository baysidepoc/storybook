import React from "react";
import { BoxWrapper } from "./Box2";

export default {
  title: "Agents/Box",
  component: BoxWrapper,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <BoxWrapper {...args} />;

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
