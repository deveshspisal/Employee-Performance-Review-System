const express = require('express');
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.listen(5786,()=>{
    console.log('server running on port 5786');
})