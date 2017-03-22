import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('click')
@observer
export default class ClickCounter extends React.Component {
    render() {
        console.log('render ClickCounter');
        const { counter } = this.props.click;
        return (
            <h3>{ `You clicked on the link ${counter} times` }</h3>
        );
    }
}