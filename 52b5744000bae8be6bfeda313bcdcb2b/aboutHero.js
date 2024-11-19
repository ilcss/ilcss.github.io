import React, { Component } from 'react'

import aboutImg from '../../assets/images/about.jpg'

class AboutHero extends Component {
    render() {
        return(
            <div style = {heroStyle}>


                <img src = {aboutImg} alt = "About iLCSS" style = {imageStyle} />

                <div style = {videoCoverStyle} />


                <div style = {titleContainerWrapper}>
                    <div style = {titleContainer}>
                        <h1 style = {titleTextYellow}>
                            We Find the Story Behind the Data
                        </h1>
                    </div>
                </div>
            </div>
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

const imageStyle = {
    width: '100%',
    position: 'absolute',
    left: '0',
    bottom: '-220px',
    zIndex: '2'
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
    margin: '0px auto'
}

const titleContainer = {
    width: '600px',
    margin: '200px auto 0px auto',
    
}

const titleText = {
    fontFamily: 'Raleway',
    fontWeight: '700',

    textAlign: 'center',
    
    color: 'white',
    letterSpacing: '0.03em',
    lineHeight: '1.02em'
}

const titleTextYellow = {
    ...titleText,
    fontSize: '62px',
    color: '#f5cc38',
}

const titleTextRed = {
    ...titleText,
    fontSize: '108px',
    color: '#EE3E38',
}

export default AboutHero;