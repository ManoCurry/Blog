import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import Authors from './Authors'
import ManoLogo from '../static/images/mano.svg'

const Sidebar = (props) => (
  <header className='sidebar'>
    <h1 className='logo'>
      <Link href='/'>
        <a>
          <ManoLogo />
        </a>
      </Link>
    </h1>
    <Navigation />
    <Authors />
    <style jsx>{`
      .sidebar {
        position: relative;
        width: 390px;
        height: 100vh;
        padding: 50px;
        background-color: #fafbfc;
        ta
      }

      .logo {
        width: 111px;
        height: auto;
        margin-bottom: 60px;
      }
    `}</style>
  </header>
)

export default Sidebar