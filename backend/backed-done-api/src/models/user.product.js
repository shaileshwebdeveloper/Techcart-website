const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const productSchema = new mongoose.Schema(
  {
   
    items_img_href: { type: String, required: true },
    lazy_img_src: { type: String, required: true },
    items_p: { type: String, required: true },
    items_price: { type: String, required: true },
    del_price: { type: String, required: true },
    items_off: { type: String, required: true },
    items_times: { type: String, required: true},
    favit_count: { type: Number, required: true},
    free_ship: { type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

const ProductModel= mongoose.model("product",productSchema)

module.exports=ProductModel;  