import React from 'react';


export default class NavBar extends React.Component {

    renderLinks() {
        return this.props.navLinks.map((link) => this.renderLink(link));
    }

    renderLink(link) {
        return (<NavLink key={link.key} label={link.label} onClick={() => {
            this.props.pageChange(link.key);
        }} />)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}

export class NavLink extends React.Component {
    render() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" active={this.props.active} onClick={event => this.props.onClick()} >{this.props.label}</a>
                </li>
            </ul>
        );
    }
}