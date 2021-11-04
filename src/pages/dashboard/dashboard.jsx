import React, { useState, Redirect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../../actions/index";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.logged);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(userProfile(token));
  }, [dispatch, token]);

  const user = useSelector((state) => state.user);

  if (!isLogged) {
    return <Redirect to="/" />;
  }
  return (
    <main className="main bg-dark">
      <div>
        <h1>Welcome back</h1>
        <form>
          <div className="input">
            <input type="text" placeholder={user.firstname}></input>
            <input type="text" placeholder={user.lastname}></input>
          </div>
          <div className="button">
            <button></button>
            <button></button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Dashboard;
