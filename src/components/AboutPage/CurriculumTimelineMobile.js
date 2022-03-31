import React from 'react'
import {css, jsx} from '@emotion/react'
import styled from "@emotion/styled"

const content = [
    {
        year: "2022",
        description: "Completion of training as ayurvedic therapist for animals, at Rosenberg Europäis" +
                "che Akademie für Ayurveda (Germany)"
    }, {
        year: "2021",
        description: "Completion of 3-year training in naturopathy with focus on animals and specializ" +
                "ation in phyto-nutraceutics, at Istituto Fauno (Italy)"
    }, {
        year: "2019",
        description: "Completion of training for animal-assisted interventions with my dog Xena, at As" +
                "sociazione Cani da Terapia Svizzera (Switzerland)"
    }, {
        year: "2018",
        description: "Completion of Certificate of Advanced Studies in nutrition for disease preventio" +
                "n and health, at Eidgenössische Technische Hochschule Zürich (Switzerland)"
    }, {
        year: "2017",
        description: "Completion of a 2-years training as “operatrice ayurvedica” at Swiss Ayurvedic I" +
                "nstitute and Associazione Aum Shanti Milano"
    }, {
        year: "2015",
        description: "Completion of training as “consulente in Metamedicina®” (Italy)"
    }, {
        year: "2013",
        description: "Training in tabaccology organized by Lega Polmonare Ticinese and AT-Schweiz (Swi" +
                "tzerland)"
    }, {
        year: "2012",
        description: "Completion of specialization in General Internal Medicine as required by FMH (Sw" +
                "itzerland)"
    }, {
        year: "2006",
        description: "Conferment of Doctor title by the Université de Lausanne (Switzerland) for a res" +
                "earch project realized in collaboration with the University of Sheffield (United" +
                " Kingdom)"
    }, {
        year: "2001",
        description: "Degree in human medicine at Université de Lausanne (Switzerland)"
    }
]

const CvHeading = styled("div")`
text-align: center;
`

const TimelineContainer = styled("ul")`
list-style-type: none;
position: relative;
`

const TimelineItem = styled("li")`
padding-left: 20px;
padding-bottom: 50px;
margin: 0 30px;
border-left: 5px solid #FAF5F1;
position: relative;

&:before {
    content: " ";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #FAF5F1;
    position: absolute;
    left: -10px;
    top: 16px;
}

&:first-child {
    &:before {
        top: -3px;
    }
}

&:last-child {
    &:before {
        top: -3px;
    }
}


&:last-child {
    border-left: 5px solid transparent;
}
`

const TimelineYear = styled("h3")`
text-align: left;
margin-bottom: 10px;
`

const TimelineDescription = styled("div")`
margin:0; 
max-width: 90%; 
position:relative; 
top:-3px;
text-align: left;
`

export default function CurriculumTimelineMobile() {

    const listItems = content.map(item => <TimelineItem>
        <TimelineYear>{item.year}</TimelineYear>
        <TimelineDescription>
            <p className="p-small">
                {item.description}
            </p>
        </TimelineDescription>

    </TimelineItem>)
    return (
        <React.Fragment>

            <CvHeading>
                <h3 css={css `margin-bottom: 6%;`}>Curriculum Vitae</h3>
                <h4 css={css `margin-bottom: 12%;`}>Training and education</h4>
            </CvHeading>

            <TimelineContainer>
                {listItems}
            </TimelineContainer>

        </React.Fragment>
    )
}
