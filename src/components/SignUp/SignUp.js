import React from 'react'
import {connect} from "react-redux";
import {actions as signUpActions} from "../../store/signup"
import GoogleLogin from "react-google-login";
import {FACEBOOK_APP_ID, GOOGLE_CLIENT_ID} from "../../SSO";
import FacebookLogin from "react-facebook-login"

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            repeatPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.googleRegister = this.googleRegister.bind(this);
        this.facebookRegister = this.facebookRegister.bind(this);
    }

    handleSubmit(event) {
        this.props.actions.signUpRequest({
            username: this.state.email,
            password: this.state.password
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    googleRegister(googleResponse) {
        this.props.actions.signUpGoogleRequest({
            username: googleResponse.profileObj.email,
            id: googleResponse.profileObj.googleId,
         })
    }

    facebookRegister(facebookResponse) {
        this.props.actions.signUpFacebookRequest({
            username: facebookResponse.email,
            id: facebookResponse.id,
        })
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Zarejestruj się</h3>

                        <div className="form-group">
                            <label>Adres Email</label>
                            <input onChange={this.handleChange}
                                   name={"email"}
                                   value={this.state.email}
                                   type="email"
                                   className="form-control"
                                   placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label>Hasło</label>
                            <input onChange={this.handleChange}
                                   name={"password"}
                                   value={this.state.password}
                                   type="password"
                                   className="form-control"
                                   placeholder="Wprowadź hasło"/>
                        </div>

                        <div className="form-group">
                            <label>Powtórz hasło</label>
                            <input onChange={this.handleChange}
                                   name={"repeatPassword"}
                                   value={this.state.repeatPassword}
                                   type="password"
                                   className="form-control"
                                   placeholder="Wprowadź hasło"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Zarejestruj się</button>
                        <GoogleLogin clientId={GOOGLE_CLIENT_ID}
                                     onSuccess={this.googleRegister}
                                     icon={true}
                                     style={{}}
                                     buttonText={"Google"}
                        >
                        </GoogleLogin>
                        <FacebookLogin
                            appId={FACEBOOK_APP_ID}
                            autoLoad={true}
                            fields="email"
                            callback={this.facebookRegister}
                        />

                        <p className="forgot-password text-right">
                            Jesteś już zarejestrowany <a href="#">zaloguj?</a>
                        </p>
                    </form>

                </div>
            </div>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
}

const mapDispatchToProps = dispatch => ({
    actions: {
        signUpRequest(signUp) {
            dispatch(signUpActions.signUpRequest(signUp));
        },

        signUpFacebookRequest(signUp) {
            dispatch(signUpActions.signUpFacebookRequest(signUp));
        },

        signUpGoogleRequest(signUp) {
            dispatch(signUpActions.signUpGoogleRequest(signUp));
        }
    }
});

function mapStateToProps(state) {

    return {
        state: state
    };
}

const connectedRegister = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export {connectedRegister as Register};