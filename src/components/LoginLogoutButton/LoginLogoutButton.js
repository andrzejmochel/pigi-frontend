import React from "react";
import {connect} from "react-redux";
import {actions as signInActions} from "../../store/signin";
import {Link} from "react-router-dom";
import AuthService from "../../api/AuthService/AuthService";

class LoginLogoutButton extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    render() {
        const isAuthenticated = AuthService.isAuthenticated();
        const logout = (<li className="nav-item">
            <a className="nav-link" href={"#"} onClick={this.logout}>Wyloguj</a>
        </li>)

        const login = (<li className="nav-item">
            <Link className="nav-link" to={"/login"}>Zaloguj</Link>
        </li>)

        const signup = (<li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>Zarejstruj</Link>
        </li>)

        return (
            <ul className="navbar-nav ml-auto">
                {isAuthenticated ? logout : login}
                {!isAuthenticated && signup}
            </ul>
        )
    }

    logout() {
        this.props.actions.logout();
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}

const mapDispatchToProps = dispatch => ({
    actions: {
        logout() {
            dispatch(signInActions.logoutRequest());
        }

    }
});

const connectedLoginLogoutButton = connect(mapStateToProps, mapDispatchToProps)(LoginLogoutButton);
export {connectedLoginLogoutButton as LoginLogoutButton};