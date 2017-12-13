import React from 'react';
import './../../assets/scss/main.scss';
import {Col, Row} from 'react-bootstrap';

export default class SalesmanDetail extends React.Component {
    render() {
        let module = <div>
            <Col xs={12} md={6} lg={6} sm={12}>
                <h2 className="sectionTitle"><span className="glyphicon glyphicon-briefcase"
                                                   aria-hidden="true"></span> Salesman</h2>
                <span className="glyphicon glyphicon-user"
                      aria-hidden="true"></span> {this.props.salesman.fullname} <br/>
                <span className="glyphicon glyphicon-phone-alt"
                      aria-hidden="true"></span> {this.props.salesman.phone1} <br/>
                <span className="glyphicon glyphicon-envelope"
                      aria-hidden="true"></span> {this.props.salesman.email1}
            </Col>
        </div>
        return module;

    }
}