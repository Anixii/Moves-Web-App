import React from 'react'
import {useParams} from 'react-router-dom' 
import Header from '../components/Header' 
import {category as cate} from '../api/tmdb'
import PageHeader from '../components/page-header/PageHeader'
import MovieGrid from '../components/movie-grid/MovieGrid' 
import '../App.css'
const Catalog = () => { 
  const {category} = useParams()
  console.log(category);
  return (
    <> 
      <PageHeader> 
        {category === cate.movie ? "Movies" : 'Tv Series'}
      </PageHeader> 
      <div className='catalog_container'>
        <div className='section'> 
          <MovieGrid category={category}/>
        </div>
      </div>
    </>
  )
}

export default Catalog