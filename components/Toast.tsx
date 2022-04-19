import React, { useRef, useState } from "react";
import type { MutableRefObject } from "react";
import {
  BiErrorCircle as ErrorIcon,
  BiInfoCircle as InfoIcon,
} from "react-icons/bi";
import { IoIosCheckmarkCircleOutline as SuccessIcon } from "react-icons/io";
import { ImWarning as WarningIcon } from "react-icons/im";

import styles from "../styles/toast.module.css";

const useToast = (message: any, variant = "success", style = {}) => {
  const [show, setShow] = useState<boolean>(false);
  const toastRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const openToast = () => {
    if (toastRef.current) {
      console.log("TOAST>CURRENT", toastRef.current);
      toastRef.current.classList.add(styles.show);
      setTimeout(function () {
        toastRef.current.classList.remove(styles.show);
      }, 3000);
    } else {
      console.log("NOPE");
    }
  };
  let toastStyle: React.CSSProperties | undefined, icon: {} | null | undefined;
  switch (variant) {
    case "success":
      toastStyle = {
        backgroundColor: "#adebad",
        borderTop: "5px solid #2db92d",
      };
      icon = <SuccessIcon className={styles.icon} fill="#2db92d" />;
      break;
    case "error":
      toastStyle = {
        backgroundColor: "#ffcccc",
        borderTop: "5px solid #ff0000",
      };
      icon = <ErrorIcon className={styles.icon} fill="#ff0000" />;
      break;
    case "info":
      toastStyle = {
        backgroundColor: "#ccf2ff",
        borderTop: "5px solid #33ccff",
      };
      icon = <InfoIcon className={styles.icon} fill="#33ccff" />;
      break;
    case "warning":
      toastStyle = {
        backgroundColor: "#fff0b3",
        borderTop: "5px solid #ffcc00",
      };
      icon = <WarningIcon className={styles.icon} fill="#ffcc00" />;
      break;
    default:
      break;
  }
  const ToastComponent = () => {
    return (
      <React.Fragment>
        <div
          ref={toastRef}
          className={styles.snackbar}
          style={{ ...toastStyle, ...style }}
        >
          <div className={styles.content}>
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
