import React, {useContext} from 'react'
import ContactForm from "../components/ContactForm"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import LanguageContext from '../context/LanguageContext';
import ContactContent from '../content/ContactContent.json';



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
