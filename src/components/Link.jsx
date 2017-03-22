import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link as RouterLink } from 'react-router';

@inject('click')
@observer
export default class Link extends React.Component {
    render() {
        return (
            <RouterLink
                to={ this.props.to }
                onClick={ this.handleClick }
            >
                { this.props.children }
            </RouterLink>
        );
    }

    handleClick = () => {
        // this.props.click.counter++;
        this.props.click.add();
    }
}