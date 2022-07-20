const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const helmet = require ("helmet");
const morgan = require ("morgan");
const userRoute = require("./routes/users") 
const postRoute = require("./routes/posts")
const adminRoute = require("./routes/admin")
const multer = require("multer")
const path = require ("path")


dotenv.config(); 


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true},()=>{
    console.log("connect to db");
});

app.use("/images", express.static(path.join(__dirname,"public/images")))

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));  
 
// multer
const storage= multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public/images");
    },
    filename: (req,file,cb) =>{
        cb(null, req.body.name);
        console.log(req.body);
    }
    
})

var upload = multer({
    storage: storage
});

app.post('/api/upload', upload.single('file'),(req,res)=>{
    try {
        return res.status(200).json("File uploaded successfully")
    } catch (error) {
        console.log(error);
    }
})

app.use("/api/users",userRoute)
app.use("/api/posts", postRoute)
app.use("/api/admin", adminRoute)



app.listen(8800, () =>{
    console.log("backend ready");
})