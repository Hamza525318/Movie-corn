import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import reqParams from '../Requests';
import Navbar from './Navbar';
import './SingleMovie.css';

function SingleMovie() {
   
  
  const params = useParams();
  const[movie,setMovie] = useState({});  
   

      const getMovieInformation = async()=>{
      const fetchData = await fetch(`${reqParams.SingleMovie}/${params.movieid}?api_key=d333ff51bddbac02d486e00ec8e10c0e`) ;

      const response = await fetchData.json();
      console.log(response);
      setMovie(response);
      }
 
   
  
   
  useEffect(()=>{
     getMovieInformation(); 
  
  },[params.movieid])

  useEffect(()=>{
      
    JSON.parse(localStorage.getItem("FAV MOVIES"));
  },[]);

  

    
  return (
    <main className='single_movie_main'>
      <Navbar/>
    <div className="single_movie">
      
      <div className='single_movie_left'>
          <img className='poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title}  />
      </div>

      <div className='single_movie_right'>
        <h5 className='info_title'>Original Title- {movie.original_title}</h5>
        <h5 className='info_title'>Tagline- {movie.tagline}</h5>
        <h5 className='info_title'>IMDB id- {movie.imdb_id}</h5>
        <h5 className='info_title'>Overview: </h5>
        <p>{movie.overview}</p>
        <h5 className='info_title'>Realese Date- {movie.release_date}</h5>
        <h5 className='info_title'>Rating- {movie.vote_average}</h5>
        <h5 className='info_title'>Runtime- {movie.runtime}minutes</h5>

      </div>
 
    </div>
    </main>
  )
}

export default SingleMovie