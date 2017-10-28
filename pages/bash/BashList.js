import React from 'react'
import BashItem from './BashItem'
import bash from '../../data/bash'

const bashData = Object.entries(bash)
  .sort((a, b) => {
    return b[0].localeCompare(a[0])
  })

const BashList = (props) => (
  <ul className='bash-list'>
    {
      bashData.map(([date, item], index) => {
        return <BashItem {...item} date={date} />
      })
    }
    <style jsx>{`
      .bash-list {
        list-style-type: none;
        padding: 0;
      }
    `}</style>
  </ul>
)

export default BashList
