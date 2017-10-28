import React from 'react'
import bash from '../../data/bash'

const bashData = Object.entries(bash)

const BashItem = ({
  date,
  title,
  images,
  address,
  venue
}) => (
  <li className='bash-item'>
    <article className='bash'>
      <h3 className='bash-title'>{ title }</h3>
      <div className='bash-images'>
        {
          images.map((image, index) => {
            return <img
              key={index}
              src={image}
              alt={date}
            />
          })
        }
      </div>
      <p className='bash-address'>{ address }</p>
      <p className='bash-venue'>{ venue }</p>
    </article>
    <style jsx>{`
      .bash-title {
        font-size: 40px;
      }
    `}</style>
  </li>
)

const BashItems = () => (
  <ul className='bash-list'>
    {
      bashData.map(([date, item], index) => {
        return <BashItem
          key={index}
          date={date}
          title={item.title}
          images={item.images}
          address={item.address}
          venue={item.venue}
        />
      })
    }
  </ul>
)

export default BashItems