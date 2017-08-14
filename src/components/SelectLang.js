import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Flag from "react-flags";
import './css/SelectLang.css';

const idiomas = {
    'ES' : {
        'ES': 'Español',
        'EN': 'Ingles',
        'FR': 'Frances',
    },
    'EN' :{
        'ES': 'Spanish',
        'EN': 'English',
        'FR': 'French',
    },
    'FR' : {
        'ES': 'Espagnol',
        'EN': 'Anglais',
        'FR': 'Français',
    }
};

class SelectLang extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        value: this.props.lang,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.lang});
    }

    render() {
        const lang = idiomas[this.props.lang];
        return (
            <SelectField
            value={this.state.value}
            onChange={this.props.selectLang}
            className="select-lang"
            >
            <MenuItem
                className="Menu-item" 
                value='ES'
                primaryText={lang['ES']}
                leftIcon={<Flag name="ES" alt={lang['ES']} shiny={true}/>}  />
            <MenuItem 
                className="Menu-item" 
                value='EN'
                primaryText={lang['EN']} 
                leftIcon={<Flag name="GB" alt={lang['EN']} shiny={true}/>}  />
            <MenuItem 
                className="Menu-item" 
                value='FR'
                primaryText={lang['FR']} 
                leftIcon={<Flag name="FR" alt={lang['FR']} shiny={true}/>}    />
            </SelectField>

            );
    }
}

export default SelectLang;