import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import Dashboard from "../../pages/dashboard/dashboard";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/profile" component={Dashboard} exact></Route>
            <Route path="*">
              <Redirect to="/user/12" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
