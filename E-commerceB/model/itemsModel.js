let mongoose = require("mongoose");

let itemSchema= mongoose.Schema({
      id: {type:Number},
    name: {type:String},
    href: {type:String},
    price: {type:Number},
    imageSrc: {type:String},
    imageAlt: {type:String}

});

let itemCollection = mongoose.model("items",itemSchema);

//export 
module.exports=itemCollection;
