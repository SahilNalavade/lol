const mongoose = require('mongoose')

const URL = 'mongodb+srv://Sahil:UQvQlpS7i4KFkJq5@cluster0.tbyzgyo.mongodb.net/test'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

