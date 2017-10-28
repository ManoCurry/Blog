import React from 'react'
import Link from 'next/link'
import authorsStyle from '../styles/authorsStyle'

const Authors = () => (
  <section className='authors'>
    <h2 lang='en'>$ whoami</h2>
    <ul className='author'>
      <li>
        <img src='/static/images/img-author-jy.jpg' />
        <div className='name'>
          <Link href='/about'>
            <a>최준영</a>
          </Link>
          <Link href='https://github.com/rokt33r'>
            <a className='github-link'>@rokt33r</a>
          </Link>
        </div>
      </li>
      <li>
        <img src='/static/images/img-author-js.jpg' />
        <div className='name'>
          <Link href='/about'>
            <a>노지승</a>
          </Link>
          <Link href='https://github.com/rohjs'>
            <a className='github-link'>@rohjs</a>
          </Link>
        </div>
      </li>
    </ul>
    {
      authorsStyle
    }
  </section>
)

export default Authors