import React, { useState } from 'react'
import { TextInput } from 'react-native'

// Style
import { styles } from "../styles/screenStyle";

export default function FieldComponent({ changeContent, placeholderText, isPassword }) {

    const [borderColor, setBorderColor] = useState(styles.onBlurField);

    function onFocusColor() {
        setBorderColor(styles.onFocusField);
    }

    function onBlurColor() {
        setBorderColor(styles.onBlurField);
    }

    function handleChange(e) {
        changeContent(e);
    }

    return (
        <TextInput 
            onFocus={ () => onFocusColor() }
            onBlur={ () => onBlurColor() }
            style={ [styles.inputFields, borderColor] }
            placeholder={ placeholderText }
            placeholderTextColor="#ab7473"
            secureTextEntry={ isPassword }
            onChangeText={ (e) => handleChange(e) }
        />
    )
}
