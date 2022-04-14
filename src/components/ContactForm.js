import React, {useState, useContext} from "react"
import ContactForm from "../components/ContactForm"
import LanguageContext from '../context/LanguageContext';
import ContactContent from '../content/ContactContent.json';
import {StaticQuery, graphql} from "gatsby"
import {FormiumForm, defaultComponents} from '@formium/react';
import {formium} from '../lib/formium';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import SubmitButton from './SubmitButton'



import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'


const CustomTextInput = styled("input")`
height: ${props => props.h};
background-color: white;
border-radius: 10px;
border: none;
padding: 7px;
margin-bottom: 10%;


&:focus-visible {
  outline: none;
}

&:focus {
  outline: none;
}

&:focus::placeholder {
  visibility: hidden;
}

&::placeholder {
    padding-left: 10px;
}
`

const CustomTextArea = styled("textarea")`
height: ${props => props.h};
background-color: white;
border-radius: 10px;
border: none;
width: ${props => props.w};
padding: 7px;
&:focus-visible {
  outline: none;
}

&:focus {
  outline: none;
}

&:focus::placeholder {
  visibility: hidden;
}

&::placeholder {
    padding-left: 10px;
}
`

const CustomLabel = styled("label")`
font-size: 22px;
font-family: "Open sans";
font-weight: 400;
color: #E0CEC0;
text-align: center;
visibility: ${props => props.visibility};
`

const CustomFormControl = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
width: ${props => props.w};
`

const CustomElementsWrapper = styled("div")`
display: flex;
width: ${props => props.w};
flex-wrap: wrap;
justify-content: space-between;
`
const CustomFieldWrapper = styled("div")`

`

const myComponents = {
    ...defaultComponents,
    TextInput,
    ElementsWrapper,
    FormControl,
    FieldWrapper,
    Textarea,
    SubmitButton
    
}

function ElementsWrapper(props) {

  const breakpoints = useBreakpoint();

    

    return (
        <CustomElementsWrapper {...props} w={breakpoints.sm? "90vw" : "50vw"}>
            {props.children}
        </CustomElementsWrapper>
    )
}




function FieldWrapper(props) {

    return (
        <CustomFieldWrapper {...props}>
            {props.children}
        </CustomFieldWrapper>
    )
}

function Textarea(props) {

  const breakpoints = useBreakpoint();

  const {language} = useContext(LanguageContext)

    const englishContent = ContactContent.content.en;
    const italianContent = ContactContent.content.it;
    const germanContent = ContactContent.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
                break;
            case 'en':
                return englishContent
                break;

            case 'de':
                return germanContent
                break;

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);
  const {
    placeholder,
    ...rest
} = props

  

    return (
        <CustomTextArea placeholder={currentLanguage.yM} {...rest} h={breakpoints.sm? "50vh" : "20vh"}>
            {props.children}
        </CustomTextArea>
    )
}

function FormControl(props) {

  const {language} = useContext(LanguageContext)

    const englishContent = ContactContent.content.en;
    const italianContent = ContactContent.content.it;
    const germanContent = ContactContent.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
                break;
            case 'en':
                return englishContent
                break;

            case 'de':
                return germanContent
                break;

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);

  const breakpoints = useBreakpoint();
    const {
        id,
        label,
        description,
        type,
        children,
        ...rest
    } = props

    const [labelVisibility,
        setLabelVisibility] = useState(false);

    const handleVisibility = () => {
        setLabelVisibility(true);
    }

    const vis = labelVisibility
        ? "visible"
        : "visible";



        

    switch (label) {
            // Short Answer
        case ('First Name'):
            return (
                <CustomFormControl {...rest} id={id} w={breakpoints.sm? "40vw" : "23vw"}>
                    <CustomLabel>{currentLanguage.yN}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
            case ('Last Name'):
            return (
                <CustomFormControl {...rest} id={id} w={breakpoints.sm? "40vw" : "23vw"}>
                    <CustomLabel>{currentLanguage.lN}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
            // Email
        case ('E-Mail Address'):
            return (
              <CustomFormControl {...rest} id={id} w={breakpoints.sm? "90vw" : "50vw"}>
                    <CustomLabel>{currentLanguage.eA}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
        case ("Your Message"):
            return (
              <CustomFormControl {...rest} id={id} w={breakpoints.sm? "90vw" : "50vw"}>
                    <CustomLabel>{currentLanguage.yM}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
            // URL field
        default:
            return <div></div>;
    }
   
}

function TextInput(props) {


  const {language} = useContext(LanguageContext)

    const englishContent = ContactContent.content.en;
    const italianContent = ContactContent.content.it;
    const germanContent = ContactContent.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
                break;
            case 'en':
                return englishContent
                break;

            case 'de':
                return germanContent
                break;

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);

    

    const definePlaceholder = (name) => {
        switch (name) {
            case "yourMessage":
                return currentLanguage.yM
                break;

            case "eMail":
                return currentLanguage.yEA
                break;

            case "lastName":
                return currentLanguage.lN
                break;

            case "name":
                return currentLanguage.yN
                break;

            default:
                break;
        }
    }

    const placeholder = definePlaceholder(props.name);

    const breakpoints = useBreakpoint();

    return (<CustomTextInput
        {...props}
        placeholder={placeholder} h={breakpoints.sm? "8vh" : "6vh"}/>)
}

export default function ContacForm() {
    return (

    <StaticQuery
    query={graphql`
      query FormQuery {
          formiumForm(slug: { eq: "contact-form" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
      }
    `}
    render={data => (
      <div className="form-container">
      <FormiumForm
      data={data.formiumForm}
      components={myComponents}
      onSubmit={async (values) => {
        await formium.submitForm('contact-form', values);
        alert('Success');
      }}
    /></div>
    )}
  />
    )
}