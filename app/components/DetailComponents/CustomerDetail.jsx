import React from 'react';
import './../../assets/scss/main.scss';
import {Col, Row} from 'react-bootstrap';

export default class CustomerDetail extends React.Component {
    render() {
        let module = <div>
            <Col xs={12} md={6} lg={6} sm={12}>
                <h2 className="sectionTitle"><span className="glyphicon glyphicon-shopping-cart"
                                                   aria-hidden="true"/> Customer</h2>

                <Col xs={12} md={12} lg={12} sm={12}>
                <span className="glyphicon glyphicon-user"
                      aria-hidden="true"/> {this.props.customer.name} <br/>
                    <span className="glyphicon glyphicon-home"
                          aria-hidden="true"/> {this.props.customer.address1}, {this.props.customer.address2}, {this.props.customer.city}
                    <br/>
                    <span className="glyphicon glyphicon-barcode"
                          aria-hidden="true"/> {this.props.customer.id} <br/>
                    <span className="glyphicon glyphicon-envelope"
                          aria-hidden="true"/> {this.props.customer.email1} <br/>
                    <span className="glyphicon glyphicon-phone-alt"
                          aria-hidden="true"/> {this.props.customer.phone1}
                </Col>
            </Col>
        </div>;
        return module;
    }
}
