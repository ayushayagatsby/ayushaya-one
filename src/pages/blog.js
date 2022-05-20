import React, {useContext, useEffect, useState} from 'react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo'
import {StaticImage} from "gatsby-plugin-image"
import LanguageContext from '../context/LanguageContext';
import {css, jsx} from '@emotion/react'
import styled from "@emotion/styled"
import ApproachContent from '../content/ApproachContent.json';

const Wrapper = styled("div")`
min-height: 100vh;
width: 80%;
margin: 0 auto;
`

const ProgressBarContainer = styled("div")`
position: sticky;
top: 0;
background-color: #fff;
height: 9.5vh;
align-self: flex-start;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
`

const ProgressBar = styled("div")`
height: 6px;
width: 0;
min-width: 10px;
max-width: 100%;
background-color: #D4C1BA;
`

const Spacer = styled("div")`
width: 100%;
height: 1200px;`

export default function Blog() {

    const [scrollPosition,
        setScrollPosition] = useState(0);

    useEffect(() => {

        const wrapper = document.getElementById("layout-wrapper");
        const blogWrapper = document.getElementById("blogWrapper");
        const progressBar = document.getElementById("progress-bar");

        const handleScroll = ()=> {
            const footerSpace = (blogWrapper.scrollHeight - window.innerHeight / 2)

            let barWidth = wrapper.scrollTop / footerSpace * 100 ;
            console.log(wrapper.scrollTop / footerSpace * 100)

            progressBar.style.width = `${barWidth}%`;
        }

        wrapper.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    });

    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = ApproachContent.content.en;
    const italianContent = ApproachContent.content.it;
    const germanContent = ApproachContent.content.de;

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

    return (
        <Wrapper id="blogWrapper">
            <Seo title="Blog Post"/>

            <StaticImage
                src="../images/BlogPostPlaceholder.jpg"
                alt="placeholderImage"
                layout="constrained"
                width={6016}
                height={4016}
                css={css `display: flex; justify-content: center;`}/>
            <ProgressBarContainer>
                <ProgressBar id="progress-bar"/>
            </ProgressBarContainer>
            <Spacer/>

        </Wrapper>
    )
}