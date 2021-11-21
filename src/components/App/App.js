import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import Dashboard from "../../pages/dashboard/dashboard";
import "../../main.css";

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/user" component={Dashboard} exact></Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
