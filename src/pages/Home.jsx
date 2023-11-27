import React from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import { Link } from "react-router-dom";
import { OutlinedButton } from "../components/button/Button";
import "../App.css";
import MovieList from "../components/movie/MovieList";
import { category, movieType, tvType } from "../api/tmdb";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="home__container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <div className="section__header__container">
              <h2 className="section__title">Trending Movies</h2>
              <Link to={"/movie"}>
                <OutlinedButton className="small">View more</OutlinedButton>
              </Link>
            </div>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <div className="section__header__container">
              <h2 className="section__title">Top Rated Movies</h2>
              <Link to={"/movie"}>
                <OutlinedButton className="small">View more</OutlinedButton>
              </Link>
            </div>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <div className="section__header__container">
              <h2 className="section__title">Upcoming Movies</h2>
              <Link to={"/movie"}>
                <OutlinedButton className="small">View more</OutlinedButton>
              </Link>
            </div>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <div className="section__header__container">
              <h2 className="section__title">Trending TV</h2>
              <Link to={"/movie"}>
                <OutlinedButton className="small">View more</OutlinedButton>
              </Link>
            </div>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <div className="section__header__container">
              <h2 className="section__title">Top Rated TV</h2>
              <Link to={"/movie"}>
                <OutlinedButton className="small">View more</OutlinedButton>
              </Link>
            </div>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
        
      </div>
    </>
  );
};

export default Home;
