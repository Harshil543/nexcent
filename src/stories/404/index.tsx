import Lottie from "react-lottie";
import animationData from "../assets/lotties/I8lAfsC6lq.json";

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div style={{ backgroundColor: "#1a3137", height: "100vh", width: "100%" }}>
      <Lottie options={defaultOptions} height={800} width={800} />
    </div>
  );
}
