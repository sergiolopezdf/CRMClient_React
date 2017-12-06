import React from 'react';
import './../assets/scss/main.scss';

export default class VisitListElement extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick () {
        this.props.visitClick(this.props.visit.id);
    }


    render() {
        let id = <li>
            <ul onClick={this.visitClick}>
                <li>{this.props.visit.Salesman.fullname}</li>
                <li>{this.props.visit.id}</li>
                <li>{this.props.visit.plannedFor}</li>
                <li>{this.props.visit.Customer.name}</li>
            </ul>

            </li>
        return id;
    }
}