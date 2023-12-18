import "./App.css";
import IntroLayer from "./stories/intro-layer";
import { LoginCard } from "./stories/login-card";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <IntroLayer>
          <LoginCard />
        </IntroLayer>
      </div>
      ;
    </>
  );
}

export default App;
