
//ItemList,SingleItem,ProfileIcons,SpellList,SingleSpell


/* 
    Response Data GetAllStaticItems
        {
        "type": "item",
        "version": "8.14.1",
        "data": {
            "1001": {
                "plaintext": "Slightly increases Movement Speed",
                "description": "<groupLimit>Limited to 1 pair of boots.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
                "id": 1001,
                "name": "Boots of Speed"
            },
            "1004": {
                "plaintext": "Slightly increases Mana Regen",
                "description": "<stats><mana>+25% Base Mana Regen </mana></stats>",
                "id": 1004,
                "name": "Faerie Charm"
            }
        }
*/

export const GetAllStaticItems = (region) => new Promise((resolve,reject) =>{
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + ' /lol/static-data/v3/items',{
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
    Response Data GetStaticItemsByItemID
        {
        "plaintext": "Slightly increases Mana Regen",
        "id": 1004,
        "name": "Faerie Charm",
        "description": "<stats><mana>+25% Base Mana Regen </mana></stats>"
        }
 */


export const GetStaticItemsByItemID = (itemID,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/static-data/v3/items/' + itemID, {
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

/*
    Response Data GetAllStaticProfileIcons
    {
        "data": {
            "0": {
                "image": {
                    "full": "0.png",
                    "group": "profileicon",
                    "sprite": "profileicon0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 0
                },
                "id": 0
            },
            "1": {
                "image": {
                    "full": "1.png",
                    "group": "profileicon",
                    "sprite": "profileicon0.png",
                    "h": 48,
                    "w": 48,
                    "y": 0,
                    "x": 48
                },
                "id": 1
            }
    }
*/


export const GetAllStaticProfileIcons = (region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/static-data/v3/profile-icons', {
            headers: headers,
            method: 'get'
        })
        .then(res => {
            res.json()
            .then(jres => {
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
    Response Data GetAllStaticSummonerSpells
        {
        "type": "summoner",
        "version": "8.14.1",
        "data": {
            "SummonerSiegeChampSelect2": {
                "id": 34,
                "summonerLevel": 1,
                "name": "Nexus Siege: Siege Weapon Slot",
                "key": "SummonerSiegeChampSelect2",
                "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!"
            },
            "SummonerTeleport": {
                "id": 12,
                "summonerLevel": 7,
                "name": "Teleport",
                "key": "SummonerTeleport",
                "description": "After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward."
            }
        }
*/


export const GetAllStaticSummonerSpells = (region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/static-data/v3/summoner-spells', {
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



/*
    Response Data GetStaticSummonerSpellsBySpellID
        {
        "id": 12,
        "summonerLevel": 7,
        "name": "Teleport",
        "key": "SummonerTeleport",
        "description": "After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward."
        }
*/


export const GetStaticSummonerSpellsBySpellID = (spellID,region) => new Promise((resolve,reject) => {
    try{
        const headers = new Headers();
        headers.append("X-Riot-Token", "RGAPI-ae558de7-8660-4fc5-a87a-f60b4d545c1f");
        fetch('https://' + region + '/lol/static-data/v3/summoner-spells' + spellID, {
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