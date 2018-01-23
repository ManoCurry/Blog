import React from 'react'
import Link from 'next/link'
import { getDate } from '../../lib/helpers'

const ListItem = ({
  title,
  date,
  tags,
  id,
  brief
}) => (
  <li>
    <Link
      href={{
        pathname: '/devnotes/show',
        query: { id },
      }}
      as={`/devnotes/${id}`}>
      <a>
        <h1>{ title }</h1>
        <p className='brief'>{brief}</p>
        <p className='date'>{ getDate(date) }</p>
      </a>
    </Link>
    <style jsx>{`
      li {
        margin-bottom: 24px;
      }
      a {
        display: block;
        padding: 20px 16px;
      }
      a:hover {
        background-color: rgba(0, 0, 0, .03)
      } 
      h1 {
        margin-bottom: 8px;
        font-size: 36px;
        font-weight: 700;
        line-height: 1s;
        letter-spacing: -.03em;
        color: #1b2733;
      }
      .brief {
        margin-bottom: 16px;
        font-size: 14px;
        letter-spacing: -.01em;
        color: #afb5ba;
        line-height: 1.5;
      }
      .date {
        padding-left: 1px;
        font-size: 12px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: -.01em;
        text-transform: uppercase;
        color: #afb5ba;
      }
    `}</style>
  </li>
)

export default ListItem