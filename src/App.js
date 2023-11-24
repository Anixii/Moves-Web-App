import Header from "./components/Header";
import Routeses from "./config/Routes";
import Footer from './components/Footer'
import { useEffect } from "react";
import tmdbApi from "./api/tmdb";
function App() { 
  useEffect(() =>{ 
    tmdbApi.getMoviesList('popular').then((response) =>{ 
      console.log(response);
    }) 
  },[])
  return (
    <>  
    <Header/>
     <Routeses/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
