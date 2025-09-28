import type { CSSProperties, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}