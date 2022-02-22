const express = require('express');
const body_paser = require('body-parser');
const cors = require('cors');
const app = express();
db_manager = require('./persistence/dbmanager');
app.use(body_paser.urlencoded({extended:true}));
app.use(body_paser.json());
app.use(cors());

app.get('/',(req,res)=>(res.send('Hola mundo')));

//crud

//create - POST
app.post('/user',(req,res)=>{db_manager.user_create(req,res)});

//GET
app.get('/user',(req,res)=>{db_manager.user_details(req,res)});



app.listen(8015,()=>{console.log('Api por puerto 8014')});