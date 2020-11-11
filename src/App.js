import React from 'react';

import {
  Router,
  Route
} from "react-router-dom";
import './App.css';
import {PrivateRoute} from "./_components/PrivateRoute";
import {Home} from "./_components/Home";
import {Login} from "./_components/Login";
import {history} from "./_utils/history";


export default function App() {
  return (
      <Router history={history}>
        <div>

        {/*  </nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {/*<Switch>*/}
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />

        </div>
      </Router>
  );
}




