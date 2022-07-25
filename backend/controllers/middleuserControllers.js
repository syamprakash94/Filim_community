const Middleuser = require("../models/Middleuser")

const bcrypt = require("bcrypt");

const regmiddleuser=  async (req,res)=>{
    try {
       
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(req.body.password, salt);
 
       const middleuser = new Middleuser({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          password : hashedPassword,
          email: req.body.email,
          phonenumber:req.body.phonenumber,
          gender:req.body.gender,
          professionalstream:req.body.professionalstream,
        });
        const middleUser = await middleuser.save();
     res.status(200).json(middleUser);
    } catch (err) {
       res.status(500).json(err);
    }
   
 }

 module.exports ={
    regmiddleuser
 }


