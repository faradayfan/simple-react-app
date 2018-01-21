import React from 'react';
import NavBar from './NavBar'


export default class Header extends React.Component {

    render() {
        return (
            <NavBar navLinks={this.props.navLinks} pageChange={this.props.pageChange} />
        );
    }
}