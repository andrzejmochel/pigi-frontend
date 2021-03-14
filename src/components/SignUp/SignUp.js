import React from 'react'
import {connect} from "react-redux";
import {actions as signUpActions} from "../../store/signup"
import GoogleLogin from "react-google-login";
import {FACEBOOK_APP_ID, GOOGLE_CLIENT_ID} from "../../SSO";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {FaFacebook, FaGoogle} from "react-icons/all";

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
        this.googleRegisterFailure = this.googleRegisterFailure.bind(this)
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
        const googleButton = this.createGoogleButton();
        const facebookButton = this.createFacebookButton();
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
                        <div>
                            <button type="submit" className="btn btn-primary btn-block">Zarejestruj się</button>
                            {googleButton}
                            {facebookButton}
                        </div>
                    </form>

                </div>
            </div>
        );
    }

    createGoogleButton() {
        return (<GoogleLogin clientId={GOOGLE_CLIENT_ID}
                             onSuccess={this.googleRegister}
                             onFailure={this.googleRegisterFailure}
                             icon={false}
                             style={{}}
                             className="btn btn-primary btn-block"
                             buttonText={""}
                             render={renderProps => (
                                 <button className="btn btn-primary btn-block" onClick={renderProps.onClick}>
                                     <FaGoogle/> Przez Google
                                 </button>
                             )}
        >

        </GoogleLogin>);
    }

    createFacebookButton() {
        try {
            return (<FacebookLogin
                appId={FACEBOOK_APP_ID}
                autoLoad={true}
                fields="email"
                callback={this.facebookRegister}
                render={renderProps => (
                    <button className="btn btn-primary btn-block" onClick={renderProps.onClick}><FaFacebook/> Przez Facebook</button>
                )}
            />);
        } catch (e) {
            return null;
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    googleRegisterFailure() {
        console.log('googleRegisterFailure')
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
            console.log("signUpGoogleRequest")
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