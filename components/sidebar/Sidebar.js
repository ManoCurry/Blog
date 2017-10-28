import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import Authors from './Authors'
import ManoLogo from '../../static/images/mano.svg'
import sidebarStyle from '../styles/sidebarStyle'

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
    {
      sidebarStyle
    }
  </header>
)

export default Sidebar