const Department = require('../models/department-model')

const departmentSchema = {
    name : {
        notEmpty : {
            errorMessage : 'Department Name is required'
        }
    },
    custom : {
        options :async (value) =>{
             const valueFound = await Department.findOne({name : value})
        
             if(!valueFound){
                return true
             }else{
                 throw new Error('This Department is already present')   

             }
             
        }
    }
    
}

module.exports = departmentSchema