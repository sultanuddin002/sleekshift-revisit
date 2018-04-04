import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'

const Input = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
    const { inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                style={inputStyle}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    );
}

export { Input };