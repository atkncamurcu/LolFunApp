/*
    Response Data GetAllChampMasteryBySummonerID
        [
            {
                "championLevel": 7,
                "chestGranted": true,
                "championPoints": 334010,
                "championPointsSinceLastLevel": 312410,
                "playerId": 17073255,
                "championPointsUntilNextLevel": 0,
                "tokensEarned": 0,
                "championId": 64,
                "lastPlayTime": 1532854562000
            },
            {
                "championLevel": 7,
                "chestGranted": true,
                "championPoints": 309918,
                "championPointsSinceLastLevel": 288318,
                "playerId": 17073255,
                "championPointsUntilNextLevel": 0,
                "tokensEarned": 0,
                "championId": 432,
                "lastPlayTime": 1532900854000
            }
        ]
*/



export const GetAllChampMasteryBySummonerID = (summonerID,region) => new Promise((resolve,reject) =>{
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-11b64165-06cb-41b0-9008-06ed741bc673");
        fetch('https://' + region + '/lol/champion-mastery/v3/champion-masteries/by-summoner/' + summonerID, {
            headers: headers,
            method: 'get'   
        })
        .then(res =>{
            res.json()
            .then(jres => {
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
    Response Data GetSingleChampMasteryByChampionID
        {
            "championLevel": 7,
            "chestGranted": true,
            "championPoints": 309918,
            "championPointsSinceLastLevel": 288318,
            "playerId": 17073255,
            "championPointsUntilNextLevel": 0,
            "tokensEarned": 0,
            "championId": 432,
            "lastPlayTime": 1532900854000
        }
*/


export const GetSingleChampMasteryByChampionID = (summonerID,championID,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-11b64165-06cb-41b0-9008-06ed741bc673");
        fetch('https://' + region + '/lol/champion-mastery/v3/champion-masteries/by-summoner/' + summonerID + '/by-champion/' + championID,{
            headers: headers,
            method: 'get'
        })
        .then(res => {
            res.json()
            .then(jres => {
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