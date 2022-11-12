app.get("/", async(req,res)=>{

    const cars = await CarModel.find()
    res.send(cars)
  
  })
  
  // ==> adding new car ...."*" Authentication, Authoraization Required
  
  app.post("/addcar",authentication, authorization, async (req,res)=> {
  
      const car = req.body
  
      const new_car = new CarModel(car)
      await new_car.save()
      res.send("Car has been aded to Database Successfully....")
  
  })
  
  
  
  //===========> PUT
  
  app.put("/updatecar/:id",authentication, authorization, async (req,res)=> {
  
    const id= req.params.id
  
    const updated_car = req.body
    await CarModel.replaceOne({_id: id}, updated_car)
    res.send("Car data has been updated Successfully....")
  
  })
  
  
  // ========> Patch
  
  app.patch("/modifycar/:id",authentication, authorization, async (req,res)=> {
  
    const id= req.params.id
  
    const {car_name,price,type} = req.body
  
    await CarModel.updateOne({_id: id}, {car_name:car_name ,price: price,type:type})
    
    res.send("Car data has been modified Successfully....")
  
  })
  
  //===============> Delete
  
  app.delete("/deletecar/:id",authentication, authorization, async (req,res)=> {
  
    const id= req.params.id
    
    await CarModel.deleteOne({_id: id})
    res.send("Car data has been modified Successfully....")
  
  })