import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Detail from '../pages/detail/Detail'
import Home from '../pages/Home'
import DefinePersom from '../pages/DefinePersom'
const Routeses = () => {
  return (
    <> 
        <Routes> 
            <Route path='/:category/search/:keyword' element={<Catalog/>}/>
            <Route path='/:category/:id' element={<Detail/>}/>
            <Route path='/:category' element={<Catalog/>}/>
            <Route path='/person/:id' element={<DefinePersom/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </>
    
  )
}

export default Routeses