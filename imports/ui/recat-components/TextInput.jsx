import React from 'react';

function TextInput(props) {
    const { value, name, onChange, placeholder } = props;
    return (
        <input 
            type="text"
            value={value ? value : ''}
            name={name} 
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default TextInput;