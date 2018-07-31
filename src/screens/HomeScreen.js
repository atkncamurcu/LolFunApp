import React from 'react';
import {View,Text,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {HeaderComponent} from '../components';
import { IMAGES } from '../assets';
import { connect } from 'react-redux';

export class HomeScreen extends React.Component {

    render(){
        return(
            <View style={{backgroundColor:'#1A2025',flex:1,width:'100%'}}>
                <HeaderComponent
                    label='HOME SCREEN'/>
                <ImageBackground style = {{flex:1,width:'100%'}} source = {IMAGES.bubble}>
                    <View style={{backgroundColor:'#1E262C',flex:1, flexDirection:'row', marginTop:20,height:120,paddingVertical:15,paddingHorizontal:20,width:'100%',borderWidth:1,borderColor:'grey'}}>
                        <View style={{height:'100%',flex:1}}>
                            <Image source = {IMAGES.appicon} style={{resizeMode:'contain',width:'100%',height:'100%'}}/>
                        </View>
                        <View style={{height:'100%', flex:2,justifyContent:'center' }}>
                            <Text style={{fontSize:20,paddingHorizontal:40,marginBottom:20}}>
                                Pørnstar Zilean
                            </Text>
                            <Text style={{fontSize:20,paddingHorizontal:60}}>
                                Level 101
                            </Text>
                        </View>
                        
                    </View>
                    <View style={{marginTop:40,flex:1.5,flexDirection:'row',paddingVertical:15,paddingHorizontal:20,width:'100%',backgroundColor:'#1E262C',borderWidth:1,borderColor:'grey'}}>
                        <View style={{height:'100%',flex:1}}>
                            <Text style={{marginLeft:10,width:'100%',fontSize:20}}>
                            Esnek 3V3
                            </Text>
                            <TouchableOpacity style={{flex:1,width:'100%'}}>
                                <Image source = {IMAGES.diamond} style={{resizeMode:'contain',width:'100%',height:'100%',paddingHorizontal:20,paddingVertical:25}}/>
                            </TouchableOpacity>
                            <Text style={{textAlign:'center',width:'100%',fontSize:15,paddingHorizontal:20,paddingHorizontal:15}}>
                              Diamond IV  27
                            </Text>
                        </View>
                        <View style={{height:'100%',flex:1}}>
                            <Text style={{marginLeft:25,width:'100%',fontSize:20}}>
                            Tek/Çift
                            </Text>
                            <TouchableOpacity style={{flex:1,width:'100%'}}>
                                <Image source = {IMAGES.diamond} style={{resizeMode:'contain',width:'100%',height:'100%',paddingHorizontal:20,paddingVertical:25}}/>
                            </TouchableOpacity>
                            <Text style={{textAlign:'center',width:'100%',fontSize:15,paddingHorizontal:25,paddingHorizontal:25}}>
                            Diamond II  72
                            </Text>
                        </View>
                        <View style={{height:'100%',flex:1,alignItems:'center'}}>
                            <Text style={{marginLeft:30,width:'100%',fontSize:20}}>
                            Esnek 5V5
                            </Text>
                            <TouchableOpacity style={{flex:1,width:'100%'}}>
                                <Image source = {IMAGES.diamond} style={{resizeMode:'contain',width:'100%',height:'100%',paddingHorizontal:20,paddingVertical:25}}/>
                            </TouchableOpacity>
                            <Text style={{textAlign:'center',width:'100%',fontSize:15,paddingHorizontal:10,paddingHorizontal:15}}>
                            Diamond II 55
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:55,marginTop:40,flex:1,paddingVertical:15,paddingHorizontal:20,width:'100%',backgroundColor:'#1E262C',borderWidth:1,borderColor:'grey'}}>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                            <Image source = {IMAGES.thresh} style={{resizeMode:'contain',width:'80%',height:'80%',paddingHorizontal:20,paddingVertical:25}}/>
                            <Text style={{textAlign:'center',width:'100%',fontSize:20}}>
                                7. Seviye
                            </Text>
                            <Text style ={{textAlign:'center',width:'100%',fontSize:20}}>
                                245.728
                            </Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                            <Image source = {IMAGES.bard} style={{resizeMode:'contain',width:'80%',height:'80%',paddingHorizontal:20,paddingVertical:25}}/>
                            <Text style={{textAlign:'center',width:'100%',fontSize:20}}>
                                7. Seviye
                            </Text>
                            <Text style ={{textAlign:'center',width:'100%',fontSize:20}}>
                                1.235.128
                            </Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                            <Image source = {IMAGES.gangplank} style={{resizeMode:'contain',width:'80%',height:'80%',paddingHorizontal:20,paddingVertical:25}}/>
                            <Text style={{textAlign:'center',width:'100%',fontSize:20}}>
                                7. Seviye
                            </Text>
                            <Text style ={{textAlign:'center',width:'100%',fontSize:20}}>
                                123.556
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}