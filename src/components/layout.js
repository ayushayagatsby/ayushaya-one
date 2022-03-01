import * as React from "react"
import {Link} from "gatsby"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import IcNaviIcon from "../assets/IcNaviIcon.svg"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

const NavBar = styled("nav")`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px;
  position: fixed;
`

const MainContainer = styled("main")`
  padding-top: 5%
`

const Layout = ({children}) => {

    return (
        <div>
            <NavBar>
                <Logo/>
                <MenuButton/>
            </NavBar>
            <MainContainer>{children}</MainContainer>
            <footer>
                © {new Date().getFullYear()}, Built with {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}

export default Layout
