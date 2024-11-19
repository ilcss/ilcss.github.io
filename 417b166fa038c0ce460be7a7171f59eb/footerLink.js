import React, { Component } from 'react'
import { Link } from 'gatsby'

class FooterLink extends Component {

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
            <Link to={this.props.destination} style = {navLinkStyle} >
                <p style = {linkStyle} ref = {this.linkRef} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover}>
                    {this.props.description}
                </p>
            </Link>
        )
    }
}

const navLinkStyle = {
    textDecoration: 'none',
    color: 'white'
}

const linkStyle = {
    color: 'white',

    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.55em',
}

export default FooterLink