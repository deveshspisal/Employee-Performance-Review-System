const mongoose = require('mongoose')

const DBconnect = async () =>{
    try{
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/employee_performance')
        console.log('connected to DB');

    }catch(err){
        console.log('DB connection error',err);
    }
}

module.exports = DBconnect