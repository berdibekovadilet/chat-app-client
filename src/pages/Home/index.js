import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      Home <Link to="signin">Войти</Link>
    </section>
  );
};

export default Home;
