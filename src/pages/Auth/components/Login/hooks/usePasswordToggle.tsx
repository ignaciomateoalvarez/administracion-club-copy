import { ReactElement, useState } from 'react'
import EyeInvisibleLogo from "@assets/login-icons/eye-invisible.svg?react";
import EyeVisibleLogo from "@assets/login-icons/eye-visible.svg?react";

type UsePasswordToggleReturnType = {
  InputType: string;
  ToggledIcon: ReactElement;
};

const usePasswordToggle = (): UsePasswordToggleReturnType => {
  const [visible, setVisibile] = useState(true)
  const ToggledIcon = visible ?
    <EyeInvisibleLogo onClick={() => setVisibile(visible => !visible)} /> :
    <EyeVisibleLogo onClick={() => setVisibile(visible => !visible)} />

  const InputType = visible ? "text" : "password"

  return {InputType, ToggledIcon}
}

export default usePasswordToggle