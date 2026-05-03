const express= require("express");
//import cors
const cors = require("cors");
const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27027//AuthenticationDB")
.then(()=> console.log("MongoDB connected"))
.catch(()=>console.error("Error: ", err));
const app =express();
const port=7777;
app.use(cors());
app.use(express.json());

app.get("/", function(req, res){
    res.send("api is ready to use")
})
app.listen(port, function(req,res){
    console.log(`server is running on ${port}`)
})      