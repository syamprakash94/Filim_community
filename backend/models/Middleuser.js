const mongoose = require("mongoose");

const MiddleuserSchema = new mongoose.Schema({ 
   
    firstname:{
        type:String,
        require: true,
        
    },
    lastname:{
        type:String,
        require:true,
    
    },
  
    password:{
        type:String,
        required:true,
     
    },

    email:{
        type:String,
        required:true,
        unique:true, 
    },
    phonenumber:{
        type:Number,
        required:true,
      
    },
    gender:{
        type: String,  
     
    },

    professionalstream:{
        type: String,
            
            // required : true  
    },


},
{ timestamps: true }
)

module.exports = mongoose.model('Middleuser', MiddleuserSchema)