import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './SingleMovie.css'
import reqParams from '../Requests';
import Navbar from './Navbar';


function SingleTvShow() {
  
  
    const[tvshow,setTvShow] = useState({});   
    const params = useParams();

      const getMovieInformation = async()=>{
      const fetchData = await fetch(`${reqParams.Singletvshow}/${params.tvshowId}?api_key=d333ff51bddbac02d486e00ec8e10c0e`) ;

      const response = await fetchData.json();
      console.log(response);
      setTvShow(response);
      }
      

      useEffect(()=>{
        getMovieInformation(); 
     },[params.movieid])
   
       
     return (
       <main className='single_movie_main'>
         <Navbar/>
       <div className="single_movie">
         
         <div className='single_movie_left'>
             <img className='poster' src={`https://image.tmdb.org/t/p/original/${tvshow.poster_path}`} alt={tvshow.original_title}  />

         </div>
   
         <div className='single_movie_right'>
           <h5 className='info_title'>Original Title- {tvshow.name}</h5>
           <h5 className='info_title'>Overview: </h5>
           <p>{tvshow.overview}</p>
           <h5 className='info_title'>First-Air-Date- {tvshow.first_air_date}</h5>
           <h5 className='info_title'>Last-Air-Date- {tvshow.last_air_date}</h5>
           <h5 className='info_title'>Rating- {tvshow.vote_average}</h5>
           <h5 className='info_title'>Number of seasons-{tvshow.number_of_seasons}</h5>
           <h5 className='info_title'>Number of episodes-{tvshow.number_of_episodes}</h5>
   
         </div>
    
       </div>
       </main>
     )
}

export default SingleTvShow