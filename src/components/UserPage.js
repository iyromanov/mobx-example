import React, { Component } from 'react';
import Link from './Link';

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <h3>User page</h3>
                <Link to='/'>Go to Root page</Link>
            </div>
        );
    }
}