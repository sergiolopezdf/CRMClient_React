import React from 'react';
import './../../assets/scss/main.scss';

export default class VisitDetail extends React.Component {
    render() {
        return <div id="VisitDetail">
            <div id="plannedFor">Planned for: {this.props.plannedFor}</div>
            <div id="fulfilledAt">Fulfilled at: {this.props.fulfilledAt}</div>
        </div>
    }
}