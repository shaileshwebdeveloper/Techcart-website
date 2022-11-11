import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BestSelling } from './Bestselling/BestSelling'
import { New } from './New/New'
import { SingleBest } from './Single/SingleBest'

export const MainRoutes = () => {
  return (
     <Routes>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/" /> */}
        <Route  path='/' element={<New/>}/>
        <Route  path='/bestselling' element={<BestSelling/>}/>
        <Route path="/bestselling/:_id" element={<SingleBest />} />
        <Route  path='/bestselling' element={<BestSelling/>}/>

     </Routes>
  )
}
