import type { Meta, StoryObj } from "@storybook/react";

import { LoginCard } from "./index";

const meta = {
  title: "Example/LoginCard",
  component: LoginCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    backgroundColor: { control: "color" }
  }
} satisfies Meta<typeof LoginCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "input",
    placeholder: "Enter placeholder"
  }
};
