import React, { Component } from 'react'

import groupImage from '../../assets/images/group-image.jpg'

import MediaQuery from 'react-responsive'

class About extends Component {
    render() {

        const aboutText = 
        <>
            The interdisciplinary Lab for Computational Social Science (iLCSS) was created to advance the core research and training mission of the Department of Government and Politics at the University of Maryland-College Park. We are committed to the pursuit of high quality academic research that takes advantage of the wealth of data, methods, and theories available for the study of government institutions and political behavior. We focus on substantive problems and train people to understand data, create models of the world, and test their theories.
        </>

        return(
            <div style = {componentWrapper}>
            <MediaQuery minWidth = {500}>
                <MediaQuery minWidth = {1580}>
                <div style = {imageContainer}>
                    <img src = {groupImage} alt = "iLCSS Faculty" style = {groupImageStyle} />
                </div>
                </MediaQuery>
                
                <div style = {textContainer}>
                    <div style = {missionStyle}>
                        <p style = {missionText}>We Are the Interdisciplinary Laboratory of Computational Social Science (iLCSS)</p>
                        <p style = {missionText}>We Are Dedicated to Analyzing Social Science through Computational Methods</p>
                    </div>
                    <p style = {mainText}>
                        { aboutText }
                    </p>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
                <div style = {textContainerMobile}>
                    <div style = {missionStyleMobile}>
                        <p style = {missionText}>We Are the Interdisciplinary Laboratory of Computational Social Science (iLCSS)</p>
                        <p style = {missionText}>We Are Dedicated to Analyzing Social Science through Computational Methods</p>
                    </div>
                    <p style = {mainTextMobile}>
                        { aboutText }
                    </p>
                </div>
            </MediaQuery>
            </div>
        )
    }
}

const componentWrapper = {
    width: '100%',
    backgroundColor: '#f5f5f5',

    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
}

const imageContainer = {
    width: '540px',
    marginRight: '30px'
}

const groupImageStyle = {
    display: 'block',
    width: '100%',
    margin: '84px auto 0px auto'

}

const textContainer = {
    maxWidth: '740px',
    padding: '0px 100px 40px 100px'
}

const textContainerMobile = {
    maxWidth: '740px',
    padding: '0px 10px 40px 10px'
}

const missionStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '80px 10px 0px 10px',

    fontFamily: 'Raleway',
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '1.2em',
}

const missionStyleMobile = {
    ...missionStyle,
    padding: '40px 10px 0px 10px',
    fontSize: '20px',
}

const missionText = {
    marginBottom: '10px',
    textAlign: 'left'
}

const mainText = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '30px 10px 0px 10px',

    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '1.2em',

    textAlign: 'left',
}

const mainTextMobile = {
    ...mainText,
    fontSize: '20px',
}


export default About