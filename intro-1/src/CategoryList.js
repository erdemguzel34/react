import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

export default class Categorylist extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h2>CategoryList component</h2>
                <ListGroup>
                    <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                 </ListGroup>
            </div>
        )
    }
}
