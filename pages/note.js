import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NoteLayout from '../components/layouts/NoteLayout'

const NoteTitle = (props) => (
  <div>
    <span className='title-span'
      lang={props.lang}>
      { props.title }
      <style jsx>{`
        .title-span {
          display: inline-block;
          margin-bottom: 20px;
          position: relative;
        }
        .title-span::after {
          content: '';
          position: absolute;
          left: -8px;
          right: -8px;
          height: 100%;
          z-index: -1;
          background-color: #ebeef0;
        }
      `}</style>
    </span>
  </div>
)

const Note = (props) => {
  const titleMap = props.url.query.title.split(' ')
  return (
    <NoteLayout>
      <header className='note-header'>
        <h2 className='note-title'>
        {
          console.log(props.url.query)
        }
          {
            titleMap.map((item, index) => {
              return (
                <NoteTitle key={index} lang='en' title={item}/>
              )
            })
          }
        </h2>
      </header>
      <style jsx>{`
        .note-title {
          margin-bottom: 64px;
          font-size: 53px;
          line-height: 1;
          letter-spacing: -.03em;
        }
      `}</style>
    </NoteLayout>
  )
}


export default Note