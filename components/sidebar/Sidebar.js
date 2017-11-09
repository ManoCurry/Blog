import React from 'react'
import Link from 'next/link'
import Navigation from './navigation/Navigation'

const Sidebar = (props) => (
  <header className='header'>
    <h1 className='mano'>
      <Link href='/'>
        <a>
          <img src='/static/images/mano.svg' alt='마노커리'/>
        </a>
      </Link>
    </h1>
    <Navigation />
    <style jsx>{`
      .header {
        width: 50%;
        max-width: 300px;
        height: 100vh;
        z-index: 1000;
        background: #ffffff;
      }
      .mano {
        position: absolute;
        top: 40px;
        left: 40px;
        width: 40px;
        height: auto;
      }

      .mano a {
        position: relative;
        width: 50%;
      }

    `}</style>
  </header>
)

export default Sidebar