import React from 'react'
import ContactForm from "../components/ContactForm"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'


const Spacer = styled("div")`
height: 20vh;
`
export default function Contact() {
  return (
      <>
          <Spacer />
        <ContactForm />
      </>
  )
}
