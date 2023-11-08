const parse = require('csv-parse')
//import the file system 
const fs = require('fs')
const {dataFunc} = require('./Data')
// check if you can i mport the other module
const results = []
const habitable = []

const isHabitable = (planet)=>{
    return planet['koi_disposition']==='CONFIRMED'
}
var count=0
//create the read stream for the file 
fs.createReadStream('kepler_data.csv')
.pipe(parse.parse({
    comment:'#',
    columns:true
}))
.on('data',(data)=>{
    isHabitable(data)?habitable.push(data):''
    count=count+1
})
.on('error',error=>{
    console.log(error)
})
.on('end',()=>{
    console.log(habitable)
    console.log('nothing to show anymore')
})
