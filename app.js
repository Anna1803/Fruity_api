//console.log('Hello hello');

const express = require('express'); // import express module

const cors = require('cors'); 

const app = express(); // express is a function that returns an object

const fruits = require ('./routes/fruits')


//const port = 3000; // port number

//const fruits = require ('./fruits.json'); // import the fruits.json file
                                            //moved in Fruit.js



app.get('/', (req, res) => { // define a route 'home' for the root URL, we expect a GET request
  res.send('Hello Fruity!'); // send a response to the client
})         

app.use(cors()); // 
app.use(express.json()) // middleware to parse JSON request body
app.use('/fruits', fruits); 


module.exports = app; // export the app module so it can be used in other files