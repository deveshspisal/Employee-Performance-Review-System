const express = require('express');
const cors = require('cors')
const validator = require('validator');

const app = express()

app.use(express.json())
app.use(cors())


// DB connection
const DBconnect = require('./db/config');
const userCltr = require('./app/controllers/users-controller');
DBconnect()

app.post('/api/create-user',userCltr.create)
app.get('/api/users',userCltr.list)






app.listen(5786,()=>{
    console.log('server running on port 5786');
})






