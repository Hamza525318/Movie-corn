import React, { useRef } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './Header.css';

function Header() {
    
  

    
    const movieSection = useRef(null);
    const gotoMovieSection = () => window.scrollTo({
        top: movieSection.current.offsetTop+380,
        behavior:"smooth",
    });

  return (
    <div className='header'>

        <div className='header_left'>
           <img src='./cinema.jpg' alt='pic not avalaible'/>
        </div>

        <div className='header_right' ref={movieSection}>
           <p>Welcome to  <span>MovieCorn</span> , this website provides complete information about movies,tv shows etc . Scroll down to check some of the trending, topRated , action , comedy etc movies and TvShows . You can search for a particular movie in the search bar at top. Click on the movie image to get complete information about the movie . Keep Exploring!!.</p>
           <button className='godownBtn' onClick={gotoMovieSection}><KeyboardDoubleArrowDownIcon/></button>
        </div>
    </div>
  )
}

export default Header;