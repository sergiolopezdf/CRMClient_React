import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList';
import Detail from "./Detail";
import {connect} from 'react-redux';
import {updateData, updateInfo} from "../reducers/actions";
import {Grid, Row, PageHeader, Col} from 'react-bootstrap';
import Header from './Header';

//Data from JSON
var visits = null;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    visitClick(index) {
        this.props.dispatch(updateInfo(visits[index]));
    }

    //Asking the API for the data
    componentDidMount() {
        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=6bac0f89326e4c92d000";

        //HTTP request
        var req = new XMLHttpRequest();

        //True == async
        req.open('GET', url, true);

        //Asigning 'this' to use it later on
        let myself = this;

        //Petition
        req.onreadystatechange = function (aEvt) {
            if (req.readyState === 4) {
                if (req.status === 200) {

                    //Parsing the JSON
                    visits = JSON.parse(req.responseText);

                    //Asking Redux to change the state
                    myself.props.dispatch(updateData());

                    //Return
                    return;
                }
            }

        }

        req.send(null);

    }


    render() {

        //Checking Redux state
        let isDataReady = this.props.isDataReady;

        if (isDataReady === false) {
            let spinner = <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            return spinner;
        }


        return (
            <Grid>
                <Row className="show-grid mainHeader">
                    <Header/>
                </Row>
                <Row className="show-grid">
                    <VisitList visits={visits} visitClick={this.visitClick}/>
                    <Detail visit={this.props.currentVisit}/>
                </Row>
            </Grid>

        );
    }


}

function mapStateToProps(state) {
    return {
        isDataReady: state.isDataReady,
        currentVisit: state.currentVisit,
    };
}

export default connect(mapStateToProps)(App);

