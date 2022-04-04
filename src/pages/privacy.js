import React, {useContext} from 'react';
import Seo from "../components/seo"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import LanguageContext from "../context/LanguageContext"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ContactContent from '../content/ContactContent.json'

export default function Privacy() {
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

    

    let italianContent = `Politica sulla privacy
    1. la protezione dei dati in sintesi
    Informazioni generali
    Le seguenti informazioni forniscono una semplice panoramica di ciò che accade ai suoi dati personali quando visita questo sito web.
    quando si visita questo sito web. I dati personali sono tutti i dati che possono essere utilizzati per identificarvi personalmente.
    personalmente identificabile. Per informazioni dettagliate sul tema della protezione dei dati
    dichiarazione sulla privacy sotto questo testo.
    Raccolta di dati su questo sito web
    Chi è responsabile della raccolta dei dati su questo sito?
    Il trattamento dei dati su questo sito web è effettuato dall'operatore del sito web. Potete trovare i suoi dettagli di contatto
    I dettagli di contatto possono essere trovati nella sezione "Avviso sulla parte responsabile" di questa politica sulla privacy.
    in questa politica sulla privacy.
    Come raccogliamo i suoi dati?
    Da un lato, i vostri dati sono raccolti da voi che ce li fornite. Questo può essere, per esempio
    i dati che si inseriscono in un modulo di contatto.
    Altri dati sono raccolti automaticamente o con il suo consenso dai nostri sistemi informatici quando visita il sito web.
    sistemi. Si tratta principalmente di dati tecnici (ad esempio il browser internet, il sistema operativo o l'ora della visita della pagina).
    della visualizzazione della pagina). Questi dati vengono raccolti automaticamente non appena si entra in questo sito web.
    Per cosa usiamo i suoi dati?
    Una parte dei dati viene raccolta per garantire la fornitura senza errori del sito web. Altro
    Altri dati possono essere utilizzati per analizzare il comportamento degli utenti.
    Quali diritti avete riguardo ai vostri dati?
    Avete il diritto in qualsiasi momento di ricevere gratuitamente informazioni sull'origine, il destinatario e lo scopo dei vostri dati personali memorizzati.
    e lo scopo dei suoi dati personali memorizzati. Ha anche il diritto di chiedere la correzione o la cancellazione di questi dati.
    cancellazione di questi dati. Se avete dato il vostro consenso al trattamento dei dati,
    è possibile revocare questo consenso in qualsiasi momento per il futuro. Avete anche il diritto, sotto
    circostanze, avete il diritto di richiedere la limitazione del trattamento dei vostri dati personali.
    2 / 8
    Inoltre, avete il diritto di presentare un reclamo all'autorità di vigilanza competente.
    Potete contattarci in qualsiasi momento in merito a questo e a qualsiasi altra domanda sul tema della protezione dei dati.
    2 Ospitanti
    Strato
    Ospitiamo il nostro sito web con Strato. Il fornitore è Strato AG, Otto-Ostrowski-Strasse 7, 10249 Berlino, Germania (di seguito "Strato").
    (qui di seguito denominato "Strato"). Quando l'utente visita il nostro sito web, Strato raccoglie vari file di log, tra cui
    i vostri indirizzi IP.
    Per ulteriori informazioni, si prega di fare riferimento alla politica sulla privacy di Strato:
    https://www.strato.de/datenschutz/.
    L'utilizzo di Strato si basa sull'art. 6 comma 1 lit. f DSGVO. Abbiamo un legittimo
    interesse nella presentazione più affidabile del nostro sito web. Nella misura in cui un corrispondente
    è stato richiesto il consenso, il trattamento viene effettuato esclusivamente sulla base dell'art. 6 par. 1 lit. a
    DSGVO e § 25 par. 1 TTDSG, nella misura in cui il consenso consente la memorizzazione di cookie o l'accesso a
    informazioni nel dispositivo terminale dell'utente (ad es. impronte digitali del dispositivo) ai sensi del TTDSG. Il
    Il consenso può essere revocato in qualsiasi momento.
    Elaborazione degli ordini
    Abbiamo concluso un contratto sull'elaborazione degli ordini (AVV) con il suddetto fornitore.
    Si tratta di un contratto prescritto dalla legge sulla protezione dei dati, che garantisce che
    i dati personali dei visitatori del nostro sito web solo in conformità con le nostre istruzioni e nel rispetto della
    e nel rispetto del DSGVO.
    3 Note generali e informazioni obbligatorie
    Protezione dei dati
    Gli operatori di queste pagine prendono molto sul serio la protezione dei vostri dati personali. Noi trattiamo il tuo
    i dati personali in modo confidenziale e in conformità con le norme di legge sulla protezione dei dati e
    questa dichiarazione sulla protezione dei dati.
    Quando si utilizza questo sito web, vengono raccolti diversi dati personali.
    I dati personali sono dati con i quali si può essere identificati personalmente. Questo
    L'informativa sulla privacy spiega quali informazioni raccogliamo e come le usiamo. Spiega anche come
    e per quale scopo questo viene fatto.
    Vorremmo sottolineare che la trasmissione di dati su Internet (ad esempio quando si comunica via e-mail)
    può avere lacune nella sicurezza. Una protezione completa dei dati contro l'accesso di terzi non è possibile.
    possibile.
    Nota sull'ufficio responsabile
    Il responsabile del trattamento dei dati su questo sito web è:
    Juliane Merckens, via Mulino 1, 21010 Castelveccana (VA), Italia.
    Telefono: (+39) 345 723 30 90
    3 / 8
    E-mail: info@ayushaya.coach
    Il responsabile del trattamento è la persona fisica o giuridica che, da sola o insieme ad altri, determina il
    le finalità e i mezzi del trattamento dei dati personali (ad esempio nomi, indirizzi e-mail, ecc.).
    o simili).
    Periodo di stoccaggio
    A meno che non sia stato specificato un periodo di conservazione più specifico in questa dichiarazione di protezione dei dati, i suoi dati personali rimarranno con noi
    i suoi dati personali rimangono con noi fino a quando lo scopo del trattamento dei dati non è più valido. Se avete un
    si applica la richiesta giustificata di cancellazione
    Se fai un
    richiesta legittima di cancellazione o revoca del consenso al trattamento dei dati,
    i vostri dati saranno cancellati, a meno che non abbiamo altre ragioni legalmente ammissibili per conservare i vostri
    (ad esempio, periodi di conservazione in base al diritto fiscale o commerciale); in quest'ultimo caso, i dati saranno cancellati dopo il
    In quest'ultimo caso, i dati saranno cancellati dopo la cessazione di questi motivi.
    Informazioni generali sulla base legale per il trattamento dei dati su questo
    Sito web
    Se avete acconsentito al trattamento dei dati, trattiamo i vostri dati personali sulla base di quanto segue
    sulla base dell'Art. 6 Para. 1 lit. a DSGVO o dell'Art. 9 Para. 2 lit. a DSGVO, nella misura in cui categorie speciali di dati
    sono trattati ai sensi dell'art. 9 (1) DSGVO. In caso di consenso esplicito al trasferimento di
    In caso di consenso espresso al trasferimento dei dati personali a paesi terzi, i dati vengono trattati anche sulla base dell'art.
    49 comma 1 lit. a DSGVO. Se si acconsente alla memorizzazione dei cookie o all'accesso alle informazioni in
    dispositivo (ad esempio tramite l'impronta digitale del dispositivo), il trattamento dei dati sarà effettuato anche sulla base di
    sulla base del § 25 comma 1 TTDSG. Il consenso può essere revocato in qualsiasi momento. Se i suoi dati sono richiesti per
    esecuzione del contratto o per l'attuazione di misure precontrattuali, trattiamo i vostri dati sulla base dell'art.
    dati sulla base dell'Art. 6 Para. 1 lit. b DSGVO. Inoltre, trattiamo i suoi dati nella misura in cui questi sono
    necessario per l'adempimento di un obbligo legale sulla base dell'art. 6 comma 1 lett. c DSGVO.
    Inoltre, il trattamento dei dati può essere basato sul nostro legittimo interesse secondo l'art. 6 par. 1 lit. f
    DSGVO. Le informazioni sulla base giuridica pertinente in ogni singolo caso sono fornite nei paragrafi seguenti della presente dichiarazione sulla protezione dei dati.
    paragrafi della presente dichiarazione sulla protezione dei dati.
    Revoca del suo consenso al trattamento dei dati
    Molte operazioni di trattamento dei dati sono possibili solo con il suo consenso espresso. È possibile revocare
    revocare il suo consenso in qualsiasi momento. La liceità del trattamento dei dati effettuato fino al
    l'elaborazione dei dati rimane inalterata dalla revoca.
    Diritto di obiezione contro la raccolta di dati in casi speciali e contro
    pubblicità diretta (art. 21 DSGVO)
    SE IL TRATTAMENTO DEI DATI È EFFETTUATO SULLA BASE DELL'ART. 6 ABS. 1 LIT. E O F DSGVO
    HA IL DIRITTO DI OPPORSI AL TRATTAMENTO DEI SUOI DATI PERSONALI IN QUALSIASI MOMENTO PER MOTIVI
    SITUAZIONE, DI OPPORSI AL TRATTAMENTO DEI SUOI DATI PERSONALI; QUESTO VALE ANCHE PER
    QUESTO VALE ANCHE PER QUALSIASI PROFILAZIONE BASATA SU QUESTE DISPOSIZIONI.
    PROFILO. LA RISPETTIVA BASE GIURIDICA SU CUI SI BASA IL TRATTAMENTO,
    SI PREGA DI FARE RIFERIMENTO A QUESTA POLITICA SULLA PRIVACY. SE TI OPPONI,
    NON TRATTEREMO PIÙ I SUOI DATI PERSONALI, A MENO CHE NON POSSIAMO DIMOSTRARE CHE
    A MENO CHE NON POSSIAMO DIMOSTRARE MOTIVI LEGITTIMI IMPELLENTI PER IL TRATTAMENTO CHE
    PREVALERE SUI TUOI INTERESSI, DIRITTI E LIBERTÀ, O IL TRATTAMENTO È FINALIZZATO A
    IL TRATTAMENTO È FINALIZZATO A FAR VALERE, ESERCITARE O DIFENDERE RIVENDICAZIONI LEGALI
    RIVENDICAZIONI LEGALI (OBIEZIONE SECONDO L'ARTICOLO 21(1) DSGVO).
    I SUOI DATI PERSONALI SONO TRATTATI A SCOPO DI MARKETING DIRETTO,
    4 / 8
    AVETE IL DIRITTO DI OPPORVI IN QUALSIASI MOMENTO AL TRATTAMENTO DEI VOSTRI DATI PERSONALI A SCOPO DI MARKETING DIRETTO.
    IL TRATTAMENT`

    let germanContent = `Datenschutzerklärung
    1. Datenschutz auf einen Blick
    Allgemeine Hinweise
    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
    persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
    Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
    Datenerfassung auf dieser Website
    Wer ist verantwortlich für die Datenerfassung auf dieser Website?
    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
    können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
    entnehmen.
    Wie erfassen wir Ihre Daten?
    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
    Daten handeln, die Sie in ein Kontaktformular eingeben.
    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme
    erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
    des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
    Wofür nutzen wir Ihre Daten?
    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
    Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
    Welche Rechte haben Sie bezüglich Ihrer Daten?
    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
    Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
    können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
    bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
    2 / 8
    Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
    2. Hosting
    Strato
    Wir hosten unsere Website bei Strato. Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin
    (nachfolgend „Strato“). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive
    Ihrer IP-Adressen.
    Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:
    https://www.strato.de/datenschutz/.
    Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
    Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
    Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
    DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
    Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
    Einwilligung ist jederzeit widerrufbar.
    Auftragsverarbeitung
    Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
    Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass
    dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter
    Einhaltung der DSGVO verarbeitet.
    3. Allgemeine Hinweise und Pflichtinformationen
    Datenschutz
    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
    dieser Datenschutzerklärung.
    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
    Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
    und zu welchem Zweck das geschieht.
    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
    möglich.
    Hinweis zur verantwortlichen Stelle
    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
    Juliane Merckens, via Mulino 1, 21010 Castelveccana (VA), Italien.
    Telefon: (+39) 345 723 30 90
    3 / 8
    E-Mail: info@ayushaya.coach
    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
    die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
    entscheidet.
    Speicherdauer
    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
    Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
    berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
    werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
    personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
    letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
    Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
    Website
    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
    Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
    nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
    personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
    49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
    Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
    auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
    Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
    Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
    zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
    Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
    DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
    Absätzen dieser Datenschutzerklärung informiert.
    Widerruf Ihrer Einwilligung zur Datenverarbeitung
    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
    bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
    Datenverarbeitung bleibt vom Widerruf unberührt.
    Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
    Direktwerbung (Art. 21 DSGVO)
    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
    ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
    SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
    PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
    ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
    WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
    SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
    NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
    VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
    RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
    4 / 8
    SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
    EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
    VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
    NACH ART. 21 ABS. 2 DSGVO).
    Beschwerderecht bei der zuständigen Aufsichtsbehörde
    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
    oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
    Recht auf Datenübertragbarkeit
    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
    aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
    verlangen, erfolgt dies nur, soweit es technisch machbar ist.
    SSL- bzw. TLS-Verschlüsselung
    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
    Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLSVerschlüsselung.
    Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
    „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
    von Dritten mitgelesen werden.
    Auskunft, Löschung und Berichtigung
    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
    zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
    Recht auf Einschränkung der Verarbeitung
    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
    Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
    folgenden Fällen:
    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
    in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
    statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
    Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
    Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
    Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
    5 / 8
    überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
    zu verlangen.
    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
    ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
    Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
    juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
    eines Mitgliedstaats verarbeitet werden.
    Widerspruch gegen Werbe-E-Mails
    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
    nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
    Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
    Werbeinformationen, etwa durch Spam-E-Mails, vor.
    4. Datenerfassung auf dieser Website
    Cookies
    Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf
    Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
    (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
    werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
    gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
    Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie
    unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter
    Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
    Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
    Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
    von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
    Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
    bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
    Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
    Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
    Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
    technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
    Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
    Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
    TTDSG); die Einwilligung ist jederzeit widerrufbar.
    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
    Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
    sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
    Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
    Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber
    im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
    Server-Log-Dateien
    6 / 8
    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
    Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
    Browsertyp und Browserversion
    verwendetes Betriebssystem
    Referrer URL
    Hostname des zugreifenden Rechners
    Uhrzeit der Serveranfrage
    IP-Adresse
    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
    ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
    hierzu müssen die Server-Log-Files erfasst werden.
    Kontaktformular
    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
    und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
    Einwilligung weiter.
    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
    der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
    erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
    effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
    widerrufbar.
    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
    auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
    (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
    insbesondere Aufbewahrungsfristen – bleiben unberührt.
    Anfrage per E-Mail, Telefon oder Telefax
    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
    hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
    bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
    der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
    erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
    effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
    widerrufbar.
    Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
    auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
    (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
    insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
    `

    let englishContent = `Data protection
    1. Privacy at a glance
    General information
    The following notes provide a simple overview of what is done with your personal data
    happens when you visit this website. Personal data is all data with which you
    can be personally identified. Find detailed information on the subject of data protection
    Please see our data protection declaration listed under this text.
    Data collection on this website
    Who is responsible for data collection on this website?
    The data processing on this website is carried out by the website operator. Its contact details
    You can refer to the "Note on the responsible body" section of this data protection declaration
    remove.
    How do we collect your data?
    On the one hand, your data is collected when you communicate it to us. This can be z. B. um
    Trade data that you enter in a contact form.
    Other data is collected automatically or with your consent when you visit the website through our IT systems
    recorded. This is primarily technical data (e.g. Internet browser, operating system or time
    of the page view). This data is collected automatically as soon as you enter this website.
    What do we use your data for?
    Part of the data is collected to ensure that the website is provided without errors. Other
    Data can be used to analyze your user behavior.
    What rights do you have regarding your data?
    You have the right to receive information about the origin, recipient and purpose of your data free of charge at any time
    to obtain stored personal data. You also have the right to have the rectification or
    to request the deletion of this data. If you have given your consent to data processing,
    you can revoke this consent at any time for the future. Also, you have the right under
    to request the restriction of the processing of your personal data in certain circumstances.
    2 / 8
    You also have the right to lodge a complaint with the competent supervisory authority.
    You can contact us at any time if you have any further questions on the subject of data protection.
    2. Hosting
    strato
    We host our website at Strato. The provider is Strato AG, Otto-Ostrowski-Strasse 7, 10249 Berlin
    (hereinafter “Strato”). When you visit our website, Strato collects various log files, including
    your IP addresses.
    For more information, see Strato's privacy policy:
    https://www.strato.de/datenschutz/.
    Strato is used on the basis of Article 6 (1) (f) GDPR. We have a valid one
    Interest in the most reliable possible presentation of our website. If an appropriate
    Consent was requested, the processing takes place exclusively on the basis of Art. 6 Para. 1 lit
    DSGVO and § 25 Abs. 1 TTDSG, insofar as the consent to the storage of cookies or access to
    Information in the user's end device (e.g. device fingerprinting) within the meaning of the TTDSG. the
    Consent can be revoked at any time.
    order processing
    We have concluded an order processing contract (AVV) with the above-mentioned provider.
    This is a contract required by data protection law, which ensures that
    this only processes the personal data of our website visitors in accordance with our instructions and under
    processed in compliance with the GDPR.
    3. General information and mandatory information
    privacy
    The operators of these pages take the protection of your personal data very seriously. We treat yours
    personal data confidentially and in accordance with the statutory data protection regulations
    this privacy policy.
    If you use this website, various personal data will be collected.
    Personal data is data with which you can be personally identified. The present
    Privacy Policy explains what data we collect and what we use it for. She also explains how
    and for what purpose.
    We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail)
    may have security vulnerabilities. A complete protection of the data against access by third parties is not possible
    possible.
    Note on the responsible body
    The responsible body for data processing on this website is:
    Juliane Merckens, via Mulino 1, 21010 Castelveccana (VA), Italy.
    Telephone: (+39) 345 723 30 90
    3/8
    Email: info@ayushaya.coach
    Responsible body is the natural or legal person who alone or together with others over
    the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.)
    decides.
    storage duration
    Insofar as no specific storage period has been specified within this data protection declaration, remain
    Your personal data with us until the purpose for data processing no longer applies. if you a
    assert a legitimate request for deletion or revoke consent to data processing,
    Your data will be deleted unless we have other legally permissible reasons for storing your data
    have personal data (e.g. tax or commercial law retention periods); in the
    In the latter case, the data will be deleted once these reasons have ceased to exist.
    General information on the legal basis for data processing on this website
    site
    If you have consented to data processing, we will process your personal data
    Based on Art. 6 Para. 1 lit. a GDPR or Art. 9 Para. 2 lit. a GDPR, insofar as special data categories
    processed according to Art. 9 Para. 1 GDPR. In the case of express consent to the transfer
    Personal data in third countries is also processed on the basis of Art.
    49 paragraph 1 lit. a GDPR. If you consent to the storage of cookies or access to information in
    If your end device (e.g. via device fingerprinting) has consented, the data will also be processed
    on the basis of Section 25 (1) TTDSG. The consent can be revoked at any time. Is your data for
    We process your data if it is necessary to fulfill the contract or to carry out pre-contractual measures
    Data on the basis of Article 6 Paragraph 1 Letter b GDPR. Furthermore, we process your data if these
    are required to fulfill a legal obligation on the basis of Article 6 (1) (c) GDPR.
    The data processing can also be based on our legitimate interest according to Art. 6 Para. 1 lit. f
    GDPR take place. The legal bases relevant in each individual case are explained in the following
    paragraphs of this data protection declaration.
    Revocation of your consent to data processing
    Many data processing operations are only possible with your express consent. You can ... a
    revoke consent already given at any time. The legality of the up to the point of revocation
    Data processing remains unaffected by the revocation.
    Right to object to the collection of data in special cases and against
    Direct mail (Art. 21 GDPR)
    IF THE DATA PROCESSING IS BASED ON ART. 6 ABS. 1 LIT. E OR F GDPR
    DONE, YOU HAVE THE RIGHT AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR
    SITUATION RESULTING AGAINST THE PROCESSING OF YOUR PERSONAL DATA
    TO OBJECT; THIS ALSO APPLIES TO ANY SERVICE BASED ON THESE PROVISIONS
    PROFILING. THE RESPECTIVE LEGAL BASIS ON WHICH A PROCESSING IS BASED,
    PLEASE REFER TO THIS PRIVACY STATEMENT. IF YOU OBJECT,
    WE WILL NO LONGER PROCESS YOUR CONCERNED PERSONAL DATA, IT
    UNLESS WE CAN HAVE COMPELLING PROTECTIVE REASONS FOR PROCESSING
    PROOF THAT OUTSTANDING YOUR INTERESTS, RIGHTS AND FREEDOMS OR THAT
    PROCESSING IS FOR THE CLAIM, EXERCISE OR DEFENSE OF
    LEGAL CLAIMS (OBJECTION ACCORDING TO ART. 21 (1) GDPR).
    YOUR PERSONAL DATA WILL BE PROCESSED IN ORDER TO USE DIRECT ADVERTISING,
    4 / 8
    SO YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING AT ANY TIME
    CONCERNING PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING
    TO INSERT; THIS ALSO APPLIES TO PROFILING TO THE EXTENT RELATED TO SUCH DIRECT ADVERTISING
    CONNECTED. IF YOU OBJECT, YOUR PERSONAL DATA WILL
    SUBSEQUENTLY NOT USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION
    IN STYLE OF. 21 ABS. 2 GDPR).
    Right of appeal to the competent supervisory authority
    In the event of violations of the GDPR, those affected have the right to lodge a complaint with a
    Supervisory authority, in particular in the Member State of your habitual residence, your place of work
    or the location of the alleged infringement. The right to lodge a complaint exists without prejudice to anything else
    administrative or judicial remedies.
    Right to data portability
    You have the right to data that we hold on the basis of your consent or in performance of a contract
    process automatically, in itself or to a third party in a common, machine-readable format
    to be handed over. If you want the data to be transferred directly to another person responsible
    request, this will only be done to the extent that it is technically feasible.
    SSL or TLS encryption
    For security reasons and to protect the transmission of confidential content, such as
    Example orders or inquiries that you send to us as the site operator, an SSL or TLS encryption.
    You can recognize an encrypted connection by the fact that the address line of the browser
    "http://" changes to "https://" and the lock symbol in your browser line.
    If SSL or TLS encryption is activated, the data that you transmit to us cannot
    be read by third parties.
    Information, deletion and correction
    Within the framework of the applicable legal provisions, you have the right to free of charge at any time
    Information about your stored personal data, its origin and recipient and the
    Purpose of the data processing and, if applicable, a right to correction or deletion of this data. For this as well
    You can contact us at any time if you have further questions on the subject of personal data.
    Right to restriction of processing
    You have the right to request the restriction of the processing of your personal data.
    You can contact us at any time for this. The right to restriction of processing exists in
    following cases:
    If you dispute the accuracy of your personal data stored by us, we need
    usually time to check this. For the duration of the exam, you have the right to
    Request restriction of processing of your personal data.
    If the processing of your personal data happened/is happening unlawfully, you can
    request the restriction of data processing instead of deletion.
    When we no longer need your personal information but you need it to exercise,
    defense or establishment of legal claims, you have the right instead of
    Deletion to request the restriction of the processing of your personal data.
    If you have lodged an objection in accordance with Art. 21 Para. 1 GDPR, a balance must be struck between
    are made in your and our interests. As long as it is not clear whose interests
    5/8
    prevail, you have the right to restrict the processing of your personal data
    to demand.
    If you have restricted the processing of your personal data, this data may - from
    Apart from their storage - only with your consent or for the assertion, exercise or
    Defending legal claims or protecting the rights of another natural or
    legal person or for reasons of important public interest of the European Union or
    of a Member State are processed.
    Objecting to Promotional Emails
    The use of contact data published as part of the imprint obligation for the transmission of
    Advertising and information material that has not been expressly requested is hereby rejected. the
    Operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of
    Advertising information, such as spam emails.
    4. Data collection on this website
    cookies
    Our website uses so-called "cookies". Cookies are small text files and set up
    no damage to your end device. They will either be temporary for the duration of one session
    (session cookies) or permanently (permanent cookies) stored on your end device. session cookies
    are automatically deleted at the end of your visit. Permanent cookies remain on your end device
    saved until you delete them yourself or until your web browser automatically deletes them.
    In some cases, cookies from third-party companies can also be stored on your end device if you
    enter our site (third party cookies). These enable us or you to use certain
    Third-party company services (e.g. cookies for processing payment services).
    Cookies have different functions. Numerous cookies are technically necessary because certain
    Website functions would not work without them (e.g. the shopping cart function or the display
    of videos). Other cookies are used to evaluate user behavior or to display advertising.
    Cookies, to carry out the electronic communication process, to provide
    certain functions you want (e.g. for the shopping cart function) or to optimize the
    Website (e.g. web audience measurement cookies) are required (necessary cookies) are set on
    stored on the basis of Art. 6 (1) lit. f GDPR, unless another legal basis is specified.
    The website operator has a legitimate interest in the storage of necessary cookies
    technically error-free and optimized provision of its services. If consent to
    Storage of cookies and comparable recognition technologies has been queried, the
    Processing exclusively on the basis of this consent (Art. 6 Para. 1 lit. a DSGVO and § 25 Para. 1
    TTDSG); the consent can be revoked at any time.
    You can set your browser so that you are informed about the setting of cookies and
    Allow cookies only in individual cases, exclude the acceptance of cookies for certain cases or in general
    and activate the automatic deletion of cookies when the browser is closed. In the
    Disabling cookies may limit the functionality of this website.
    If cookies are used by third-party companies or for analysis purposes, we will inform you about this
    separately within the framework of this data protection declaration and, if necessary, request consent.
    Server log files
    6 / 8
    The provider of the pages automatically collects and stores information in so-called server log files.
    Files that your browser automatically transmits to us. These are:
    Browser type and browser version
    operating system used
    Referrer URL
    Host name of the accessing computer
    Time of server request
    IP address
    This data is not merged with other data sources.
    This data is collected on the basis of Article 6 (1) (f) GDPR. The website operator has
    a legitimate interest in the technically error-free presentation and optimization of its website -
    the server log files must be recorded for this purpose.
    contact form
    If you send us inquiries via the contact form, your details will be taken from the
    Inquiry form including the contact details you provided there for the purpose of processing the inquiry
    and stored by us in case of follow-up questions. We do not give this data without yours
    consent further.
    The processing of this data takes place on the basis of Art. 6 Para. 1 lit. b DSGVO, provided that your request
    is related to the fulfillment of a contract or to carry out pre-contractual measures
    is required. In all other cases, the processing is based on our legitimate interest in the
    effective processing of the inquiries addressed to us (Art. 6 Para. 1 lit. f DSGVO) or on your
    Consent (Art. 6 Para. 1 lit. a GDPR) if this was requested; consent is at any time
    revocable.
    The data you enter in the contact form will remain with us until you tell us to delete it
    ask you to revoke your consent to storage or the purpose for data storage no longer applies
    (e.g. after your request has been processed). Mandatory legal provisions –
    in particular retention periods - remain unaffected.
    Inquiry by e-mail, telephone or fax
    If you contact us by e-mail, telephone or fax, your request will include all of it
    resulting personal data (name, request) for the purpose of processing your request
    stored and processed by us. We do not pass on this data without your consent.
    The processing of this data takes place on the basis of Art. 6 Para. 1 lit. b DSGVO, provided that your request
    is related to the fulfillment of a contract or to carry out pre-contractual measures
    is required. In all other cases, the processing is based on our legitimate interest in the
    effective processing of the inquiries addressed to us (Art. 6 Para. 1 lit. f DSGVO) or on your
    Consent (Art. 6 Para. 1 lit. a GDPR) if this was requested; consent is at any time
    revocable.
    The data you sent to us via contact requests will remain with us until you tell us to delete them
    ask you to revoke your consent to storage or the purpose for data storage no longer applies
    (e.g. after your request has been processed). Mandatory legal provisions –
    in particular statutory retention periods - remain unaffected.`
    

    let currentLanguage = handleCurrentLanguage(language);


    let textIntoArray = currentLanguage.replace(/\n/g, " œ\n").split(" œ");

    const toRender = textIntoArray.map(line => (
        <p>{line} <br /></p>
    ))

    console.log(currentLanguage)

    return (
        <div css={css `margin-top: ${breakpoints.sm ? "" : "20vh"}`}>{toRender}</div>
    )
}
