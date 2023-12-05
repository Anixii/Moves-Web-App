import React, { useState } from 'react'
import {useParams} from 'react-router-dom' 
import {category as cate} from '../api/tmdb'
import PageHeader from '../components/page-header/PageHeader'
import MovieGrid from '../components/movie-grid/MovieGrid' 
import '../App.css'
import Preloader from '../components/Preloader/Preloader'
const Catalog = () => { 
  const {category} = useParams() 
  const [isError, setError] = useState(false) 
  if(isError){ 
    return <Preloader/>
  }
  return (
    <> 
      <PageHeader> 
        {category === cate.movie ? "Movies"  : category === cate.tv ? 'Tv Series' : 'Actors'}
      </PageHeader> 
      <div className='catalog_container'>
        <div className='section'> 
          <MovieGrid setError={setError}  category={category}/>
        </div>
      </div>
    </>
  )
}

export default Catalog