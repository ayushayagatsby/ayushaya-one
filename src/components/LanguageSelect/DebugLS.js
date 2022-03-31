import React, {useState, useContext} from 'react';
import Select from 'react-select';
import LanguageContext from '../../context/LanguageContext';

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



export default function LanguageSelect( ) {
    const [selectedOption,
        setSelectedOption] = useState(options[0]);

    const [newSelect,
        setNewSelect] = useState(options.filter(option => option.value === language)[0]);
        


    const {language, onChangeToEn, onChangeToIt, onChangeToDe} = useContext(LanguageContext)

    const onChangeSelect = (item) => {
        switch (item.value) {
            case 'it':
                onChangeToIt();
                break;
            case 'de':
                onChangeToDe();
                break;
            case 'en':
                onChangeToEn();
                break;
            default:
                return null
        }
    };

    return (<Select
        onChange={onChangeSelect}
        options={options}
        isSearchable={false}/>);
}