import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className="container" id="about">
        <h3 className='about-heading'>About us</h3>
        <div className="sub-container">
          <div className="left-sider"></div>
          <div className="main-section">
              <h2 className='main-heading'>
                  At Tropiteq, we are a PR, Marketing and Tech Firm, that provides client 
                  impeccable solutions through decades of excellence and experience.
              </h2>
              <p>
                  The impact of proper thought through marketing and top-notch PR strategies to 
                  solve real-world problems to improve businesses. We are dedicated to developing 
                  innovative, user-friendly products and services that meet the needs and exceed 
                  the expectations of our clients.
              </p>
              <p>
                  We are committed to delivering high-quality, customized PR and Tech services 
                  that align with our clients' values and goals, and to staying at the 
                  forefront of industry trends and best practices.
              </p>
              <p>
                  Through our work, we aim to build trust and credibility for our clients in 
                  their industries of operation and beyond.
              </p>
              <p>
                  Our team of talented and passionate Tech, Marketing, Public Relations 
                  professionals and strategists are committed to continuous learning, 
                  growth and to working collaboratively to create a positive, inclusive 
                  culture, setting high standards for excellence and integrity in everything
                  we do.
              </p>
          </div>
          <div className="right-sider"></div>
        </div>
      </div>
    </>
  )
}

export default About
