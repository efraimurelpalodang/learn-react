import { useState } from "react";

export default function useLike() {
  const [isLiked, setIsLiked] = useState(false);
  const [isUnLiked, setIsUnLiked] = useState(false);
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  function handleToggleLike() {
    if (isLiked) {
      setLike(like - 1);
      setIsLiked(false);
    } else if (!isLiked && !isUnLiked) {
      setLike(like + 1);
      setIsLiked(true);
    } else if (!isLiked && isUnLiked) {
      setUnlike(0);
      setLike(like + 1);
      setIsLiked(true);
      setIsUnLiked(false);
    }
  }

  function handleToggleUnlike() {
    if (isUnLiked) {
      setUnlike(unlike - 1);
      setIsUnLiked(false);
    } else if (!isUnLiked && !isLiked) {
      setUnlike(unlike + 1);
      setIsUnLiked(true);
    } else if (!isUnLiked && isLiked) {
      setLike(0);
      setUnlike(unlike + 1);
      setIsUnLiked(true);
      setIsLiked(false);
    }
  }

  return {
    isLiked,
    like,
    handleToggleLike,
    handleToggleUnlike,
    unlike,
  };
}
