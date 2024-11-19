import React, { Component } from 'react'

import MediaQuery from 'react-responsive'

class FacultyBubble extends Component {

    constructor(props) {
        super(props);
        this.linkRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.linkRef.current.style.textDecoration = 'underline'
    }

    handleStopHover() {
        this.linkRef.current.style.textDecoration = 'none'
    }

    render() {

        return(
            <>
            <MediaQuery minWidth = {500}>
            <a href = {this.props.website} target = "_blank" style = {aLinkStyle}>
                <div style = {bubbleWrapper} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.linkRef}>
                    <div style = {bubbleStyle}>
                        <img src = {this.props.image} style = {headshotStyle} alt = {this.props.name} />
                    </div>
                    <div style = {professorText}>
                        { this.props.name }
                    </div>
                </div>
            </a>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <a href = {this.props.website} target = "_blank" style = {aLinkStyle}>
                <div style = {bubbleWrapperMobile} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.linkRef}>
                    <div style = {bubbleStyleMobile}>
                        <img src = {this.props.image} style = {headshotStyle} alt = {this.props.name} />
                    </div>
                    <div style = {professorTextMobile}>
                        { this.props.name }
                    </div>
                </div>
            </a>
            </MediaQuery>
            </>
        )
    }
}

const bubbleWrapper = {
    margin: '0px 30px 20px 30px'
}

const bubbleWrapperMobile = {
    padding: '0px 10px 20px 10px'
}

const bubbleStyle = {
    width: '240px',
    height: '240px',
    backgroundColor: '#666',
    borderRadius: '50%',
    overflow: 'hidden'
}

const bubbleStyleMobile = {
    width: '140px',
    height: '140px',
    backgroundColor: '#666',
    borderRadius: '50%',
    overflow: 'hidden'
}

const headshotStyle = {
    height: '100%',
    objectFit: 'cover'
}

const professorText = {
    textAlign: 'center',
    marginTop: '10px',
    
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1.2em',
}

const professorTextMobile = {
    ...professorText,
    fontSize: '16px',
    maxWidth: '120px'
}

const aLinkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

export default FacultyBubble