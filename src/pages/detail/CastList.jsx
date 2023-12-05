import { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdb";
import { Link, useParams } from "react-router-dom";
import config from "../../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Detail.css";
import ava from '../../assets/img/avatar.png'
import '../../components/movie-card/MovieCard.css' 
import '../../components/movie/Movie.css'
const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.data.cast);
    };
    getCredits();
  }, [category, props.id]);  
  return (
    <div className="movie-list">
      <Swiper
        className="swipers"
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {casts.map((item, index) =>{  
          const bg = item.profile_path !== null ? config.w500Image(item.profile_path) : ava 
          const link = item.id
          return(
          <SwiperSlide className="swiper__slide" key={index}> 
          <Link className="person__link" to={'/person/' + link}> 
            <div
              className="movie-card"
              style={{ backgroundImage: `url(${bg})` }}
              >
            
            </div>
            <h4>{item.title || item.name}</h4>
              </Link>
          </SwiperSlide>
        )})}
      </Swiper>
    </div>
  );
};

export default CastList;
