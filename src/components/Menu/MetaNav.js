import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import BrandMark from '../../assets/BrandMark.svg'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import InternalLink from "../InternalLink"


const FooterMetaNav = styled("nav")`
width: 34%;
display: flex;
justify-content: space-between;
font-size: 22px;
font-weight: 400;
color: ${props => props.color};
text-transform: uppercase;
`
const FooterMetaNavMobile = styled("nav")`
width: 80%;
display: flex;
justify-content: space-between;
margin: 0 auto;
font-size: 18px;
font-weight: 400;
color: #F9F5F1;
text-transform: uppercase;
`

const MetaNavType = styled("div")`
font-size: 22px;
font-weight: 400;
color: ${props => props.color};
text-transform: uppercase;
`

const FooterLeft = styled("div")`
display: flex;
justify-content: start;
padding-left: 5%;
width: 33%;
`

const FooterRight = styled("div")`
width: 33%;
display: flex;
flex-direction: column;
align-items: flex-end;
padding-right: 5%;
`

export default function MetaNav( {leftLogo, darkMode, menuPos, menuToggle} ) {
    const breakpoints = useBreakpoint();
    const metaTypes = [
        {
            text: "Imprint",
            link: "/imprint"
        }, {
            text: "Privacy",
            link: "/privacy"
        }, 
    ]

    const metaTypesMapped = metaTypes.map(item => <div onClick={menuToggle}><InternalLink href={item.link} children={item.text}/></div>);
    return (
        <>
            <FooterLeft>
                {leftLogo && <BrandMark
                    css={css ` width: ${breakpoints.sm
                    ? "14vw"
                    : "4vw"}; height: ${breakpoints.sm
                        ? "14vw"
                        : "4vw"}; filter: brightness(0) saturate(100%) invert(94%) sepia(68%) saturate(155%) hue-rotate(296deg) brightness(103%) contrast(95%); transform: translateY(-20%);`}/>}
            </FooterLeft>
            {!breakpoints.sm && <FooterMetaNav color={darkMode ? "#6B665B" : "#F9F5F1"}>
                {metaTypesMapped}

            </FooterMetaNav>}

            <FooterRight>
                <LanguageSelect darkMode={darkMode} menuPos={menuPos}/>
                {/* <DebugLS /> */}
            </FooterRight>

            {breakpoints.sm && <div css={css `flex-basis: 100%; height: 0;`}/>}
            {breakpoints.sm && <FooterMetaNavMobile>{metaTypesMapped}</FooterMetaNavMobile>}</>
    )
}
