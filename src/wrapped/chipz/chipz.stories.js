import React from "react";
import { Chipz } from "./chipz";

export default {
  title: "Components/Chipz",
  component: Chipz,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Chipz {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  label: "Hello World"
};

export const Regular = Template.bind({});
Regular.args = {
  variant: "",
  label: "This is Regular"
};
