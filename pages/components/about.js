import Image from 'next/image';
import React from 'react';
import JamesPhoto from '../../public/JamesPhotoBW.png'

function about() {
  return (
    <div className="aboutContainer">
        <div className="aboutWrapper">
            <div className="aboutInner">
                <div className="aboutLeft">
                    <Image src={JamesPhoto} alt='James Hyatt, Owner of High Rank Local, image' width={400} />
                </div>
                <div className="aboutRight">
                    <h1>About High Rank Local <span>SEO</span></h1>
                    <p>My name is James Hyatt, and I developed our High Rank Local SEO process specifically to help local businesses <span>land more clients.</span> </p>
                    <p>I have spent the past 8 years, through trial and error, perfecting our proprietary three-step system that perfectly matches the unique needs of local business. If what you want is to increase your visibility, trust and differentiate your business from the competition, even if they are locally well established, this is for you.</p>
                    <p>As a entrepreneur of 30+ years, I fully understand the importance of getting fast results. I also know that you don't have the time to concern yourself with figuring out how to say what on your website, what to share on social media, and how to leverage, in detail, all the latest marketing trends for an online presence.</p>
                    <p>So... <span>we take care of all that, and more, for you.</span><br />You do your thing; we'll bring you the clients.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about