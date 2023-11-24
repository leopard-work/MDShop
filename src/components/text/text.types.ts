const types = [
  "display",
  "lead",
  "large",
  "base",
  "small",
  "extrasmall",
  "extraextrasmall",
] as const;

const variants = ["h1", "h2", "h3", "h4"] as const;

export type textProps = {
  children: string;
  type: (typeof types)[number];
  variant?: (typeof variants)[number];
};
