import React from 'react';
import './../../assets/scss/main.scss';
import {Col, Row} from 'react-bootstrap';

export default class CustomerDetail extends React.Component {
    render() {
        let module = <div>
            <Col xs={12} md={6} lg={6} sm={12}>
                <h2 className="sectionTitle"><span className="glyphicon glyphicon-shopping-cart"
                                                   aria-hidden="true"></span> Customer</h2>
                <span className="glyphicon glyphicon-user"
                      aria-hidden="true"></span> {this.props.customer.name} <br/>
                <span className="glyphicon glyphicon-home"
                      aria-hidden="true"></span> {this.props.customer.address1}, {this.props.customer.address2}, {this.props.customer.city}
                <br/>
                <span className="glyphicon glyphicon-barcode"
                      aria-hidden="true"></span> {this.props.customer.id} <br/>
                <span className="glyphicon glyphicon-envelope"
                      aria-hidden="true"></span> {this.props.customer.email1} <br/>
                <span className="glyphicon glyphicon-phone-alt"
                      aria-hidden="true"></span> {this.props.customer.phone1}
            </Col>
        </div>
        return module;
    }
}