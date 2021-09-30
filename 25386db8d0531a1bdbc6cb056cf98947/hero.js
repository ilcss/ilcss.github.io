import { Link } from 'gatsby'
import React, { Component } from 'react'

import timelapse from '../../assets/timelapse.mp4'

import hero from '../../assets/images/hero.jpg'

class Hero extends Component {

    constructor(props) {
        super(props);
        this.aboutRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.aboutRef.current.style.backgroundColor = '#e3b922'
    }

    handleStopHover() {
        this.aboutRef.current.style.backgroundColor = '#f5cc38'
    }

    render() {
        return(
            <div style = {heroStyle}>

                <img src = {hero} alt = "Interdisciplinary Lab of Computational Social Science" style = {heroImageStyle} />

                <div style = {videoCoverStyle} />

                <div style = {textContainer}>
                    <div style = {topName}>
                        iLCSS
                    </div>

                    <div style = {titleContainerWrapper}>
                        <div style = {titleContainer}>
                            <h1 style = {titleTextYellow}>
                                Data
                            </h1>
                            <h1 style = {titleText}>
                                Meets
                            </h1>
                            <h1 style = {titleTextRed}>
                                Social Science
                            </h1>
                        </div>
                    </div>

                    <Link to = '/about' style = {aboutLinkStyle}>
                        <div style = {aboutDiv} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.aboutRef} >
                            <p style = {aboutDivText}>
                                About Us
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

const heroStyle = {
    position: 'relative',
    display: 'flex',

    width: '100%',
    height: '740px',
    backgroundColor: '#222629',
    color: 'white',

    overflow: 'hidden'
}

const heroImageStyle = {
    width: '100%',
    position: 'absolute',
    left: '0',
    bottom: '-120px',
    zIndex: '2'
}

const videoCoverStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    backgroundColor: '#222629',
    opacity: '0.45',
    zIndex: '3'
}

const textContainer = {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap'
}

const topName = {
    position: 'relative',
    margin: '30px auto 0px auto',
    zIndex: '1000',

    fontFamily: 'Raleway',
    fontSize: '32px',
    fontWeight: '300',

    textAlign: 'center',
    
    color: 'white',
    letterSpacing: '0.03em',
    lineHeight: '1.02em'
}


const titleContainerWrapper = {
    maxWidth: '1200px',
    flex: '0 0',
    zIndex: '10',
    margin: '0px auto'
}

const titleContainer = {
    width: '900px',
    margin: '120px auto 0px auto',
    
}

const titleText = {
    fontFamily: 'Raleway',
    fontSize: '54px',
    fontWeight: '700',

    textAlign: 'center',
    
    color: 'white',
    letterSpacing: '0.03em',
    lineHeight: '0.96em'
}

const titleTextYellow = {
    ...titleText,
    fontSize: '118px',
    color: '#f5cc38',
}

const titleTextRed = {
    ...titleText,
    fontSize: '118px',
    color: '#EE3E38',
}

const aboutLinkStyle = {
    zIndex: '1000',
    textDecoration: 'none',
    flexGrow: '0',
    width: '140px',
    margin: '40px auto 0px auto',
}

const aboutDiv = {
    
    width: '140px',
    height: '46px',
    backgroundColor: '#f5cc38',
    borderRadius: '23px',
    zIndex: '1000',
    padding: '12px 10px 10px 10px'
}

const aboutDivText = {
    fontFamily: 'Raleway',
    fontSize: '22px',
    fontWeight: '400',

    textAlign: 'center',
    
    color: 'white',
    letterSpacing: '0.03em',
    lineHeight: '1.02em',
}

// <video loop muted autoPlay style = {videoStyle}>
// <source src={timelapse} type="video/mp4" />
// </video>

export default Hero;