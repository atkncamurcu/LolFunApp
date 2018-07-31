import React from "react";

import { View, TouchableOpacity,Text } from "react-native";

interface HeaderComponentProps {
    label?: string
}

export class HeaderComponent extends React.Component <HeaderComponentProps> {
   
    render(){
        return(
            <View style={this.style.viewStyle}>
                <Text style={this.style.textStyle}>
                    {this.props.label}
                </Text>
            </View>
        );
    }

    style = {
        viewStyle: {
            backgroundColor:'#1A2025',
            height:'10%',
            shadowColor:'rgba(0,0,0,0.7)',
            shadowOpacity:1,
            borderBottomColor:'grey',
            borderBottomWidth:1.2,
            justifyContent:'center'
         

        },
        textStyle: {
            textAlign:'center',
            fontSize:20,
            color:'#636AF6'
        }
    }
}