import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";


const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const StateColors: Story = {
  render: () => (
    <>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </>
  ),
};

export const BadgeSizes: Story = {
  render: () => (
    <>
      <Badge variant="neutral" size="tiny">
        Tiny
      </Badge>
      <Badge variant="neutral" size="small">
        Small
      </Badge>
      <Badge variant="neutral" size="normal">
        Normal
      </Badge>
      <Badge variant="neutral" size="large">
        Large
      </Badge>
    </>
  ),
};