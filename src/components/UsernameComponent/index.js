import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface UsernameComponentProps {
    autoCapitalize?: 'none' | 'words' | 'sentences',
    autoCorrect?: boolean,
    color?: string,
    leftIcon?: object,
    onChangeText?: Function,
    placeholder?: string,
    value?: string,

}

export class UsernameComponent extends React.Component <UsernameComponentProps> {

    static defaultProps = {
        color: 'rgb(255, 255, 255)',
        autoCorrect: false,
        onChangeText: () => null,
        placeholder: 'Summoner Name',
        value: null,
        autoCapitalize: 'none'
    }

    render(){
        return(
        <View style={{ alignItems: 'stretch', width: '100%' }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                { this.props.leftIcon && <Image source={this.props.leftIcon} style={{ height: 20, marginRight: 20, resizeMode: 'contain', width: 20 }}/>}
                <TextInput
                    autoCapitalize={this.props.autoCapitalize}
                    autoCorrect={this.props.autoCorrect}
                    onChangeText={e => this.props.onChangeText(e)}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='white'
                    value={this.props.value}
                    style={this.style.textInput}
                />
            </View>
        </View>
        );
    }
    style={
        textInput: {
            color: this.props.color,
            flex: 1,
            
            backgroundColor: '#1E262C',
            borderRadius:3.52,
            paddingHorizontal: 10,
            paddingVertical:15,
            marginVertical: 10,
            width: '100%'
        }
    }

}