const express= require("express");
const{getAllUsers,getOneUser,newUser,deleteUser,updateUser}= require("../controller/userController");
const router= express.Router();
router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.post("/newUser", newUser);
//patch is used cause we are only doing partial update to the user and not updating the whole user object. If we were to update the whole user object, we would use put instead of patch.
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports= router;