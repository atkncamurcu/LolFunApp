/* 
    Response Data GetMatchesByAccountID

    {
        "matches": [
            {
                "lane": "TOP",
                "gameId": 736603820,
                "champion": 9,
                "platformId": "TR1",
                "timestamp": 1532865330868,
                "queue": 450,
                "role": "DUO_SUPPORT",
                "season": 11
            },
            {
                "lane": "MID",
                "gameId": 736590923,
                "champion": 41,
                "platformId": "TR1",
                "timestamp": 1532863586972,
                "queue": 450,
                "role": "DUO_SUPPORT",
                "season": 11
            }
        ]
    }
*/

export const GetMatchesByAccountID = (accountID,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-11b64165-06cb-41b0-9008-06ed741bc673");
        fetch('https://' + region + '/lol/match/v3/matchlists/by-account/' + accountID,{
            headers: headers,
            method: 'get'
        })
        .then(res =>{
            res.json()
            .then(jres =>{
                resolve(jres);
            }).catch(e => {
                reject(e);
            })
        }).catch(e => {
            reject(e);
        })
    }
    catch(e){
        reject(e);
    }
})




/*
    Response Data GetSinglMatchByMatchID

    {
    "seasonId": 11,
    "queueId": 450,
    "gameId": 736590923,
    "participantIdentities": [
        {
            "player": {
                "currentPlatformId": "TR1",
                "summonerName": "lightninghowl",
                "matchHistoryUri": "/v1/stats/player_history/EUW1/27113355",
                "platformId": "EUW1",
                "currentAccountId": 446411,
                "profileIcon": 3541,
                "summonerId": 461512,
                "accountId": 27113355
            },
            "participantId": 1
        },
        {
            "player": {
                "currentPlatformId": "TR1",
                "summonerName": "Mother Slayer",
                "matchHistoryUri": "/v1/stats/player_history/EUN1/29744623",
                "platformId": "EUN1",
                "currentAccountId": 453455,
                "profileIcon": 3505,
                "summonerId": 468554,
                "accountId": 29744623
            },
            "participantId": 2
        }
    ],
    "gameVersion": "8.14.239.6309",
    "platformId": "TR1",
    "gameMode": "ARAM",
    "mapId": 12,
    "gameType": "MATCHED_GAME",
    "teams": [
        {
            "firstDragon": false,
            "bans": [],
            "firstInhibitor": true,
            "win": "Win",
            "firstRiftHerald": false,
            "firstBaron": false,
            "baronKills": 0,
            "riftHeraldKills": 0,
            "firstBlood": false,
            "teamId": 100,
            "firstTower": true,
            "vilemawKills": 0,
            "inhibitorKills": 2,
            "towerKills": 4,
            "dominionVictoryScore": 0,
            "dragonKills": 0
        },
        {
            "firstDragon": false,
            "bans": [],
            "firstInhibitor": false,
            "win": "Fail",
            "firstRiftHerald": false,
            "firstBaron": false,
            "baronKills": 0,
            "riftHeraldKills": 0,
            "firstBlood": true,
            "teamId": 200,
            "firstTower": false,
            "vilemawKills": 0,
            "inhibitorKills": 0,
            "towerKills": 0,
            "dominionVictoryScore": 0,
            "dragonKills": 0
        }
    ],
    "participants": [
        {
            "stats": {
                "firstBloodAssist": false,
                "visionScore": 0,
                "magicDamageDealtToChampions": 34782,
                "largestMultiKill": 2,
                "totalTimeCrowdControlDealt": 27,
                "longestTimeSpentLiving": 196,
                "perk1Var1": 250,
                "perk1Var3": 0,
                "perk1Var2": 999,
                "tripleKills": 0,
                "perk5": 9111,
                "perk4": 8014,
                "playerScore9": 0,
                "playerScore8": 0,
                "kills": 16,
                "playerScore1": 1,
                "playerScore0": 0,
                "playerScore3": 4,
                "playerScore2": 0,
                "playerScore5": 0,
                "playerScore4": 0,
                "playerScore7": 0,
                "playerScore6": 0,
                "perk5Var1": 1816,
                "perk5Var3": 0,
                "perk5Var2": 0,
                "totalScoreRank": 0,
                "neutralMinionsKilled": 0,
                "damageDealtToTurrets": 417,
                "physicalDamageDealtToChampions": 11537,
                "damageDealtToObjectives": 417,
                "perk2Var2": 0,
                "perk2Var3": 0,
                "totalUnitsHealed": 1,
                "perk2Var1": 0,
                "perk4Var1": 1109,
                "totalDamageTaken": 21356,
                "perk4Var3": 0,
                "largestCriticalStrike": 0,
                "largestKillingSpree": 3,
                "quadraKills": 0,
                "magicDamageDealt": 65411,
                "item2": 3020,
                "item3": 3089,
                "item0": 3285,
                "item1": 3100,
                "item6": 2052,
                "item4": 3135,
                "item5": 0,
                "perk1": 8226,
                "perk0": 8229,
                "perk3": 8237,
                "perk2": 8210,
                "perk3Var3": 0,
                "perk3Var2": 0,
                "perk3Var1": 712,
                "damageSelfMitigated": 7942,
                "magicalDamageTaken": 10197,
                "perk0Var2": 0,
                "firstInhibitorKill": false,
                "trueDamageTaken": 935,
                "assists": 25,
                "perk4Var2": 0,
                "goldSpent": 14000,
                "trueDamageDealt": 380,
                "participantId": 1,
                "physicalDamageDealt": 20826,
                "sightWardsBoughtInGame": 0,
                "totalDamageDealtToChampions": 46650,
                "physicalDamageTaken": 10223,
                "totalPlayerScore": 0,
                "win": true,
                "objectivePlayerScore": 0,
                "totalDamageDealt": 86617,
                "deaths": 12,
                "perkPrimaryStyle": 8200,
                "perkSubStyle": 8000,
                "turretKills": 0,
                "firstBloodKill": false,
                "trueDamageDealtToChampions": 330,
                "goldEarned": 15497,
                "killingSprees": 6,
                "unrealKills": 0,
                "firstTowerAssist": false,
                "firstTowerKill": false,
                "champLevel": 18,
                "doubleKills": 2,
                "inhibitorKills": 0,
                "firstInhibitorAssist": false,
                "perk0Var1": 2343,
                "combatPlayerScore": 0,
                "perk0Var3": 0,
                "visionWardsBoughtInGame": 0,
                "pentaKills": 0,
                "totalHeal": 2014,
                "totalMinionsKilled": 38,
                "timeCCingOthers": 0
            },
            "spell1Id": 32,
            "participantId": 1,
            "highestAchievedSeasonTier": "PLATINUM",
            "spell2Id": 4,
            "teamId": 100,
            "timeline": {
                "lane": "TOP",
                "participantId": 1,
                "goldPerMinDeltas": {
                    "0-10": 531.4,
                    "10-20": 650.6
                },
                "creepsPerMinDeltas": {
                    "0-10": 1.2,
                    "10-20": 1.8
                },
                "xpPerMinDeltas": {
                    "0-10": 713.6,
                    "10-20": 984
                },
                "role": "DUO_SUPPORT",
                "damageTakenPerMinDeltas": {
                    "0-10": 540.3,
                    "10-20": 1140.6
                }
            },
            "championId": 81
        },

*/


export const GetSingleMatchByMatchID = (matchID,region) =>  new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-11b64165-06cb-41b0-9008-06ed741bc673");
        fetch('https://' + region + '/lol/match/v3/matches/' + matchID, {
            headers: headers,
            method: 'get'
        })
        .then(res =>{
            res.json()
            .then(jres =>{
                resolve(jres);
            }).catch(e =>{
                reject(e);
            })
        }).catch(e => {
            reject(e);
        })
    }
    catch(e){
        reject(e);
    }
})