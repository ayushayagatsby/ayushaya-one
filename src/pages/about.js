import * as React from "react"
import {Link, graphql} from "gatsby"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutTopSection from "../components/AboutPage/AboutTopSection"
import CurriculumSection from "../components/AboutPage/CurriculumSection"
import MaskGateShape from "../assets/MaskGateShape.svg"
import bgGradient from "../images/bgGradient.jpeg"
import Door from "../components/SlideOneScale/Door"
import WorkingSection from "../components/AboutPage/WorkingSection"

const About = () => {

    return (
        <Layout>
            <Seo title="About page"/>
            <AboutTopSection/>
            <CurriculumSection/>
            <WorkingSection />
        </Layout>
    )
}

export default About
