import React, {Component} from "react";
import Counter from "../components/counter";
import * as counterActions from "../actions/counterActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class GameApp extends Component {
    constructor(props) {
        super(props);
        // this.props.n = Math.round(Math.random() * 10) + 1;
        // this.props.numbers = generateArrayNumbers(n);
    }

    render() {
        const {numbers, durationPrint, actions} = this.props;

        return (
            <Counter
                numbersToPrint={numbers}
                timeToPrint={durationPrint}
                {...actions}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        numbers: state.counter.numbers,
        durationPrint: state.counter.durationPrint
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameApp);

function generateArrayNumbers(aSize) {
    let aRes = [];
    for (let i = 0; i < aSize; i++) {
        aRes.push((Math.round(Math.random() * 10)) + 1)
    }
    return aRes;
}