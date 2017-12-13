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
        let date = this.props.visit.fulfilledAt;
        if (date === null) {
            date = "Pending";
        }
        let id =
            <ListGroupItem onClick={this.visitClick}>
                <ul id="visitListElementDetails">
                    <li id="customer"><span className="glyphicon glyphicon-pushpin"
                                            aria-hidden="true"></span> {this.props.visit.Customer.name}</li>
                    <li id="salesman"><span className="glyphicon glyphicon-user"
                                            aria-hidden="true"></span> {this.props.visit.Salesman.fullname}</li>
                    <li className="minorDetails">
                        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> {date}</li>
                    <li className="minorDetails"><span className="glyphicon glyphicon-calendar"
                                                       aria-hidden="true"></span> {this.props.visit.plannedFor}</li>

                </ul>
            </ListGroupItem>
        return id;
    }
}