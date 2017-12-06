import React from 'react';
import './../assets/scss/main.scss';
import {visits} from "../assets/mock-data";
import VisitList from './VisitList';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }

    visitClick (id) {
        console.log(id);
    }

    render() {
        return (
            //Missing heading
            <div id="wrapper">
                <div id="leftSide">
                    <VisitList visits={visits} visitClick={this.visitClick}/>
                </div>
                <div id="contentSide">

                </div>

            </div>


        );
    }

}

