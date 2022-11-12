require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MemberModel } = require("../models/user.model");

const authentication = (req, res, next) => {
  const token = req.headers.Authorization.split(" ")[1];

  if (!token) {
    return res.send("Please Login ....");
  } else {

    const decode= jwt.compare(token,process.env.KEY)

    if(decode){
        next()
    }
    else{
        res.send("Error, please login Again...")
    }

  }
};


module.exports= {authentication}