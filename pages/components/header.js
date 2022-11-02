import React from 'react';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import HighRankLocalLogo from '../../public/HighRankLocalLogo.png';
import Image from 'next/image';

function Header() {
  return (
    <div className="headerContainer">
        <div className="headerLeft" href='/'>
            <Image src={HighRankLocalLogo} alt='High Rank Local Logo' width={80} height={80} />  
            <h1>High Rank <span>Local</span></h1>      
        </div>
        <div className="headerRight">
            <Button>Get In Touch</Button>
        </div>
    </div>
  )
}

export default Header