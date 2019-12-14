const express = require('express')
const pug = require('pug')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')



app.get('/', function(req, res){
    res.render('index', {

    })
})

app.listen(1000, function(req, res){
    console.log("Server started on port 1000...")
})