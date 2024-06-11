const { isEmpty } = require('validator')
const User = require('../models/users-model')

const userRegistartionSchema = {
    firstName : {
        notEmpty : {
            errorMessage : "First name is required"
        }
    },
    lastName : {
        notEmpty : {
            errorMessage : "Last name is required"
        }
    },
    email : {
        notEmpty : {
            errorMessage : "Email is required"
        },
        isEmail : {
            errorMessage : "Enter a Valid email id"
        },
        custom : {
            options : async (value) =>{
                const user = await User.findOne({email : value})
                if(!user){
                    return true
                }else{
                    throw new Error('Email id already taken')    
                }
            }
        }
        
    },
    password:{
        notEmpty : {
            errorMessage : "Password is required"
        },
        isStrongPassword : {
            options : { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1},
            errorMessage : "Password should be 8 characters"
        }
    },
    role : {
        notEmpty : {
            errorMessage : "Role is required"
        }
    },
    postion : {
        notEmpty : {
            errorMessage : "Postion is required"
        }
    },
    dateOfJoining : {
        notEmpty : {
            errorMessage : "Date of joining is required"
        },
        custom:{
            options : function (value){
                if(Date(value) < new Date()){
                    throw new Error('The date of Joining should be greater than todays date.')    
                }
                return true

            }
        }
    }
}

module.exports = userRegistartionSchema