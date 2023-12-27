import style from "./index.module.scss";

interface ButtonProps {
  primary?: boolean;
  tabIndex?: number;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      tabIndex={props.tabIndex}
      type="button"
      className={style.button}
      style={{ backgroundColor: props.backgroundColor }}
      {...props}
    >
      {props.label}
    </button>
  );
};
