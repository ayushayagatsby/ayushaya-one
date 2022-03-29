import * as React from "react"
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

const NavBar = styled("nav")`
  width: 100%;
  display: flex;
  padding: 0 5%;
  height: 20vh;
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
`

const FooterMetaNav = styled("nav")`
width: 34%;
justify-content: space-between;
`
const FooterMetaNavMobile = styled("nav")`
width: 80%;
display: flex;
justify-content: space-between;
margin: 0 auto;
`

const MetaNavType = styled("span")`
font-size: 18px;
font-weight: 400;
color: #F9F5F1;
text-transform: uppercase;
`

const FooterLeft = styled("div")`
display: flex;
justify-content: start;
padding-left: 5%;
width: 50%;
`

const FooterRight = styled("div")`
width: 50%;
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
            link: ""
        }, {
            text: "Privacy",
            link: ""
        }, {
            text: "Contact",
            link: ""
        }
    ]

    const metaTypesMapped = metaTypes.map(item => <MetaNavType href={item.link} children={item.text}/>);
    return (
        <LanguageStore>
            <NavBar>
                <Logo/>
                <MenuButton/>
            </NavBar>

            {breakpoints.sm && <Spacer/>}

            {breakpoints.sm && <MainMobile>{children}</MainMobile>}
            {!breakpoints.sm && <MainDesktop>{children}</MainDesktop>}
            {/* <footer>
                © {new Date().getFullYear()}, Built with {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer> */}

            <Footer>
                <FooterLeft>
                    <BrandMark
                        css={css ` width: ${breakpoints.sm
                        ? "14vw"
                        : "4vw"}; height: ${breakpoints.sm
                            ? "14vw"
                            : "4vw"}; filter: brightness(0) saturate(100%) invert(94%) sepia(68%) saturate(155%) hue-rotate(296deg) brightness(103%) contrast(95%); transform: translateY(-20%);`}/>
                </FooterLeft>
                {!breakpoints.sm && <FooterMetaNav>
                    {metaTypesMapped}
                </FooterMetaNav>}

                <FooterRight>
                    <LanguageSelect/>
                </FooterRight>

                <div css={css `flex-basis: 100%; height: 0;`}></div>
                {breakpoints.sm && <FooterMetaNavMobile>{metaTypesMapped}</FooterMetaNavMobile>}

            </Footer>
        </LanguageStore>
    )
}

export default Layout
