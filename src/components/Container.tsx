import type { ReactNode } from "react";
import styles from "./Container.modules.css";

interface ContainerProps {
  children: ReactNode | ReactNode[];
}

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
