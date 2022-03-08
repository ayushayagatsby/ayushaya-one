import * as React from "react"
import {Link, graphql} from "gatsby"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutTopSection from "../components/AboutPage/AboutTopSection"






const About = ({location}) => {

    return (
        <Layout>
            <Seo title="About page"/>
            <AboutTopSection />

        </Layout>
    )
}

export default About

