import React from 'react';
import './../assets/scss/main.scss';
import VisitListElement from './VisitListElement'

export default class VisitList extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick (id) {
        this.props.visitClick(id);
    }

    render() {
        let lista = <ul> {
            this.props.visits.map((element, index) => {
                let visit = <VisitListElement visit={element} key={index} visitClick={this.visitClick}/>
                return visit;
            })
        }
        </ul>
        return lista;
    }
}