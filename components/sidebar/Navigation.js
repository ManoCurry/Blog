import React from 'react'
import Link from 'next/link'

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
    <style jsx>{`
      ul {
        width: 100%;
      }
      li {
        width: 100%;
        font-weight: 700;
      }

      li:first-of-type .title--big {
        text-transform: uppercase;
      }

      .title--big {
        font-size: 24px;
        line-height: 1;
      }

      .title--small {
        opacity: .5;
        line-height: 1;
      }

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
      }

      a:hover .title--small,
      a:focus .title--small {
        opacity: 1;
      }
    `}</style>
  </ul>
)

export default Navigation