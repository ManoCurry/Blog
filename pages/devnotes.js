import React from 'react'
import Link from 'next/link'
import AppLayout from '../components/layouts/AppLayout'
import devnotesListData from '../data/generated/devnoteList'

const DevNoteItem = ({
  title,
  id,
  author
}) => (
  <li>
    <Link href={`/devnotes/${id}`}>
      <a>
        <h3>{title}</h3>
        <p>{author}</p>
      </a>
    </Link>
    <style jsx>{`
      a {
        position: relative;
        display: block;
        padding: 20px 0;
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 10px;
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

const DevNotesList = (props) => (
  <AppLayout>
    <h2 className='section-title'>
      Devnotes
    </h2>
    <ul className='section-list'>
      {
        devnotesListData.map((devnote, index) => (
          <DevNoteItem
            key={index}
            title={devnote.title}
            id={devnote.id}
            author={devnote.author}
          />)
        )
      }
    </ul>
    <style jsx>{`
      ul,
      ol {
        list-style-type: none;
      }
    `}</style>
  </AppLayout>
)

export default DevNotesList