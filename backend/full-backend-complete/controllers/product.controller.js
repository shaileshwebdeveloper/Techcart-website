const express = require("express")
const { authentication } = require("../middlewares/Authentication")
const { authorization } = require("../middlewares/Authorization")
const ProductModel = require("../models/user.product")
const router = express.Router()
// const router = express.router()
router.post("/",authentication, authorization, async(req,res)=>{
    try{
        
        const product=await ProductModel.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.post("/addtocart",authentication, authorization, async(req,res)=>{
    const product = req.body;
    const user = await ProductModel.find()
    console.log(user)
    res.send("going to addtocart")
    // try{
    //     const Cartproduct=new  Product(product);
    //     await Cartproduct.save()
    //     res.send('product added to cart successfully');
        
    // }catch(err){
    //     return res.status(500).send(err.message)
    // }
})
router.get("/:id",authentication, authorization, async(req,res)=>{
    // console.log('product id')
    try{
        console.log(req.params)
        const {id} = req.params;
        const product=await ProductModel.find({_id:id}).lean().exec()
         res.send(product)    
    }catch(err){
        console.log(err) 
        res.status(500).send(err.message)
         
    }
})


// router.get("/",async(req,res)=>{

//     try{
     
//         const product=await Product.find().lean().exec()
      
//         return res.send(product)
        
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })

router.get("/", async(req,res)=>{
        console.log(req.url)
            const {page,limit} = req.query
            console.log( 'page', page)
    try{ 
        const product=await ProductModel.find().skip(page).limit(limit)
        return res.send(product)  
    }catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports=router
