import React from 'react';

import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import {PrivateRoute} from "./components/PrivateRoute";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Register} from "./components/SignUp";
import {OrderRegister} from "./components/OrderRegister";
import {OrderRegisterSuccess} from "./components/OrderRegisterSuccess";
import {LoginLogoutButton} from "./components/LoginLogoutButton";
import {ChangePassword} from "./components/ChangePassword";


export default function App() {

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>Piggi</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <LoginLogoutButton />
                    </div>
                </div>
            </nav>

            <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute exact path="/change-password" component={ChangePassword}/>
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={Register}/>
                <Route path="/order-register/:id" component={OrderRegister}/>
                <Route path="/order-register-success/:id" component={OrderRegisterSuccess}/>
            </Switch>
        </div>

    );
}




