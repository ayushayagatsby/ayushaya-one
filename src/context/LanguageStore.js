import React, {useState} from 'react'
import LanguageContext from './LanguageContext'

function LanguageStore({children}) {

    const [language,
        setLanguage] = useState("it")

    const changeToEn = () => {
        setLanguage(language => "en")
    }

    const changeToDe = () => {
        setLanguage(language => "de")
    }

    const changeToIt = () => {
        setLanguage(language => "it")
    }

    // Pass down the state and the onToggleLight action
    return (
        <LanguageContext.Provider
            value={{
            language,
            onChangeToEn: changeToEn,
            onChangeToDe: changeToDe,
            onChangeToIt: changeToIt
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageStore