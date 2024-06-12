const { timeStamp } = require('console')
const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userSchema = Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    role : {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    department : {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    postion : String,
    dateOfJoining : Date,
},{timestamps:true})

const User = model('User', userSchema)

module.exports = User