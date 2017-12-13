import React from 'react';
import './../assets/scss/main.scss';
import {visits} from "../assets/mock-data";
import VisitList from './VisitList';
import Detail from "./Detail";
import {connect} from 'react-redux';
import {updateInfo} from "../reducers/actions";
import {Grid, Row, PageHeader, Col} from 'react-bootstrap';
import Header from './Header';

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
        currentVisit: state.currentVisit,
    };
}

export default connect(mapStateToProps)(App);

