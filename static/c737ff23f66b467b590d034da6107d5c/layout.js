/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../components/footer/footer"

import Nav from '../components/nav/nav'

import MediaQuery from 'react-responsive'

import "./layout.css"
import "fontsource-raleway/200.css"
import "fontsource-raleway/300.css"
import "fontsource-raleway/400.css"
import "fontsource-raleway/500.css"
import "fontsource-raleway/600.css"
import "fontsource-raleway/700.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <MediaQuery minWidth = {500}>
      <div style = {overallWrapper}>
        <Nav />
        <main style = {mainStyle}>
          {children}
          <Footer />
        </main>
        
      </div>
      </MediaQuery>
      <MediaQuery maxWidth = {499}>
      <div style = {overallWrapperMobile}>
        <Nav />
        <main style = {mainStyle}>
          {children}
          <Footer />
        </main>
        
      </div>
      </MediaQuery>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const overallWrapper = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
}

const overallWrapperMobile = {
  width: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
}

const mainStyle = {
  flexGrow: '1',
  overflow: 'hidden',

  position: 'relative',
}

export default Layout
