import React from 'react';
import './../assets/scss/main.scss';
import {Col} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {

        return (<Col xs={12} md={12} lg={11} sm={12} lgOffset={1} mdOffset={0}>
            <h1>CRM Client</h1>
        </Col>);

    }
}
