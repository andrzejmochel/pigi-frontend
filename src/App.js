import React from 'react';

import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import {PrivateRoute} from "./components/PrivateRoute";
import {Home} from "./components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {OrderRegister} from "./components/OrderRegister";
import {OrderRegisterSuccess} from "./components/OrderRegisterSuccess";


export default function App() {

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>Piggi</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    </div>
                </div>
            </nav>

            <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <Route path="/order-register/:id" component={OrderRegister}/>
                <Route path="/order-register-success/:id" component={OrderRegisterSuccess}/>
            </Switch>
        </div>

    );
}




