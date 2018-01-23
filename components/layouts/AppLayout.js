import React from 'react'
import Link from 'next/link'
import SectionLayout from './SectionLayout'

const AppLayout = (props) => (
  <div className='wrap'>
    <header className='header'>
      <h1>
        <img
          src='/static/images/mano.svg'
          alt='Manolab' />
      </h1>
      <p className='meta'>
        <span>
          <img
            src='/static/images/made-by.svg'
            alt='Made by'
          />
        </span>
        <a href='https://github.com/rokt33r'>
          <img
            src='/static/images/toshihide.svg'
            alt='toshihide'
          />
        </a>
        <span>
          <img 
            src='/static/images/and.svg'
            alt='and'
          />
        </span>
        <a href='https://github.com/rohjs'>
          <img
            src='/static/images/woohyeon.svg'
            alt='woohyeon'
          />
        </a>
      </p>
    </header>
    <SectionLayout>
      {props.children}
    </SectionLayout>
    <style jsx global>{`
      *:not(span) {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        color: #1b2125;
      }

      html {
        font-size: 16px;
        line-height: 1.6875;
        letter-spacing: -.3px;
      }

      [lang='en'] {
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        font-weight: 700;
        letter-spacing: -.04em;
      }

      [lang='ko'] {
        font-family: 'Apple SD Gothic Neo', 'Spoqa Han Sans', sans-serif;
        font-weight: 700;
        letter-spacing: -.04em;
      }

      ul, li {
        padding: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
        pointer: cursor;
      }

      a:hover,
      a:focus {
        color: inherit;
      }

      .wrap {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .sr-only {
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 1px;
        overflow: hidden;
        visibility: hidden;
      }

      .header {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items:s center;
        height: 64px;
        border-bottom: 1px solid #f6f6f6;
      }

      .header img {
        width: auto;
        height: 100%;
      }

      .header p {
        position: absolute;
        top: 50%;
        right: 20px;
        font-size: 12px;
        line-height: 1;
        color: #c1c7cd;
        transform: translateY(-50%)
      }
    
      .header span,
      .header a {
        margin-left: 3.5px;
      }
    `}</style>
  </div>
)

export default AppLayout