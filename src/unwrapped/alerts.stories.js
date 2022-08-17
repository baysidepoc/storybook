import React from "react";
import Alert from '@material-ui/lab/Alert';

export default {
  title: "Unwrapped/Alert",
  component: Alert,
  argTypes: {
    backgroundColor: { control: "color" },
    children:"aqui"
  },
};

const Template = (args) => <Alert {...args} />;

export const example1 = Template.bind({});
example1.args = {
  variant: "contained",
  color: "primary",
  children:"hola"

};
