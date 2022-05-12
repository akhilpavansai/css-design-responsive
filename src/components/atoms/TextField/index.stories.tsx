import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField from ".";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const DefaultTextField = Template.bind({});
DefaultTextField.args = {
  placeholder: "transparency",
};
