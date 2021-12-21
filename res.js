'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'message': 'succes',
        'values' : values
    }
    console.log(values);
    res.json(data);
    res.end();
};

exports.created = function(values, res){
    var data = {
        'status':201,
        'message':'created',
        'values':values
    };
    console.log(values)
    res.json(data);
    res.end();
}

exports.validation = function(values, res){
    var data = {
        'status':400,
        'message':'bad request',
        'values':values
    };
    console.log(values)
    res.json(data);
    res.end();
}

