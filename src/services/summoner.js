/*
Response Data GetSummonerByID
{
    "profileIconId": 3553,
    "name": "DontPanic1",
    "summonerLevel": 63,
    "accountId": 200468365,
    "id": 2459013,
    "revisionDate": 1532866828000
}
*/


export const GetSummonerByID = (name,region) => new Promise((resolve, reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
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

