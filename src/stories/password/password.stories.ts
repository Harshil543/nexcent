import type { Meta, StoryObj } from "@storybook/react";

import { Password } from "./index";

const meta = {
  title: "Example/Password",
  component: Password,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    backgroundColor: { control: "color" }
  }
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "input",
    placeholder: "Enter placeholder"
  }
};
