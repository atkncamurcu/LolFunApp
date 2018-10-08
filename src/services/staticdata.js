
export const GetSummonerSpellsByName = () => new Promise((resolve,reject) => {
    try{
        fetch('http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells.json', {
            method: 'get'
        })
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject(e);
        })
    }
    catch(e){
        reject(e);
    }
})


export const GetStaticRealms = (region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-11b64165-06cb-41b0-9008-06ed741bc673");
        fetch('https://' + region + '/lol/static-data/v3/realms',{
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
