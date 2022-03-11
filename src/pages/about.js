import * as React from "react"
import {Link, graphql} from "gatsby"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutTopSection from "../components/AboutPage/AboutTopSection"
import CurriculumSection from "../components/AboutPage/CurriculumSection"






const About = ({location}) => {

    return (
        <Layout>
            <Seo title="About page"/>
            <AboutTopSection />
            <CurriculumSection />

        </Layout>
    )
}

export default About

