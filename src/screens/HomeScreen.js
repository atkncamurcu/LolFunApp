import React from 'react';
import {View,Text,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {HeaderComponent} from '../components';
import { IMAGES } from '../assets';
import { connect } from 'react-redux';
import { GetSummonerByName, GetLeagueBySummonerID, GetAllChampMasteryBySummonerID, GetStaticRealms, GetCurrentVersion } from '../services';


export class _HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
            league: null,
            mastery: null,
            region_id: null,
            version: null,
        }
    }

    _goLeaguePlayers = () => {
        this.props.navigator.push({
            screen: 'App.LeagueListScreen'
        });
    }

    _renderLeagueItem = (data) => {

        if(data!= null){
            return data.map((item) =>{
                let title = '';
                if(item.queueType === 'RANKED_SOLO_5x5'){
                    title = 'Tek/Çift';
                    if(item.tier ==='BRONZE') {
                        image = IMAGES.bronze
                    }
                    else if(item.tier === 'SILVER') {
                        image = IMAGES.silver;
                    }
                    else if(item.tier === 'GOLD') {
                        image = IMAGES.gold
                    }
                    else if (item.tier === 'PLATINUM') {
                        image = IMAGES.platinum
                    }
                    else if (item.tier === 'DIAMOND') {
                        image = IMAGES.diamond
                    }
                }
                else if(item.queueType === 'RANKED_FLEX_SR'){
                    title = 'Esnek 5v5';
                    if(item.tier ==='BRONZE') {
                        image = IMAGES.bronze
                    }
                    else if(item.tier === 'SILVER') {
                        image = IMAGES.silver;
                    }
                    else if(item.tier === 'GOLD') {
                        image = IMAGES.gold
                    }
                    else if (item.tier === 'PLATINUM') {
                        image = IMAGES.platinum
                    }
                    else if (item.tier === 'DIAMOND') {
                        image = IMAGES.diamond
                    }
                    else if(item.tier === 'MASTER') {
                        image = IMAGES.master
                    }
                    else if(item.tier ==='CHALLENGER') {
                        image = IMAGES.challenger
                    }
                }
                else if(item.queueType === 'RANKED_FLEX_TT') {
                    title = 'Esnek 3v3'
                    if(item.tier ==='BRONZE') {
                        image = IMAGES.bronze
                    }
                    else if(item.tier === 'SILVER') {
                        image = IMAGES.silver;
                    }
                    else if(item.tier === 'GOLD') {
                        image = IMAGES.gold
                    }
                    else if (item.tier === 'PLATINUM') {
                        image = IMAGES.platinum
                    }
                    else if (item.tier === 'DIAMOND') {
                        image = IMAGES.diamond
                    }
                    else if(item.tier === 'MASTER') {
                        image = IMAGES.master
                    }
                    else if(item.tier ==='CHALLENGER') {
                        image = IMAGES.challenger
                    }
                }
                return(
                    <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                        <Text style={{color:'white',width:'100%',fontSize:20,textAlign:'center'}}>
                            { title }
                        </Text>
                        <TouchableOpacity style={{flex:1,width:'100%'}} onPress = {this._goLeaguePlayers}>
                            <Image source = {image} style={{resizeMode:'contain',width:'100%',height:'100%',paddingVertical:25}}/>
                        </TouchableOpacity>
                        <Text style={{color:'white',textAlign:'center',width:'100%',fontSize:15,paddingHorizontal:25,paddingHorizontal:25}}>
                            <Text> {item.tier} {item.rank} {item.leaguePoints}</Text>
                        </Text>
                    </View>
                )
            })
        }else{
            return (
            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                <Text style={{color:'white',width:'100%',fontSize:20,textAlign:'center'}}>
                    Tek / Çift
                </Text>
                <TouchableOpacity style={{flex:1,width:'100%'}}>
                    <Image source = {IMAGES.unranked} style={{resizeMode:'contain',width:'100%',height:'100%',paddingVertical:25}}/>
                </TouchableOpacity>
                <Text style={{color:'white',textAlign:'center',width:'100%',fontSize:15,paddingHorizontal:25,paddingHorizontal:25}}>
                    <Text> UNRANKED</Text>
                </Text>
            </View>
            
            )
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
            this._getVersion();
            this._getEndpoints();
        }).catch(e => {
            
        })       
   }
  
   

    render(){
        let profilepic = '';
        if(this.state.version != null && this.state.user != null){

            profilepic = 'https://ddragon.leagueoflegends.com/cdn/'+ this.state.version[1]+'/img/profileicon/' + this.state.user.profileIconId + '.png'
        }

        let championpic0 = '';
        if(this.state.version != null && this.state.mastery != null){
            championpic0 = "https://cdn.communitydragon.org/" + this.state.version[1]+ "/champion/" + this.state.mastery[0].championId+"/square"
        }

        let championpic1 = '';
        if(this.state.version != null && this.state.mastery != null){
            championpic1 = "https://cdn.communitydragon.org/" + this.state.version[1]+ "/champion/" + this.state.mastery[1].championId+"/square"
        }

        let championpic2 = '';
        if(this.state.version != null && this.state.mastery != null){
            championpic2 = "https://cdn.communitydragon.org/" + this.state.version[1]+ "/champion/" + this.state.mastery[2].championId+"/square"
        }



        

        return(
            <View style={{backgroundColor:'#1A2025',flex:1,width:'100%'}}>
                <HeaderComponent
                    label='HOME SCREEN'/>
                <ImageBackground style = {{flex:1,width:'100%'}} source = {IMAGES.bubble}>
                    <View style={{backgroundColor:'#1E262C',flex:1, flexDirection:'row', marginTop:20,height:120,paddingVertical:15,paddingHorizontal:20,width:'100%',borderWidth:1,borderColor:'grey'}}>
                        <View style={{height:'100%',flex:1}}>
                            <Image source = {{ uri: profilepic }} style={{resizeMode:'contain',width:'100%',height:'100%'}}/>
                        </View>
                        <View style={{height:'100%', flex:2,justifyContent:'center',alignItems:'center',marginRight:25 }}>
                            <Text style={{color:'white',fontSize:20,paddingHorizontal:40,marginBottom:20}}>
                                { ( this.state.user != null ) ? this.state.user.name : '' }
                            </Text>
                            <Text style={{color:'white',fontSize:20,paddingHorizontal:60}}>
                            { ( this.state.user != null ) ? this.state.user.summonerLevel : '' } Level
                            </Text>
                        </View>
                        
                    </View>
                    <View style={{marginTop:40,flex:1.5,flexDirection:'row',paddingVertical:15,paddingHorizontal:20,width:'100%',backgroundColor:'#1E262C',borderWidth:1,borderColor:'grey',justifyContent:'center',alignItems:'center'}}>
                        { this._renderLeagueItem(this.state.league) } 
                    </View>
                    <View style={{flexDirection:'row',marginBottom:55,marginTop:40,flex:1,paddingVertical:15,paddingHorizontal:20,width:'100%',backgroundColor:'#1E262C',borderWidth:1,borderColor:'grey'}}>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                            <Image source = {{ uri : championpic0 }} style={{resizeMode:'contain',width:'80%',height:'80%',paddingHorizontal:20,paddingVertical:25}}/>
                            <Text style={{color:'white',textAlign:'center',width:'100%',fontSize:20}}>
                                {(this.state.mastery != null) ? this.state.mastery[0].championLevel:''} Seviye
                            </Text>
                            <Text style ={{color:'white',textAlign:'center',width:'100%',fontSize:20}}>
                                {(this.state.mastery != null) ? this.state.mastery[0].championPoints:''}
                            </Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                            <Image source = {{ uri : championpic1 }} style={{resizeMode:'contain',width:'80%',height:'80%',paddingHorizontal:20,paddingVertical:25}}/>
                            <Text style={{color:'white',textAlign:'center',width:'100%',fontSize:20}}>
                                {(this.state.mastery != null) ? this.state.mastery[1].championLevel:''} Seviye
                            </Text>
                            <Text style ={{color:'white',textAlign:'center',width:'100%',fontSize:20}}>
                                {(this.state.mastery != null) ? this.state.mastery[1].championPoints:''}
                            </Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                            <Image source = {{ uri : championpic2 }} style={{resizeMode:'contain',width:'80%',height:'80%',paddingHorizontal:20,paddingVertical:25}}/>
                            <Text style={{color:'white',textAlign:'center',width:'100%',fontSize:20}}>
                                {(this.state.mastery != null) ? this.state.mastery[2].championLevel:''} Seviye
                            </Text>
                            <Text style ={{color:'white',textAlign:'center',width:'100%',fontSize:20}}>
                                {(this.state.mastery != null) ? this.state.mastery[2].championPoints:''}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const mapStoreToProps = ({ login }) => {
    return { login: login };
}

export const HomeScreen = connect(mapStoreToProps, { })(_HomeScreen);