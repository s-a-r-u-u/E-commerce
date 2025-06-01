let itemCollection = require("../model/itemsModel");

exports.addItems= async (req,res,next) => {
    try{
        await itemCollection.create(req.body);
        res.json({message:"added successfully"})
    }
    catch(e){
        res.json({message:e})
    }
}

exports.getItems= async(req,res,next)=>{
    try {
        let data = await itemCollection.find();
        res.json({data});
    }
    catch(e){
        res.json({message:"error "})
    }
}