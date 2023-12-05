import React, { useEffect, useState } from "react";
import tmdbApi from "../api/tmdb";
import { useParams } from "react-router-dom";
import Info from "../components/definePerson/Info";
import "../components/definePerson/DefinePerson.css";
import Preloader from "../components/Preloader/Preloader";
const DefinePersom = () => {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const [isFetch, setFetch] = useState(true); 
  const [isError, setError] = useState(false)
  useEffect(() => {
    try {
      const getPerson = async (id) => {
        const data = await tmdbApi.person(id);
        setPerson(data.data);
      };
      getPerson(id);
      setFetch(false);
    } catch (error) {
      setError(true)
    }
  }, [id]);
  if (isFetch || isError) {
    return <Preloader />;
  }
  return (
    <div className="person__main container">
      <Info setError={setError} item={person} id={id} />
    </div>
  );
};

export default DefinePersom;
