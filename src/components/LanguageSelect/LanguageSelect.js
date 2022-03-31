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

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: state.selectProps.bg,
        width: state.selectProps.width,
        minWidth: "200px",
        color: state.selectProps.menuColor,
        padding: 20
    }),
    control: (provided, state) => ({
        ...provided,
        backgroundColor: state.selectProps.bg,
        width: state.selectProps.width,
        minWidth: "200px",
        borderColor: state.selectProps.bg,
        boxShadow: "none",
        "&:hover": {
            border: "none"
        }
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.selectProps.menuColor
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.selectProps.menuColor
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.selectProps.bg,
        color: state.menuColor
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: "none"
    })
}

export default function LanguageSelect( {darkMode, menuPos} ) {
    const [selectedOption,
        setSelectedOption] = useState(options[0]);

    const [newSelect,
        setNewSelect] = useState(options.filter(option => option.value === language)[0]);
        

    const handleSelection = () => {
        const newSelection = options.filter(option => option.value === language)[0];
        setNewSelect(newSelection);
        console.log(newSelect)
    }

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
        styles={customStyles}
        width='14vw'
        menuColor={darkMode ? "#6B665B" : '#FAF5F1'}
        bg={darkMode? "#F5EEEB" : "#DAC9C3"}
        singleBg={darkMode? "#F5EEEB" : "#DAC9C3"}
        menuPlacement={menuPos ?? "bottom"}
        // value={options.filter(option => option.value === language)[0]}
        defaultValue={selectedOption}
        onChange={onChangeSelect}
        options={options}
        isSearchable={false}/>);
}