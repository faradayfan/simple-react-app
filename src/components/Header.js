import React from 'react';
import NavBar from './NavBar'


export default class Header extends React.Component {

    render() {
        return (
            <NavBar brandText={this.props.brandText} navLinks={this.props.navLinks} pageChange={this.props.pageChange} />
        );
    }
}