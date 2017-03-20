import React, { Component } from 'react';
import { Link } from 'react-router';

export default class RootPage extends Component {
  render() {
    return (
        <div>
            <h3>Root page</h3>
            <Link to='/user'>Go to User page</Link>
        </div>
    );
  }
}