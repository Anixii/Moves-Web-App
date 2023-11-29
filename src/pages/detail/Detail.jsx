import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdb";
import config from "../../api/apiConfig";
import "./Detail.css";
import CastList from "./CastList";
import VideoList from "./Viedo";
import Movie from "../../components/movie/MovieList";
const Detail = () => {
  const { category, id } = useParams();

  const [item, setItems] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItems(response.data);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);
  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${config.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${config.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title__details">
                {item.title || item.name || item.original_title}
              </h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <h2>Overview</h2>
              <p className="overview__details">{item.overview}</p>
              <div className="cast">
                <div className="section__header__details">
                  <h2 className="details__title">Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 className="details__title">Similar</h2>
              </div>
              <Movie category={category} type="similar" id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 className="details__title">Recomendation</h2>
              </div>
              <Movie category={category} type="recomendation" id={item.id} />
            </div>
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
