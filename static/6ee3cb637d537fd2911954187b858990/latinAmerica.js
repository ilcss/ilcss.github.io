import React, { Component } from 'react'

import groupImage from '../../assets/images/latin-america-group-image.jpg'

import MediaQuery from 'react-responsive'

class LatinAmerica extends Component {
    render() {

        const aboutText = 
        <>
            The iLCSS-Argentina and the iLCSS-Mexico, led by Paula Clerici and Sebastian Vallejo Vera, train and collaborate with young scholars from Latin America to advance basic social science research and tackle important public policy problems.
        </>

        return(
            <div style = {componentWrapper}>
            <MediaQuery minWidth = {500}>
                <MediaQuery minWidth = {1320}>
                    <div style = {imageContainer}>
                        <img src = {groupImage} alt = "iLCSS Faculty" style = {groupImageStyle} />
                    </div>
                </MediaQuery>

                <div style = {textContainer}>
                    <div style = {missionStyle}>
                        <p style = {missionText}>iLCSS Latin America melds data science and social science across the American continent</p>
                    </div>
                    <p style = {mainText}>
                        { aboutText }
                    </p>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <div style = {textContainerMobile}>
                <div style = {missionStyleMobile}>
                    <p style = {missionText}>iLCSS Latin America melds data science and social science across the American continent</p>
                </div>
                <p style = {mainText}>
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
    flexFlow: 'row nowrap',
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
    maxWidth: '880px',
    padding: '0px 100px 0px 100px'
}

const textContainerMobile = {
    maxWidth: '740px',
    padding: '0px 10px 40px 10px'
}

const missionStyle = {
    maxWidth: '600px',
    margin: 'auto',
    paddingTop: '160px',

    fontFamily: 'Raleway',
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '1.2em',

    textAlign: 'left',
}

const missionStyleMobile = {
    ...missionStyle,
    padding: '40px 10px 0px 10px',
    fontSize: '20px',
}

const missionText = {
    marginBottom: '10px'
}

const mainText = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '30px 0px 0px 0px',

    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '1.2em',

    textAlign: 'left',
}


export default LatinAmerica