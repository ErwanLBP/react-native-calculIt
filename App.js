import React, {Component} from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import * as reducers from "./src/reducers/index";
import GameApp from "./src/containers/gameApp";
import {AppRegistry} from "react-native";

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GameApp />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('App', () => App);