import React from 'react';
import './marquee.css';

function Marquee() {    
  return (
    <div className='marquee'>
      <marquee onMouseEnter ={(e)=>{e.target.stop()}} onMouseLeave = {(e)=>{e.target.start()}}>This is a scrolling text</marquee>
    </div>
  )
}

export default Marquee
