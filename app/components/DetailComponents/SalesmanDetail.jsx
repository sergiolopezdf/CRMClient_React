import React from 'react';
import './../../assets/scss/main.scss';

export default class SalesmanDetail extends React.Component {
    render() {
        let module = <div id="SalesmanDetail">
            <h4 id="salesman">Salesman</h4>
            Name: {this.props.salesman.fullname} <br/>
            Phone1: {this.props.salesman.phone1}
        </div>
        return module;

    }
}