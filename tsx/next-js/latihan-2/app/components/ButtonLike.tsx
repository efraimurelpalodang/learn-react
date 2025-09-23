"use client"
import { useState } from "react";
import { ButtonLikeSchema } from "../ts/types";

export default function ButtonLike(props: ButtonLikeSchema) {
  const [like, setLike] = useState(0);

  function handleLike() {
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={handleLike} className={props.style}>
        Like : {like}
      </button>
    </div>
  );
}
