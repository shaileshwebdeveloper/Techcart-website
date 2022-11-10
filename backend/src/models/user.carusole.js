const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const carusoleSchema = new mongoose.Schema(
  {
    prod_link:{type:String,required:true},
    prod_image:{type:String,required:true},
    prod_title:{type:String,required:true},
    price:{type:String,required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("carusole",carusoleSchema)