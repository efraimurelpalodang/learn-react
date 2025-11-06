import type { ReactNode, MouseEvent, ChangeEvent } from "react";

export type Person = {
  nama: string;
  message: string;
  alamat: {
    provinsi: string,
    kota: string
  }
};

export type PropsTaskList = {
  items: string[];
}

export type TaskFormProps = {
  onSubmit: (value: string) => void;
};

export type Change = ChangeEvent<HTMLInputElement>;

export type buttonEvent = MouseEvent<HTMLButtonElement>;

export type PropsButtonParameter = {
  text: string;
  onSmash: () => void;
};

export type PropsButton = {
  text: string;
  messageAlert: string;
};

export type PropsHelloWorld = {
  text: string;
};

export type PropsTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
  isDeleted?: boolean;
};

export type PropsRow = {
  id: number;
  text: string;
};

export interface ChildContainer {
  children: ReactNode;
}
