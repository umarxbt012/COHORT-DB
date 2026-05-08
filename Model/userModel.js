const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
        type: String,
    },
    password:{
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
    },
    email:{
        //required: true means that the email field must be provided when creating a new user. unique: true means that the email field must be unique across all users in the database. This ensures that no two users can have the same email address.
        type: String,
        required: true,
        unique: true
    },
})
module.exports=mongoose.model("user", userSchema)
//takes two parameter your collection where your schema is going to be stored and the schema itself