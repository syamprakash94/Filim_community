const mongoose = require("mongoose");

const MiddleuserSchema = new mongoose.Schema({ 
   
    firstname:{
        type:String,
        require: true,
        min:3,
        max:20, 
    },
    lastname:{
        type:String,
        require:true,
        min:3,
        max:20,
    },
  
    password:{
        type:String,
        required:true,
        min:6,
    },

    email:{
        type:String,
        required:true,
        max:50,
        unique:true, 
    },
    phonenumber:{
        type:Number,
        required:true,
        min:10
    },
    gender:{
        type: String,  
     
    },

    professionalstream:{
        type: String,
            enum: ['Hero', 'Heroine', 'Director', 'Producer','Music Director','Art Director'],
            required : true  
    },


},
{ timestamps: true }
)

module.exports = mongoose.model('Middleuser', MiddleuserSchema)