import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Person from './person'

function LoadFaculty({ type }) {
    const data = useStaticQuery(graphql`
        query FacultyQuery {
            faculty: allFacultyElement (filter: {type: {eq: "faculty"}}) {
                edges {
                    node {
                        id
                        name,
                        type,
                        bio,
                        website,
                        imageName
                    }
                }
            }
            graduate_students: allFacultyElement (filter: {type: {eq: "graduate_student"}}) {
                edges {
                    node {
                        id
                        name,
                        type,
                        bio,
                        website,
                        imageName
                    }
                }
            }
            affiliated_faculty: allFacultyElement (filter: {type: {eq: "affiliated_faculty"}}) {
                edges {
                    node {
                        id
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

    if (type == 'faculty') {
        return(
            <>
            { data.faculty.edges.map(({ node }) => (
                <>
                    <Person node = {node} />
                </>
            )) }
            </>
        )
    } else if (type == 'affiliated_faculty') {
        return(
            <>
            { data.affiliated_faculty.edges.map(({ node }) => (
                <>
                    <Person node = {node} />
                </>
            )) }
            </>
        )
    } else {
        return(
            <>
            { data.graduate_students.edges.map(({ node }) => (
                <>
                    <Person node = {node} />
                </>
            )) }
            </>
        )
    }
}

class People extends Component {
    render() {
        return(
            <div style = {componentWrapper}>
                <div style = {peopleHeader}>
                    Faculty
                </div>

                <LoadFaculty type = 'faculty' />

                <div style = {peopleHeader}>
                    Graduate Students
                </div>

                <LoadFaculty type = 'graduate_students' />

                <div style = {peopleHeader}>
                    Affiliated Faculty
                </div>

                <LoadFaculty type = 'affiliated_faculty' />

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
    padding: '0px 0px 60px 0px'
}

const peopleHeader = {
    width: '900px',
    margin: 'auto',
    paddingTop: '80px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
}


export default People