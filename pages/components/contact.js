import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import { Button } from '@mui/material';

function contact() {
    const mailchimpURL = process.env.PRIVATE_URL

  return (
    <div className="contactContainer">
        <div className="contactWrapper">
            <div className="hiddenBanner">
                <div className="bannerContent">
                    <Link href='tel:14079929992' target='self'><LocalPhoneIcon /></Link>
                    <Link href='mailto:james@jameshyattdev.com' target='self'><EmailIcon /></Link>
                </div>
            </div>
            <div className="contactForm">
                <div className="contactBanner">
                    <div className="bannerContent">
                        <Link href='tel:14079929992' target='self'><LocalPhoneIcon /></Link>
                        <Link href='mailto:james@jameshyattdev.com' target='self'><EmailIcon /></Link>
                    </div>
                </div>
                <form             
                    action={mailchimpURL}
                    acceptCharset="utf-8" 
                    method="post" 
                    id='mc-embedded-subscribe-form' 
                    name='mc-embedded-subscribe-form' 
                    target='self'
                >
                    <input 
                        type="text" 
                        name='FNAME'
                        id='mce-FNAME' 
                        placeholder='your first name'  
                        autoCapitalize='on' 
                        required 
                    />
                    <input 
                        type="text" 
                        name='LNAME' 
                        id='mce-LNAME'
                        placeholder='your last name'  
                        autoCapitalize='on' 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder='your best email' 
                        name='EMAIL'
                        id='mce-EMAIL'
                        required 
                    />
                    <div className="mc-field-group size1of2 phoneNumber">
                        <strong>Best phone number</strong>
                        <div className="phonefield phonefield-us">
                            <span>
                                (<span className="phonearea">
                                <input 
                                    placeholder='###'
                                    className='phonepart'
                                    pattern='[0-9]*'
                                    id='mce-PHONE-area'
                                    name='PHONE[area]'
                                    maxLength='3'
                                    size={3}
                                    type="text" 
                                />
                                </span>)
                            </span>

                            <span className="phonedetail1">
                                <input 
                                placeholder='###'
                                className='phonepart'
                                pattern='[0-9]*'
                                id='mce-PHONE-detail1'
                                name='PHONE[detail1]'
                                maxLength='3'
                                size='3'
                                type="text" 
                                />
                            </span>

                            <span className="phonedetail2">
                                <input 
                                placeholder='####'
                                className='phonedetail2'
                                pattern='[0-9]*'
                                id='mce-PHONE-detail2'
                                name='PHONE[detail2]'
                                maxLength='4'
                                size='4'
                                type="text" 
                                />
                            </span>
                        </div>
                    </div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" ></div>
                        <div className="response" id="mce-success-response"></div>
                            
                        <div className="inputGroup">
                            <div className="input">
                                <div className="inputOptions mc-field-group input-group">
                                    <strong className='strong'>Best Time to Contact</strong>
                                    <ul className='li'>
                                        <li>
                                            <input 
                                                type="radio" 
                                                value='Morning'
                                                name='BESTTIME'
                                                id='mce-BESTTIME-0'
                                            />
                                            <label htmlFor="mce-BESTTIME-0">
                                                Mornings
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                type="radio" 
                                                value='Noon'
                                                name='BESTTIME'
                                                id='mce-BESTTIME-1'
                                            />
                                            <label htmlFor="mce-BESTTIME-1">
                                                Noon
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                type="radio" 
                                                value='Afternoon'
                                                name='BESTTIME'
                                                id='mce-BESTTIME-2'
                                            />
                                            <label htmlFor="mce-BESTTIME-2">
                                                Afternoons
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="inputOptions mc-field-group input-group bestWay">
                                    <strong>Best Way to Contact</strong>
                                    <ul className='li'>
                                        <li>
                                            <input 
                                                type="radio" 
                                                value='Email'
                                                name='BESTWAY'
                                                id='mce-BESTWAY-0'
                                            />
                                            <label htmlFor="mce-BESTWAY-0">
                                                Email
                                            </label>
                                        </li>
                                        <li>
                                            <input 
                                                type="radio" 
                                                value='Phone'
                                                name='BESTWAY'
                                                id='mce-BESTWAY-1'
                                            />
                                            <label htmlFor="mce-BESTWAY-1">
                                                Phone
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div hidden={true}>
                        <input type="hidden" name="tags" value="12743644" />
                        <div id="mce-responses" name="clear foot">
                            <div className="response" id="mce-error-response"></div>
                            <div className="response" id="mce-success-response"></div>
                        </div> 
                    </div>
                    <Button 
                        className='button' 
                        type="submit" 
                        value="Get Our Attention"
                        name='subscribe'
                        id='mc-embedded-subscribe'
                    >
                        Get Out Attention
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default contact