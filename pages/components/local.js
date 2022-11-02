import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import LocalMap from '../../public/LocalMap.png'

function local() {
  return (
    <div className="localContainer">
      <div className="localWrapper">
        <div className="localHeading">
          <h1>Get the results you want with our <br /><span> High Rank Local</span> SEO solution.</h1>
        </div>
        <div className="localMapImage">
          <div className="localMapImageOverlay"></div>
        </div>
        <div className="moreGroup">


          <div className="moreItem">
            <div className="moreHeading">
              <h2>Drive Website Sales</h2>
            </div>
            <div className="moreText">
              <p>Specializing in getting you in front of people searching Google for businesses like yours. "<span>[product/service]</span> near me", it is these "near me" searches that connect you with people who are ready to buy now.</p>
            </div>
            <div className="moreButton">
              <Button>Learn More</Button>
            </div>
          </div>

          <div className="moreItem">
            <div className="moreHeading">
              <h2>Drive Website Sales</h2>
            </div>
            <div className="moreText">
              <p>We are overly passionate about our High Rank Local SEO program. So much so that we guarantee results, or we continue to work your High Rank Local SEO program for free until you get top 3 results!</p>
            </div>
            <div className="moreButton">
              <Button>Learn More</Button>
            </div>
          </div>

          <div className="moreItem">
            <div className="moreHeading">
              <h2>Drive Website Sales</h2>
            </div>
            <div className="moreText">
              <p>Our High Rank Local SEO marketing system generates more calls and more sales which means your business is growing.</p>
              {/* <div className="moreTextList">
                <p>More Clicks</p>
                <p>More Calls</p>
                <p>More Sales</p>
              </div> */}
            </div>
            <div className="moreButton">
              <Button>Learn More</Button>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default local