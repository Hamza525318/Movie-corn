import React, { useState,useRef,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    
  const[searchMovie,setSearchMovie] = useState("");
  let navigate = useNavigate();
  const{googleSignIn,googleLogOut,user} = UserAuth();
  

  const handleGoogleLogOut =  async()=>{
    try {
      await googleLogOut();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(user === null){
        navigate('/login');
    }
  },[user,])


  return (
    <div className='nav_box'>

      <h1>MovieCorn</h1>

       <div className='nav_right'>

       <div className='nav_searchbox'>

      <input type="text" value={searchMovie} className='movie_input' onChange={(e)=> setSearchMovie(e.target.value)} placeholder="search here..."  />
      <Link to={`/search/${searchMovie}`}><SearchIcon className='movie_searchicon'/></Link>


       </div>

        
        {
           user &&  <Avatar src={user.photoURL}  sx={{ width: 35, height: 35 }}/>
        }
        {
             !user && <Avatar sx={{width:35,height:35}} />
        }
        
        <LogoutIcon style={{'color':'white'}} onClick={handleGoogleLogOut}/>

       
      </div>

      </div>
  )
}

export default Navbar