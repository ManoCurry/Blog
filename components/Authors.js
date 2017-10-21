import React from 'react'
import Link from 'next/link'

const Authors = () => (
  <section className='authors'>
    <h2 lang='en'>$ whoami</h2>
    <ul className='author'>
      <li>
        <img src='/static/img-author-jy.jpg' />
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
        <img src='/static/img-author-js.jpg' />
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
    <style jsx>{`
      .authors {
        position: absolute;
        bottom: 50px;
        left: 50px;
        width: 290px;
      }

      .author {
        display: flex;
        justify-content: space-between;
      }

      .author li {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
      }

      img {
        width: 56px;
        height: auto;
        margin-right: 10px;
      }

      h2 {
        margin-bottom: 16px;
      }

      .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1;
      }

      .github-link {
        margin-top: 4px;
        font-size: 12px;
        line-height: 1;
        color: #868e96;
      }
    `}</style>
  </section>
)

export default Authors