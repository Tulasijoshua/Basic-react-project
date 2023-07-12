import React from 'react'
import './clients.css'
import img1 from '../img/client-logo/img-1.png'
import img2 from '../img/client-logo/img-2.png'
import img3 from '../img/client-logo/img-3.png'
import img4 from '../img/client-logo/img-4.png'
import img5 from '../img/client-logo/img-5.png'
import values from '../img/main-img/core-values.png'


const Clients = () => {
  return (
    <>
      <div className="clients">
        <h2 className='clients-heading heading' id="clients">Our Clients</h2>
        <div className="clients-logo">
            <div className="client-logo_img">
                <img src={img1} alt="" />
            </div>
            <div className="client-logo_img">
                <img src={img2} alt="" />
            </div>
            <div className="client-logo_img">
                <img src={img3} alt="" />
            </div>
            <div className="client-logo_img">
                <img src={img4} alt="" />
            </div>
            <div className="client-logo_img">
                <img src={img5} alt="" />
            </div>
        </div>

        <div className="values">
            <div className="core-values">
                <h2>Our core values</h2>
                <h4>At Forecast5, our core believe is central to our performance.</h4>
                <p>At the heart of all our values are three basic but fundamental tenets.</p>
                <p>
                    Firstly, Integrity. Acting with strong ethics is a priority for 
                    everyone representing Fantasy5 as well as the company’s behavior as a whole.
                </p>
                <p>
                    Secondly, Teamwork. Companies are judged by the craftsmanship of 
                    their products and services, so the highest standards are maintained 
                    at all times..
                </p>
                <p>
                    And lastly, Promise to our Customers. Creating a great customer
                    experience begins with staying true to the words we speak and the
                    bonds we make.
                </p>
            </div>
            <div className="values-img">
                <img src={values} alt="" />
                <div className="img-content">We deliver on our promise to our cherished clients.</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Clients
