import React from "react";
import { Button} from "@material-ui/core";

export default {
  title: "Unwrapped/Button",
  component: Button,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Model1 = Template.bind({});
Model1.args = {
  variant: "contained",
  color: "primary",
  children:"hola"

};

export const Model2 = Template.bind({});
Model2.args = {
  variant: "outlined",
  color: "secondary",
  children:"hola"
};

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   type: "tertiary",
//   //primary: false,
//   buttonContent: "Hello",
//   size: "",
// };
