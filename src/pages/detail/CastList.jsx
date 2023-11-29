import { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdb";
import { useParams } from "react-router-dom";
import config from "../../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Detail.css";
import MovieCard from "../../components/movie-card/MovieCard";
import Button from "../../components/button/Button"; 

import '../../components/movie-card/MovieCard.css' 
import '../../components/movie/Movie.css'
const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.data.cast);
      console.log("credits", res);
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
        {casts.map((item, index) => (
          <SwiperSlide className="swiper__slide" key={index}>
            <div
              className="movie-card"
              style={{ backgroundImage: `url(${config.w500Image(item.profile_path)})` }}
            >
            
            </div>
            <h4>{item.title || item.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;
