import React from 'react';
import './../assets/scss/main.scss';
import VisitListElement from './VisitListElement';
import {ListGroup, Col} from 'react-bootstrap';

export default class VisitList extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick(index) {
        this.props.visitClick(index);
    }

    render() {

        return (<Col xs={12} md={4} lg={2} sm={4} lgOffset={1}><ListGroup>{
            this.props.visits.map((element, index) => {
                return (
                    <VisitListElement visit={element} index={index} key={index} visitClick={this.visitClick}/>
                )
            })
        }
        </ListGroup></Col>)

    }
}