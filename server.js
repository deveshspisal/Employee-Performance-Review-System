const express = require('express');
const cors = require('cors')
const validator = require('express-validator');

const {checkSchema} = validator
const app = express()

app.use(express.json())
app.use(cors())


// DB connection
const DBconnect = require('./db/config');
DBconnect()


// validations 
const userRegistartionSchema = require('./app/validations/users-validation')
const departmentSchema = require('./app/validations/department-validation')

// user routes
const userCltr = require('./app/controllers/users-controller');
app.post('/api/create-user',checkSchema(userRegistartionSchema),userCltr.create)
app.post('/api/login-user',userCltr.login)
app.get('/api/users',userCltr.list)
app.put('/api/users/:id',userCltr.update)
app.delete('/api/users/:id',userCltr.delete)
app.get('/api/users/:id',userCltr.getUser)



// Departments routes
const departmentCltr = require('./app/controllers/department-controller')
app.post('/api/create-department',checkSchema(departmentSchema),departmentCltr.create)
app.get('/api/get-department',departmentCltr.list) 
app.get('/api/get-department/:id',departmentCltr.getSingleDept) 
app.put('/api/update-department/:id',checkSchema(departmentSchema),departmentCltr.update) 
app.delete('/api/delete-department/:id',departmentCltr.delete) 




// Roles routes
const roleCltr = require('./app/controllers/role-controller')
app.post('/api/create-role',roleCltr.create)
app.get('/api/get-role',roleCltr.list)
app.get('/api/get-role/:id',roleCltr.getSingleRole)
app.put('/api/update-role/:id',roleCltr.update)
app.delete('/api/delete-role/:id',roleCltr.delete)


app.listen(5786,()=>{
    console.log('server running on port 5786');
})






