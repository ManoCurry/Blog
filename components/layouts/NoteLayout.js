import React from 'react'
import Link from 'next/link'
import Sidebar from '../Sidebar'
import SectionLayout from './SectionLayout'
import globalStyle from './globalStyle'

const NoteLayout = (props) => (
  <div className='wrap'>
    <Sidebar />
    <article className='section-layout'>
      <div className='section-wrap'>
        {props.children}
      </div>
    </article>
    <style jsx>{`
      .section-wrap {
        padding-top: 25px;
      }
    `}</style>
    {
      globalStyle
    }
  </div>
)

export default NoteLayout