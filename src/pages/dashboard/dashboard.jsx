import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userProfile, changeUserProfile } from "../../actions/index";
import Account from "../../components/Account/Account";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  console.log(user);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const handleChange = (event) => {
    event.target.className === "firstNameInput" ? setfirstName(event.target.value) : setlastName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(changeUserProfile(firstName, lastName));
  };

  const handleCancel = () => {
    setfirstName("");
    setlastName("");
    console.log(firstName);
  };

  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <main className="main bg-dark">
      <div>
        <h1>Welcome back {user.firstName}</h1>
        <form onSubmit={onSubmit}>
          <div className="input">
            <input
              className="firstNameInput"
              type="text"
              placeholder={user.firstName}
              onChange={handleChange}
              value={firstName}
            ></input>
            <input
              className="lastNameInput"
              type="text"
              placeholder={user.lastName}
              onChange={handleChange}
              value={lastName}
            ></input>
          </div>
          <div className="button">
            <button className="save-btn" type="submit">
              Save
            </button>
            <button className="cancel-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
        <Account />
      </div>
    </main>
  );
};

export default Dashboard;
