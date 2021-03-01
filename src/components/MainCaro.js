import React from 'react';
import '../App.css';
import './MainCaro.css';
import ReactPlayer from 'react-player';


function Main() {
  return (
    <div className='main-container'>
      
     <br></br>
     <ReactPlayer
    url="https://www.youtube.com/watch?v=b7ODwJBx8js"
    width="100%"
    height="500px"
    playing
    playIcon={<button>Play</button>}
    
  />
  </div>
  );
}

export default Main;