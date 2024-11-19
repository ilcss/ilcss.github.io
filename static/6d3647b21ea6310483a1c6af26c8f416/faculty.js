import React, { Component } from 'react'

import FacultyBubble from './facultyBubble'

import calvo from '../../assets/images/headshots/calvo.jpg'
import birnir from '../../assets/images/headshots/birnir.jpg'
import bayh from '../../assets/images/headshots/bayh.jpeg'
import johnson from '../../assets/images/headshots/marcus_johnson.jpeg'
import clerici from '../../assets/images/headshots/clerici.jpg'
import vera from '../../assets/images/headshots/vera.jpg'
import waguespack from '../../assets/images/headshots/waguespack.jpg'
import dunford from '../../assets/images/headshots/dunford.jpg'
import ventura from '../../assets/images/headshots/ventura.jpg'
import brancati from '../../assets/images/headshots/brancati.jpeg'

import MediaQuery from 'react-responsive'

class Faculty extends Component {
    render() {

        return(
            <>
            <MediaQuery minWidth = {500}>
            <div style = {componentWrapper}>
                <div style = {textContainer}>
                    <div style = {headerText}>
                        Affiliated Faculty
                    </div>
                </div>
                
                <div style = {bubbleHolder}>
                    <FacultyBubble name = 'Dr. Ernesto Calvo' image = {calvo} website = "http://gvptsites.umd.edu/calvo/" />
                    <FacultyBubble name = 'Dr. Jóhanna Birnir' image = {birnir} website = "https://www.johannabirnir.com/"/>
                    <FacultyBubble name = 'Dr. Paula Clerici' image = {clerici} website = "https://paulaclerici.com/" />
                    <FacultyBubble name = 'Dr. Fiona Shen Bayh' image = {bayh} website = "https://www.fionashenbayh.com/" />
                    <FacultyBubble name = 'Dr. Marcus Johnson' image = {johnson} website = "https://sites.google.com/umd.edu/marcusjohnsonphd/about" />
                    <FacultyBubble name = 'Dr. Sebastian Vallejo Vera' image = {vera} website = "https://www.svallejovera.com/" />
                    <FacultyBubble name = 'Dr. David M. Waguespack' image = {waguespack} website = "https://scholar.google.com/citations?user=6bWxEhcAAAAJ&hl=en" />
                    <FacultyBubble name = 'Dr. Eric Dunford' image = {dunford} website = "http://ericdunford.com/" />
                    <FacultyBubble name = 'Dr. Tiago Ventura' image = {ventura} website = "http://tiagoventura.rbind.io/" />
                    <FacultyBubble name = 'Dr. Dawn Brancati' image = {brancati} website = "http://www.dawnbrancati.com/" />
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <div style = {componentWrapper}>
                <div style = {textContainer}>
                    <div style = {headerTextMobile}>
                        Affiliated Faculty
                    </div>
                </div>
                
                <div style = {bubbleHolder}>
                    <FacultyBubble name = 'Dr. Ernesto Calvo' image = {calvo} website = "http://gvptsites.umd.edu/calvo/" />
                    <FacultyBubble name = 'Dr. Jóhanna Birnir' image = {birnir} website = "https://www.johannabirnir.com/"/>
                    <FacultyBubble name = 'Dr. Paula Clerici' image = {clerici} website = "https://paulaclerici.com/" />
                    <FacultyBubble name = 'Dr. Sebastian Vallejo Vera' image = {vera} website = "https://www.svallejovera.com/" />
                    
                    <FacultyBubble name = 'Dr. David M. Waguespack' image = {waguespack} website = "https://scholar.google.com/citations?user=6bWxEhcAAAAJ&hl=en" />
                    <FacultyBubble name = 'Dr. Eric Dunford' image = {dunford} website = "http://ericdunford.com/" />
                    <FacultyBubble name = 'Dr. Marcus Johnson' image = {johnson} website = "https://sites.google.com/umd.edu/marcusjohnsonphd/about" />
                    <FacultyBubble name = 'Dr. Tiago Ventura' image = {ventura} website = "https://www.venturatiago.com/" />
                    <FacultyBubble name = 'Dr. Dawn Brancati' image = {brancati} website = "http://www.dawnbrancati.com/" />
                </div>
            </div>
            </MediaQuery>
            </>
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
    marginBottom: '20px'
}

const headerText = {
    maxWidth: '900px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
}


const headerTextMobile = {
    ...headerText,
    paddingTop: '20px',
    fontSize: '28px',
}

const bubbleHolder = {
    maxWidth: '1100px',
    margin: '0px auto 80px auto',
    padding: '0px 10px 0px 20px',

    display: 'flex',
    flexFlow: 'row wrap',
}

const spacer = {
    width: '180px',
    height: '100px',
}

export default Faculty