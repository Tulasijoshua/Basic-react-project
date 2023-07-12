import React from 'react'
import './home.css'
import helping from '../img/business-img/helping.png'
import holding from '../img/business-img/holding.png'
import perfect from '../img/business-img/perfect.png'


const Home = () => {
  return (
    <>
      <div className="main" id="home">
        <div className='home-container'>
          <h3 className='home-message'>Transforming marketing efforts into tangible results.</h3>
          <button className="btn messageBtn">See our services</button>
        </div>
      </div>
      <div className='business'>
        <div className="cards">
          <div className="business-card_item">
            <div className='business-card_img'>
              <img src={perfect} alt="" />
            </div>
            <p>Perfect solution for every business demand</p>
          </div>
          <div className="business-card_item">
            <div className='business-card_img'>
              <img src={helping} alt="" />
            </div>
            <p>Perfect solution for every business demand</p>
          </div>
          <div className="business-card_item">
            <div className='business-card_img'>
              <img src={holding} alt="" />
            </div>
            <p>Perfect solution for every business demand</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
