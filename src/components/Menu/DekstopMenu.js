import React, {useState, useEffect, useContext} from 'react'
import styled from "@emotion/styled"
import InternalLink from '../InternalLink'
import MetaNav from './MetaNav'
import {CSSTransition} from 'react-transition-group'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import './DesktopMenu.css'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import MenuContent from '../../content/MenuContent.json';
import LanguageContext from '../../context/LanguageContext'


const OuterWrapper = styled("div")`
width: 100%;
height: 100%;
overflow: hidden;
background-color: #FAF5F1;
position: fixed;
top: 0;
z-index: 11;

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


    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = MenuContent.content.en;
    const italianContent = MenuContent.content.it;
    const germanContent = MenuContent.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
            case 'en':
                return englishContent

            case 'de':
                return germanContent

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);


    const metaTypesMapped = metaTypes.map(item => <InternalLink href={item.link} children={item.text}/>);
    const menuTypesMappedDekstop = currentLanguage.map(item => <h1 onClick={menuToggle}><InternalLink href={item.link} children={item.text} menuItem={true}/></h1>);
    const menuTypesMappedMobile = currentLanguage.map(item => <h3 onClick={menuToggle}><InternalLink href={item.link} children={item.text} menuItem={true}/></h3>);
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
                        {!breakpoints.sm && <MetaNav menuToggle={menuToggle} leftLogo={false} darkMode={true} menuPos="top"/>}
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
