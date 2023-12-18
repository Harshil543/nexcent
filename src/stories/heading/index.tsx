import styles from "./index.module.scss";

const Heading = (props: any) => {
  return (
    <>
      <h1
        className={styles.title}
        style={{
          color: props.color ? props.color : "#fff",
          fontSize: props.fontSize
        }}
      >
        {props.title}
      </h1>
    </>
  );
};

export default Heading;
