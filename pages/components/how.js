import React from 'react';
import MouseIcon from '@mui/icons-material/Mouse';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
function how() {
  return (
    <div className="howContainer">
        <div className="howWrapper">

                <div className="howHeading">
                    <h1>How <span>High Rank Local</span> SEO Works</h1>
                </div>
                <div className="howContentWrapper">

                    <div className="howContent">
                        <div className="howInfo">
                            <div className="howInfoHeading">
                                <h1>More Clicks</h1>
                            </div>
                            <div className="howInfoText">
                                <p>In order to get more clicks, you need a couple of things; <span> visibility</span> and <span> authority</span>. In addition to an authoritative website, you will also need to be well represented on social media and in a variety of online business directories. Awesome <span> Branding</span> will capture needed attention. Our fully managed system for gathering customer reviews will sculpt <span> social proof</span> and authority. This is why you will get (a lot) <span> more clicks</span>.</p>
                            </div>
                        </div>
                        <div className="howImage">
                            <div className="howImage1">
                                <div className="howImageOverlay"><MouseIcon /></div>
                            </div>
                        </div>
                    </div>

                    <div className="howContent" id='reverse'>
                        <div className="howInfo">
                            <div className="howInfoHeading">
                                <h1>More Calls</h1>
                            </div>
                            <div className="howInfoText">
                            <p>Because of your authority and that aforementioned social proof, a bunch of people will want to, and be ready to work with you on the very first click. But, what about those that are not ready? Since we do not want to lose those potential customers, we develop lead magnets that allows us to capture their email addresses so we can nurture those leads after, and well-after, they leave your website. Whether they're ready now or later, we've got you covered. That is why you will get <span> more leads</span>.</p>
                            </div>
                        </div>
                        <div className="howImage">
                            <div className="howImage1">
                                <RingVolumeIcon /> 
                            </div>
                        </div>
                    </div>

                    <div className="howContent">
                    <div className="howInfo">
                            <div className="howInfoHeading">
                        <h1>More Sales</h1>
                        </div>
                        <div className="howInfoText">
                        <p>The ultimate goal is to fill your calendar. So, we streamlined the process of onboarding new clients. Whether it is messaging you directly from your Google Business Profile, responding to an offer in an email, or booking an appointment on your website, we make it super easy and extremely seamless for people to work with you. That is why you get <span>more sales</span>.</p>
                        </div>
                    </div>
                    <div className="howImage">
                        <div className="howImage1">
                            <div className="howImageOverlay"><TrendingUpIcon /></div>
                        </div>
                    </div>
                    </div>



                </div>

            
        </div>
    </div>
  )
}

export default how