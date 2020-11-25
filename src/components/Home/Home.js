import React from "react";
import {connect} from "react-redux";

class Home extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (<h2>HOME</h2>)
    }

}

function mapStateToProps(state) {
    return {
        state :state
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export {connectedHome as Home};