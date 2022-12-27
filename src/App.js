import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./modules/RegisterForm/components/RegisterForm";
import LoginForm from "./modules/LoginForm/components/LoginForm";

function App() {
  const isAuth = true;

  return (
    <div className="wrapper">
      <section className="auth">
        <div className="auth__content">
          <Routes>
            <Route path="signin" element={<LoginForm />} />
            <Route path="signup" element={<RegisterForm />} />
            <Route
              index
              element={isAuth ? <Home /> : <Navigate to={"/signin"} />}
            />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
