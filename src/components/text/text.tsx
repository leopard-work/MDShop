import { FC } from "react";
import { textProps } from "@components/text/text.types";
import styles from "./text.module.scss";

const Text: FC<textProps> = ({ children, type, variant = null }) => {
  const nameClass = variant ? `${type}-${variant}` : `${type}`;

  return <p className={styles[nameClass]}>{children}</p>;
};

export default Text;
