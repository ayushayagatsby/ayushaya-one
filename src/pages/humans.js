import React from 'react'
import HumansDesktop from '../components/HumansDesktop'
import HumansMobile from '../components/HumansMobile'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo';


export default function Humans() {
    const breakpoints = useBreakpoint();
    return (
        <>
            <Seo title="Humans page"/> {breakpoints.sm && <HumansMobile/>
}

            {(!breakpoints.sm && breakpoints.md) && <h1>Prova</h1>
}

            {(!breakpoints.md && breakpoints.l) && <HumansDesktop />}

        </>

    )
}
