import React from 'react'

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.pageContent}
            </div>
        )
    }

}