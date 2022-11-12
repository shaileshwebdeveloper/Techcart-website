const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const productSchema2 = new mongoose.Schema(
  {
   
    lazy_img_src: { type: String, required: true },
    items_p: { type: String, required: true },
    items_price: { type: String, required: true },
    del_price: { type: String, required: true },
    items_off: { type: String, required: true },
    item_left:{type: String,required: true},
    items_times: { type: String, required: true},
    favit_count: { type: Number, required: true},
    free_ship: { type: String, required: true},
    sale:{type: String,required: true},
    country: { type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  },

);
let Product2 = mongoose.model("product2",productSchema2)
// module.exports=mongoose.model("product2",productSchema2)
module.exports = Product2