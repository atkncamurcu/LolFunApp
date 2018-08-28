import React from 'react';
import {View,Text,ImageBackground,FlatList} from 'react-native';
import {HeaderComponent} from '../components';
import { IMAGES } from '../assets';
import {GetSummonerByName, GetLeagueBySummonerID, GetLeagueUsersByLeagueID} from '../services';
import { connect} from 'react-redux';
import uuid from 'uuid';



export class _LeagueListScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            leagueplayers: null,
            user: null,
            league: null
        }
    }


    _renderLeaguePlayers = (item,index) => {

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


    _getLeaguePlayers = () => {
        GetLeagueUsersByLeagueID(this.state.league.leagueId, this.props.login.login_region)
        .then(res =>{
            this.setState({leagueplayers : res.entries})
        }).catch(e => {

        })
    }

    _getLeague = () =>{
        GetLeagueBySummonerID(this.state.user.id,this.props.login.login_region)
        .then(res => {
            if(res.length > 0){
            this.setState({league : res})            
            }
        }).catch(e => {
            
        })
    }

    componentWillMount(){
        GetSummonerByName(this.props.login.login_name, this.props.login.login_region)
     .then(res => {
         this.setState({ user : res })
         this._getLeaguePlayers();
         this._getLeague();
     }).catch(e => {
         
     })    
 }

    render(){
        return(
        <View style={{backgroundColor:'#1A2025',flex:1,width:'100%'}}>
            <HeaderComponent label='LEAGUE LIST SCREEN'/>
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
                        renderItem={ ({item, index}) => this._renderLeaguePlayers(item,index)}
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

export const LeagueListScreen = connect(mapStoreToProps, { })(_LeagueListScreen);