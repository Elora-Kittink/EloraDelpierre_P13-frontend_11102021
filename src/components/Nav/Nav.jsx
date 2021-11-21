import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { logout } from "../../actions/index";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!user.logged ? (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </Link>
          <Link className="main-nav-item" onClick={signOut} to="/login">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
