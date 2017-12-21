import React from 'react';
import './../../assets/scss/main.scss';
import {Col, Row} from 'react-bootstrap';

export default class SalesmanDetail extends React.Component {
    render() {
        let module = <div>
            <Col xs={12} md={6} lg={6} sm={12}>
                <h2 className="sectionTitle"><span className="glyphicon glyphicon-briefcase"
                                                   aria-hidden="true"/> Salesman</h2>

                <Col xs={6} md={6} lg={6} sm={6}>
                <span className="glyphicon glyphicon-user"
                      aria-hidden="true"/> {this.props.salesman.fullname} <br/>
                    <span className="glyphicon glyphicon-phone-alt"
                          aria-hidden="true"/> {this.props.salesman.phone1} <br/>
                    <span className="glyphicon glyphicon-envelope"
                          aria-hidden="true"/> {this.props.salesman.email1}
                </Col>
                <Col xs={6} md={6} lg={6} sm={6}>
                    <img className="salesmanImg" alt={"Salesman face: " + this.props.salesman.fullname}
                         src={this.props.salesman.Photo.url}/>
                </Col>

            </Col>
        </div>;
        return module;

    }
}
