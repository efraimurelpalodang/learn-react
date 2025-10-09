import type { ReactNode } from "react";

export type PropsHelloWorld = {
  text: string;
}

export type PropsTodo = {
  text: string;
  isCompleted: boolean;
  isDeleted?: boolean;
}

export interface ChildContainer {
  children: ReactNode;
}