import { useNavigate } from "react-router";

export function useHandleNavigate() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return {goBack}
}