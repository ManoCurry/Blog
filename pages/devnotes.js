import React from 'react'
import Link from 'next/link'
import AppLayout from '../components/layouts/AppLayout'


const DevNote = (props) => (
  <li>
    <Link as={`/devnotes/${props.id}`}
      href={`/note?title=${props.title}`}>
      <a>
        <h3>{props.title}</h3>
        <p>저자 {props.author}</p>
      </a>
    </Link>
    <style jsx>{`
      h3 {
        font-size: 32px;
        line-height: 1.2;
      }
      p {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1;
      }
    `}</style>
  </li>
)
const DevNotes = (props) => (
  <AppLayout>
    <h2 className='section-title'>
      Devnotes
      <span>개발일기</span>
    </h2>
    <ul className='section-list'>
      <DevNote id='react-gulgi'
        title='Redux 굴기(崛起)'
        author='준영'/>
    </ul>
    <style jsx>{`

    `}</style>
  </AppLayout>
)

export default DevNotes