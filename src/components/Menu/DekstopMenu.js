import React, {useState, useEffect} from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import InternalLink from '../InternalLink'
import MetaNav from './MetaNav'
import {CSSTransition} from 'react-transition-group'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import './DesktopMenu.css'
import LanguageSelect from '../LanguageSelect/LanguageSelect'

const OuterWrapper = styled("div")`
width: 100%;
height: 100%;
overflow: hidden;
background-color: #FAF5F1;
position: absolute;
top: 0;
z-index: 3;

`

const InnerWrapper = styled("div")`
display: flex;
flex-direction: column;
height: 100%;
padding-top: 15vh;
`

const MenuContainer = styled("nav")`
display: flex;
flex-direction: column;
height: 85%;
align-items: center;
justify-content: space-evenly;
`

const MetaContainer = styled("nav")`
display: flex;
align-items: flex-end;
padding-bottom: 2%;
height: 15%;
`

const MetaMobile = styled("nav")`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 30%;
`

const MobileMenuMeta = styled("nav")`
width: 80%;
display: flex;
justify-content: space-between;
margin: 0 auto;
font-size: 18px;
font-weight: 400;
color: #6B665B;
text-transform: uppercase;
`

const metaTypes = [
    {
        text: "Imprint",
        link: "/imprint"
    }, {
        text: "Privacy",
        link: "/privacy"
    }, {
        text: "Contact",
        link: "/contact"
    }
]

const menuTypes = [
    {
        text: "Animals",
        link: "/animals"
    }, {
        text: "Humans",
        link: "/humans"
    }, {
        text: "About",
        link: "/about"
    }, {
        text: "Approach",
        link: "/approach"
    }, {
        text: "Contact",
        link: "/contact"
    }, {
        text: "Publications",
        link: "/publications"
    }
];

export default function DekstopMenu({menuState, menuToggle}) {
    // useEffect(() => {

    //     const firstChild = document.getElementById("layout-wrapper");

    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);

    // }, []);

    const breakpoints = useBreakpoint();

    const [viewportHeight, setViewportHeight] = useState("100")

    const metaTypesMapped = metaTypes.map(item => <InternalLink href={item.link} children={item.text}/>);
    const menuTypesMappedDekstop = menuTypes.map(item => <h1 onClick={menuToggle}><InternalLink href={item.link} children={item.text}/></h1>);
    const menuTypesMappedMobile = menuTypes.map(item => <h3 onClick={menuToggle}><InternalLink href={item.link} children={item.text}/></h3>);
    const menuTypesMapped = breakpoints.sm
        ? menuTypesMappedMobile
        : menuTypesMappedDekstop;

    return (
        <CSSTransition
            timeout={1000}
            in={menuState}
            classNames="menu-transition"
            mountOnEnter
            unmountOnExit>
            <OuterWrapper>
                <InnerWrapper>
                    <MenuContainer>{menuTypesMapped}</MenuContainer>
                    <MetaContainer>
                        {!breakpoints.sm && <MetaNav leftLogo={false} darkMode={true} menuPos="top"/>}
                    </MetaContainer>

                    {breakpoints.sm && <MetaMobile>
                        <LanguageSelect darkMode={true} menuPos={"top"}/>
                        <MobileMenuMeta>{metaTypesMapped}</MobileMenuMeta>
                    </MetaMobile>}
                </InnerWrapper>
            </OuterWrapper>
        </CSSTransition>
    )
}
