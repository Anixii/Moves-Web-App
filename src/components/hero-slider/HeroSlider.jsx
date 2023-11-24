import React, { useEffect, useRef, useState } from "react";
import tmdbApi, { category, movieType } from "../../api/tmdb";
import "./HeroSlider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import config from "../../api/apiConfig"; 
import 'swiper/css';  
import { useNavigate} from 'react-router-dom'
import Button,{OutlinedButton} from '../button/Button'
import Modal, { ModalContent } from "../modal/Modal";
const HeroSlider = () => {
  const [movieItems, setMovie] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovie(res.data.results.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper 
      className="swiepr__hero"
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1} 
        autoplay={{delay:10}}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem item={item} className={`${isActive && 'active'}`}/>
            )}
          </SwiperSlide>
        ))} 
        {movieItems.map((item,index) =>( 
          <TrailerModal key={index} item={item}/>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) =>{ 
  const nav = useNavigate()
  const item = props.item 
  const background = config.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
  const setModal = async() =>{   
    const modal = document.querySelector(`#modal_${item.id}`)
    const video = await tmdbApi.getVideos(category.movie, item.id)
    console.log(video);
    if(video.data.results.length > 0){ 
      const videoSrc = 'https://www.youtube.com/embed/' + video.data.results[1].key
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc)
    }else{ 
      modal.querySelector('.modal__content').innerHTML = 'No trailer'
    }
    modal.classList.toggle('active')
  }
  return( 
    <div className={`hero-slide__item ${props.className}`} style={{backgroundImage: `url(${background})`}}> 
      <div className={'hero-slide__item__content hero__container'}>
        <div className="hero-slide__item__content__info"> 
          <div className="title">{item.title}</div> 
          <div className="overview">{item.overview}</div>
          <div className="btns">
              <Button onClick={() => nav('/movie/' + item.id)}> 
                Watch now
              </Button> 
              <OutlinedButton onClick={setModal}> 
                Watch trailer
              </OutlinedButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster"> 
          <img src={config.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  )
}
const TrailerModal = ({item}) =>{ 
  const iframeRef = useRef(null) 
  const onClose = () => iframeRef.current.setAttribute('src','')
  return( 
    <Modal active={false} id={`modal_${item.id}`}> 
      <ModalContent onClose={onClose}> 
        <iframe ref={iframeRef} width={'100%'} height={'500px'} title="trailer"></iframe>
      </ModalContent>
    </Modal>
  )
}
export default HeroSlider;

