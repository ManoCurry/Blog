import React from 'react'
import Link from 'next/link'

class Navigation extends React.Component {
  render () {
    return (
      <ul className='gnb__list'>
        <li className='gnb__item'>
          <Link href='/devnotes'>
            <a className='navlink navlink--big'
              lang='en'>
              <span className='on'
                lang='en'>Devnotes</span>
              <span>개발일기</span>
            </a>
          </Link>
        </li>
        <li className='gnb__item'>
          <Link href='/bash_history'>
            <a className='navlink'
              lang='en'>
              <span className='on'
                lang='en'>.bash_history</span>
              <span>일상</span>
            </a>
          </Link>
        </li>
        <li className='gnb__item gnb__item--last'>
          <Link href='/about'>
            <a className='navlink'
              lang='en'>
              $ whoami
            </a>
          </Link>
        </li>
        <style jsx>{`
          .gnb__list {
            position: absolute;
            left: 40px;
            top: 200px;
            list-style-type: none;
            height: calc(100vh - 200px);
          }

          .gnb__item {
            width: 100%;
            font-weight: 700;
          }

          .gnb__item--last {
            position: absolute;
            bottom: 40px;
          }

          .navlink--big {
            text-transform: uppercase;
          }

          .navlink {
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 700;
          }

          .navlink span {
            line-height: 40px;
          }

          .navlink span:last-child {
            font-size: 18px;
            font-weight: 700;
          }
        `}</style>
      </ul>
    )
  }
}

export default Navigation