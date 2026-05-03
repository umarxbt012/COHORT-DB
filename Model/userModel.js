const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
        type: String,
    },
    password:{
        type: String,
    },
    phoneNumber:{
        type:Number,
    },
    email:{
        type: String,
    },
})
module.exports=mongoose.model("user", userSchema)
//takes two parameter your collection where your schema is going to be stored and the schema itself