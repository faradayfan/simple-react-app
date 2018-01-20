import React from 'react';



export default class NavBar extends React.Component {
    state = {
        navLinks: [
            {
                key: 'home',
                label: 'Home'
            },
            {
                key: 'profile',
                label: 'Profile'
            },
            {
                key: 'about',
                label: 'About'
            }
        ]
    }

    renderLinks() {
        return this.state.navLinks.map((l => this.renderLink(l)));
    }

    renderLink(link) {
        return <NavLink key={link.key} label={link.label} />
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
                    <a className="nav-link" href="">{this.props.label}</a>
                </li>
            </ul>
        );
    }
}