const typeVariants = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type titleProps = {
  children: string;
  type: (typeof typeVariants)[number];
};
