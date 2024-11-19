import React, { Component } from 'react'

import MediaQuery from 'react-responsive'

class NavElement extends Component {

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
                <div style = {navElementStyle} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.linkRef}>

                    <div style = {edgeLine} />
                    {this.props.title}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
                <div style = {navElementStyleMobile} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.linkRef}>
                    {this.props.title}
                </div>
            </MediaQuery>
            </>
        )
    }
}

const navElementStyle = {
    width: '80%',
    height: '38px',

    margin: '10px auto 10px auto',

    fontFamily: 'Raleway',
    fontSize: '18px',
    fontWeight: '400',
    color: 'white',

    textAlign: 'left',
}

const navElementStyleMobile = {
    ...navElementStyle,
    minWidth: '90px',
    maxWidth: '260px',
    margin: '0px 10px 0px 10px',
    whiteSpace: 'nowrap'
}

const edgeLine = {
    width: '100%',
    height: '1px',
    backgroundColor: '#f09592',
    margin: '0px auto 10px auto',
}

const edgeLineMobile = {
    ...edgeLine,
    width: '45%'
}

export default NavElement