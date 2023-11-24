import Title from "@components/title/title";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
  title: "Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      name: "Children",
      description: "Title content",
    },
    type: {
      type: "string",
      name: "Type",
      control: "radio",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Header type H1-H6",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Title_h1: Story = {
  args: {
    children: "Title H1",
    type: "h1",
  },
};

export const Title_h2: Story = {
  args: {
    children: "Title H2",
    type: "h2",
  },
};

export const Title_h3: Story = {
  args: {
    children: "Title H3",
    type: "h3",
  },
};

export const Title_h4: Story = {
  args: {
    children: "Title H4",
    type: "h4",
  },
};

export const Title_h5: Story = {
  args: {
    children: "Title H5",
    type: "h5",
  },
};

export const Title_h6: Story = {
  args: {
    children: "Title H6",
    type: "h6",
  },
};
