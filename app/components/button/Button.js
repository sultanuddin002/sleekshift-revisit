import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import styles from './styles'

const Button = () => {
    const { containerStyle, buttonStyle } = styles;
    return (
        <View style={containerStyle}>
            <TouchableOpacity
                
            >
                <Image
                    source={require('../../../assets/login-button.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

export { Button };