const jwt = require("jsonwebtoken");


const authentication = async (req,res,next) => {

   const token = req.headers.authorization.split(" ")[1]

   if(!token){
    res.send("Please login...")
   }
   else{

        const dec= jwt.verify(token, process.env.KEY)
        if(dec){
            next()
        }
        else{
            res.send("Please login...")
        }
   }

}

module.exports = {authentication}