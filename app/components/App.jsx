import React from 'react';
import './../assets/scss/main.scss';
import {visits} from "../assets/mock-data";
import VisitList from './VisitList';
import Detail from "./Detail";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentVisit: null,
        }
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick(index) {
        let newState = this.state.currentVisit;
        newState = visits[index];
        this.setState({
            currentVisit: newState,
        });
    }

    render() {
        return (
            //Missing heading
            <div id="wrapper">
                <VisitList visits={visits} visitClick={this.visitClick}/>
                <Detail visit={this.state.currentVisit}/>
            </div>

        );
    }

}

