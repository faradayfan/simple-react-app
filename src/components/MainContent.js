import React from 'react'
import './MainContent.css'

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="mainContent">
                {this.props.pageContent}
            </div>
        )
    }

}