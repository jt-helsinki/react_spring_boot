import * as React from 'react';

import logo from '../../logo.svg';
import './Layout.styles.css';

export class Layout extends React.Component<any, any> {

    public render() {
        return (
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">React Books <img src={logo} className="App-logo" alt="logo"/></h1>
                        <p className="lead">A simple demo app written with React, RXJS, Redux and Typescript.</p>
                        <hr className="my-4" />
                        <p>This application demonstrates some of the key concepts. Although it is a simple application
                        it has been written as if it was to be developed into a larger application.</p>
                    </div>
                </div>
                <div className="container">
                {this.props.children}
                </div>
            </div>
        )
    }
}

