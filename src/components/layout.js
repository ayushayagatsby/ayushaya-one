import React, {useState, useEffect} from "react"
import {Link} from "gatsby"
import Logo from "./Logo"
import IcPhone from "../assets/IcPhone.svg"
import IcDots from "../assets/IcDots.svg"
import IcMail from "../assets/IcMail.svg"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import LanguageSelect from './LanguageSelect/LanguageSelect'
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import InternalLink from "./InternalLink"
import DekstopMenu from "./Menu/DekstopMenu"
import {TransitionGroup} from 'react-transition-group'

const LayoutWrapper = styled("div")`
width: 100vw;
overflow-x: hidden !important;
position: relative;
`

const NavBar = styled("nav")`
  width: 100%;
  display: flex;
  padding: 0 5%;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: transparent;
  z-index: 12;
`

const MainDesktop = styled("main")`
width: 100%;
padding: 0 10%;
min-height: 100vh;
`

const MainMobile = styled("main")`
width: 100%;
padding: 0 5%;
min-height: ${props => props.mh};
`

const Spacer = styled("div")`
width: 100%;
height: 20vh;
`

const Footer = styled("footer")`
height: 50vh;
width: 100%;
background-color: #D4C1BA;
display: flex;
padding-top: 7%;
flex-wrap: wrap;
justify-content: center;
position: relative;
z-index: 10;
`

const FooterMetaNav = styled("nav")`
width: ${props => props.w};
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

const QuickAccessMenu = styled("div")`
position: fixed;
right: 20px;
top: calc(50vh - 70px);
max-height: 137px;
height: 95px;
width: 17px;
max-width: 31px;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 12;
`

const LanguageSelectContainer = styled("div")`
position: absolute;
right: 5%;
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
    }

    const isBrowser = typeof window !== "undefined"

    const [computedBlogLength,
        setComputedBlogLength] = useState(0)

    useEffect(() => {
        const mainMobile = document.getElementById("main-mobile");
        const mobileBlogPostBody = document.getElementById("mobile-blog-post-body");
        const mobileBlogPostFooter = document.getElementById("mobile-blog-post-footer");

        if (mobileBlogPostBody && mobileBlogPostFooter) {
            setComputedBlogLength(`${mobileBlogPostBody.clientHeight + mobileBlogPostFooter.clientHeight + 150}px`)

        }

    })
    return (
        <TransitionGroup>
            <LayoutWrapper id="layout-wrapper">
                <NavBar>
                    <Logo menuState={showMenu} toggleMenuState={handleShowMenu}/>

                    <BurgerMenu menuToggle={handleShowMenu} menuState={showMenu}/>

                </NavBar>

                <DekstopMenu menuState={showMenu} menuToggle={handleShowMenu}/> {breakpoints.sm && <Spacer/>}

                {breakpoints.sm && <MainMobile id="main-mobile" mh={computedBlogLength}>{children}</MainMobile>}
                {!breakpoints.sm && <MainDesktop>{children}
                    <QuickAccessMenu>
                        <a href='mailto:juliane@ayushaya.coach' target="_blank"><IcMail css={css `width: 100%; height: auto;`}/></a>
                        <a href="tel:+393457233090"><IcPhone css={css `width: 100%; height: auto;`}/></a>
                        <Link to="/contact"><IcDots css={css `width: 100%; height: auto;`}/></Link>
                    </QuickAccessMenu>
                </MainDesktop>}

                <Footer id="prova">

                    <FooterMetaNav
                        w={breakpoints.sm
                        ? "90%"
                        : "34%"}>{metaTypesMapped}</FooterMetaNav>

                    {(breakpoints.md && isBrowser) && <LanguageSelect w="200px" darkMode={true} menuPos="top"/>}
                    {(!breakpoints.md && isBrowser) && <LanguageSelectContainer><LanguageSelect darkMode={true} menuPos="top"/></LanguageSelectContainer>}

                </Footer>
            </LayoutWrapper>
        </TransitionGroup>
    )
}

export default Layout
