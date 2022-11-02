import { Button } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HighRankLocalOutlineLogo from '../../public/HighRankLocalOutlineLogo.png';
import Image from 'next/image';
import Local from '../components/local.js'

function subHero() {
  return (
    <div className="subContainer">
        <div className="subWrapper">
            <span className='largeH1'>Let's<br />Get<br />Local</span>
            <div className="subLeft">
                <div className="subTop">
                    <h1>For 8+ years, High Rank Local has been connecting consumers to businesses.
                        <span><br/> local businesses are different</span>
                    </h1>
                </div>
                <div className="subBottom">
                    <p>High Rank Local SEO is single most effective, fastest and most predicable resource a business has to increase phone calls.</p>
                </div>
                <Button href='/about'>Schedule a High Rank Demo<ArrowForwardIcon /></Button>
            </div>
            <div className="subRight">
                <Image className='rotate' src={HighRankLocalOutlineLogo} width={500} height={500} alt='High Rank Local corporate H R logo'/>
            </div>
        </div>
        {/* imported component */}
        <Local />
    </div>
  )
}

export default subHero