import { useDispatch } from "react-redux";
import { Button } from "../button/Button";
import Heading from "../heading";
import { Input } from "../input";
import style from "./index.module.scss";
import { useEffect } from "react";
import { Password } from "../password";

export function LoginCard(props: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.Auth.getAllPosts(null, (res: any) => {
      console.log(res);
    });
  }, []);

  return (
    <div className={style.card}>
      <div className={style.login}>
        <Heading fontSize="40px" title="Login" />
      </div>
      <div className={style.line}></div>
      <span>Welcome onboard with us!</span>
      <div className={style.inputBox1}>
        <Input label="Username" placeholder="Enter Username" tabIndex={1} />
      </div>
      <div className={style.inputBox2}>
        <Password
          type="Password"
          placeholder="Enter Password"
          label="Password"
          tabIndex={2}
        />
      </div>
      <div className={style.forgetText}>
        <span tabIndex={3}>Forget Password?</span>
      </div>
      <div className={style.inputBox2}>
        <Button label="LOGIN" tabIndex={4} />
      </div>
      <div className={style.RegisterText}>
        New to Logo? <span tabIndex={5}>Register </span>Here
      </div>
    </div>
  );
}
