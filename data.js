const axios = require('axios');
const fs=require('fs')
const redline=require("readline-sync")

const saral_API=axios.get('https://api.merakilearn.org/courses ')
    .then(  Response=>{
        let saral_data=(Response.data)
        let json_file=JSON.stringify(saral_data,null,5)
        fs.writeFileSync("data.json",json_file)

        var serial=0
        for(i of saral_data){
            serial++
        }
    }).catch(Error=>{
        console.log(Error)
    })