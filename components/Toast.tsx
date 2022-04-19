import React, { useState } from "react";
import {
  BiErrorCircle as ErrorIcon,
  BiInfoCircle as InfoIcon,
} from "react-icons/bi";
import { IoIosCheckmarkCircleOutline as SuccessIcon } from "react-icons/io";
import { ImWarning as WarningIcon } from "react-icons/im";

const useToast = (message: string, variant = "success", style = {}) => {
  const [show, setShow] = useState<boolean>(false);
  const openToast = () => {
    setShow(true);
    setTimeout(function () {
      setShow(false);
    }, 3000);
  };
  let toastStyle: string;
  let icon: {} | null | undefined;
  switch (variant) {
    case "success":
      toastStyle = "bg-green-800 text-white";
      icon = <SuccessIcon className="h-[25px] w-[25px] mr-[10px] text-white" />;
      break;
    case "error":
      toastStyle = "bg-red-800 text-white";
      icon = <ErrorIcon className="h-[25px] w-[25px] mr-[10px] text-white" />;
      break;
    case "info":
      toastStyle = "bg-grey-800 text-white";
      icon = <InfoIcon className="h-[25px] w-[25px] mr-[10px] text-white" />;
      break;
    case "warning":
      toastStyle = "bg-yellow-800 text-white";
      icon = <WarningIcon className="h-[25px] w-[25px] mr-[10px] text-white" />;
      break;
    default:
      break;
  }
  const ToastComponent = () => {
    return (
      <React.Fragment>
        <div
          className={`${toastStyle} min-w-[250px] -ml-[125px] rounded text-black text-center p-4 fixed z-10 left-[50%] bottom-[200px] ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="flex text-xl font-bold">
            {icon}
            {message}
          </div>
        </div>
      </React.Fragment>
    );
  };
  return { openToast, ToastComponent };
};

export default useToast;
