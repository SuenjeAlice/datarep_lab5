//Server for application
const express = require('express');
const app = express();
const port = 3000;
//
const path = require('path');
//
const bodyParcer = require('body-parser');

//
app.use(bodyParcer.urlencoded({ extended: false}))

//parse json
app.use(bodyParcer.json())

//get request
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying');
})

//
//req request, res response
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

//
app.get('/API/movies', (req, res) => {
    
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];
        
    //second movies is const movies    
    res.json({movies:movies});
})

//
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//
app.get('/name', (req, res) => {
    //passed through via url, unsafe
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//
app.post('/name', (req, res) => {
    //send using the body, need a package that pares body in express
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

//Set up webserver, listening at port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})