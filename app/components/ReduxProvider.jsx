import {Provider} from 'react-redux';
import GlobalState from './../reducers/reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import {DATES, ISDATAREADY, CURRENTVISIT} from "../constants/constants";

export default class ReduxProvider extends React.Component {

    constructor(props) {
        super(props);
        this.initialState = {isDataReady: ISDATAREADY, currentVisit: CURRENTVISIT, dates: DATES};
        this.store = this.configureStore();
    }

    render() {
        return (
            <AppContainer>
                <Provider store={this.store}>
                    <div style={{height: '100%'}}>
                        <App store={this.store}/>
                    </div>
                </Provider>
            </AppContainer>
        );
    }

    configureStore() {
        const store = createStore(GlobalState, this.initialState);
        if (module.hot) {
            module.hot.accept('./../reducers/reducers', () => {
                const nextRootReducer = require('./../reducers/reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
        return store;
    }
}