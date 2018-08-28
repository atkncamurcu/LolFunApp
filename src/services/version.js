export const GetCurrentVersion = () => new Promise((resolve,reject) => {
    try{
        fetch('http://ddragon.leagueoflegends.com/api/versions.json', {
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