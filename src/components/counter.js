import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curNumber: 0,
            reachedEnd: this.props.numbersToPrint.length == 0
        };

        setInterval(() => {
            this.setState({
                curNumber: this.state.curNumber + 1,
                reachedEnd: this.state.curNumber == this.props.numbersToPrint.length-1
            })
        }, this.props.timeToPrint)
    }

    componentWillReceiveProps(nextProps) {
        console.log("CWRP");
        if (this.state.reachedEnd) {
            console.log("reachedEnd");
            finished_counting();
        }
    }

    render() {
        const {numbersToPrint, finished_counting} = this.props;

        console.log("CWRP");
        if (this.state.reachedEnd) {
            console.log("reachedEnd");
            finished_counting();
        }

        return (
            <View style={styles.counter}>
                <Text style={styles.counterNumber}>{numbersToPrint[this.state.curNumber]}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    counter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    counterNumber: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white'
    }
});