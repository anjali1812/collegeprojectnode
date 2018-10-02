var express = require('express');
var router = express.Router();

var sign=require('../models/user_model');

router.post('/',function(req,res,next){
    sign.signup(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(err);
        }
    });
});

module.exports=router;