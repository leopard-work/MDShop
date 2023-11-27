import Text from "@components/text/text";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      name: "Children",
      description: "Text content",
    },
    type: {
      type: "string",
      name: "Type",
      control: "radio",
      options: [
        "lead",
        "large",
        "base",
        "small",
        "extrasmall",
        "extraextrasmall",
        "display",
      ],
      description: "Text type",
    },
    variant: {
      type: "string",
      name: "Variant",
      control: "radio",
      options: [null, "h1", "h2", "h3", "h4"],
      description: "Display type variant (only works with display type)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const lead_text: Story = {
  args: {
    children: "Lead text",
    type: "lead",
    variant: null,
  },
};

export const large_text: Story = {
  args: {
    children: "Large text",
    type: "large",
    variant: null,
  },
};

export const base_text: Story = {
  args: {
    children: "Base text",
    type: "base",
    variant: null,
  },
};

export const small_text: Story = {
  args: {
    children: "Small text",
    type: "small",
    variant: null,
  },
};

export const extrasmall_text: Story = {
  args: {
    children: "Extrasmall text",
    type: "extrasmall",
    variant: null,
  },
};

export const extraextrasmall_text: Story = {
  args: {
    children: "Extraextrasmall text",
    type: "extraextrasmall",
    variant: null,
  },
};

export const display_h1_text: Story = {
  args: {
    children: "Display h1 text",
    type: "display",
    variant: "h1",
  },
};

export const display_h2_text: Story = {
  args: {
    children: "Display h2 text",
    type: "display",
    variant: "h2",
  },
};

export const display_h3_text: Story = {
  args: {
    children: "Display h3 text",
    type: "display",
    variant: "h3",
  },
};

export const display_h4_text: Story = {
  args: {
    children: "Display h4 text",
    type: "display",
    variant: "h4",
  },
};
