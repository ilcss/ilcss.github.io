import React, { Component } from 'react'

import FacultyBubble from './facultyBubble'

import calvo from '../../assets/images/headshots/calvo.jpg'
import clerici from '../../assets/images/headshots/clerici.jpg'
import vera from '../../assets/images/headshots/vera.jpg'
import birnir from '../../assets/images/headshots/birnir.jpg'
import waguespack from '../../assets/images/headshots/waguespack.jpg'
import dunford from '../../assets/images/headshots/dunford.jpg'

class Faculty extends Component {
    render() {

        return(
            <div style = {componentWrapper}>
                <div style = {textContainer}>
                    <div style = {headerText}>
                        Affiliated Faculty
                    </div>
                </div>
                
                <div style = {bubbleHolder}>
                    <FacultyBubble name = 'Dr. Ernesto Calvo' image = {calvo} />
                    <div style = {spacer} />
                    <FacultyBubble name = 'Dr. Paula Clerici' image = {clerici} />
                    <div style = {spacer} />
                    <FacultyBubble name = 'Dr. Sebastian Vallejo Vera' image = {vera} />
                    <div style = {spacer} />
                    <FacultyBubble name = 'Dr. Jóhanna Birnir' image = {birnir} />
                    <div style = {spacer} />
                    <FacultyBubble name = 'Dr. David M. Waguespack' image = {waguespack} />
                    <div style = {spacer} />
                    <FacultyBubble name = 'Dr. Eric Dunford' image = {dunford} />
                </div>
            </div>
        )
    }
}

const componentWrapper = {
    width: '100%',
    backgroundColor: '#f5f5f5',

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
}

const textContainer = {
    marginBottom: '40px'
}

const headerText = {
    width: '900px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
}

const bubbleHolder = {
    maxWidth: '1200px',
    margin: '0px auto 80px auto',

    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const spacer = {
    width: '180px',
    height: '100px',

}

export default Faculty