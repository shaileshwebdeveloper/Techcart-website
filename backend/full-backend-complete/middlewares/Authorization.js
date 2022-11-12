// const { UserModel } = require("../Model/user.model")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../models/usermodel")
 
const authorization= async (req, res, next) =>{
 
const token = req.headers.authorization.split(" ")[1]
 
if(!token){
    res.send("Please Login...")
}
else{
 
    const dec = jwt.verify(token, process.env.KEY)
 
    if(dec){
   
        const user = await UserModel.findOne({"_id": dec.user_id})
        if(user.role === "customer"){
            req.body.user_id= user._id
            next()
        }
        else{
            res.send("You don't have access..")
        }
 
    }
 
   
}
 
 
 
}
module.exports= {authorization}
