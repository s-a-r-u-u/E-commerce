let express= require("express");
let itemRoutes = express.Router();
let itemController = require("../controllers/itemController")
itemRoutes.route("/get").get(itemController.getItems);
itemRoutes.route("/add").post(itemController.addItems);


//exports 
module.exports = itemRoutes;