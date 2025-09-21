"use client";
import { ViewUserButtonProps } from "@/app/ts/types";
import { FC } from "react";


const ViewUserButton: FC<ViewUserButtonProps> = ({userId}) => {
  const handleButtonClick = () => {
    alert(`userId : ${userId}`);
  }

  return (
    <>
      <button onClick={handleButtonClick}>Lihat user</button>
    </>
  );
};

export default ViewUserButton;
