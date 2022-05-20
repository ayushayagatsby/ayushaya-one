import React, {useContext} from 'react';
import {css, jsx} from '@emotion/react'
import LanguageContext from "../context/LanguageContext"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';

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

    let italianContent = `Improntaœ
    Informazioni secondo il § 5 TMGœ
    Juliane Merckensœ
    via Mulino 1œ
    21010 Castelveccana (VA), Italiaœ
    Contattaœ
    telefono: (+39) 345 723 30 90œ
    E-mail: info@ayushaya.coachœ
    ID IVAœ
    Numero di identificazione dell'imposta sulle vendite secondo il § 27 a Umsatzsteuergesetz:œ
    Ust.-ID: completare quiœ
    Autorità di vigilanzaœ
    Autorità di vigilanza:œ
    Indirizzo:œ
    http://œ
    Titolo professionale e regolamenti professionaliœ
    Titolo professionale:œ
    Titolo professionale statutario:œ
    Camera competente:œ
    Nome e indirizzo della camera competente:œ
    Premiato in:œ
    Inserisci qui il paese in cui hai ottenuto il tuo titolo professionale.œ
    Si applicano i seguenti regolamenti professionali:œ
    2 / 4œ
    Dettagli dell'assicurazione di responsabilità civile professionaleœ
    Editorialmente responsabileœ
    Operatore del sito webœ
    Risoluzione delle controversie UEœ
    La Commissione europea fornisce una piattaforma per la risoluzione delle controversie online (OS):œ
    https://ec.europa.eu/consumers/odr/.œ
    Potete trovare il nostro indirizzo e-mail nell'impronta qui sopra.œ
    Risoluzione delle controversie dei consumatori/servizio universale di risoluzione delle controversieœ
    Non siamo disposti o obbligati a partecipare a procedimenti di risoluzione delle controversie davanti a unœ
    commissione per l'arbitrato dei consumatori.œ`

    let germanContent = `Impressumœ
    Angaben gemäß § 5 TMGœ
    Juliane Merckensœ
    via Mulino 1œ
    21010 Castelveccana (VA), Italienœ
    Kontaktœ
    Telefon: (+39) 345 723 30 90œ
    E-Mail: info@ayushaya.coachœ
    Umsatzsteuer-ID
    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:œ
    Ust.-ID: hier ergänzenœ
    Aufsichtsbehördeœ
    Aufsichtsbehörde:œ
    Anschrift:œ
    http://œ
    Berufsbezeichnung und berufsrechtliche Regelungenœ
    Berufsbezeichnung:œ
    gesetzl. Berufsbezeichnung:œ
    Zuständige Kammer:œ
    Name und Anschrift der zuständigen Kammer:œ
    Verliehen in:œ
    Tragen Sie hier das Land ein, in dem Ihnen Ihre Berufsbezeichnung verliehen wurde.œ
    Es gelten folgende berufsrechtliche Regelungen:œ
    2 / 4œ
    Angaben zur Berufshaftpflichtversicherungœ
    Redaktionell verantwortlichœ
    Betreiber der Webseiteœ
    EU-Streitschlichtungœ
    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:œ
    https://ec.europa.eu/consumers/odr/.œ
    Unsere E-Mail-Adresse finden Sie oben im Impressum.œ
    Verbraucherstreitbeilegung/Universalschlichtungsstelleœ
    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einerœ
    Verbraucherschlichtungsstelle teilzunehmen.œ
    `

    let englishContent = `Imprintœ
    Information according to § 5 TMGœ
    Juliane Merckensœ
    via Mulino 1œ
    21010 Castelveccana (VA), Italyœ
    Contactœ
    phone: (+39) 345 723 30 90œ
    E-mail: info@ayushaya.coachœ
    VAT IDœ
    Sales tax identification number according to § 27 a Umsatzsteuergesetz:œ
    Ust.-ID: complete hereœ
    Supervisory Authorityœ
    Supervisory Authority:œ
    Address:œ
    http://œ
    Professional title and professional regulationsœ
    Professional title:œ
    Statutory professional title:œ
    Competent chamber:œ
    Name and address of the competent chamber:œ
    Awarded in:œ
    Enter here the country in which you were awarded your professional title.œ
    The following professional regulations apply:œ
    2 / 4œ
    Details of professional liability insuranceœ
    Editorially responsibleœ
    Operator of the websiteœ
    EU Dispute Resolutionœ
    The European Commission provides a platform for online dispute resolution (OS):œ
    https://ec.europa.eu/consumers/odr/.œ
    You can find our e-mail address in the imprint above.œ
    Consumer dispute resolution/universal dispute resolution serviceœ
    We are not willing or obligated to participate in dispute resolution proceedings before aœ
    consumer arbitration board.œ`

    let currentLanguage = handleCurrentLanguage(language);

    let textIntoArray = currentLanguage.split("œ");

    const toRender = textIntoArray
        .slice(1, -1)
        .map(line => (
            <p>{line}<br/></p>
        ))

    return (
        <div
            css={css `margin-top: ${breakpoints.sm
            ? ""
            : "20vh"}`}>
            <h1 css={css`margin-bottom: 70px;`}>{textIntoArray[0]}</h1>
            {toRender}</div>
    )
}
