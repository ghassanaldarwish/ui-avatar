import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./index";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Marbella/Avatar",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <Avatar>
    <AvatarImage
      src="https://avatars.githubusercontent.com/u/35297725?v=4"
      alt="@wds-ui"
    />
    <AvatarFallback>GH</AvatarFallback>
  </Avatar>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
