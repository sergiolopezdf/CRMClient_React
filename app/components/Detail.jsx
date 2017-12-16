import React from 'react';
import './../assets/scss/main.scss';
import VisitDetail from './DetailComponents/VisitDetail';
import TargetDetail from './DetailComponents/TargetDetail';
import CustomerDetail from './DetailComponents/CustomerDetail';
import SalesmanDetail from './DetailComponents/SalesmanDetail';
import {Row, Col, Panel} from 'react-bootstrap';

export default class Detail extends React.Component {
    render() {

        //Check the state
        if (this.props.visit === null) {
            return (<Col xs={12} md={8} lg={8} sm={8}><Panel>No data to show yet</Panel></Col>)
        }

        //Creating a new var
        let visit = this.props.visit;

        //Module
        return (<Col xs={12} md={8} lg={8} sm={8}><Panel>
            <Row>
                <CustomerDetail customer={visit.Customer}/>
                <SalesmanDetail salesman={visit.Salesman}/>
            </Row>
            <VisitDetail plannedFor={visit.plannedFor} fulfilledAt={visit.fulfilledAt}/>
            <TargetDetail targets={visit.Targets}/>
        </Panel></Col>)
    }
}