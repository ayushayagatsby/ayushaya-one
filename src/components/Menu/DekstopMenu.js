import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import InternalLink from '../InternalLink'
import MetaNav from './MetaNav'
import {CSSTransition} from 'react-transition-group'
import './DesktopMenu.css'

const OuterWrapper = styled("div")`
width: 100%;
height: 100vh;
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
height: 70%;
align-items: center;
justify-content: space-evenly;
`

const MetaContainer = styled("nav")`
display: flex;
align-items: flex-end;
padding-bottom: 2%;
height: 30%;
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

    const metaTypesMapped = metaTypes.map(item => <InternalLink href={item.link} children={item.text}/>);
    const menuTypesMapped = menuTypes.map(item => <h1 onClick={menuToggle}><InternalLink href={item.link} children={item.text}/></h1>);

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
                        <MetaNav leftLogo={false} darkMode={true} menuPos="top"/>
                    </MetaContainer>
                </InnerWrapper>
            </OuterWrapper>
        </CSSTransition>
    )
}
