const express = require("express")
const { authentication } = require("../middlewares/authentiaction")
const { authorization } = require("../middlewares/authorisation")
const Product=require("../models/user.product2")

const router = express.Router()

router.post("/product2",authentication, authorization, async(req,res)=>{
    try{
     
        const product=await Product.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.post("/product2/addtocart",authentication, authorization, async(req,res)=>{
    try{
        
        const product=await Product.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/:id",authentication, authorization, async(req,res)=>{
    console.log('product id')
    try{
        console.log(req.params)
        const {id} = req.params;
        const product=await Product.find({_id:id}).lean().exec()
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
router.post("/addtocart",authentication, authorization, async(req,res)=>{
    const product = req.body;
    try{
        const Cartproduct=new  Product(product);
        await Cartproduct.save()
        res.send('product added to cart successfully');
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/",authentication, authorization, async(req,res)=>{

    const {page,limit} = req.query
    console.log( 'page', page)
try{ 
const product=await Product.find().skip(page).limit(limit)
return res.send(product)  
}catch(err){
return res.status(500).send(err.message)
}
})

module.exports=router
