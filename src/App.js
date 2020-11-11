import React from 'react';

import {Route, Router, Switch, Link} from "react-router-dom";
import './App.css';
import {PrivateRoute} from "./_components/PrivateRoute";
import {Home} from "./_components/Home";
import {Login} from "./_components/Login";
import {history} from "./_utils/history";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Register} from "./_components/Register";


export default function App() {
    return (
        <Router history={history}>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/login"}>positronX.io</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <PrivateRoute exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/sign-up" component={Register}/>
                </Switch>
            </div>
        </Router>
    );
}




