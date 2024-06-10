const { timeStamp } = require('console')
const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userSchema = Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    role : String,
    postion : String,
    dateOfJoining : Date,
},{timestamps:true})

const User = model('User', userSchema)

module.exports = User