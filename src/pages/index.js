import * as React from "react"
import {Link, graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeAnimation from "../components/HomeAnimation"





const BlogIndex = ({location}) => {

    return (
        <Layout>
            <Seo title="All posts"/>
            <HomeAnimation />
        </Layout>
    )
}

export default BlogIndex

