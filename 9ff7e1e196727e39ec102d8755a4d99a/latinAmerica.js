import React, { Component } from 'react'

import groupImage from '../../assets/images/latin-america-group-image.jpg'

class LatinAmerica extends Component {
    render() {

        const aboutText = 
        <>
            The interdisciplinary Lab for Computational Social Science (iLCSS) was created to advance the core research and training mission of the Department of Government and Politics at the University of Maryland-College Park. We are committed to the pursuit of high quality academic research that takes advantage of the wealth of data, methods, and theories available for the study of government institutions and political behavior. We focus on substantive problems and train people to understand data, create models of the world, and test their theories.
        </>

        return(
            <div style = {componentWrapper}>

                <div style = {imageContainer}>
                    <img src = {groupImage} alt = "iLCSS Faculty" style = {groupImageStyle} />
                </div>

                <div style = {textContainer}>
                    <div style = {missionStyle}>
                        <p style = {missionText}>iLCSS Latin America Melds Data Science and Social Science Across the American Continent</p>
                    </div>
                    <p style = {mainText}>
                        { aboutText }
                    </p>
                </div>
                

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

const missionStyle = {
    maxWidth: '600px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '1.2em',

    textAlign: 'center',
}

const missionText = {
    marginBottom: '10px'
}

const mainText = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '30px 10px 0px 10px',

    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '1.2em',

    textAlign: 'center',
}


export default LatinAmerica