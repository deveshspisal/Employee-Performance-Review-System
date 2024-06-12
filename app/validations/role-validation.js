const Role = require('../models/role-model')

const roleSchema = {
    roleName : {
        notEmpty : {
            errorMessage : "Role is required"
        },
        custom : {
            options :async (value) =>{
                 const valueFound = await Role.findOne({roleName : value})
                 console.log(valueFound);
                 if(!valueFound){
                    return true
                 }else{
                     throw new Error('The role is already present')   
    
                 }
                 
            }
        }
    }
   
}

module.exports = roleSchema