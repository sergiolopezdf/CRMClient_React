import React from 'react';
import './../../assets/scss/main.scss';
import {Col, Row} from 'react-bootstrap';

export default class VisitDetail extends React.Component {
    render() {


        return <div>

            <Row>
                <Col xs={12} md={12} lg={12} sm={12}><h2 className="sectionTitle"><span
                    className="glyphicon glyphicon-pushpin"
                    aria-hidden="true"></span> Info</h2></Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={6} sm={12}><span className="glyphicon glyphicon-calendar"
                                                         aria-hidden="true"></span> Planned for: {this.props.plannedFor}
                </Col>
                <Col xs={12} md={6} lg={6} sm={12}><span className="glyphicon glyphicon-info-sign"
                                                         aria-hidden="true"></span> Fulfilled
                    at: {this.props.fulfilledAt}</Col>
            </Row>

        </div>

    }
}