const express = require("express");
var cors = require('cors')
const connect = require("./src/configs/db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()
// const UserModel = require("./src/models/user.model")
// const  {register,login}=require("./src/controllers/auth.user.controller")
const userController = require("./src/controllers/user.controller");
// const userProduct = require("./models/user.product");
const productController=require("./src/controllers/product.controller")
const productController2=require("./src/controllers/product2.controller")
const productCarusole=require("./src/controllers/carusole.controller");
const { UserModel } = require("./src/models/user.model");

const app = express();
app.use(express.json());

app.use(cors({ origin:"*"}))


app.get("/users", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});

app.post("/signup",  async (req, res) => {
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

  // console.log(f_pass)

  bcrypt.compare(password, f_pass, (err, result) => {
    
  if (err) {
      res.send("Login Failed. Please enter correct Email ID and Password....");
  } 
  else {
      const token = jwt.sign({ user_id: user_id }, process.env.KEY);
      req.body.user_id= user_id
      res.send({ msg: "Login Sucessfull", token: token});
    }
  });  

});

// app.post("/register",register)
// app.post("/login" ,login)

app.use("/products", productController);
app.use("/carusole", productCarusole);
app.use("/products2", productController2);

app.use("/users", userController);
app.set("view engine","hbs")
app.get("/",(req,res)=>{
  res.render("index")
})

const PORT=process.env.PORT || 2347

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2347");
});
