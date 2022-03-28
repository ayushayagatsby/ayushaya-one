import React, {useState, useContext } from 'react';
import Select from 'react-select';
import LanguageContext from '../../context/LanguageContext';
import LangugeContext from '../../context/LanguageContext'

const options = [
    {
        value: 'it',
        label: 'Italian'
    }, {
        value: 'en',
        label: 'English'
    }, {
        value: 'de',
        label: 'Deutsch'
    }
];

export default function LanguageSelect() {
    const [selectedOption,
        setSelectedOption] = useState(options[0]);
        

        const {onChangeToEn, onChangeToIt, onChangeToDe} = useContext(LanguageContext)

    const onChangeSelect = (item) => {
        switch (item.value) {
            case 'it':
                onChangeToIt();
                break;
            case 'de':
                onChangeToDe();
                break;
            case 'en':
                onChangeToEn()
                break;
            default:
                return null
        }
    };

    return (<Select
        defaultValue={selectedOption}
        onChange={onChangeSelect}
        options={options}/>);
}