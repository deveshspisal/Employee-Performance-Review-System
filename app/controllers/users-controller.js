const User = require('../models/users-model')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const userCltr = {}

userCltr.create = async (req, res) =>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json(errors) 
        }

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

userCltr.login = async (req,res) =>{
    try{
        const body  = req.body
        const email = body.email
        const password = body.password

        const userCheck = await User.findOne({email : email})
        if(!userCheck){
            res.status(400).json({error : "Invalid Email id or password"})
        }

        const hashpassword = userCheck.password
        const userPasswordCheck = await bcrypt.compare(password,hashpassword)
        if(!userPasswordCheck){
            res.status(400).json({error : "Invalid Email id or password"})

        }else{
            const tokenData = {
                id : userCheck._id
            }
            const token = jwt.sign(tokenData, 'India@11', {expiresIn: '7d'})
            res.status(201).json({token : token})
        }
    }catch(err){
        console.log(err);
        res.status(500).json('Internal Server error')
    }

}
module.exports = userCltr