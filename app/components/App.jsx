import React from 'react';
import './../assets/scss/main.scss';
import {visits} from "../assets/mock-data";
import VisitList from './VisitList';
import Detail from "./Detail";

import {connect} from 'react-redux';
import {updateInfo} from "../reducers/actions";
import {CURRENTVISIT} from "../constants/constants";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }


    visitClick(index) {
        this.props.dispatch(updateInfo(index));
    }

    render() {
        return (
            //Missing heading
            <div id="wrapper">
                <VisitList visits={visits} visitClick={this.visitClick}/>
                <Detail visit={this.props.currentVisit}/>
            </div>

        );
    }


}

function mapStateToProps(state) {
    return {
        currentVisit: state.currentVisit,
    };
}

export default connect(mapStateToProps)(App);

