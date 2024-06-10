const User = require('../models/users-model')
const bcrypt = require('bcryptjs');
const userCltr = {}

userCltr.create = async (req, res) =>{
    try{
        const body = req.body
        const bodyData = new User(body)
        const salt = await bcrypt.genSalt()
        const hashpassword = await bcrypt.hash(bodyData.password,salt)
        bodyData.password = hashpassword
        const data = bodyData.save()
        res.json(data)
    }catch(err){
        console.log('error in creating user',err);
        res.status(201).json('error while creating record')
    }
}

userCltr.list = async (req,res) =>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        console.log('error in list user',err);
        res.status(201).json('error in listing record')
    }

}

module.exports = userCltr