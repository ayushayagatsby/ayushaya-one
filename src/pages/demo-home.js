import * as React from "react"
import {Link, graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeAnimation from "../components/HomeAnimation"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import MobileHome from "../components/MobileHome"






const DemoHome = () => {
    const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo title="Home page"/>
            
            {breakpoints.sm && 
                <MobileHome />
            }

            {(!breakpoints.sm && breakpoints.md) &&
                <h1>Prova</h1>
            }

            {(!breakpoints.md) && <HomeAnimation />}
        

        </Layout>
    )
}

export default DemoHome

