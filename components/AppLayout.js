import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import SectionLayout from './SectionLayout'
import { globalStyle } from '../pages/index'

const AppLayout = (props) => (
  <div className='wrap'>
    <Sidebar/>
    <SectionLayout>
      {props.children}
    </SectionLayout>
    <style jsx global>{`
    * {
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

    ul, li {
      list-style-type: none;
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
      overflow: hidden;
    }

    .sidebar + section {
      flex-grow: 1;
      padding: 50px;
    }

    `}</style>
  </div>
)

export default AppLayout