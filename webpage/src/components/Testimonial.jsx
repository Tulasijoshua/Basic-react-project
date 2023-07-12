import React from 'react'
import './testimonial.css'
import icon from '../img/testimonial-img/icon.png'
import test1 from '../img/testimonial-img/img-1.png'
import test2 from '../img/testimonial-img/img-2.png'
import test3 from '../img/testimonial-img/img-3.png'



const Testimonial = () => {
  return (
    <>
      <div className='testimonial'>
        <h2 className='testimonial-heading heading' id="testimonial">What our clients have to say</h2>
        <div className='testimonial-container'>
            <div className="testimonial-card">
                <div className="card-icon">
                    <img src={icon} alt="" />
                </div>
                <p>
                    Seldom do you find such a great blend of talents from both the tech and 
                    marketing arenas in one agency.
                </p>
                <div className="card-img">
                    <img src={test1} alt="" />
                </div>
                <h3>Boadi</h3>
                <h4>Community Lead at Cryptude</h4>
            </div>
            <div className="testimonial-card">
                <div className="card-icon">
                    <img src={icon} alt="" />
                </div>
                <p>
                    Seldom do you find such a great blend of talents from both the tech and 
                    marketing arenas in one agency.
                </p>
                <div className="card-img">
                    <img src={test2} alt="" />
                </div>
                <h3>Boadi</h3>
                <h4>Community Lead at Cryptude</h4>
            </div>
            <div className="testimonial-card">
                <div className="card-icon">
                    <img src={icon} alt="" />
                </div>
                <p>
                    Seldom do you find such a great blend of talents from both the tech and 
                    marketing arenas in one agency.
                </p>
                <div className="card-img">
                    <img src={test3} alt="" />
                </div>
                <h3>Boadi</h3>
                <h4>Community Lead at Cryptude</h4>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
