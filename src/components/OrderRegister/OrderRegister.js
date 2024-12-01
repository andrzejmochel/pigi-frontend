import React from "react";
import {v4 as uuidv4} from 'uuid';
import {connect} from "react-redux";
import {actions as orderActions} from '../../store/order'
import {actions as registrationsActions} from '../../store/registrations'
import ErrorNotification from "../ErrorNotification";
import parse from 'html-react-parser';

class OrderRegister extends React.Component {

    constructor(props) {
        super(props);
        const {match: {params}} = this.props;
        this.props.actions.getOrder(params.id);
        this.emailRef = React.createRef();
        this.nameRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const name = this.nameRef.current.value;
        const email = this.emailRef.current.value;
        const id = uuidv4();
        try {
            this.props.actions.registerOrder({
                id: id,
                name: name,
                email: email,
                orderId: this.props.id
            });
        } catch(e) {
            debugger
            console.log(e)
        }
        event.preventDefault();
    }


    render() {
        const name = this.props.name;
        const description = this.props.description;
        const error = this.props.error;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Zarejestruj się do zamówienia '{name}'</h3>
                        <p>{parse(description)}</p>
                        <p>Poniższe dane będą przechowywane tylko w ramach zamówienia.</p>
                        {error &&
                        <ErrorNotification description={error} />
                        }
                        <div className="form-group">
                            <label>Nazwa</label>
                            <input
                                name={"name"}
                                ref={this.nameRef}
                                type="text"
                                className="form-control"
                                placeholder="Wprowadź nazwę zamawiającego"/>
                        </div>
                        <div className="form-group required">
                            <label className="control-label">Email</label>
                            <input
                                name={"email"}
                                ref={this.emailRef}
                                required={true}
                                type="email"
                                className="form-control"
                                placeholder="Wprowadź email kontaktowy"/>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Zarejestruj</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: {
        getOrder(id) {
            dispatch(orderActions.orderGetRequest(id));
        },
        registerOrder(request) {
            dispatch(registrationsActions.registerOrderRequest(request));
        }

    }
});

function getOrder(state) {
    if (state.order.order) {
        return {
            name: state.order.order.name,
            description: state.order.order.description,
            id: state.order.order.id
        };
    } else {
        return {
            name: "",
            description: "",
            id: ""
        };
    }
}

function getError(state) {
    if(state.registrations.error) {
        switch(state.registrations.error.response.status) {
            case 400:
                return "Wprowadzono niepoprawne dane"
            case 404:
                return "Wskazane zamówienie już nie istnieje"
           default:
                return "Błąd zapisu"
        }
    } else {
        return null
    }
}

function mapStateToProps(state) {

    const order = getOrder(state);
    const error = getError(state);

    return {
       ...order,
       error : error
    }

}

const connectedOrderRegister = connect(mapStateToProps, mapDispatchToProps)(OrderRegister);
export {connectedOrderRegister as OrderRegister};