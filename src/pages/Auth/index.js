import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../../modules/LoginForm/components/LoginForm";
import RegisterForm from "../../modules/RegisterForm/components/RegisterForm";
import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Routes>
          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<RegisterForm />} />
        </Routes>
      </div>
    </section>
  );
};

export default Auth;
