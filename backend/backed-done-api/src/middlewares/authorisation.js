const { UserModel } = require("../models/user.model")
const jwt = require("jsonwebtoken")

const authorization= async (req, res, next) =>{

    console.log(req.headers.authorization)

const token = req.headers.authorization

console.log("token", token)

if(!token){
    res.send("Please Login...")
}
else{

    const dec = jwt.verify(token, process.env.KEY)

    if(dec){
    
        const user = await UserModel.findOne({"_id": dec.user_id})
        if(user.role === "customer"){
            next()
        }
        else{
            res.send("You don't have access..")
        }

    }

   
}



}
module.exports= {authorization}