import styles from "./index.module.scss";

const IntroLayer = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.bgBox}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 h-100"></div>
            <div className="col-lg-6 ">
              <div className={styles.loginBox}>
                {children && { ...children }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLayer;
