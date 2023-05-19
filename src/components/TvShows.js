import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css'

function TvShows({url,title,isLargeRow}) {
    const[movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"
 
      const getMoviesRequest = async()=>{
       const ans = await fetch(url);
       const data = await ans.json();
       setMovies(data.results);
        console.log(data);
      }
 
     useEffect(()=>{
         getMoviesRequest();     
     
     },[url])
 
   return (
    <main className='movie_lists'>
    <h2>{title}</h2>
     <div className='row_posters'>
     {movies.map((tv,index)=> (tv.backdrop_path &&  (
               
               
                <div className='search'>
                 <Link to={`/tvshow/${tv.id}`}><img  className='row_poster' src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path ? tv.backdrop_path: tv.poster_path}`} alt={tv.original_title} />
                 </Link>
                </div>
                 
              
             
              
          ))
          
          
     )}
     </div>
 </main>
   )
}

export default TvShows