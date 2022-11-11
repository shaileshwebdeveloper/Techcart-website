const express = require("express")
const Product=require("../models/user.product2")

const router = express.Router()

router.post("/",async(req,res)=>{
    try{
     
        const product=await Product.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/:id", async(req,res)=>{
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

router.get("/",async(req,res)=>{
    try{
     
        const product=await Product.find().lean().exec()
      
        return res.send(product)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
