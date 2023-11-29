import React, { useEffect, useState } from 'react'
import './Movie.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import tmdbApi, { category } from '../../api/tmdb'
import MovieCard from '../movie-card/MovieCard'
const MovieList = (props) => { 
    const [items, setItems] = useState([])
    useEffect(() =>{
        const getList = async() =>{ 
            let res = null  
            const params = {} 
            console.log(res);
            if(props.type !== 'similar'){ 
                switch(props.category){ 
                    case category.movie: 
                    res = await tmdbApi.getMoviesList(props.type, {params})
                    break
                    default: 
                    res = await tmdbApi.getTvList(props.type, {params})
                    
                } 
            } else{ 
                res = await tmdbApi.similar(props.category, props.id)
            } 
            
            setItems(res.data.results)
        }
        getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
    <> 
        <div className='movie-list'>
            <Swiper 
            className='swipers'
            grabCursor={true} 
            spaceBetween={10}
            slidesPerView={'auto'}
            > 
                { 
                    items.map((item,index) =>( 
                        <SwiperSlide className='swiper__slide' key={index}> 
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
  )
}

export default MovieList