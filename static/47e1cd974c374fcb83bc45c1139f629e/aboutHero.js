import React, { Component } from 'react'

import aboutImg from '../../assets/images/about.jpg'

import MediaQuery from 'react-responsive'

class AboutHero extends Component {
    render() {
        return(
            <>
            <MediaQuery minWidth = {500}>
            <div style = {heroStyle}>
            <div style = {imageContainerStyle}>
                <img src = {aboutImg} alt = "About iLCSS" style = {imageStyle} />
            </div>

                <div style = {videoCoverStyle} />


                <div style = {titleContainerWrapper}>
                    
                    <MediaQuery minWidth = {760}>
                    <div style = {titleContainer}>
                        <h1 style = {titleText}>
                            We Find the Story Behind the Data
                        </h1>
                    </div>
                    </MediaQuery>
                    <MediaQuery maxWidth = {759} minWidth = {500}>
                    <div style = {titleContainerMed}>
                        <h1 style = {titleTextMed}>
                            We Find the Story Behind the Data
                        </h1>
                        </div>
                    </MediaQuery>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <div style = {heroStyleMobile}>
            <div style = {imageContainerStyle}>
                <img src = {aboutImg} alt = "About iLCSS" style = {imageStyle} />
            </div>

                <div style = {videoCoverStyle} />

                <div style = {titleContainerWrapper}>
                    <div style = {titleContainerMobile}>
                        <h1 style = {titleTextMed}>
                            We Find the Story Behind the Data
                        </h1>
                    </div>
                </div>
            </div>
            </MediaQuery>
            </>
        )
    }
}

const heroStyle = {
    position: 'relative',
    display: 'flex',

    width: '100%',
    height: '540px',
    backgroundColor: '#222629',
    color: 'white',

    overflow: 'hidden'
}

const heroStyleMobile = {
    ...heroStyle,
    height: '240px',
}

const imageContainerStyle = {
    position: 'absolute',
    zIndex: '2',
    width: '100%',
    height: '100%',
}

const imageStyle = {
    minHeight: '100%',
    minWidth: '100%',
    objectFit: 'cover'
}

const videoCoverStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    backgroundColor: '#222629',
    opacity: '0.65',
    zIndex: '3'
}

const titleContainerWrapper = {
    maxWidth: '1200px',
    flex: '1 1',
    zIndex: '10',
    margin: '0px auto',
    padding: '0px 10px 0px 10px'
}

const titleContainer = {
    maxWidth: '600px',
    margin: '200px auto 0px auto', 
}

const titleContainerMobile = {
    maxWidth: '600px',
    margin: '100px auto 0px auto', 
}

const titleContainerMed = {
    maxWidth: '400px',
    margin: '200px auto 0px auto', 
}

const titleText = {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: '62px',
    color: '#f5cc38',

    textAlign: 'center',
    
    letterSpacing: '0.03em',
    lineHeight: '1.02em'
}

const titleTextMed = {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: '32px',
    color: '#f5cc38',

    textAlign: 'center',
    
    letterSpacing: '0.03em',
    lineHeight: '1.02em'
}

const titleTextRed = {
    ...titleText,
    fontSize: '108px',
    color: '#EE3E38',
}

export default AboutHero;