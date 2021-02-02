import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../Components/Pages/Auth/Login/login';
import Signup from '../Components/Pages/Auth/Signup/signup';
import Forgot from '../Components/Pages/Auth/Forgot/forgot';
import Page404 from '../Components/Pages/404/404';

import Dashboard from '../Components/Pages/Dashboard/dashboard'

class App extends React.Component {
  
  render() {
    return (
      <div className="app-inner">
      
        <Router>
          <Switch>
            <Route exact path="/" component={Login}  ></Route>
            <Route path="/signup" component={Signup} ></Route>
            <Route path="/forgot" component={Forgot} ></Route>

            <Route path="/app/dashboard" component={Dashboard} ></Route>

            <Route component={Page404} ></Route>
          </Switch>
        </Router>

      </div>
    );
  }

}

export default App;
