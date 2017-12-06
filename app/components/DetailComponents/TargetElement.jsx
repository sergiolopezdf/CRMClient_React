import React from 'react';
import './../../assets/scss/main.scss';

export default class TargetElement extends React.Component {
    render() {

        //Simply showing the name of the company and the result of the appointment
        let module = <div
            id="TargetElement"> {this.props.targetElement.Company.name}: {this.props.targetElement.notes}</div>
        return module;

    }
}