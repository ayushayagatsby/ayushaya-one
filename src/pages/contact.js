import React, {useContext, useEffect} from 'react'
import ContactForm from "../components/ContactForm"
import styled from "@emotion/styled"
import ContactContent from '../content/ContactContent.json';
import ContactInfo from '../components/ContactInfo';
import LanguageContext from '../context/LanguageContext';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ContactInfoMobile from '../components/ContactInfoMobile';



const Spacer = styled("div")`
height: 20vh;
`
export default function Contact() {

    const breakpoints = useBreakpoint();



  
  const {language} = useContext(LanguageContext)

  const englishContent = ContactContent.content.en;
  const italianContent = ContactContent.content.it;
  const germanContent = ContactContent.content.de;

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
      <>
          
          {!breakpoints.md && <Spacer />}
          {breakpoints.md && <ContactInfoMobile currentLanguage={currentLanguage}/>}
          {!breakpoints.md && <ContactInfo currentLanguage={currentLanguage}/>}
        <ContactForm />
      </>
  )
}
