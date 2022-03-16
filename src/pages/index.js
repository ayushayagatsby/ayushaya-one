import * as React from "react"
import {Link, graphql} from "gatsby"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import bgGradient from "../images/bgGradient.jpeg"
import BrandType from "../assets/BrandType.svg"
import BrandMark from "../assets/BrandMark.svg"
import Door from "../components/SlideOneScale/Door"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';

const DoorShape = styled("div")`
  background-image: url(${bgGradient}); 
  background-size: cover; 
  overflow: hidden; 
  height: 90vh; 
  width: 35vw; 
  max-width: 500px; 
  border-top-left-radius: 47%; 
  border-top-right-radius: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5%;
`

const Wrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled("button")`
width: 110%;
height: 13%;
`

const MailTo = styled("a")`
color: inherit;
text-decoration: none;

&:visited, &:active, &:hover, &:focus {
    text-decoration: none;
    color: inherit;
}

`

const BlogIndex = () => {
    const breakpoints = useBreakpoint();

    return (
        <div>
            {breakpoints.sm && <Wrapper>
                <h1>Prova</h1>
            </Wrapper>}

            {(!breakpoints.sm && breakpoints.md) && <Wrapper>
                <h1>Prova</h1>
            </Wrapper>}

            {(!breakpoints.md && breakpoints.l) && <Wrapper>
                <DoorShape>
                    <BrandMark css={css `width: 15%; height: auto; margin-bottom: 15%;`}/>
                    <BrandType css={css `width: 60%; height: auto; margin-bottom: 12%;`}/>
                    <p class="p-big" css={css `margin-bottom: 20%;`}>Dr. Juliane Merckens</p>
                    <h3 css={css `margin-bottom: 12%;`}>Keep calm</h3>
                    <p class="p-big" css={css `margin-bottom: 25%;`}>I look forward to welcoming you
                        soon on my new website. In the meantime, feel free to contact me.</p>
                    <Button>
                        <MailTo target="_blank" href="mailto:juliane@ayushaya.coach">
                            <h3>juliane@ayushaya.coach</h3>
                        </MailTo>

                    </Button>
                </DoorShape>
            </Wrapper>}
        </div>

    )
}

export default BlogIndex
