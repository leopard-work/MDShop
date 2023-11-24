import { FC } from "react";
import { textProps } from "@components/text/text.types";

const Text: FC<textProps> = ({ children, type, variant }) => {
  const classType = undefined;
  return <p className={classType}>{children}</p>;
};

export default Text;
