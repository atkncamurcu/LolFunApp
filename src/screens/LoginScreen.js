import React from 'react';
import {Navigation} from 'react-native-navigation';
import { View, Image, ImageBackground, Picker, Text, TouchableOpacity} from 'react-native';


import { connect } from 'react-redux';
import { IMAGES } from '../assets';
import {HeaderComponent,UsernameComponent} from '../components';


export class LoginScreen extends React.Component{
    

    state = { 
        region : 'uew1.api.riotgames.com'
        }
    _changeRegion = (region) => {
        this.setState({region:region});
    }

    _onPress = () => {
       Navigation.startTabBasedApp({
           tabs:[
               {
                   screen:'App.HomeScreen',
                   label:'İstatistik'
               },
               {
                   screen:'App.LeagueListScreen',
                   label:'Maçlar'
               },
               {
                   screen:'App.TopTierScreen',
                   label:'Top Tier'
               },
           ],
           tabsStyle:{
                tabBarTextFontSize:20,
                tabBarSelectedButtonColor:'#636AF6',
                tabBarBackgroundColor:'#1A2025'
           },
           appStyle:{
               navBarHidden:true,
           }
       })
    }

    render(){
        return(
            <View style = {{flex:1,width:'100%',backgroundColor:'#1A2025'}}>
                <HeaderComponent
                    label='LOGIN SCREEN'
                />
                <ImageBackground style = {{flex:1,width:'100%'}} source = {IMAGES.bubble}>
                    <View style={{height: 150, paddingVertical: 20, paddingHorizontal: 50, width: '100%'}}>
                        <Image source={ IMAGES.appicon } style={{ width: '100%', resizeMode: 'contain', height: '100%' }} />
                    </View>
                    <View  style = {{height:200,width:"100%",borderWidth:1, borderColor:"transparent"}}>
                        <Picker itemStyle={{backgroundColor:"rgba(255,255,255,0.01)"}} selectedValue = {this.state.region} onValueChange = {this._changeRegion}>
                            <Picker.Item color='white' label = 'EUW' value = 'euw1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'NA' value = 'na1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'TR' value = 'tr1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'RU' value = 'ru.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'BR' value = 'br1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'EUNE' value = 'eun1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'OCE' value = 'oc1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'LAN' value = 'la1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'LAS' value = 'la2.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'JP' value = 'jp1.api.riotgames.com'/>
                            <Picker.Item color='white' label = 'KR' value = 'kr.api.riotgames.com'/>
                        </Picker>
                    </View>
                    <View style = {{top:50,marginHorizontal:30,marginVertical:20}}>
                        <UsernameComponent/>
                    </View>
                    <TouchableOpacity style = {{ borderRadius:3.52,alignItems: 'center', backgroundColor:'#636AF6',marginHorizontal:30,marginVertical:40}} 
                        onPress={this._onPress}>
                        <Text style={{paddingVertical: 15, paddingHorizontal:25,fontSize:20,color:'white' }}>LOGIN</Text>
                    </TouchableOpacity>
                </ImageBackground>                
            </View>
        );
    }
} 