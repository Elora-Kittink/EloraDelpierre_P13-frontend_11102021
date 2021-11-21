import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";

import { login } from "../../actions/index";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogged = useSelector((state) => state.user.logged);

  const handleInputChange = (event) => {
    event.target.id === "username" ? setEmail(event.target.value) : setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));

    console.log(isLogged);
  };

  if (isLogged) {
    return <Redirect to="/user" />;
  }
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={handleInputChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleInputChange} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
