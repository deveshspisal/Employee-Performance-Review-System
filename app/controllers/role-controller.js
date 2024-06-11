const Role = require('../models/role-model')

const roleCltr = {}


roleCltr.create = async (req,res)=>{
    try{
        const body = req.body
        const roleSave = new Role(body)
        const roleData = await roleSave.save()
        res.json(roleData)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }

}

roleCltr.list = async (req,res) =>{
    try{
        const roleData = await Role.find()
        res.json(roleData)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

roleCltr.getSingleRole = async (req,res) =>{
    try{
        const id = req.params.id
        const singleRole = await Role.findOne({_id:id})
        res.json(singleRole)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

roleCltr.update = async (req,res) =>{
    try{
        const id = req.params.id
        const body = req.body
        const updateRole = await Role.findByIdAndUpdate({_id:id},body,{new:true})
        res.json(updateRole)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

roleCltr.delete = async (req,res) =>{
    try{
        const id = req.params.id
        const body = req.body
        const deleteRole = await Role.findByIdAndDelete({_id:id})
        res.json(deleteRole)
    }catch(err){
        console.log(err);
        res.status(401).json('Internal server error')
    }
}

module.exports = roleCltr