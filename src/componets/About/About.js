import React from 'react'
import Forhad from './forhad.jpg'
const About = () => {
  return (
    <section>
     <div className='container'>
     <div className='flex flex-column'>
     <div className='col-6'>
        <h2>Forhad hossen</h2>
        <p>Frontend Developer</p>
        <button>Hire me</button>
        <ul>
            <li><span>Address</span> : Rangpur,Dhaka Bangladesh</li>
            <li><span>Birth</span> : 20m june 1999</li>
            <li><span>Gender</span> : Male</li>
            <li><span>Religion</span> : Islam</li>
        </ul>
      </div>
      <div className='col-6'>
        <img src={Forhad} alt='images'/>
        </div>
     </div>
     </div>
    </section>
  )
}

export default About
