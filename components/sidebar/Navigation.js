import React from 'react'
import Link from 'next/link'
import navigationStyle from '../styles/navigationStyle'

const Navigation = () => (
  <ul>
    <li>
      <Link href='/devnotes'>
        <a>
          <span className='title--big'
            lang='en'>
            Devnotes
          </span>
          <span className='title--small'>
            개발일기
          </span>
        </a>
      </Link>
    </li>
    <li>
      <Link href='/bash_history'>
        <a>
          <span className='title--big'
            lang='en'>
            .bash_history
          </span>
        </a>
      </Link>
    </li>
    {
      navigationStyle
    }
  </ul>
)

export default Navigation