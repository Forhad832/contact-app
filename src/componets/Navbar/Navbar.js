import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
        <div className=''>
            <nav>
                <div className='logo'>
                    <h2>Forhad</h2>
                </div>
                <div className='nav_container'>
                    <div className='nav_item'><Link className='nav_link' to='/'>Home</Link></div>
                    <div className='nav_item'><Link className='nav_link' to='/about'>About</Link></div>
                    <div className='nav_item'><Link className='nav_link' to='/contact'>Contact</Link></div>
                    <div className='nav_item'><Link className='nav_link' to='/service'>service</Link></div>
                    <div className='nav_item'><Link className='nav_link' to='/work'>Work</Link></div>
                </div>
            </nav>
        </div>
    </section>
  )
}

export default Navbar
