let express =require("express");
let paymentRoutes= express.Router();
let paymentController = require("../controllers/paymentController")
paymentRoutes.route("/checkout").post(paymentController.getStripeLink);

//exports 

module.exports=paymentRoutes;
