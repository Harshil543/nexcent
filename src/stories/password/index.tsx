import { useState } from "react";
import styles from "./index.module.scss";

export function Password(props: any) {
  const [type, setType] = useState("password");
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{props.label}</label>
      <input
        disabled={props.disable}
        type={type}
        tabIndex={props.tabIndex}
        className={styles.Input}
        placeholder={props.placeholder}
      />
      {!props.disable && type === "password" ? (
        <i
          onClick={() => {
            setType("text");
          }}
          className="pi pi-eye"
        ></i>
      ) : (
        <i
          onClick={() => {
            setType("password");
          }}
          className="pi pi-eye-slash"
        ></i>
      )}
    </div>
  );
}
