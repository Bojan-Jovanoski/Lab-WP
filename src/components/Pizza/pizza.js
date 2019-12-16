import React, {Component} from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";


class Pizza extends Component {

    render() {

        return (
            <div className={this.props.colClass}>
                <div className="card">
                    <div className="pizzas">
                        {this.cardHeader()}
                    </div>
                </div>
            </div>
        );
    }


    cardHeader() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        {this.props.pizza.name}
                        <br/>
                        <hr/>
                        {this.props.pizza.description}
                    </div>
                </div>
            </div>
        );

    }

}


export default Pizza;