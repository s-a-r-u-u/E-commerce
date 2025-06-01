let app = require("./app");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
// database connection 

let DB = process.env.DBCS.replace("<db_password>",process.env.DBP)
mongoose.connect(DB,{
    serverSelectionTimeoutMS:30000
}).then(()=>{
    console.log("database connected");
})
// server 


app.listen(3000,'0.0.0.0',()=>{
    console.log("server started at port number 3000");
})