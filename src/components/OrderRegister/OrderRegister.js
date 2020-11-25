import React from "react";
import {v4 as uuidv4} from 'uuid';
import {connect} from "react-redux";
import {actions as orderActions} from '../../store/order'
import {actions as registrationsActions} from '../../store/registrations'

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
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Zarejestruj się do zamówienia '{name}'</h3>
                        <p>{description}</p>
                        <p>Poniższe dane będą przechowywane tylko w ramach zamówienia.</p>
                        <div className="form-group">
                            <label>Nazwa</label>
                            <input
                                name={"name"}
                                ref={this.nameRef}
                                type="text"
                                className="form-control"
                                placeholder="Wprowadź nazwę zamawiającego"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name={"email"}
                                ref={this.emailRef}
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

function mapStateToProps(state) {
    if (state.order.order) {
        return {
            name: state.order.order.name,
            description: state.order.order.description,
            link: state.order.order.link,
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

const connectedOrderRegister = connect(mapStateToProps, mapDispatchToProps)(OrderRegister);
export {connectedOrderRegister as OrderRegister};