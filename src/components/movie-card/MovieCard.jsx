import React from 'react'
import './MovieCard.css' 
import incon from '../../assets/img/play-regular-24.png' 
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { category } from '../../api/tmdb'
import config from '../../api/apiConfig' 
import noPoseter from '../../assets/img/no-poster.png' 
import ava from '../../assets/img/avatar.png'
const MovieCard = ({item,isActor,...props}) => {  
    const link = '/' + category[props.category] + '/' + item.id
    const bg =  item.poster_path ? config.w500Image(item.poster_path) : noPoseter
    const bag = item.profile_path ? config.w500Image(item.profile_path ) : ava
    // config.w500Image(item.poster_path ? item.poster_path : noPoseter ) 
    console.log(item);
    return (
    <> 
    <Link className='movie__link' to={link}> 
        <div className='movie-card' style={{backgroundImage: `url(${isActor ? bag : bg})`}}>  
            <Button> 
            <img src={incon} alt={item.title}/>
            </Button>
        </div>
        <h3>{item.title || item.name}</h3>
    </Link>
    </>
    )
}

export default MovieCard