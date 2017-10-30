import React from 'react'
import BashItem from './BashItem'

const BashList = (props) => (
  <ul className='bash-list'>
    {
      props.bashData.map(([date, item], index) => {
        return <BashItem {...item} date={date} key={date} />
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
