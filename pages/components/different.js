import { Button } from '@mui/material'
import React from 'react'

function different() {
  return (
    <div className="diffContainer">
        <div className="diffWrapper">
            <div className="diffHeading">
                <h1>Local Business Is Different...</h1>
                <p>There are two things that are fundamentally different about online for a local business.</p>
            </div>
            <div className="diffContent">
                <div className="diffLeft">
                    <div className="diffText">
                        <h1>The Good Thing...</h1>
                        <p>The good is that it is <span>much easier to build trust</span> and to gain authority because you are personally intertwined with the community you're serving. There is also less competition, making marketing easier and less expensive than marketing on a national level. </p>
                    </div>
                    <div className="diffText">
                        <h1>The bad Thing...</h1>
                        <p>The bad is that your <span>audience is much smaller</span> and harder to reach. National brands can put al their focus into a single platform, such as FaceBook, and get so many leads they can't handle them all. As a local business owner, not everyone in your local community is active on FaceBook, making it essential to tap into multiple lead sources simultaneously. </p>
                    </div>
                </div>
                <div className="diffForm">
                    <h1>Local Business <span>5</span> Minute Marketing</h1>
                    <p>Over the past couple of years, the cards have been re-shuffled. Here is <span> what's working now,</span> so you land right on top.</p>
                    <p>I'm giving you 5 new lead generation strategies in <span> less than 5-minutes</span> each.</p>
                    <form action="">
                        <input type="email" placeholder='Email' />
                        <Button>Show Me How To Get More Leads</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default different