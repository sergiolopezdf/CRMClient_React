import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList';
import Detail from "./Detail";
import {connect} from 'react-redux';
import {updateData, updateInfo, updateDates} from "../reducers/actions";
import {Grid, Row, FormControl, FormGroup, Col, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap';
import Header from './Header';
import $ from 'jquery';


//Data from JSON
var visits = null;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.dateUpdate = this.dateUpdate.bind(this);
    }

    dateUpdate() {
        let iDay = $('#iDay').val();
        let iMonth = $('#iMonth').val();
        let iYear = $('#iYear').val();

        let fDay = $('#fDay').val();
        let fMonth = $('#fMonth').val();
        let fYear = $('#fYear').val();

        this.props.dispatch(updateDates(
            [iDay, iMonth, iYear],
            [fDay, fMonth, fYear]
        ));

    }

    visitClick(index) {
        this.props.dispatch(updateInfo(visits[index]));
    }


    //Asking the API for the data
    componentDidUpdate() {

        let dates = this.props.dates;

        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=6bac0f89326e4c92d000";


        let dateAfter = "&dateafter=" + dates[0][2] + "-" + dates[0][1] + "-"
            + dates[0][0];
        let dateBefore = "&datebefore=" + dates[1][2] + "-" + dates[1][1] + "-"
            + dates[1][0] + "-";

        url = url + dateAfter + dateBefore;


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
        let dates = this.props.dates;


        if (dates === null) {
            let form = <Grid>
                <Row className="show-grid mainHeader">
                    <Header/>
                </Row>
                <Row>
                    <Col lgOffset={4} lg={4} mdOffset={3} md={6} smOffset={2} sm={3} xs={12}>
                        <ControlLabel><span>Set the initial date</span></ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col lgOffset={4} lg={1} mdOffset={3} md={2} smOffset={2} sm={3} xs={4}><FormControl id="iDay"
                                                                                                         type="text"
                                                                                                         placeholder="Day"/></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><FormControl id="iMonth" type="text" placeholder="Month"/></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><FormControl id="iYear" type="text" placeholder="Year"/></Col>
                </Row>
                <Row>
                    <Col lgOffset={4} lg={4} mdOffset={3} md={6} smOffset={2} sm={3} xs={12}>
                        <ControlLabel>Set the final date</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col lgOffset={4} lg={1} mdOffset={3} md={2} smOffset={2} sm={3} xs={4}><FormControl id="fDay"
                                                                                                         type="text"
                                                                                                         placeholder="Day"/></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><FormControl id="fMonth" type="text" placeholder="Month"/></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><FormControl id="fYear" type="text" placeholder="Year"/></Col>
                </Row>

                <Row>
                    <Col lgOffset={4} lg={4} mdOffset={3} md={6} smOffset={2} sm={3} xs={12}>
                        <Button bsStyle="primary" onClick={this.dateUpdate}>Submit</Button>
                    </Col>
                </Row>
            </Grid>
            return form;

        }


        if (isDataReady === false) {
            let spinner = <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>

            return spinner;
        }


        return (
            <Grid>
                <Row className="show-grid mainHeader">
                    <Header/>
                </Row>
                <Row className="show-grid bodyWrapper">
                    <VisitList visits={visits} visitClick={this.visitClick}/>
                    <Detail visit={this.props.currentVisit}/>
                </Row>
            </Grid>

        );
    }


}

function dataPick() {


}

function mapStateToProps(state) {
    return {
        isDataReady: state.isDataReady,
        currentVisit: state.currentVisit,
        dates: state.dates,
    };
}

export default connect(mapStateToProps)(App);

