import React from "react";
import { Buttonz } from "./buttonz";

export default {
  title: "Molecules/Buttonz",
  component: Buttonz,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Buttonz {...args} />;

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
