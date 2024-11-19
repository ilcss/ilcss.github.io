import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import LAPerson from './laPerson'

import MediaQuery from 'react-responsive'

function LoadFaculty() {
    const data = useStaticQuery(graphql`
        query LAFacultyQuery {
            la_graduate_students: allFacultyElement (filter: {type: {eq: "la_graduate_student"}}) {
                edges {
                    node {
                        id,
                        name,
                        type,
                        bio,
                        website,
                        imageName
                    }
                }
            }
        }
    `)
    
    return(
        <>
        { data.la_graduate_students.edges.map(({ node }) => (
            <>
                <LAPerson node = {node} />
            </>
        )) }
        </>
    )
}

class LAFaculty extends Component {
    render() {
        return(
            <>
            <MediaQuery minWidth = {500}>
            <div style = {peopleHeader}>
                Meet the Team
            </div>

            <div style = {componentWrapper}>
                <div style = {peopleWrapper}>
                    <LoadFaculty />
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth = {499}>
            <div style = {peopleHeaderMobile}>
                Meet the Team
            </div>

            <div style = {componentWrapper}>
                <div style = {peopleWrapper}>
                    <LoadFaculty />
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
    padding: '0px 20px 60px 20px'
}

const peopleHeader = {
    maxWidth: '900px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
}

const peopleHeaderMobile = {
    ...peopleHeader,
    fontSize: '28px',
    paddingTop: '40px'
}

const peopleWrapper = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    maxWidth: '1200px',
    margin: 'auto'
}


export default LAFaculty