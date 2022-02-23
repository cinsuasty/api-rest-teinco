const { query } = require('express');
var mongoose = require('mongoose');
var dev_db_url="mongodb://localhost:27017/db_users";
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB,{ useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error en mongo db'));

var User = require('./user');

exports.user_create=function(req,res){
    var user = new User({
        name:req.body.name,
        age:req.body.age
    })

    user.save(function(err){
        if(err){
            return next(err);
        }
        res.send({'message': 'ok'})
    })
}

exports.user_details=function(req,res){
    User.findById(req.query.id,function(err,user){
        if(err){
            return next(err);
        }
        res.send({user});
    });
}

exports.user_update = function(req,res){
    User.findByIdAndUpdate(req.query.id,{$set:req.body},function(err,user){
        if(err){
            return next (err)
        }
        res.send({'message':'UPDATE'});
    });
}

exports.user_delete = function(req,res){
    User.findByIdAndRemove(req.query.id,function(err,user){
        if(err){
            return next (err)
        }
        res.send({'message':'DELETE'});
    });
}