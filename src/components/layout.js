import React, {useState} from "react"
import {Link} from "gatsby"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import IcNaviIcon from "../assets/IcNaviIcon.svg"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import LanguageStore from '../context/LanguageStore'
import BrandMark from '../assets/BrandMark.svg'
import LanguageSelect from './LanguageSelect/LanguageSelect'
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import InternalLink from "./InternalLink"
import MetaNav from "./Menu/MetaNav"
import DekstopMenu from "./Menu/DekstopMenu"
import {TransitionGroup} from 'react-transition-group'

const NavBar = styled("nav")`
  width: 100%;
  display: flex;
  padding: 0 5%;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: transparent;
  z-index: 4;
`

const MainDesktop = styled("main")`
width: 100%;
padding: 0 10%;
`

const MainMobile = styled("main")`
width: 100%;
padding: 0 5%;
`

const Spacer = styled("div")`
width: 100%;
height: 20vh;
`

const Footer = styled("footer")`
height: 50vh;
background-color: #D4C1BA;
display: flex;
padding-top: 7%;
flex-wrap: wrap;
justify-content: space-between;
`

const FooterMetaNav = styled("nav")`
width: 34%;
display: flex;
justify-content: space-between;
font-size: 22px;
font-weight: 400;
color: #F9F5F1;
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
color: #F9F5F1;
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

const Layout = ({children}) => {
    const breakpoints = useBreakpoint();
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

    const metaTypesMapped = metaTypes.map(item => <InternalLink href={item.link} children={item.text}/>);

    const [showMenu,
        setShowMenu] = useState(false);

    const [showContent,
        setShowContent] = useState(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
        setShowContent(!showContent)
    }
    return (
        <LanguageStore>
            <TransitionGroup>
                <NavBar>
                    <Logo/>
                    <BurgerMenu menuToggle={handleShowMenu} menuState={showMenu}/>
                </NavBar>

                <DekstopMenu menuState={showMenu} menuToggle={handleShowMenu}/> {breakpoints.sm && <Spacer/>}

                {breakpoints.sm && <MainMobile>{children}</MainMobile>}
                {!breakpoints.sm && <MainDesktop>{children}</MainDesktop>}

                <Footer>

                    <MetaNav/>

                </Footer>
            </TransitionGroup>
        </LanguageStore>
    )
}

export default Layout
