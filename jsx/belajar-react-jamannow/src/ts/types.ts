import type { ReactNode } from "react";

export type PropsButton = {
  text: string;
  messageAlert: string;
}

export type PropsHelloWorld = {
  text: string;
}

export type PropsTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
  isDeleted?: boolean;
}

export type PropsRow = {
  id: number;
  text: string;
}

export interface ChildContainer {
  children: ReactNode;
}
