import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function hero() {
  return (
    <div className="heroContainer">
      <div className="heroWrapper">
        <div className="heroContent">
          <div className="heroHeading">
            <h1>Providing <span>Lead Generation</span> </h1>
            <h1>For<span>  Local Businesses</span> </h1>
            <h1>Increasing <span>Revenues</span></h1>
          </div>
          <div className="heroText">
            <p>High Rank Local is a local business SEO agency, located in Cape Coral Florida.<span><br/>We build the bridge from click to client.</span> </p>
          </div>
          <div className="locationIcon">
            <LocationOnIcon />
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default hero