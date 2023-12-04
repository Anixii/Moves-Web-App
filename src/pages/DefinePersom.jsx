import React, { useEffect,useState } from 'react'
import tmdbApi from '../api/tmdb'
import { useParams } from 'react-router-dom'
import Info from '../components/definePerson/Info'
import '../components/definePerson/DefinePerson.css'
const DefinePersom = () => {  
  const [person, setPerson] = useState(null)  
  const {id} = useParams() 
  const [isFetch, setFetch] = useState(true)
  useEffect(() =>{  
    setFetch(true)
    const getPerson = async(id) =>{ 
      const data = await tmdbApi.person(id)
      console.log('person',data);
      setPerson(data.data) 
      setFetch(false)
    }
    getPerson(id)  
  },[id])
  if(isFetch){ 
    return <h1>Loading</h1>
  }
  return (
    <div className='person__main container'> 
      <Info item={person}/>
    </div>
  )
}

export default DefinePersom