import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList';
import Detail from "./Detail";
import {connect} from 'react-redux';
import {updateData, updateInfo, updateDates} from "../reducers/actions";
import {Grid, Row, FormControl, FormGroup, Col, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap';
import Header from './Header';
import $ from 'jquery';

// Data from JSON
let visits = null;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.dateUpdate = this.dateUpdate.bind(this);
    }

    dateUpdate() {
        let iDay = $("#iDay option:selected").val();
        let iMonth = $("#iMonth option:selected").val();
        let iYear = $("#iYear option:selected").val();

        let fDay = $("#fDay option:selected").val();
        let fMonth = $("#fMonth option:selected").val();
        let fYear = $("#fYear option:selected").val();

        this.props.dispatch(updateDates(
            [iDay, iMonth, iYear],
            [fDay, fMonth, fYear]
        ));

    }

    visitClick(index) {
        this.props.dispatch(updateInfo(visits[index]));
    }

    // Asking the API for the data
    componentDidUpdate() {

        let dates = this.props.dates;

        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=6bac0f89326e4c92d000";

        let dateAfter = "&dateafter=" + dates[0][2] + "-" + dates[0][1] + "-"
            + dates[0][0];
        let dateBefore = "&datebefore=" + dates[1][2] + "-" + dates[1][1] + "-"
            + dates[1][0] + "-";

        url = url + dateAfter + dateBefore;

        // HTTP request
        let req = new XMLHttpRequest();

        // True == async
        req.open('GET', url, true);

        // Asigning 'this' to use it later on
        let myself = this;

        // Petition
        req.onreadystatechange = function (aEvt) {
            if (req.readyState === 4) {
                if (req.status === 200) {

                    // Parsing the JSON
                    visits = JSON.parse(req.responseText);

                    // Asking Redux to change the state
                    myself.props.dispatch(updateData());

                    // Return
                    return;
                }
            }

        };

        req.send(null);
    }

    render() {

        // Checking Redux state
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
                    <Col lgOffset={4} lg={1} mdOffset={3} md={2} smOffset={2} sm={3} xs={4}>
                        <FormControl componentClass="select" placeholder="select" id="iDay">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </FormControl>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <FormControl componentClass="select" placeholder="select" id="iMonth">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>

                        </FormControl>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <FormControl componentClass="select" placeholder="select" id="iYear">
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col lgOffset={4} lg={4} mdOffset={3} md={6} smOffset={2} sm={3} xs={12}>
                        <ControlLabel>Set the final date</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col lgOffset={4} lg={1} mdOffset={3} md={2} smOffset={2} sm={3} xs={4}>
                        <FormControl componentClass="select" placeholder="select" id="fDay">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </FormControl>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <FormControl componentClass="select" placeholder="select" id="fMonth">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>

                        </FormControl>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <FormControl componentClass="select" placeholder="select" id="fYear">
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                        </FormControl>
                    </Col>
                </Row>

                <Row>
                    <Col lgOffset={4} lg={4} mdOffset={3} md={6} smOffset={2} sm={3} xs={12}>
                        <div id="sendButton">
                            <Button bsStyle="primary" onClick={this.dateUpdate}>Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>;

            return form;

        }

        if (isDataReady === false) {
            let spinner = <div className="spinner">
                <div className="rect1"/>
                <div className="rect2"/>
                <div className="rect3"/>
                <div className="rect4"/>
                <div className="rect5"/>
            </div>;

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

