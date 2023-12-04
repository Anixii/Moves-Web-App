import React, { useCallback } from "react";
import "./MovieGrid.css";
import tmdbApi, { movieType, tvType } from "../../api/tmdb";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { category } from "../../api/tmdb";
import MovieCard from "../movie-card/MovieCard";
import Button, { OutlinedButton } from "../button/Button";
import Input from "../input/Input"; 
const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { keyword } = useParams(); 

  useEffect(() => {

    const getList = async () => { 
      let res = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            res = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            break;
          case category.person:
            res = await tmdbApi.person("popular", { params });
            break;
          default:
            res = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        res = await tmdbApi.search(props.category, { params });
      }
      setItems(res.data.results);
      setTotal(res.data.total_pages); 
    };
    getList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, props.category]);
  const loadMore = async () => {
    let res = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          res = await tmdbApi.getMoviesList(movieType.upcoming, { params });
          break;
        case category.person:
          res = await tmdbApi.person("popular", { params });
          break;
        default:
          res = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        query: keyword,
        page: page + 1,
      };
      res = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...res.data.results]);
    setPage(page + 1); 
  }; 
  return (
    <>
      <div>
        <MovieSearch keyword={keyword} category={props.category} />
      </div>
      <div className="movie-grid">
        {items.map((item, index) => (
          <MovieCard isActor={props.category === 'person'} item={item} key={index} category={props.category} />
        ))}
      </div>
      {page < total ? (
        <div className="movie-grid__loadmore">
          <OutlinedButton className="small" onClick={loadMore}>
            Load More
          </OutlinedButton>
        </div>
      ) : null}
    </>
  );
};
const MovieSearch = (props) => {
  const nav = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      nav(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, nav]);
  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [goToSearch, keyword]);
  return (
    <div className="movie-search">
      <Input
        type={"text"}
        placeholder={"Enter keyword"}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></Input>
      <Button className={"small"} onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};
export default MovieGrid;
