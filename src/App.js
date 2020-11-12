import React from 'react';

import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import {PrivateRoute} from "./components/PrivateRoute";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Register} from "./components/SignUp";


export default function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>Piggi</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Zaloguj</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Zarejstruj</Link>
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

    );
}




