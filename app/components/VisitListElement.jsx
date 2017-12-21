import React from 'react';
import './../assets/scss/main.scss';
import {ListGroupItem} from 'react-bootstrap';

export default class VisitListElement extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick() {
        this.props.visitClick(this.props.index);
    }

    render() {
        let fulfilledAt = this.props.visit.fulfilledAt;
        if (fulfilledAt === null) {
            fulfilledAt = "Pending";
        } else {
            fulfilledAt = fulfilledAt.substr(0, 10);
        }

        let plannedFor = this.props.visit.plannedFor.substr(0, 10);

        let id =
            <ListGroupItem onClick={this.visitClick}>
                <ul className="visitListElementDetails">
                    <li className="customer"><span className="glyphicon glyphicon-pushpin"
                                                   aria-hidden="true"/> {this.props.visit.Customer.name}</li>
                    <li className="salesman"><span className="glyphicon glyphicon-user"
                                                   aria-hidden="true"/> {this.props.visit.Salesman.fullname}</li>
                    <li className="minorDetails">
                        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"/> {fulfilledAt}</li>
                    <li className="minorDetails"><span className="glyphicon glyphicon-calendar"
                                                       aria-hidden="true"/> {plannedFor}</li>

                </ul>
            </ListGroupItem>;
        return id;
    }
}
