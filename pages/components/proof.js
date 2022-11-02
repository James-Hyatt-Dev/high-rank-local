import Image from 'next/image';
import React from 'react';
import ABC from '../../public/ABC.png';
import NBC from '../../public/NBC.png';
import FoxNews from '../../public/FoxNews.png';
import USAToday from '../../public/USAToday.png';
import LewGallego from '../../public/LewGallego.jpg';
import MahoganyWalker from '../../public/MahoganyWalker.png';
import S3ID from '../../public/S3IdLogo.png'
import StarIcon from '@mui/icons-material/Star';
import { Link, Tooltip } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function proof() {
  return (
    <div className="proofContainer">
        <div className="proofWrapper">

            <div className="proofBanner">
                <div className="proofBannerHeading">
                    <h1>Featured On:</h1>
                </div>
                <div className="proofBannerItems">
                    <Image src={ABC} alt='As seen on ABC' />
                    <Image src={FoxNews} alt='As seen on Fox News' />
                    <Image src={NBC} alt='As seen on NBC' />
                    <Image src={USAToday} alt='As seen on USAToday' />
                </div>
            </div>
            
            <div className="reviewGroup">
                <div className="reviews">

                    <div className="review">
                        <div className="reviewTop">
                            <div className="reviewTopLeft">
                                <Image className='clientImage' src={S3ID} alt='Score 3 ID corporate Logo' width={85} height={100}/>
                            </div>
                            <div className="reviewTopMiddle">
                                <div className="reviewRating">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <div className="reviewMobile">
                                    <div className="reviewerInfo">
                                        <p className="owner">JT Clip Trust</p>
                                        <p className="italics">manager</p>
                                        <Link href='https://score3id.com' target='none'><p>Score3ID</p></Link><br/>
                                    </div>
                                    <div className="reviewTopRightMobile">
                                        <Tooltip title='Email form submission'>
                                            <ContactMailIcon />
                                        </Tooltip>
                                        <p>Custom Code</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviewTopRight">
                                <Tooltip title='Email form submission'>
                                    <ContactMailIcon />
                                </Tooltip>
                                <p>Custom Code</p>
                            </div>
                        </div>
                        <div className="reviewContent">
                            <p>From the very beginning, James was energetic and enthusiastic. This made this build a bit less stressful! It is clear the team he has in place is on point and knows exactly what they are doing. From ZERO subscribers to thousands within a few short months, simply amazing. So very glad we choose you over the others!</p>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewTop">
                            <div className="reviewTopLeft">
                            <Image className='clientImage' src={MahoganyWalker} alt='Client Mahogany Walker five star review image' width={100} height={100}/>
                            </div>
                            <div className="reviewTopMiddle">
                                <div className="reviewRating">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <div className="reviewMobile">
                                    <div className="reviewerInfo">
                                        <p className="owner">Mahogany Walker</p>
                                        <p className="italics">co-founder</p>
                                        <Link href='https://karavancribs.com' target='none'><p>Karavan Cribs</p></Link><br/>
                                    </div>
                                    <div className="reviewTopRightMobile">
                                        <Tooltip title='Email form submission'>
                                            <ContactMailIcon />
                                        </Tooltip>
                                        <p>Custom Code</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviewTopRight">
                                <Tooltip title='Email form submission'>
                                    <ContactMailIcon />
                                </Tooltip>
                                <p>Wordpress</p>
                            </div>
                        </div>
                        <div className="reviewContent">
                            <p>James provided us with a complete "business-in-a-box", allowing us to automate reservations, inventory, payments and customer communications saving us hundreds of hours in payroll. James and his company provided so much more than a website, they provided us with time and an easier path to scale! Thank you James!</p>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewTop">
                            <div className="reviewTopLeft">
                            <Image className='clientImage' src={LewGallego} alt='Client Lew Gallego five star review image' width={100} height={100}/>
                            </div>
                            <div className="reviewTopMiddle">
                                <div className="reviewRating">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <div className="reviewMobile">
                                    <div className="reviewerInfo">
                                        <p className="owner">Lew Gallego</p>
                                        <p className="italics">owner</p>
                                        <Link href='https://pinnaclemedconsultants.com' target='none'><p>Pinnacle Medical Consultants</p></Link><br/>
                                    </div>
                                    <div className="reviewTopRightMobile">
                                        <Tooltip title='Email form submission'>
                                            <ContactMailIcon />
                                        </Tooltip>
                                        <p>Custom Code</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviewTopRight">
                                <Tooltip title='Email form submission'>
                                    <ContactMailIcon />
                                </Tooltip>
                                <p>WooCommerce</p>
                            </div>
                        </div>
                        <div className="reviewContent">
                            <p>James and his company did an amazing job! I am an extremely picky individual, and for him to have the patience to take all my calls and get done what I thought I wanted, and then to show me things even better than I imagined... simply fantastic to see the increase in our companies revenue!</p>
                        </div>
                    </div>







                </div>
            </div>


        </div>
    </div>
  )
}

export default proof