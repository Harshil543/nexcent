import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IntroLayer from "./stories/intro-layer";
import { LoginCard } from "./stories/login-card";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useSelector } from "react-redux";
import List from "./stories/list";
import NotFound from "./stories/404";

function PrivateRoute({ children }: any) {
  const auth = useSelector((state: any) => state.Auth);
  return auth?.user?.clientId && auth?.user?.credential ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

function ProtectedRoute({ children }: any) {
  const auth = useSelector((state: any) => state.Auth);
  return auth?.user?.clientId && auth?.user?.credential ? (
    <Navigate to="/list" />
  ) : (
    children
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <IntroLayer>
              <LoginCard />
            </IntroLayer>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/list"
        element={
          <PrivateRoute>
            <List />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
