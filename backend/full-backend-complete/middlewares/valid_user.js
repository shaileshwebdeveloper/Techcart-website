const validate = (req,res,next) =>{
 
    let email= req.body.email
    let password= req.body.password
    let role= req.body.role
 
    if(email && password && role){
        next()
    }
    else{
        res.send("Please enter all Details...")
    }
 
 
}
 
module.exports= {validate}