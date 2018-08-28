/*
Response Data GetSummonerByName
{
    "profileIconId": 3553,
    "name": "DontPanic1",
    "summonerLevel": 63,
    "accountId": 200468365,
    "id": 2459013,
    "revisionDate": 1532866828000
}
*/


export const GetSummonerByName = (name,region) => new Promise((resolve, reject) => {
    console.log(name + region);
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-11b64165-06cb-41b0-9008-06ed741bc673");
        fetch('https://' + region + '/lol/summoner/v3/summoners/by-name/' + name, {
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
       
    }catch(e){
        reject(e);
    }
})


