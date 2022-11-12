require("dotenv").config();
const express = require("express");
const {connection} = require("./config/db");
const { authentication } = require("./middlewares/Authentication");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { authorization } = require("./middlewares/Authorization");
const { validate } = require("./middlewares/valid_user");
const cors = require("cors");
const { UserModel } = require("./models/usermodel");
// console.log(process.env.PORT)
const productcontroller = require("./controllers/product.controller")
const productcontroller2 = require("./controllers/product2.controller")


const app = express();
app.use(express.json());
app.use(cors());
app.use("/product", productcontroller)
app.use("/product2", productcontroller2)
// ===========> SIGNUP

app.get("/users", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});

app.post("/signup", validate, async (req, res) => {
  const { email, password,role } = req.body;

  bcrypt.hash(password, Number(process.env.ROUNDS), async (err, hashed) => {
    if (err) {
      res.send("SignUp failed...Please try in sometime");
    } else {
      // console.log(hashed);
      const user = new UserModel({ email: email, password: hashed ,role: role});
      await user.save();
      res.send("SignUp Sucessfull....");
    }
  });
});

// LOGIN =====>

app.post("/login",async (req, res) => {
 
  const { email, password } = req.body;

  const found = await UserModel.findOne({ email: email });
  let f_pass = found.password;
  let user_id= found._id

  bcrypt.compare(password, f_pass, (err, result) => {
    if (err) {
      res.send("Login Failed. Please enter correct Email ID and Password....");
    }
 
    if (result) {
      const token = jwt.sign({ user_id: user_id }, process.env.KEY);
      req.body.user_id = user_id;
      res.send({ msg: "Login Sucessfull", token: token });
    } else {
      res.send("Login Failed. Please enter correct Email ID and Password....");
    }
  });

});

app.post("/addtocart",authentication,authorization, async(req,res)=>{

    const {user_id} =  req.body
    const product = req.body
    console.log(product);
    console.log(req.body.user_id);

    // const user = await UserModel.updateOne({_id:user_id,{$set:{}}});
     const user= await UserModel.updateOne({"_id": user_id}, {$push:{"cart": product}})
    console.log(user);
    // user.cart.push(product);
    console.log(user.cart)
res.send("Product Added to cart successfully")
    

})

app.get("/users", async (req,res)=>{
const users=await UserModel.find()
res.send(users)

})

app.get('/cartdata',authentication,authorization, async (req,res)=>{
    const {user_id} =  req.body;
    const user = await UserModel.findOne({_id:user_id});
    res.send(user.cart);
})


app.delete('/', async (req,res) => { 

  try {
    await UserModel.updateMany({}, { $unset : { items_img_href : 1} })
    res.send("delete")
    
  } catch (error) {
    console.log(error)
  }



})


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB sucessfully..");
  } catch (err) {
    console.log("Error Connecting DB..");
  }
});


