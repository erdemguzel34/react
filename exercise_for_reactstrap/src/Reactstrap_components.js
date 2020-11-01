import React, { Component } from 'react'
import {Alert} from 'reactstrap';

export default class ReactstrapComponents extends Component {
    render() {
        return (
            <div>
                 <div>
                    <h4>Alerts</h4>
                    <Alert color="primary">
                        This is a primary alert — check it out!
                    </Alert>
                    <Alert color="secondary">
                        This is a secondary alert — check it out!
                    </Alert>
                    <Alert color="success">
                        This is a success alert — check it out!
                    </Alert>
                    <Alert color="danger">
                        This is a danger alert — check it out!
                    </Alert>
                    <Alert color="warning">
                        This is a warning alert — check it out!
                    </Alert>
                    <Alert color="info">
                        This is a info alert — check it out!
                    </Alert>
                    <Alert color="light">
                        This is a light alert — check it out!
                    </Alert>
                    <Alert color="dark">
                        This is a dark alert — check it out!
                    </Alert>
                </div>

                <hr></hr>

                <div>
                    <h4>Link color</h4>
                    <Alert color="primary">
                        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="secondary">
                        This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="success">
                        This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="danger">
                        This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="warning">
                        This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="info">
                        This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="light">
                        This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    <Alert color="dark">
                        This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                    </div>
            </div>
        )
    }
}
