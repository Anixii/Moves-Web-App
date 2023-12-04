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
            if(props.type !== 'similar' && props.type !== 'recomendation' && props.category !== 'person'){ 
                switch(props.category){ 
                    case category.movie: 
                    res = await tmdbApi.getMoviesList(props.type, {params})
                    break
                    default: 
                    res = await tmdbApi.getTvList(props.type, {params})
                    
                } 
            } else if(props.type === 'similar'){  
                res = await tmdbApi.similar(props.category, props.id)
            } 
            else if(props.type === 'recomendation') { 
                res = await tmdbApi.recomendation(props.category, props.id)
            } else { 
                if(props.type === 'popular'){ 
                    res = await tmdbApi.person(props.type)
                }else { 
                    res = await tmdbApi.personCombinedCredits(props.id)
                }
            }
        
            if(props.type === 'personCredits'){ 
                setItems(res.data.cast)
            } else { 
                setItems(res.data.results)
            } 
            console.log(items);
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
                            <MovieCard isActor={props.isActor} item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
  )
}

export default MovieList