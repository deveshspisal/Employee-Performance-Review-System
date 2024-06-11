const express = require('express');
const cors = require('cors')
const validator = require('express-validator');

const {checkSchema} = validator
const app = express()

app.use(express.json())
app.use(cors())


// DB connection
const DBconnect = require('./db/config');
const userCltr = require('./app/controllers/users-controller');
DBconnect()


// validations 
const userRegistartionSchema = require('./app/validations/users-validation')

app.post('/api/create-user',checkSchema(userRegistartionSchema),userCltr.create)
app.post('/api/login-user',userCltr.login)
app.get('/api/users',userCltr.list)






app.listen(5786,()=>{
    console.log('server running on port 5786');
})






