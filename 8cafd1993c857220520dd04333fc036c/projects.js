import React, { Component } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import Project from './project'

import { Grid, Cell } from "styled-css-grid"

function LoadProjects() {
    const data = useStaticQuery(graphql`
        query ProjectsQuery {
            allContentElement(
                filter: {type: {eq: "project"}} 
                sort: { fields: date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        imageName
                        fileName
                        linkName
                        authors
                        pageLink
                        project
                        status
                        summary
                        title
                        type
                        date
                        slug
                    }
                }
            }
        }
    `)

    return(
        <>
        { data.allContentElement.edges.map(({ node }) => (
            <>
                <Link to = { node.slug } style = {overallLinkStyle}>
                    <Cell width = {1}>
                        <Project node = {node} />
                    </Cell>
                </Link> 
            </>
        )) }
        </>
    )
}

class Projects extends Component {
    render() {
        return(
            <div style = {componentWrapper}>
                <div style = {titleHeader}>
                    Projects
                </div>
                <div style = {gridContainer}>
                    <Grid columns={2} gap="4px">
                        <LoadProjects />
                    </Grid>  
                </div>
            </div>
        )
    }
}

const componentWrapper = {
    width: '100%',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',

    padding: '0px 0px 60px 0px',
}

const titleHeader = {
    width: '900px',
    margin: 'auto',
    paddingTop: '80px',
    paddingBottom: '30px',

    fontFamily: 'Raleway',
    fontSize: '40px',
    fontWeight: '600',
    lineHeight: '1.2em',

    textAlign: 'center',
}

const gridContainer = {
    padding: '0px 40px 0px 40px'
}

const overallLinkStyle = {
    textDecoration: 'none',
    color: 'black',
}


export default Projects