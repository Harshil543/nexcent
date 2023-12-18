import styles from "./index.module.scss";

export function Input(props: any) {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{props.label}</label>
      <input
        className={styles.Input}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
