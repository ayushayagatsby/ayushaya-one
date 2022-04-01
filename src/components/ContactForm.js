import React, {useState} from "react"
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

&:focus-visible {
  outline: none;
}

&:focus::placeholder {
  visibility: hidden;
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

&:focus::placeholder {
  visibility: hidden;
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
    
}

function ElementsWrapper(props) {

  const breakpoints = useBreakpoint();

    const {
        id,
        label,
        description,
        type,
        ...rest
    } = props

    return (
        <CustomElementsWrapper w={breakpoints.sm? "90vw" : "50vw"}>
            {props.children}
        </CustomElementsWrapper>
    )
}


// function SubmitButton(props) {



//     return (
//       <div {...props}>
//         <SendButton>
//             {props.children}
//         </SendButton></div>
//     )
// }

function FieldWrapper(props) {

    return (
        <CustomFieldWrapper>
            {props.children}
        </CustomFieldWrapper>
    )
}

function Textarea(props) {

  const breakpoints = useBreakpoint();

    return (
        <CustomTextArea placeholder="Your message" h={breakpoints.sm? "50vh" : "20vh"}>
            {props.children}
        </CustomTextArea>
    )
}

function FormControl(props) {

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
        : "hidden";

        

    switch (label) {
            // Short Answer
        case ('First Name'):
            return (
                <CustomFormControl id={id} w={breakpoints.sm? "40vw" : "23vw"}>
                    <CustomLabel visibility={vis}>{label}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
            case ('Last Name'):
            return (
                <CustomFormControl id={id} w={breakpoints.sm? "40vw" : "23vw"}>
                    <CustomLabel visibility={vis}>{label}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
            // Email
        case ('E-Mail Address'):
            return (
              <CustomFormControl id={id} w={breakpoints.sm? "90vw" : "50vw"}>
                    <CustomLabel visibility={vis}>{label}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
        case ("Your Message"):
            return (
              <CustomFormControl id={id} w={breakpoints.sm? "90vw" : "50vw"}>
                    <CustomLabel visibility={vis}>{label}</CustomLabel>
                    {children}

                </CustomFormControl>
            )
            // URL field
        default:
            return <div></div>;
    }
   
}

function TextInput(props) {

    const {
        name,

        ...rest
    } = props

    const definePlaceholder = (name) => {
        switch (name) {
            case "yourMessage":
                return "Your message"
                break;

            case "eMail":
                return "Your E-Mail"
                break;

            case "lastName":
                return "Your last name"
                break;

            case "name":
                return "Your name"
                break;

            default:
                break;
        }
    }

    const placeholder = definePlaceholder(name);

    const breakpoints = useBreakpoint();

    return (<CustomTextInput
        {...rest}
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