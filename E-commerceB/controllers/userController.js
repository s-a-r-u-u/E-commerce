let userCollection = require("../model/userModel");
let jwt = require("jsonwebtoken");
let dotenv = require("dotenv");
let {promisify} =require("util");
dotenv.config({path:"./config.env"})
let userToken = (id)=>{
    return jwt.sign({id},process.env.JSON_WEB_TOKEN,{expiresIn:process.env.JSON_EXPIRES})}
exports.register=async(req,res,next)=>{
    try{
        await userCollection.create(req.body);
        res.json({status:true,message:"successfully registered"});
    }
    catch(e){
        res.json({status:false,error:e});
    }
}

exports.login=async (req,res,next) => {
    try {
         let data = await userCollection.findOne({username:req.body.username});
        if( await data.checkPass(req.body.password,data.password)){
           res.json({status:true,message:"successfull login" , token : userToken(data.id)});
        }
        else{
             res.json({status:false,message:"invalid email or password"});
        }
    } catch (e) {
           res.json({status:false,message:"invalid email or password"});
    }
}

exports.authorization=async (req,res,next) => {
    if(!req.headers.authorization || !req.headers.authorization.startsWith("bearer") || req.headers.authorization.split(" ")[1]=="null"){
        res.json({status:false , message :"please login again"});
    }
    

    var user = await promisify(jwt.verify)(req.headers.authorization.split(" ")[1],process.env.JSON_WEB_TOKEN);
    

   
    if(! await userCollection.findOne({_id:user.id})){
        res.json({status:false , message:"the user belonging to this toke is not here"})
    }
    
    res.json({status:true , message:"verified"});
} 