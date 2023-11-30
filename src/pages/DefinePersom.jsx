import React, { useEffect } from 'react'
import tmdbApi from '../api/tmdb'

const DefinePersom = () => { 
  useEffect(() =>{ 
    const getPerson = async(id) =>{ 
      const data = await tmdbApi.person(id)
      console.log(data);
    }
    getPerson(1564)
  },[])
  return (
    <div>DefinePersom</div>
  )
}

export default DefinePersom