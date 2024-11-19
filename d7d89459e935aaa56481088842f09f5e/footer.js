import React, { Component } from 'react'
import { Link } from 'gatsby'

import FooterLink from './footerLink'

class Footer extends Component {

    constructor(props) {
        super(props);
        this.emailRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.emailRef.current.style.textDecoration = 'underline'
    }

    handleStopHover() {
        this.emailRef.current.style.textDecoration = 'none'
    }

    render() {
        return(
            <div style = {componentWrapper}>
                <div style = {contentWrapper}>
                    <div style = {contentColumn}>
                        <p style = {linkHeaderStyle}>
                            Research and Publications
                        </p>
                        <FooterLink destination = "/research" description = "All Research" />
                        <FooterLink destination = "/projects" description = "Projects" />
                    </div>
                    <div style = {contentColumn}>
                        <p style = {linkHeaderStyle}>
                            Laboratory
                        </p>
                        <FooterLink destination = "/about" description = "About iLCSS" />
                        <FooterLink destination = "/faculty" description = "About the Faculty & Staff" />
                    </div>
                    <div style = {contentColumn}>
                        <p style = {linkHeaderStyle}>
                            Contact
                        </p>
                        <a href = "mailto:ecalvo@umd.edu" target = "_blank" style = {navLinkStyle} ref = {this.emailRef} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} >
                        <p style = {linkStyle}>
                            Email Us
                        </p>
                        </a>
                    </div>
                </div>
                <p style = {designedBy}>
                        Designed by Camilo Calvo-Alcaniz
                    </p>
            </div>
        )
    }
}

const componentWrapper = {
    height: '220px',
    width: '100%',
    backgroundColor: '#333',
    padding: '40px 0px 0px 0px'
}

const contentWrapper = {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'row nowrap'
}

const contentColumn = {
    width: '300px',
    marginRight: '120px'
}

const linkHeaderStyle = {
    color: 'white',

    fontFamily: 'Raleway',
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '1.0em',

    marginBottom: '1em'
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

const designedBy = {
    width: '90%',
    margin: '40px auto',

    color: 'white',

    fontFamily: 'Raleway',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '1.55em',

}

export default Footer