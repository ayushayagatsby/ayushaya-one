import React, {useContext, useEffect} from 'react'
import ContactForm from "../components/ContactForm"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import ContactContent from '../content/ContactContent.json';
import ContactInfo from '../components/ContactInfo';
import LanguageContext from '../context/LanguageContext';
import LanguageSelect from '../components/LanguageSelect/LanguageSelect';
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
  return (
      <>
          
          {!breakpoints.md && <Spacer />}
          {breakpoints.md && <ContactInfoMobile currentLanguage={currentLanguage}/>}
          {!breakpoints.md && <ContactInfo currentLanguage={currentLanguage}/>}
        <ContactForm />
      </>
  )
}
