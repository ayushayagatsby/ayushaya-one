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
        borderColor: "#DAC9C3",
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
        backgroundColor: state.isSelected
            ? "rgba(218,201,195, .5)"
            : "#DAC9C3"
    })
}

export default function LanguageSelect() {
    const [selectedOption,
        setSelectedOption] = useState(options[0]);

    const [newSelect,
        setNewSelect] = useState(options[0]);

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
                setNewSelect(item);

                break;
            case 'de':
                onChangeToDe();
                setNewSelect(item);
                break;
            case 'en':
                onChangeToEn();
                setNewSelect(item);
                break;
            default:
                return null
        }
    };

    return (<Select
        styles={customStyles}
        width='14vw'
        menuColor='#FAF5F1'
        bg="#DAC9C3"
        defaultValue={selectedOption}
        value={newSelect}
        onChange={onChangeSelect}
        options={options}
        isSearchable={false}/>);
}