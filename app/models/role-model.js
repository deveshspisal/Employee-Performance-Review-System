const mongoose = require('mongoose')
const { permission } = require('process')

const {Schema, model} = mongoose

const roleSchema = new Schema({
    roleName : String,
    permission : [String],
},{timestamps:true})

const Role = model('Role',roleSchema)

module.exports = Role