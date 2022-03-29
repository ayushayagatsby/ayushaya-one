import React from 'react'
import AnimalsDesktop from '../components/AnimalsDesktop'
import Layout from '../components/layout'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo'
import AnimalsMobile from '../components/AnimalsMobile'

export default function Animals() {
    const breakpoints = useBreakpoint();

    return (
        <>
            <Seo title="Animals page"/> {breakpoints.sm && <AnimalsMobile/>
}

            {(!breakpoints.sm && breakpoints.md) && <h1>Prova</h1>
}

            {(!breakpoints.md && breakpoints.l) && <AnimalsDesktop />}

        </>
    )
}