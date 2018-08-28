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

    
    

    _renderMatchItem = (item, index) => {

        //this._getMatchInfo(item.gameId);

        //let mergedObj = {...matchinfo, ...match};
       
        let champicon = '';
        if(this.state.version != null && this.state.match != null){

            champicon = "https://cdn.communitydragon.org/" + this.state.version[1]+ "/champion/" + this.state.match[index].champion+"/square"
        }
        return(
            <View style = {{width:'100%',flex:1,flexDirection:'row',marginTop:20}}>
                <View style = {{flex:3,width:'100%'}}>
                    <Image source = {{ uri: champicon }} style={{width:80,height:80}}/>
                </View>
                <Text style = {{fontSize:20,color:'#FFF',flex:1,textAlign:'center',justifyContent:'center'}}> 
                    {item.lane}
                </Text>
            </View>
            
        );

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

/*   _getMatchInfo = (gameId, index) => {
        GetSingleMatchByMatchID(gameId, this.props.login.login_region)
        .then(res => {

            //console.log(res);

            let getMatchInfo = res.participants
            //getMatchInfo = getMatchInfo.slice(0,5)
            //console.log(getMatchInfo)

            //getMatches[index].matchInfo = GetSingleMatchByMatchID(getMatchInfo[index].);
            
            this.setState({matchinfo : getMatchInfo})
        }).catch(e => {

        })
    } 
*/

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
                        renderItem={ ({item, index}) => this._renderMatchItem(item,index)}
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





/*
getMatch = () => {
        GetMatchesByAccountID(this.state.user.accountId,this.props.login.login_region)
        .then(res => {
            let getMatches = res.matches;
            getMatches = getMatches.slice(0,5)
         // ITERATE THOUGHT ALL ENTRIES WITH A LOOP
            // ADD MATCHINFO TO DATASET
            getMatches[index].matchInfo = GetSingleMatchByMatchID(....);
        // LOOPEND
            console.log(getMatches)
            this.setState({match : getMatches})
        }).catch(e => {

        })
    }
    */