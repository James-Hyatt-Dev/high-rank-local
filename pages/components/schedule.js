import React from 'react';
import Head from 'next/head';
import Script from 'next/script'

function schedule() {
  return (
    <div className="scheduleContainer">

        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async/>

      <main className="scheduleWrapper">
        <div className="scheduleHeading">
          <h2>Discovery Call</h2>
          <p>30 minutes</p>
          <p>We would like the opportunity to learn more about you and your business. Let's jump on an initial 30-minute call so we can discuss your project and identify how we can help your business.</p>
        </div>

        <div className="calendly-inline-widget" data-url="https://calendly.com/jameshyattdev/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0b0d10&text_color=f5f5f5&primary_color=45a1de" >
        </div>
      </main>
      
    </div>
  )
}

export default schedule

