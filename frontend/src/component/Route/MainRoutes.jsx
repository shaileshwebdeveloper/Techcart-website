import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BestSelling } from '../CategoryPages/Bestselling/BestSelling'
import { NewPage } from '../CategoryPages/New/NewPage'
import { SingleBest } from '../CategoryPages/Single/SingleBest'
import Home from '../Home'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>

          <Route path="/" element={<Home/>}/>

          {/* LOGIN ROUTES */}     
          {/* <Route path="/" element={<Home/>}/> */}
          
           {/* CATEGORY ROUTES  */}
           <Route path="/new" element={<NewPage/>}/>
           
           <Route path="/bestselling" element={<BestSelling/>}/>

           <Route path="/bestselling/:id" element={<SingleBest/>}/>



            

        </Routes>


    </div>
  )
}
