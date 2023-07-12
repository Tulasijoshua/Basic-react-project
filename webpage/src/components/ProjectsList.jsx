import React from 'react'
import './projects-list.css'
import belaqua from '../img/dev-img/bel-aqua.png'
import cryptude from '../img/dev-img/cryptude-mobile.png'
import grill from '../img/dev-img/grill-img.png'
import web from '../img/dev-img/img-1.png'

const ProjectsList = () => {
  return (
    <>
      <div className='projects'>
        <div className='project-headings'>
            <h2 className='project-head heading'>Our recently completed projects list</h2>
            <small className='small-head'>Here are snapshots of some of our recently <br></br> completed projects.</small>
        </div>
        <div className='project-card'>
            <div className='project-img'>
                <img src={web} alt="" />
                <div className='img-card'>
                    <div className='card-link'><a href="#">Cryptude</a> </div>
                    <h3>Web design</h3>
                </div>
            </div>
            <div className='project-img'>
                <img src={belaqua} alt="" />
                <div className='img-card'>
                    <div className='card-link'><a href="#">Bel Aqua</a> </div>
                    <h3>Marketing Ad</h3>
                </div>
            </div>
            <div className='project-img'>
                <img src={cryptude} alt="" />
                <div className='img-card'>
                    <div className='card-link'><a href="#">Cryptude</a> </div>
                    <h3>Mobile App design</h3>
                </div>
            </div>
            <div className='project-img'>
                <img src={grill} alt="" />
                <div className='img-card'>
                    <div className='card-link'><a href="#">God father Grill & Bar</a> </div>
                    <h3>Marketing & Branding</h3>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default ProjectsList
