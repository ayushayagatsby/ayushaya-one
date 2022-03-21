import React from 'react'
import ApproachDesktop from '../components/ApproachDesktop'
import Layout from '../components/layout'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo'
import ApproachMobile from '../components/ApproachMobile'

export default function Approach() {
    const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo title="Approach page"/> {breakpoints.sm && <ApproachMobile/>
}

            {(!breakpoints.sm && breakpoints.md) && <h1>Prova</h1>
}

            {(!breakpoints.md && breakpoints.l) && <ApproachDesktop/>}

        </Layout>
    )
}
