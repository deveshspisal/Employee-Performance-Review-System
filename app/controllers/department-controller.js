const Department = require('../models/department-model')
const {validationResult} = require('express-validator')
const departmentCltr = {}

departmentCltr.create = async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors) 
    }   
    try{
        const body = req.body
        const departSave = new Department(body)
        const savedDepart = await departSave.save()
        res.json(savedDepart)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

departmentCltr.list = async (req, res) =>{
    try{

        const departData = await Department.find()
        res.json(departData)

    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

departmentCltr.getSingleDept = async (req, res) =>{
    try{
        const id = req.params.id
        const departSingle = await Department.findOne({_id:id})
        res.json(departSingle)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

departmentCltr.update = async (req,res) =>{
    try{
        const id = req.params.id
        const body = req.body
        const updateDept = await Department.findByIdAndUpdate({_id:id},body,{new:true})
        res.json(updateDept)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}
departmentCltr.delete = async (req,res) =>{
    try{
        const id = req.params.id
        const deleteDept = await Department.findByIdAndDelete({_id:id})
        res.json(deleteDept)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

module.exports = departmentCltr