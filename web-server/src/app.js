const path = require('path')
const express = require('express')
const hbs = require('hbs')
var fs = require('fs')

const app = express()

//setting path for dataFiles
const jsonPath = path.join(__dirname,'../public/data')

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//read data files
var fileList = fs.readdirSync(jsonPath);

//list of filenames
let metricsArr=[]
let labels=[]
let title=[]
let backgroundColorArr = ['red','blue','orange','yellow','green','pink','violet']

//to do what happens when all transactions are not in the file
fileList.forEach((fileName)=>{
    let metrics=[]
    let databuffer = fs.readFileSync(jsonPath+"/"+fileName)
    let parsedJson = JSON.parse(databuffer.toString())
    let parsedLabels = Object.keys(parsedJson)
    title.push(fileName)
    labels = parsedLabels;
    parsedLabels.forEach((item)=>{
        metrics.push(Math.round((parsedJson[item].pct2ResTime + Number.EPSILON) * 100) / 100)
    })
    metricsArr.push(metrics)
})

//create object for charting
//to do index when greater than 7
let myObj=[]
for(let index=0;index<fileList.length;index++){
    let canvasFrame={label:"",data:"",backgroundColor:"",borderColor:"",borderWidth: 1}
    canvasFrame.label=title[index]
    canvasFrame.data=metricsArr[index]
    //let backgroundColor = backgroundColorArr[Math.floor(Math.random()*backgroundColorArr.length)]
    let backgroundColor = backgroundColorArr[index] //will fail if index is more than 7
    canvasFrame.backgroundColor= backgroundColor
    canvasFrame.borderColor= backgroundColor
    myObj.push(canvasFrame)
}

//myroutes
  
app.get('', (req, res) => {
    res.render('index', {
        labels: JSON.stringify(labels),
        myObj: JSON.stringify(myObj),
        title: "Jmeter Performance Trending",
        name: "varghese"
    })
})

app.listen(3000, () => {
    console.log('Lets start plotting')
})