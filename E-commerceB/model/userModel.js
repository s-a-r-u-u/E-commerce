let mongoose=require("mongoose");
let bcrypt = require("bcryptjs");
let userSchema = mongoose.Schema({
    username:{type:String , required:true},
    password:{type:String , required:true}
})


userSchema.pre("save", async function encypt(){
    this.password= await bcrypt.hash(this.password,12);
})

userSchema.methods.checkPass  = async(currPass,dbPass)=>{
    return bcrypt.compare(currPass,dbPass);
}

let userCollection = mongoose.model("User",userSchema);

// exports 

module.exports=userCollection;