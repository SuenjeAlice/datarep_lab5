//Data Representation & Querying - Lab 5 - G00363332 - Sünje Alice Winteler
//Server for application
const express = require('express');
const app = express();
const port = 3000;
//add path
const path = require('path');
//add bodyParcer
const bodyParcer = require('body-parser');

//for parsing
app.use(bodyParcer.urlencoded({ extended: false}))

//parse json
app.use(bodyParcer.json())

//get request
app.get('/', (req, res) => {
    //used send method to send message
  res.send('Welcome to Data Representation & Querying');
})

//using get method to listen to a get request at /hello/:name
//req request, res response
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    //using req.params.name to pull out name parameter out of request
    res.send('Hello ' + req.params.name);
})

//get method 
app.get('/API/movies', (req, res) => {
    
    //movies variable with JSON data
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
        
    //sending back json data with name value pair(second movies is const movies)    
    res.json({movies:movies});
})

//used get method 
app.get('/test', (req, res) => {
    //send back a html page
    res.sendFile(__dirname + '/index.html');
})

//used get method 
app.get('/name', (req, res) => {
    //passed through via url, unsafe
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//used post method
app.post('/name', (req, res) => {
    //send using the body, need a package that parses body in express
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

//Set up webserver, listening at port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})