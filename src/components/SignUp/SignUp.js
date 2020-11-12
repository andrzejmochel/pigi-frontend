import React from 'react'
import {connect} from "react-redux";

class SignUp extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Zarejestruj się</h3>

                        <div className="form-group">
                            <label>Adres email</label>
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Wprowadź hasło"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Powtórz hasło"/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Zarejestruj się</button>
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

function mapStateToProps(state) {

    return {
        state: state
    };
}

const connectedRegister = connect(mapStateToProps)(SignUp);
export {connectedRegister as Register};