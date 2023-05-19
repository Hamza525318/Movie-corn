import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList({url,title,isLargeRow}) {
    
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
        {movies.map((movie,index)=> (movie.backdrop_path &&  (
                  
                    
                   <div className='search'>
                    <Link to={`/movie/${movie.id}`}><img  className='row_poster' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path: movie.poster_path}`} alt={movie.original_title} />
                    </Link>
                   </div>
                    
                 
                
                 
             ))
             
             
        )}
        </div>
    </main>
  )
}

export default MovieList;
