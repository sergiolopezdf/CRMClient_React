import React from 'react';
import './../../assets/scss/main.scss';
import TargetElement from './TargetElement';

export default class TargetDetail extends React.Component {
    render() {

        //If no targets, leave
        if (this.props.targets === null) {
            return "No targets";
        }

        //New targets var
        let targets = this.props.targets;

        //Creating as many TD modules as existing targets
        let module = <div id="TargetDetail"> {
            targets.map((element, index) => {
                let myKey = "detail" + index;
                let targetElement = <TargetElement key={myKey} targetElement={element}/>
                return targetElement;
            })
        }
        </div>
        return module;

    }
}