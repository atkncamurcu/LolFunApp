import React from 'react';
import {View,Text,ImageBackground,Image,FlatList} from 'react-native';
import {HeaderComponent} from '../components';
import { IMAGES } from '../assets';
import {GetTopTierUsersByQueue,GetSummonerByName} from '../services';
import { connect} from 'react-redux';
import uuid from 'uuid';


export class _TopTierScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            toptier: null,
            user: null
        }
    }


    _renderTopTier = (item,index) => {

        return(
            <View style = {{flex:1,width:'100%',flexDirection:'row'}}>
                 <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:12,borderColor:'black',flex:1,textAlign:'center'}}>
                    {index+1}
                </Text>
                <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:12,borderColor:'black',flex:3,textAlign:'center'}}>
                    {item.playerOrTeamName}
                </Text>
                <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:12,borderColor:'black',flex:1.5,textAlign:'center'}}>
                    {item.wins}/{item.losses}
                </Text>
                <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:12,borderColor:'black',flex:1.5,textAlign:'center'}}>
                    {item.leaguePoints}
                </Text>               
            </View>
        )
    }

    compareValues(key, order='asc') {
        return function(a, b) {
          if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
              return 0; 
          }
      
          const varA = (typeof a[key] === 'string') ? 
            a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string') ? 
            b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order == 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    _getTopTier = () =>{
            GetTopTierUsersByQueue(this.props.login.login_region)
            .then(res => {
                let topTierEntries = res.entries;
                
                topTierEntries.sort(this.compareValues('leaguePoints', 'desc'))

                topTierEntries = topTierEntries.slice(0,99);
                this.setState({ toptier : topTierEntries})
            }).catch(e =>{
    
            })
        }
    componentWillMount(){
           GetSummonerByName(this.props.login.login_name, this.props.login.login_region)
        .then(res => {
            this.setState({user : res})
            this._getTopTier();
        }).catch(e => {
            
        })    
    }

    render(){
        return(
            <View style={{backgroundColor:'#1A2025',flex:1,width:'100%'}}>
                <HeaderComponent label='TOP TIER SCREEN'/>
                <ImageBackground style = {{flex:1,width:'100%'}} source = {IMAGES.bubble}>
                    <View style={{alignItems:'center',height:'6%',flex:1,flexDirection:'row',backgroundColor:'#636AF6'}}>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'grey',flex:1,textAlign:'center',borderWidth:1}}>
                            #
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'grey',flex:3,textAlign:'center',borderWidth:1}}>
                            Name
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'grey',flex:1.5,textAlign:'center',borderWidth:1}}>
                            W/L
                        </Text>
                        <Text style={{color:'white',paddingHorizontal:20,paddingVertical:20,fontSize:20,borderColor:'grey',flex:1.5,textAlign:'center',borderWidth:1}}>
                            Puan
                        </Text>
                    </View>
                    <View style = {{flex:10,width:'100%'}}>
                        <FlatList
                            style={{ width: '100%'}}
                            data={this.state.toptier}
                            renderItem={ ({item, index}) => this._renderTopTier(item,index)}
                            keyExtractor={item => uuid()}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const mapStoreToProps = ({ login }) => {
    return { login: login };
}

export const TopTierScreen = connect(mapStoreToProps, { })(_TopTierScreen);