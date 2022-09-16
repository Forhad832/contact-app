import React from 'react'

import Forhad from './forhad.jpg'
const Home = () => {
  return (
    <section>
      <div className='container flex'>
        <div className='col-6'>
          <h2>This is Forhad Hossen</h2>
          <p>Frontend Developer</p>
          <button>Hire Me</button>
        </div>
        <div className='col-6'>
        <img src={Forhad} alt='images'/>
        </div>
      </div>
    </section>
  )
}

export default Home
