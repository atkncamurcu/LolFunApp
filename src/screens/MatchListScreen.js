import React from 'react';
import {View,Text,ImageBackground,Image,FlatList} from 'react-native';
import { IMAGES } from '../assets';
import uuid from 'uuid';
import {HeaderComponent} from '../components';
import { connect} from 'react-redux';
import { GetSummonerByName, GetLeagueBySummonerID, GetAllChampMasteryBySummonerID, GetStaticRealms, GetCurrentVersion,GetMatchesByAccountID, GetSingleMatchByMatchID } from '../services';


export class _MatchListScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: null,
            league: null,
            mastery: null,
            region_id: null,
            version: null,
            match: null,
            matchinfo: null,
        }
    }

    
    timestampConverter = (timestamp) => {
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = "0" + date.getMinutes();
        return day + "." + month + "." + year
    }
    
    
    _renderMatchItem = ({item, index}) => {
       console.log(item);
        let champicon = '';
        var index2;
        
        if(this.state.version != null && this.state.match != null ){
            for(index2=0; index2<10; index2++){
                if(this.state.user.accountId == item.matchInfo.participantIdentities[index2].player.currentAccountId){
                    infoID = item.matchInfo.participantIdentities[index2].participantId
                    console.log(infoID)
                    champicon = "https://cdn.communitydragon.org/" + this.state.version[1]+ "/champion/" + item.champion+"/square";
                    spell1 = 'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/spell/SummonerFlash.png';
                    spell2 = 'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/spell/SummonerDot.png'; 
                    
                    
                    if(this.state.match != null && this.state.user != null){
                        item0 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item0 +'.png';
                    }
                    if(this.state.match != null && this.state.user != null){
                        item1 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item1 +'.png';
                    }
                    if(this.state.match != null && this.state.user != null){
                        item2 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item2 +'.png';
                    }
                    if(this.state.match != null && this.state.user != null){
                        item3 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item3 +'.png';
                    }
                    if(this.state.match != null && this.state.user != null){
                        item4 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item4 +'.png';
                    }
                    if(this.state.match != null && this.state.user != null){
                        item5 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item5 +'.png';
                    }
                    if(this.state.match != null && this.state.user != null){
                        item6 =  'https://ddragon.leagueoflegends.com/cdn/8.16.1/img/item/'+ item.matchInfo.participants[infoID-1].stats.item6 +'.png';
                    }
                   }
            }
            
        }

        for(indexID=0; indexID<2; indexID++)
        {
            if(item.matchInfo.participants[infoID-1].teamId == item.matchInfo.teams[indexID].teamId){
                if(item.matchInfo.teams[indexID].win === 'Fail' ){
                    return(
                        <View style = {{width:'100%',flex:1,marginTop:20}}>
                        <View style = {{flex:3,width:'100%'}}>
                                <Text style = {{fontWeight:'bold',fontSize:20,color:'red',flex:1,justifyContent:'center'}}> 
                                    DEFEAT
                                </Text>
                        </View>
                        <View style = {{flex:3,flexDirection:'row',flex:3,width:'100%'}}>
                            <View style = {{width:80}}>
                                <Image source = {{ uri: champicon }} style={{width:80,height:80}}/>
                                <View style = {{flexDirection:'row',width:'100%'}}>
                                    <Image source = {{ uri: spell1 }} style={{width:40,height:40}}/>
                                    <Image source = {{ uri: spell2 }} style={{width:40,height:40}}/>
                                </View>
                            </View> 
                            <View style = {{flex:3,flexDirection:'column',width:'100%'}}>
                                <View style = {{flex:3,width:'100%'}}>
                                    <Text style = {{fontSize:20,color:'#FFF',flex:1,justifyContent:'center'}}> 
                                        K/D/A:   { item.matchInfo.participants[infoID-1].stats.kills}/{ item.matchInfo.participants[infoID-1].stats.deaths}/{ item.matchInfo.participants[infoID-1].stats.assists}                   Gold: {item.matchInfo.participants[infoID-1].stats.goldEarned}
                                    </Text>
                                    <Text style = {{fontSize:20,color:'#FFF',flex:1,justifyContent:'center'}}> 
                                        {this.timestampConverter(item.timestamp)}                            Creeps:  {(item.matchInfo.participants[infoID-1].stats.totalMinionsKilled) + (item.matchInfo.participants[infoID-1].stats.neutralMinionsKilled)}
                                    </Text>
                                </View>
                                <View style = {{flexDirection:'row',height:60,alignItems:'center'}}>
                                    <Image source = {{ uri: item0 }} style={{marginLeft:3,width:44,height:44}}/>
                                    <Image source = {{ uri: item1 }} style={{marginLeft:3,width:44,height:44}}/>
                                    <Image source = {{ uri: item2 }} style={{marginLeft:3,width:44,height:44}}/>
                                    <Image source = {{ uri: item3 }} style={{marginLeft:3,width:44,height:44}}/>
                                    <Image source = {{ uri: item4 }} style={{marginLeft:3,width:44,height:44}}/>
                                    <Image source = {{ uri: item5 }} style={{marginLeft:3,width:44,height:44}}/>
                                    <Image source = {{ uri: item6 }} style={{marginLeft:3,width:44,height:44}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    )
                }
                else{
                return(
                    <View style = {{width:'100%',flex:1,marginTop:20}}>
                    <View style = {{flex:3,width:'100%'}}>
                            <Text style = {{fontWeight:'bold',fontSize:20,color:'green',flex:1,justifyContent:'center'}}> 
                                VICTORY
                            </Text>
                    </View>
                    <View style = {{flex:3,flexDirection:'row',flex:3,width:'100%'}}>
                        <View style = {{width:80}}>
                            <Image source = {{ uri: champicon }} style={{width:80,height:80}}/>
                            <View style = {{flexDirection:'row',width:'100%'}}>
                                <Image source = {{ uri: spell1 }} style={{width:40,height:40}}/>
                                <Image source = {{ uri: spell2 }} style={{width:40,height:40}}/>
                            </View>
                        </View> 
                        <View style = {{flex:3,flexDirection:'column',width:'100%'}}>
                            <View style = {{flex:3,width:'100%'}}>
                                <Text style = {{fontSize:20,color:'#FFF',flex:1,justifyContent:'center'}}> 
                                    K/D/A:  { item.matchInfo.participants[infoID-1].stats.kills}/{ item.matchInfo.participants[infoID-1].stats.deaths}/{ item.matchInfo.participants[infoID-1].stats.assists}              Gold: {item.matchInfo.participants[infoID-1].stats.goldEarned}
                                </Text>
                                <Text style = {{fontSize:20,color:'#FFF',flex:1,justifyContent:'center'}}> 
                                    {this.timestampConverter(item.timestamp)}                           Creeps:  {(item.matchInfo.participants[infoID-1].stats.totalMinionsKilled) + (item.matchInfo.participants[infoID-1].stats.neutralMinionsKilled)}
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row',height:60,alignItems:'center'}}>
                                <Image source = {{ uri: item0 }} style={{marginLeft:3,width:44,height:44}}/>
                                <Image source = {{ uri: item1 }} style={{marginLeft:3,width:44,height:44}}/>
                                <Image source = {{ uri: item2 }} style={{marginLeft:3,width:44,height:44}}/>
                                <Image source = {{ uri: item3 }} style={{marginLeft:3,width:44,height:44}}/>
                                <Image source = {{ uri: item4 }} style={{marginLeft:3,width:44,height:44}}/>
                                <Image source = {{ uri: item5 }} style={{marginLeft:3,width:44,height:44}}/>
                                <Image source = {{ uri: item6 }} style={{marginLeft:3,width:44,height:44}}/>
                            </View>
                        </View>
                    </View>
                </View>
                )
                }
            }
        }
    }


    _getVersion = () => {
        GetCurrentVersion()
        .then(res => {
            res.json().then(jres => {
                this.setState({version : jres})
            })
        }).catch(e =>{

        })
    }

     _getMatch = () => {
         GetMatchesByAccountID(this.state.user.accountId,this.props.login.login_region)
        .then(async (res) => {
            let i;
            let matchesList = res.matches;
            matchesList = matchesList.slice(0,5)
           for(i=0; i<matchesList.length; i++){
                
                matchesList[i].matchInfo =  await GetSingleMatchByMatchID(matchesList[i].gameId,this.props.login.login_region)
            }
            console.log(matchesList)
            this.setState({match : matchesList})
        }).catch(e => {
            console.error(e)
        })
    }

    _getRealm = () => {
        GetStaticRealms(this.props.login.login_region)
        .then(res => {
            this.setState({region_id : res})
        }).catch(e => {
            
        })
    }

    _getMastery = () => {
        GetAllChampMasteryBySummonerID(this.state.user.id,this.props.login.login_region)
        .then(res =>{
            this.setState({mastery : res})       
        }).catch(e =>{

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
            this.setState({user : res})

            this._getLeague();
            this._getMastery();
            this._getMatch();
            this._getVersion();
            //this._getMatchInfo();
        }).catch(e => {
            
        })       
   }
  


    render(){

        
        return(
            <View style = {{width:'100%',flex:1,backgroundColor:'#1A2025'}}>
                <HeaderComponent label = 'MATCH LIST SCREEN'/>
                <ImageBackground style = {{flex:1,width:'100%'}} source = {IMAGES.bubble}>
                    <View style = {{flex:1,width:'100%',alignItems:'center'}}>
                    
                    <FlatList
                        style={{ width: '100%'}}
                        data={this.state.match}
                        renderItem={ this._renderMatchItem }
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

export const MatchListScreen = connect(mapStoreToProps, { })(_MatchListScreen);

