import * as React from "react"
import {Link} from "gatsby"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import IcNaviIcon from "../assets/IcNaviIcon.svg"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';

const NavBar = styled("nav")`
  width: 100%;
  display: flex;
  padding: 0 5%;
  height: 20vh;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: transparent;
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

const Layout = ({children}) => {
    const breakpoints = useBreakpoint();
    return (
        <React.Fragment>
            <NavBar>
                <Logo/>
                <MenuButton/>
            </NavBar>

            {breakpoints.sm && <Spacer />}

            {breakpoints.sm && <MainMobile>{children}</MainMobile>}
            {!breakpoints.sm && <MainDesktop>{children}</MainDesktop>}
            {/* <footer>
                © {new Date().getFullYear()}, Built with {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer> */}
        </React.Fragment>
    )
}

export default Layout
