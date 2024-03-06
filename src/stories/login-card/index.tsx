import { useDispatch } from "react-redux";
import { Button } from "../button/Button";
import Heading from "../heading";
import { Input } from "../input";
import style from "./index.module.scss";
import { Password } from "../password";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export function LoginCard(props: any) {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const responseMessage = (response: any) => {
    console.log(response, "response");
    dispatch.Auth.Login(response, () => {
      navigation("/list");
    });
  };

  return (
    <div className={style.card}>
      <div className={style.login}>
        <Heading fontSize="40px" title="Login" />
      </div>
      <div className={style.line}></div>
      <span>Welcome onboard with us!</span>
      <div className={style.inputBox1}>
        <Input
          label="Username"
          placeholder="Enter Username"
          tabIndex={1}
          disable={true}
        />
      </div>
      <div className={style.inputBox2}>
        <Password
          type="Password"
          placeholder="Enter Password"
          label="Password"
          tabIndex={2}
          disable={true}
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
      <GoogleLogin
        // className={style.btn}
        // text="signin"
        onSuccess={responseMessage}
      />
    </div>
  );
}
