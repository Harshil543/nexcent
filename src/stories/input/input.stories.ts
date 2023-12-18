import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./index";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    backgroundColor: { control: "color" }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "input",
    placeholder: "Enter placeholder"
  }
};
