let express= require("express");
let userRoutes = express.Router();
let UserController = require("../controllers/userController")
userRoutes.route("/login").post(UserController.login);
userRoutes.route("/register").post(UserController.register);
userRoutes.route("/author").post(UserController.authorization);

//exports 

module.exports = userRoutes;