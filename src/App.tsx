import { Provider } from "react-redux";
import "./App.css";
import IntroLayer from "./stories/intro-layer";
import { LoginCard } from "./stories/login-card";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import store from "./rematch";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <IntroLayer>
            <LoginCard />
          </IntroLayer>
        </div>
      </Provider>
    </>
  );
}

export default App;
