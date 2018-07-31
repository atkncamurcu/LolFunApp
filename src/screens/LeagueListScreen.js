import React from 'react';
import {View,Text,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {HeaderComponent} from '../components';
import { IMAGES } from '../assets';



export class LeagueListScreen extends React.Component{

    render(){
        return(
            <View style={{backgroundColor:'#1A2025',flex:1,width:'100%'}}>
                <HeaderComponent label='MATCH LIST SCREEN'/>
                <ImageBackground style = {{flex:1,width:'100%',flexDirection:'row'}} source = {IMAGES.bubble}>
                    <View style={{alignItems:'center',height:'6%',flex:1,flexDirection:'row',backgroundColor:'grey'}}>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'black',flex:0.5,textAlign:'center',borderWidth:1}}>
                            #
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'black',flex:2.5,textAlign:'center',borderWidth:1}}>
                            Name
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'black',flex:2,textAlign:'center',borderWidth:1}}>
                            Tier
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'black',flex:1,textAlign:'center',borderWidth:1}}>
                            W/L
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'black',flex:1.5,textAlign:'center',borderWidth:1}}>
                            Puan
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}