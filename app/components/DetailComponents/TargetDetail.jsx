import React from 'react';
import './../../assets/scss/main.scss';
import TargetElement from './TargetElement';
import {Col, Row} from 'react-bootstrap';

export default class TargetDetail extends React.Component {
    render() {

        // If no targets, leave
        if (this.props.targets === null) {
            return "No targets";
        }

        // New targets var
        let targets = this.props.targets;

        // Creating as many TD modules as existing targets
        let module =
            <div>
                <Row>
                    <Col xs={12} md={12} lg={12} sm={12}>
                        <h2 className="sectionTitle"><span className="glyphicon glyphicon-ok-circle"
                                                           aria-hidden="true"/> Targets</h2>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={12} lg={12} sm={12}>
                        <Col xs={12} md={12} lg={12} sm={12}>
                            {
                                targets.map((element, index) => {
                                    let myKey = "detail" + index;
                                    let targetElement = <TargetElement key={myKey} targetElement={element}/>;
                                    return targetElement;
                                })
                            }</Col>
                    </Col>
                </Row>
            </div>;

        return module;

    }
}
