import React from 'react';
import './../assets/scss/main.scss';
import VisitDetail from './DetailComponents/VisitDetail';
import TargetDetail from './DetailComponents/TargetDetail';
import CustomerDetail from './DetailComponents/CustomerDetail';
import SalesmanDetail from './DetailComponents/SalesmanDetail';

export default class Detail extends React.Component {
    render() {

        //Check the state
        if (this.props.visit === null) {
            return "No data to show yet";
        }

        //Creating a new var
        let visit = this.props.visit;

        //Module
        let fullModule = <div id="contentSide">
            <VisitDetail plannedFor={visit.plannedFor} fulfilledAt={visit.fulfilledAt} />
            <TargetDetail targets={visit.Targets}/>
            <CustomerDetail customer={visit.Customer}/>
            <SalesmanDetail salesman={visit.Salesman}/>
        </div>

        return fullModule;
    }
}