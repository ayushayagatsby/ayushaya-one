import React, {useContext} from 'react';
import Seo from "../components/seo"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import LanguageContext from "../context/LanguageContext"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ContactContent from '../content/ContactContent.json'

export default function Imprint() {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)



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

    

    let italianContent = `Impronta œ
    Informazioni secondo il § 5 TMG œ
    Juliane Merckens œ
    via Mulino 1 œ
    21010 Castelveccana (VA), Italia œ
    Contatta œ
    telefono: (+39) 345 723 30 90 œ
    E-mail: info@ayushaya.coach œ
    ID IVA œ
    Numero di identificazione dell'imposta sulle vendite secondo il § 27 a Umsatzsteuergesetz: œ
    Ust.-ID: completare qui œ
    Autorità di vigilanza œ
    Autorità di vigilanza: œ
    Indirizzo: œ
    http:// œ
    Titolo professionale e regolamenti professionali œ
    Titolo professionale: œ
    Titolo professionale statutario: œ
    Camera competente: œ
    Nome e indirizzo della camera competente: œ
    Premiato in: œ
    Inserisci qui il paese in cui hai ottenuto il tuo titolo professionale. œ
    Si applicano i seguenti regolamenti professionali: œ
    2 / 4 œ
    Dettagli dell'assicurazione di responsabilità civile professionale œ
    Editorialmente responsabile œ
    Operatore del sito web œ
    Risoluzione delle controversie UE œ
    La Commissione europea fornisce una piattaforma per la risoluzione delle controversie online (OS): œ
    https://ec.europa.eu/consumers/odr/. œ
    Potete trovare il nostro indirizzo e-mail nell'impronta qui sopra. œ
    Risoluzione delle controversie dei consumatori/servizio universale di risoluzione delle controversie œ
    Non siamo disposti o obbligati a partecipare a procedimenti di risoluzione delle controversie davanti a un œ
    commissione per l'arbitrato dei consumatori. œ` 

    let germanContent = `Impressum œ
    Angaben gemäß § 5 TMG œ
    Juliane Merckens œ
    via Mulino 1 œ
    21010 Castelveccana (VA), Italien œ
    Kontakt œ
    Telefon: (+39) 345 723 30 90 œ
    E-Mail: info@ayushaya.coach œ
    Umsatzsteuer-ID œ
    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: œ
    Ust.-ID: hier ergänzen œ
    Aufsichtsbehörde œ
    Aufsichtsbehörde: œ
    Anschrift: œ
    http:// œ
    Berufsbezeichnung und berufsrechtliche Regelungen œ
    Berufsbezeichnung: œ
    gesetzl. Berufsbezeichnung: œ
    Zuständige Kammer: œ
    Name und Anschrift der zuständigen Kammer: œ
    Verliehen in: œ
    Tragen Sie hier das Land ein, in dem Ihnen Ihre Berufsbezeichnung verliehen wurde. œ
    Es gelten folgende berufsrechtliche Regelungen: œ
    2 / 4 œ
    Angaben zur Berufshaftpflichtversicherung œ
    Redaktionell verantwortlich œ
    Betreiber der Webseite œ
    EU-Streitschlichtung œ
    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: œ
    https://ec.europa.eu/consumers/odr/. œ
    Unsere E-Mail-Adresse finden Sie oben im Impressum. œ
    Verbraucherstreitbeilegung/Universalschlichtungsstelle œ
    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer œ
    Verbraucherschlichtungsstelle teilzunehmen. œ
    `

    let englishContent = `Imprint œ
    Information according to § 5 TMG œ
    Juliane Merckens œ
    via Mulino 1 œ
    21010 Castelveccana (VA), Italy œ
    Contact œ
    phone: (+39) 345 723 30 90 œ
    E-mail: info@ayushaya.coach œ
    VAT ID œ
    Sales tax identification number according to § 27 a Umsatzsteuergesetz: œ
    Ust.-ID: complete here œ
    Supervisory Authority œ
    Supervisory Authority: œ
    Address: œ
    http:// œ
    Professional title and professional regulations œ
    Professional title: œ
    Statutory professional title: œ
    Competent chamber: œ
    Name and address of the competent chamber: œ
    Awarded in: œ
    Enter here the country in which you were awarded your professional title. œ
    The following professional regulations apply: œ
    2 / 4 œ
    Details of professional liability insurance œ
    Editorially responsible œ
    Operator of the website œ
    EU Dispute Resolution œ
    The European Commission provides a platform for online dispute resolution (OS): œ
    https://ec.europa.eu/consumers/odr/. œ
    You can find our e-mail address in the imprint above. œ
    Consumer dispute resolution/universal dispute resolution service œ
    We are not willing or obligated to participate in dispute resolution proceedings before a œ
    consumer arbitration board. œ`

    

    let currentLanguage = handleCurrentLanguage(language);


    let textIntoArray = currentLanguage.split(" œ");

    const toRender = textIntoArray.map(line => (
        <p>{line} <br /></p>
    ))

    console.log(currentLanguage)

    return (
        <div css={css `margin-top: ${breakpoints.sm ? "" : "20vh"}`}>{toRender}</div>
    )
}
