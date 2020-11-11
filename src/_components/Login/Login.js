import React from "react";
import {connect} from "react-redux";

class Login extends React.Component {

    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render()  {
        return (
            <h2>Login</h2>
        )
    }

    handleChange(e) {
        // const { name, value } = e.target;
        // this.setState({ [name]: value });
    }

    handleSubmit(e) {
        // e.preventDefault();
        //
        // this.setState({ submitted: true });
        // const { username, password } = this.state;
        // const { dispatch } = this.props;
        // if (username && password) {
        //     dispatch(userActions.login(username, password));
        // }
    }
}

function mapStateToProps(state) {
   // const { loggingIn } = state.authentication;
    return {
        //loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };