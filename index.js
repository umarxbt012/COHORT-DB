const express= require("express");
//import cors
const cors = require("cors");
const mongoose= require("mongoose");
const router= require("./Routes/userRoutes");
//liveUrl is the connection string for the MongoDB Atlas database and localUrl is the connection string for the local MongoDB database. We are using the localUrl to connect to the local MongoDB database. We are using mongoose.connect() method to connect to the database and it returns a promise. If the connection is successful, it will log "MongoDB connected" to the console, otherwise it will log an error message.
//make the name of the database name userDB the same with your local url. good practice!
const liveUrl="mongodb+srv://FARUK:FARUK123@cluster0.olixmcx.mongodb.net/?appName=Cluster0"
const localUrl="mongodb://localhost:27017/userDB"
mongoose.connect(liveUrl)
.then(()=> console.log("MongoDB connected"))
.catch((err)=>console.error("Error: ", err));
const app =express();
const port=7777;
app.use(cors());
app.use(express.json());
//to use the router we created in the routes folder
app.use("/api", router);
mongoose.connection.on("connected", () => {
    console.log("🔥 Connected to ATLAS");
});

app.get("/", function(req, res){
    res.send("api is ready to use")
})
app.listen(port, function(req,res){
    console.log(`server is running on ${port}`)
})      