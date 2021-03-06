import React from 'react';
import './HomeImage.css';
import { Link } from 'react-router-dom'

function HomeImage(props) {
  return (
    <div>
      <div>
        <div className="hero-container">
          <div className="image-text">Join an eco-friendly community.</div>
          <div className="image-text">Reach your goals of sustainability.</div>
          <div className="image-text">GreenHouse will give you the tools and information you need.</div>
          <Link to='/signup' style={{textDecoration: 'none', color: "#ffffff"}}>
            <div className="join-button" disabled>Join our Community</div>
          </Link>
        </div>
        <div className="def-container">
          <div className="title-gren-hous">
            <div className="greenhouse-bold">GreenHouse</div>
            <div>/ˈɡrēnˌhous/</div> 
          </div>
            <div className="definition">
            De-mystifying green tech in the home for the eco-curious 
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default HomeImage;