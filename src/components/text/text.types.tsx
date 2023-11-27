const types = [
  "lead",
  "large",
  "base",
  "small",
  "extrasmall",
  "extraextrasmall",
] as const;

const variants = ["h1", "h2", "h3", "h4"] as const;

type textPropsDisplay = {
  children: string;
  type: "display";
  variant: (typeof variants)[number];
};

type textPropsNotDisplay = {
  children: string;
  type: (typeof types)[number];
  variant?: null;
};

export type textProps = textPropsDisplay | textPropsNotDisplay;
