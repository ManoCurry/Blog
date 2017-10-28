import React from 'react'
import BashVideo from './BashVideo'

const renderBashAssets = (props) => {
  const {
    type,
    date,
    title,
    images,
    video,
    address,
    venue
  } = props

  switch (props.type) {
    case 'video':
      return <BashVideo video={video}/>
    case 'images':
      return images.map((image, index) => {
        return (
          <div className='bash-asset'>
            <img
              key={index}
              src={image}
              alt={date}
            />
            <style jsx>{`
              .bash-asset {
                width: 50%;
                margin-bottom: 10px;
                font-size: 0;
              }
              img {
                width: 100%
                height: auto;
              }
            `}</style>
          </div>
        )
      })
    default:
      throw new Error(`${props.type} is unknown.`)
  }
}

const BashItem = (props) => {
  const {
    title,
    address,
    venue
  } = props

  return (
    <li className='bash-item'>
      <article className='bash'>
        <h3 className='bash-title'>{ title }</h3>
        <div className='bash-assets'>
          {
            renderBashAssets(props)
          }
        </div>
        <p className='bash-address'>{ address }</p>
        <p className='bash-venue'>{ venue }</p>
      </article>
      <style jsx>{`
        .bash {
          margin-bottom: 100px;
          letter-spacing: -.02em;
        }
        .bash-title {
          margin-bottom: 20px;
          font-size: 50px;
          line-height: 1.2;
        }
        .bash-assets {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }
        .bash-address,
        .bash-venue {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.2;
        }
      `}</style>
    </li>
  )
}

export default BashItem