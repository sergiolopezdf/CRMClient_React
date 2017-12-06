import React from 'react';
import './../../assets/scss/main.scss';

export default class CustomerDetail extends React.Component {
    render() {
        let module = <div id="CustomerDetail">
            <h4 id="customer">Customer</h4>
            Name: {this.props.customer.name} <br/>
            CIF: {this.props.customer.cif}
        </div>
        return module;
    }
}