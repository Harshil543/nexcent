import { Button } from "../button/Button";
import Heading from "../heading";
import { Input } from "../input";
import style from "./index.module.scss";

export function LoginCard(props: any) {
  return (
    <div className={style.card}>
      <div className={style.login}>
        <Heading fontSize="40px" title="Login" />
      </div>
      <div className={style.line}></div>
      <span>Welcome onboard with us!</span>
      <div className={style.inputBox1}>
        <Input label="Username" />
      </div>
      <div className={style.inputBox2}>
        <Input label="Password" />
      </div>
      <div className={style.forgetText}>Forget Password?</div>
      <div className={style.inputBox2}>
        <Button label="LOGIN" />
      </div>
      <div className={style.RegisterText}>
        New to Logo? <span>Register </span>Here
      </div>
    </div>
  );
}
