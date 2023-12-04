import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/img/play-regular-24.png";
import Button from "../../components/button/Button";
import config from "../../api/apiConfig";
import noPoster from "../../assets/img/no-poster.png";
const TVSeasons = (props) => { 
  return (
    <div className="season"> 
      {props.item?.seasons.map((item, index) => {
        const bg = item.poster_path
          ? config.w500Image(item.poster_path)
          : noPoster;
        
        return (
          <Link className="movie__link" key={index}>
            <div
              className="movie-card"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <Button>
                <img src={icon} alt={item.title} />
              </Button>
            </div>
            <h3>{item.title || item.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default TVSeasons;
