import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'

const content = [
    {
        year: "Since 2019",
        description: "Teaching and coordinating a training in “academic medicine” for future ayurvedic" +
                " therapists"
    }, {
        year: "2011 - 2021",
        description: "Collaborating as a family doctor"
    }, {
        year: "2013 - 2021",
        description: "Running a tabaccology outpatient service"
    }, {
        year: "2020 - 2021",
        description: "Teaching part-time in a public school"
    }, {
        year: "2013 - 2017",
        description: "Various teaching experiences in anatomy, physiology, pathology and Metamedicina®" +
                " for future complementary therapists"
    }, {
        year: "2002 - 2011",
        description: "Various working experiences in hospitals in the fields of internal medicine, car" +
                "diovascular rehabilitation, geriatrics, palliative medicine & oncology, psychiat" +
                "ry"
    }
]

const Wrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 10px;
margin-top: 10%;
padding-top: 8%;
`

const WHeading = styled("div")`
text-align: center;
`

const Hr = styled("div")`
width: 3vw;
height: 4px;
background-color: #D1C2BB;
border-radius: 30px;
transform: translateY(10px);
`

const Year = styled("div")`
display: flex;
justify-content: center;
text-align: left;
padding-right: 5%;
`

const Description = styled("div")`
text-align: left;
padding-right: 5%;
width: 70%;`

const ListItemWrapper = styled("div")`
display: flex;
margin-bottom: 8%;
align-items: flex-start;`

export default function WorkingSectionMobile() {
    const workingItems = content.map(item => <ListItemWrapper>
        <Year>
            <h2 css={css `font-size: 15px; margin-top: 6px; margin-left: 10px;`}>{item.year}</h2>
        </Year>
        <Description>
            <p className="p-small">{item.description}</p>
        </Description>
    </ListItemWrapper>);

    return (
        <Wrapper>
            <WHeading>
                <h3 css={css `margin-bottom: 15%;`}>Working Experiences</h3>
            </WHeading>
            {workingItems}
        </Wrapper>
    )
}
