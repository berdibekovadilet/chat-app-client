import React from "react";
import "./Auth.scss";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../../modules/LoginForm/components/LoginForm";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        {/* <Routes>
          <Route path="/signin" component={LoginForm} />
        </Routes> */}
        <LoginForm />
      </div>
    </section>
  );
};

export default Auth;
