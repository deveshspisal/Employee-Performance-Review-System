const { timeStamp } = require('console')
const mongoose = require('mongoose')

const {Schema, model} = mongoose

const departmentSchema = new Schema({
    name:String,
},{timestamps:true})

const Department = model('Department',departmentSchema)

module.exports = Department