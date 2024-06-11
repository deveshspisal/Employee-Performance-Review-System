const Department = require('../models/department-model')

const departmentSchema = {
    name : {
        notEmpty : {
            errorMessage : 'Department Name is required'
        }
    }
}

module.exports = departmentSchema