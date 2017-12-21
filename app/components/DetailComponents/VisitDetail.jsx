import React from 'react';
import './../../assets/scss/main.scss';
import {Col, Row} from 'react-bootstrap';

export default class VisitDetail extends React.Component {
    render() {
        let fulfilledAt = this.props.fulfilledAt;
        if (fulfilledAt === null) {
            fulfilledAt = "Pending";
        } else {
            fulfilledAt = fulfilledAt.substr(0, 10);
        }

        let plannedFor = this.props.plannedFor.substr(0, 10);

        return <div>

            <Row>
                <Col xs={12} md={12} lg={12} sm={12}><h2 className="sectionTitle"><span
                    className="glyphicon glyphicon-pushpin"
                    aria-hidden="true"/> Info</h2></Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={6} sm={12}>
                    <Col xs={12} md={12} lg={12} sm={12}>
                    <span className="glyphicon glyphicon-calendar"
                          aria-hidden="true"/> Planned for: {plannedFor}
                    </Col>
                </Col>
                <Col xs={12} md={6} lg={6} sm={12}>

                    <Col xs={12} md={12} lg={12} sm={12}>
                    <span className="glyphicon glyphicon-info-sign"
                          aria-hidden="true"/> Fulfilled
                        at: {fulfilledAt}</Col>
                </Col>
            </Row>

        </div>;

    }
}
