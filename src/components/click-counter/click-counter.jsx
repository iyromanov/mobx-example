import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class ClickCounter extends React.Component {
    render() {
        console.log('render ClickCounter');
        
        return (
            <h4>{ `You clicked on the link ${this.props.value} times` }</h4>
        );
    }
}