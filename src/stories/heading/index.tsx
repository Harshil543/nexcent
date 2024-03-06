import styles from "./index.module.scss";

const Heading = (props: any) => {
  return (
    <>
      <div
        className={styles.title}
        style={{
          color: props.color ? props.color : "#fff",
          fontSize: props.fontSize
        }}
      >
        {props.title}
      </div>
    </>
  );
};

export default Heading;
