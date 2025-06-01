let express =require("express");
let app = express();
let cors = require('cors');
const path = require("path");
const _dirname= path.dirname("");
const buildpath = path.join(_dirname,"../E-CommerceF/dist");
let itemRoutes =require("./routes/itemsRoutes")
let UserRoutes = require("./routes/userRoutes")
let paymentRoutes = require("./routes/paymentRoutes")
// middleware 
app.use(express.json())
app.use(cors());
app.use(express.static(buildpath));
// routes 
app.use("/app/v1/user",UserRoutes);
app.use("/app/v1/items",itemRoutes);
app.use("/app/v1",paymentRoutes);
// exports 

module.exports=app;