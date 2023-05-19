import React, { useEffect, useState } from 'react';
import './SearchedMovies.css';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';

function SearchedMovies() {

    const[movies,setMovies] = useState([]);
    const[tvShows,setTvShows] = useState([]);
   let params = useParams();

   //get movies 
   const getMovies = async()=>{
      
       const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d333ff51bddbac02d486e00ec8e10c0e&query=${params.title}`);
        const data = await result.json();
       setMovies(data.results);
       console.log(data.results);
   }

   //get Tvshows
   const getTvShows = async()=>{
      
    const result = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=d333ff51bddbac02d486e00ec8e10c0e&query=${params.title}`);


    const data = await result.json();
    setTvShows(data.results);
    
}
   useEffect(()=>{
       getMovies();
       getTvShows();
   },[params.title])
   

  return (
    <div className='searched_movies'>
        <Navbar/>
        <h2 className='search_movie_title'>Movie results for {params.title}</h2>
        <div className='search_posters'>
        {movies && movies.map((movie)=>(movie.poster_path && (
            (  
                <div>
              <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title}/></Link>

               </div>
             )
        )) 
        
        )}:{ !movies.length &&
            <span>
                <p className='no_result_message'>OOPS!! No results found...</p>
            </span>
              
        }
        </div>
        <h2 className='search_tvshow_title'>TvShows results for {params.title}</h2>
        <div className='search_posters'>
          {
            tvShows && tvShows.map((tvShow)=>(tvShow.poster_path &&(
                (
                    <div>
                    <Link to={`/tvshow/${tvShow.id}`}><img src={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`} alt={tvShow.original_title}/></Link>
                    </div>
                 )
            )))
          }:{  
                !tvShows.length &&
               <span>
                <p className='no_result_message'>OOPS!! No results found...</p>
               </span>
              
          }
        </div>

    </div>
  )
}

export default SearchedMovies