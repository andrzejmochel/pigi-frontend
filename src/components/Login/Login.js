import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {actions as signInActions} from "../../store/signin";



class Login extends React.Component {

    constructor(props) {
        super(props);

        this.userNameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>

                        <h3>Zaloguj się</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                ref={this.userNameRef}
                                className="form-control"
                                placeholder="Wprowadź email"
                            />
                        </div>

                        <div className="form-group">
                            <label>Hasło</label>
                            <input
                                ref={this.passwordRef}
                                type="password"
                                className="form-control"
                                placeholder="Wprowadź hasło"
                            />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Zaloguj</button>
                        <p className="forgot-password text-right">
                            Zapomniałeś <Link  to={"/sign-up"}>hasła?</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        try {
            const userName = this.userNameRef.current.value;
            const password = this.passwordRef.current.value;
            this.props.actions.signIn({
                loginName : userName,
                password : password
            })
        } catch (e) {
            console.log(e)
        }


    }
}

function mapStateToProps(state) {
    return {
       state: state
    };
}

const mapDispatchToProps = dispatch => ({
    actions: {
        signIn(request) {
            dispatch(signInActions.signInRequest(request));
        }

    }
});

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export {connectedLogin as Login};