const express = require("express")
const { authentication } = require("../middlewares/Authentication")
const { authorization } = require("../middlewares/Authorization")
const Product2 = require("../models/user.product2")


// const router = express.router()
const router = express.Router()
router.post("/",authentication, authorization, async(req,res)=>{
    try{
        
        const product=await Product2.create(req.body)
        return res.json({ status: 'ok', data: product})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.post("/addtocart",authentication, authorization, async(req,res)=>{
    const product = req.body;
    const user = await Product2.find()
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
        const product=await Product2.find({_id:id}).lean().exec()
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

            const {page,limit} = req.query
            console.log( 'page', page)
    try{ 
        const product=await Product2.find().skip(page).limit(limit)
        return res.send(product)  
    }catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports=router
