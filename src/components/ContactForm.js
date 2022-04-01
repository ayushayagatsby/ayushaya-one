import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';

import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'


const CustomTextInput = styled("input")`
height: 4vh;
background-color: white;
border-radius: 10px;
`

const CustomLabel = styled("label")`
font-size: 22px;
font-family: "Open sans";
font-weight: 400;
color: #E0CEC0;
text-align: center;
`

const CustomFormControl = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
width: ${props => props.w};
`

const CustomElementsWrapper = styled("div")`
display: flex;
width: 812px;
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
  FieldWrapper
}

function ElementsWrapper(props) {
  const {
    id,
    label,
    description,
    type,
    ...rest
} = props

  return (
    <CustomElementsWrapper>
        {props.children}
    </CustomElementsWrapper>
    )
}

function FieldWrapper(props) {




  return (
    <CustomFieldWrapper>
        {props.children}
    </CustomFieldWrapper>
    )
}

function FormControl(props) {
  const {
    id,
    label,
    description,
    type,
    children,
    ...rest
} = props


console.log(label)

  return (
    <CustomFormControl id={id} w={(label==="E-Mail Address" || label==="Your Message") ? "812px" : "398px"}>
      <CustomLabel>{label}</CustomLabel>
        {children}
      
    </CustomFormControl>
    )
}






function TextInput(props) {
  const {
    id,
    label,
    description,
    type,
    ...rest
} = props

  return (

        
            <CustomTextInput css={css` width: 100%;`} type={type}/>

    )
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
        <FormiumForm
        data={data.formiumForm}
        components={myComponents}
        onSubmit={async (values) => {
          // Send form values to Formium
          await formium.submitForm('contact-form', values);
          alert('Success');
        }}
      />
      )}
    />
  )
}