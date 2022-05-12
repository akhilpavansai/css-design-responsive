import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextBoxWithButton from ".";

export default {
  title: "Molecules/TextBoxWithButton",
  component: TextBoxWithButton,
} as ComponentMeta<typeof TextBoxWithButton>;

const Template: ComponentStory<typeof TextBoxWithButton> = () => (
  <TextBoxWithButton />
);

export const DefaultTextBoxWithButton = Template.bind({});
DefaultTextBoxWithButton.args = {};
