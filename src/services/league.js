/*
    Response Data GetLeagueBySummonerID
    [
        {
            "queueType": "RANKED_SOLO_5x5",
            "hotStreak": false,
            "wins": 132,
            "veteran": true,
            "losses": 117,
            "playerOrTeamId": "17074234",
            "leagueName": "Leona's Warriors",
            "playerOrTeamName": "Broxiah",
            "inactive": false,
            "rank": "I",
            "freshBlood": false,
            "leagueId": "517e8bb0-6117-11e8-8bc7-02953f14ecb7",
            "tier": "GOLD",
            "leaguePoints": 3
        }
    ]
*/



export const GetLeagueBySummonerID = (summonerID,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/league/v3/positions/by-summoner/' + summonerID, {
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
        }).catch(e =>{
            reject(e);
        })
    }
    catch(e){
        reject(e);
    }

})



/*
    Response Data GetLeagueUsersByLeagueID
        {
        "tier": "GOLD",
        "queue": "RANKED_SOLO_5x5",
        "leagueId": "517e8bb0-6117-11e8-8bc7-02953f14ecb7",
        "name": "Leona's Warriors",
        "entries": [
            {
                "hotStreak": false,
                "wins": 17,
                "veteran": false,
                "losses": 19,
                "rank": "V",
                "playerOrTeamName": "Treebeard",
                "inactive": false,
                "playerOrTeamId": "443352",
                "freshBlood": false,
                "leaguePoints": 0
            },
            {
                "hotStreak": true,
                "miniSeries": {
                    "wins": 1,
                    "losses": 0,
                    "target": 2,
                    "progress": "WNN"
            }
        ]
*/


export const GetLeagueUsersByLeagueID = (leagueID,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/league/v3/leagues/' + leagueID, {
            headers: headers,
            method: 'get'
        })
        .then(res => {
            res.json()
            .then(jres => {
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




/*
    Response Data GetTopTierUsersByQueue
        {
        "tier": "CHALLENGER",
        "queue": "RANKED_SOLO_5x5",
        "leagueId": "f467bf37-2ca7-3e0d-bc72-771a161001c2",
        "name": "Darius's Blackguards",
        "entries": [
            {
                "hotStreak": false,
                "wins": 139,
                "veteran": false,
                "losses": 102,
                "rank": "I",
                "playerOrTeamName": "PAS mggE1",
                "inactive": false,
                "playerOrTeamId": "17856219",
                "freshBlood": false,
                "leaguePoints": 214
            }
          ]
        }    
*/


export const GetTopTierUsersByQueue = (queue,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/league/v3/challengerleagues/by-queue/' + queue, {
            //Queue type == (RANKED_SOLO_5X5),(RANKED_FLEX_SR),(RANKED_FLEX_TT)
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