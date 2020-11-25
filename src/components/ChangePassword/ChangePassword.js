import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {actions as signInActions} from "../../store/signin";



class ChangePassword extends React.Component {

    constructor(props) {
        super(props);

        this.passwordRef = React.createRef();
        this.repeatPasswordRef = React.createRef();
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

                        <h3>Zmień hasło</h3>


                        <div className="form-group">
                            <label>Hasło</label>
                            <input
                                ref={this.passwordRef}
                                type="password"
                                className="form-control"
                                placeholder="Wprowadź hasło"
                            />
                        </div>
                        <div className="form-group">
                            <label>Powtórz Hasło</label>
                            <input
                                ref={this.repeatPasswordRef}
                                type="password"
                                className="form-control"
                                placeholder="Powtórz hasło"
                            />
                        </div>


                        <button type="submit" className="btn btn-dark btn-lg btn-block">Zmień</button>

                    </form>
                </div>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        try {
            const password = this.passwordRef.current.value;
            this.props.actions.changePassword({
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
        changePassword(request) {
            dispatch(signInActions.changePasswordRequest(request));
        }

    }
});

const connectedChangePassword = connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
export {connectedChangePassword as ChangePassword};