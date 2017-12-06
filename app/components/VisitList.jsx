import React from 'react';
import './../assets/scss/main.scss';
import VisitListElement from './VisitListElement'

export default class VisitList extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick (index) {
        this.props.visitClick(index);
    }

    render() {
        let lista = <div id="leftSide"><ul> {
            this.props.visits.map((element, index) => {
                let visit = <VisitListElement visit={element} index = {index} key={index} visitClick={this.visitClick}/>
                return visit;
            })
        }
        </ul></div>
        return lista;
    }
}