import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import AppLayout from '../../components/layouts/AppLayout'
import devnotesData from '../../static/generated/devnotes'
import { getDate } from '../../lib/helpers'

const TagSpan = ({tag}) => (
  <span>
    {`#${tag}`}
    <style jsx>{`
      span {
        margin-right: 10px;
        font-size: 12px;
        font-weight: 400;
        color: #868E96;
        text-transform: capitalize;
      }
    `}</style>
  </span>
)

const DevNoteItem = ({
  title,
  id,
  date,
  tags,
  author
}) => (
  <li>
    <Link
      href={{
        pathname: '/devnotes/show',
        query: { id },
      }}
      as={`/devnotes/${id}`}
    >
      <a>
        <h3>{title}</h3>
        <p className='author'>
          {
            author === '준영'
              ? <img src='/static/images/text-junyoung.svg' alt={author}/>
              : <img src='/static/images/text-jiseung.svg' alt={author}/>
          }
        </p>
        <p className='date'>{getDate(date)}</p>
        <p className='tags'>
          {
            tags.map((item, index) => {
              return <TagSpan key={index} tag={item}/>
            })
          }
        </p>
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
        line-height: 1.2;
      }
      p svg {
        width: 20px;
        height: auto;
      }
      .author {
        margin-top: 16px;
        margin-bottom: 8px;
      }
      .date {
        font-size: 12px;
        color: #868E96;
        text-transform: uppercase;
      }
    `}</style>
  </li>
)


const DevNotesList = (props) => (
  <AppLayout>
    <h2 className='section-title sr-only'>
      Devnotes
    </h2>
    <ul className='section-list'>
      {
        devnotesData.map((devnote, index) => (
          <DevNoteItem
            key={index}
            title={devnote.title}
            id={devnote.id}
            author={devnote.author}
            date={devnote.date}
            tags={devnote.tags}
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