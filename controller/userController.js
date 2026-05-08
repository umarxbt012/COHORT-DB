const userModel=require("../Model/userModel");
//learn what async and sync functions are
// function below is to get all users from the database and it is an asynchronous function because we are using await in it. Await is used to wait for the promise to resolve before moving on to the next line of code. It is used to handle asynchronous operations in a more synchronous way.
const getAllUsers=async function(req,res){
    try{
        //.find in mongoose is used to retrieve all the documents from the collection. It returns an array of documents that match the query criteria. In this case, we are not passing any query criteria, so it will 
        // so the await userModel.find() will return all the users in the collection and we are storing it in the variable getAll. Then we are sending a response with status code 200 and a message along with the data which is the array of users.
       const getAll=await userModel.find();
       return res.status(200).json({
        message:"Users fetched successfully",
        data: getAll
       });
    }catch(error){
        return res.status(500).json({
            message:"Error fetching users",
            error:error.message
        });
    }
};
//function below is to get one user from the database and it is an asynchronous function because we are using await in it. Await is used to wait for the promise to resolve before moving on to the next line of code. It is used to handle asynchronous operations in a more synchronous way.
const getOneUser= async function(req,res){
    try{
        /*findById is the method we are using to retrieve just one user and the parameter it takes is req.params.id which it helps the mongoose .findByID to find the particular id.*/
        //await userModel.findById(req.params.id) will return the user with the specific id that we are passing in the request parameters and we are storing it in the variable getOne. Then we are sending a response with status code 200 and a message along with the data which is the user object that we retrieved from the database.
        const getOne= await userModel.findById(req.params.id);
        return res.status(200).json({
            message:"User found sucessfully",
            data: getOne
        })

    }catch(error){
        return res.status(500).json({
            message: "Error getting user",
            error: error.message
        })
    };
    
}
const newUser= async function(req,res){
    try{
        const {username,password,phoneNumber,email}= req.body;
        const user= await userModel.create({
            username,
            password,
            phoneNumber,
            email
        });
        return res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
}
const updateUser=async function (req,res) {
    try{
        const{phoneNumber, username}=req.body;
        // findByIdAndUpdate is a method that takes in the id of the user, the updated data and an options object. The options object has a property called new which is set to true. This means that the method will return the updated user object instead of the original user object. We are storing the updated user object in the variable update and then sending a response with status code 200 and a message along with the data which is the updated user object.
        const update= await userModel.findByIdAndUpdate(
            req.params.id,
            {phoneNumber, username},
            {new:true}
        )
             if(!update){
                return res.status(404).json({
                    message: "User not found"
                });
            }

        return res.status(200).json({
            message: "User updated successfully",
            data: update
            
        });

    }
    catch(error){
        return res.status(500).json({
            message: "error updating user",
            error: error.message
        })
    }
    
}
const deleteUser= async function (req,res) {
    try {
        //findByIdAndDelete is a method that takes in the id of the user and deletes the user from the database. It returns the deleted user object if the deletion is successful. We are storing the deleted user object in the variable deleteUser and then sending a response with status code 200 and a message along with the data which is the deleted user object.
        const deleteUser=await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "USER DELETED SUCCESSFULLY",
            data: deleteUser
        })
    } catch (error) {
       return res.status(500).json({
        message:"error deleting user",
        error: error.message
       })
    }
    
}
module.exports={getAllUsers,getOneUser,newUser,deleteUser,updateUser}