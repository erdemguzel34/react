import React, { Component } from 'react';

export default class Productlist extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.props.info.anotherProductListThing} - {this.props.currentCategory}</h3>
            </div>
        )
    }
}
