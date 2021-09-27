//dotenv
require ('dotenv').config({path:"./config.env"}); // to be mentioned just once

// using mongoose 
const mongoose = require('mongoose');
require('./db/atlas connection');//atlas connection

//express
const express = require ('express');
const app = express();

//Routing

app.get("/", (req, res) => {
res.send(" get route in practise");
});

app.get("/Error", (req, res) => {
     res.send(" get route in practise");
    });

app.get("/LoginPage", (req, res) => {
    res.send(" get route in practise");
});

app.get("/Profile", (req, res) => {
    res.send(" get route in practise");
 });

 app.get("/UserRegistration", (req, res) => {
    res.send(" get route in practise");
});

app.get("/profileRegistration", (req, res) => {
    res.send(" get route in practise");
});

//Port
const PORT = process.env.PORT;// syntax to deal with dotenv file
app.listen(PORT, () => { console.log(`running ${PORT}`);})