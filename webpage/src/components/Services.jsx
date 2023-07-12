import React from 'react'
import './services.css'
import advert from '../img/service-img/advert.png'
import marketing from '../img/service-img/marketing.png'
import tech from '../img/service-img/tech.png'


const Services = () => {
  return (
    <>
      <div className="services">
        <h2 className='services-heading' id='services'>We provide the following Services</h2>
        <div className="services-container">
            <div className="services-card">
                <div className="services-card_img">
                    <img src={marketing} alt="Marketing" />
                </div>
                <h4>Marketing & PR</h4>
                <ul>
                    <li>Blogging</li>
                    <li>Branding</li>
                    <li>Media Buying</li>
                    <li>Public Relations</li>
                    <li>Media Planning</li>
                    <li>Corporate Stories</li>
                    <li>Event Organization</li>
                    <li>Search engine optimization (SEO)</li>
                    <li>Social Media Account Management</li>
                </ul>
            </div>
            <div className="services-card">
                <div className="services-card_img">
                    <img src={tech} alt="Marketing" />
                </div>
                <h4>Tech Services</h4>
                <ul>
                    <li>Blogging</li>
                    <li>Prototyping</li>
                    <li>Wireframing</li>
                    <li>IT consulting</li>
                    <li>User interface (UI) design</li>
                    <li>E-commerce development</li>
                    <li>User experience (UX) design</li>
                    <li>Tech support and maintenance</li>
                    <li>Custom software development</li>
                    <li>Website design and development</li>
                    <li>Mobile app design and development</li>
                    <li>Content management systems (CMS)</li>
                </ul>
            </div>
            <div className="services-card">
                <div className="services-card_img">
                    <img src={advert} alt="Marketing" />
                </div>
                <h4>Advertising</h4>
                <ul>
                    <li>Printing</li>
                    <li>Brand activation</li>
                    <li>Digital marketing</li>
                    <li>Brand positioning</li>
                    <li>Graphic designing</li>
                    <li>Product Research</li>
                    <li>Product Branding</li>
                    <li>Advertising( offline & Digital)</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
