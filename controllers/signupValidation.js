const express = require('express');
const joi = require('joi');

async function signupValidation(req, res, next)
{
    let schema = joi.object({
        username : joi.string().trim().alphanum().required().min(3).max(20)
            .messages({
                'string.base': 'Username should be a type of text',
                'string.empty': 'Username is requires',
                'string.min': 'Username should have a minimum length of {#limit}',
                'string.max': 'Username should have a maximum length of {#limit}',
                'any.required': 'Username is required'
            }),
        email : joi.string().trim().required().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'))
            .messages({
                'string.empty': 'Email is required',
                'string.pattern.base': 'Please enter a valid email address',
                'any.required': 'Email is required'
            }),
        password : joi.string().required().min(3).max(10)
            .messages({
                'string.empty': 'Password is required',
                'string.min': 'Password should have a minimum length of {#limit}',
                'string.max': 'Password should have a maximum length of {#limit}',
                'any.required': 'Password is required'
            })
    })

    try{
        let user = await schema.validateAsync(req.body);
        next()
    }catch(err){
        res.status(422).send(err.details[0].message);
    }
    
}

module.exports = signupValidation;