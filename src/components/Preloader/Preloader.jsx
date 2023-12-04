import React from 'react'
import '../../App.css' 
import { Spinner } from '@chakra-ui/react'
const Preloader = () => {
  return (
    <div className='spinner__container'><Spinner className='spin'/></div>
  )
}

export default Preloader