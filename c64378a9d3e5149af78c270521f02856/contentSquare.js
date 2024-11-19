import React, { Component } from 'react'

import ProjectSquare from './projectSquare'
import PublicationSquare from './publicationSquare'

class ContentSquare extends Component {
    render() {
        if (this.props.node.type == 'project') {
            return(
                <ProjectSquare node = {this.props.node} />
            )
        } else if (this.props.node.type == 'publication') {
            return(
                <PublicationSquare node = {this.props.node} />
            )
        } else {
            return(
                <p>no</p>
            )
        }
    }
}

const squareStyle = {
    width: '400px',
    height: '400px',
    borderRadius: '6px',
    backgroundColor: '#ddd'
}




export default ContentSquare