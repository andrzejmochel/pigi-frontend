import {React, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {Router} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import history from './history'
import {store} from "./store/configureStore";

const AppProvider = () => {
    return (<StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/*<Suspense fallback={<ProgressIndicator />}>*/}
                <Router history={history}>
                    <App/>
                </Router>
                {/*</Suspense>*/}
            </ConnectedRouter>
        </Provider>
    </StrictMode>)
}

ReactDOM.render(<AppProvider/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
