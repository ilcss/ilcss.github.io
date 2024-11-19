import React, { Component } from 'react'

import { Link } from 'gatsby'

import NavElement from './navElement'

class Nav extends Component {

    constructor(props) {
        super(props);
        this.titleRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.titleRef.current.style.textDecoration = 'underline'
    }

    handleStopHover() {
        this.titleRef.current.style.textDecoration = 'none'
    }

    render() {
        return(
            <>
                <div style = {spaceTaker} />
                <div style = {componentWrapper}>
                    <h1 style = {navTitle}>
                        <Link to="/" style = {navLinkStyle} ref = {this.titleRef} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover}>
                        iLCSS
                        </Link>
                    </h1>   
                    <div style = {navElementsWrapper}>
                        <Link to="/about" style = {navLinkStyle}>
                            <NavElement title = 'About' /> 
                        </Link>
                        <Link to="/projects" style = {navLinkStyle}>
                            <NavElement title = 'Projects' /> 
                        </Link>
                        <Link to="/faculty" style = {navLinkStyle}>
                            <NavElement title = 'People' /> 
                        </Link>
                        <Link to="/research" style = {navLinkStyle}>
                            <NavElement title = 'Research' /> 
                        </Link>

                        <div style = {spacer} />
                        <Link to="/latin-america" style = {navLinkStyle}>
                            <NavElement title = 'iLCSS Latin America' /> 
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

const spaceTaker = {
    height: '100%',
    width: '150px',
    flexShrink: '0'
}

const componentWrapper = {
    position: 'fixed',

    height: '100%',
    width: '150px',
    backgroundColor: '#EE3E38',

    padding: '40px 10px 0px 10px'
}

const navTitle = {
    color: 'white',
    textAlign: 'left',
    marginLeft: '16px',
    fontFamily: 'Raleway',
    fontSize: '18px',
    fontWeight: '400',
}

const navElementsWrapper = {
    margin: '40px 0px 40px 0px'
}

const navLinkStyle = {
    textDecoration: 'none',
    color: 'white'
}

const spacer = {
    height: '120px',
    width: '100%'
}

export default Nav