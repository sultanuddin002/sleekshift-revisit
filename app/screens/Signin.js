import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Input } from '../components/Input'
import { Button } from '../components/button'
import styles from '../config/styles';

const { signinContainer, inputContainer, buttonContainer } = styles;

class Signin extends Component {
    state = { text: '', key: '' };


    render() {
        return (
            <View
                style={signinContainer}
            >
                <View
                    style={inputContainer}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-between'
                    }}>
                        <Input
                            onChangeText={text => this.setState({ text })}
                            value={this.state.text}
                            placeholder='Email ID'
                            keyboardType='email-address'
                        />
                        <Input
                            onChangeText={key => this.setState({ key })}
                            value={this.state.key}
                            placeholder='Key'
                            keyboardType='numeric'
                        />
                    </View>

                </View>
                <View style={buttonContainer}>
                    <Button />
                </View>
            </View>
        );
    }
}

export default Signin;