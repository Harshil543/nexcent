import type { Meta, StoryObj } from "@storybook/react";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    backgroundColor: { control: "color" }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button"
  }
};
