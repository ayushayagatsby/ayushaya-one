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
padding-left: 100px;
padding-bottom: 50px;
margin: auto;
border-left: 5px solid #FAF5F1;
position: relative;
width: 50%;
left: 100px;

&:before {
    content: " ";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #FAF5F1;
    position: absolute;
    left: -10px;
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
    position: absolute;
    top: -4px;
    left: -100px;
`

export default function CurriculumTimeline() {

    const listItems = content.map(item => <TimelineItem>

        <p
            class="p-big"
            css={css `margin:0; max-width: 70%; position:relative; top:-3px;`}>
            {item.description}
        </p>

        <TimelineYear>{item.year}</TimelineYear>

    </TimelineItem>)
    return (
        <React.Fragment>

            <CvHeading>
                <h1 css={css `margin-bottom: 6%;`}>Curriculum Vitae</h1>
                <h2 css={css `margin-bottom: 12%;`}>Training and education</h2>
            </CvHeading>

            <TimelineContainer>
                {listItems}
            </TimelineContainer>

        </React.Fragment>
    )
}
