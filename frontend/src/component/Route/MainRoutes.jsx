import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BestSelling } from '../CategoryPages/Bestselling/BestSelling'
import { NewPage } from '../CategoryPages/New/NewPage'
import { SingleBest } from '../CategoryPages/Single/SingleBest'
import Home from '../Home'
import CreateAccount from '../LoginSignup/CreateAccount'
import Signin from '../LoginSignup/Signin'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/create" element={<CreateAccount/>}/>

           <Route path="/new" element={<NewPage/>}/>
           
           <Route path="/bestselling" element={<BestSelling/>}/>

           <Route path="/bestselling/:id" element={<SingleBest/>}/>



            

        </Routes>


    </div>
  )
}
