import React from "react";
import { Alertz } from ".";

export default {
  title: "Wrapped/Alertz",
  component: Alertz,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Alertz {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  severity: "error",
  content: "Hello",
  children: "Hola",
};

export const Compact = Template.bind({});
Compact.args = {
  severity: "info",
  content: "Bye",
  children: "Adios",
};
