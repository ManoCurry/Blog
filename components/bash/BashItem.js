import React from 'react'
import BashVideo from './BashVideo'
import moment from 'moment'
import { getDate } from '../../lib/helpers'

const renderBashAssets = (props) => {
  const {
    type,
    date,
    images,
    video
  } = props

  switch (props.type) {
    case 'video':
      return <BashVideo video={video}/>
    case 'images':
      return images.map((image, index) => {
        const imageWrapperStyle = {}
        if (typeof image !== 'string') {
          imageWrapperStyle.width = image[1]
          image = image[0]
        }
        return (
          <div key={index}
            className='bash-asset'
            style={ imageWrapperStyle }>
            <img
              key={index}
              src={image}
              alt={date}
            />
            <style jsx>{`
              .bash-asset {
                width: 50%;
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
    date,
    address,
    venue,
    content
  } = props

  return (
    <li className='bash-item'>
      <article className='bash'>
        <div className='bash-assets'>
          {
            renderBashAssets(props)
          }
        </div>
        <div>
          <h3 className='bash-title'>
            {title}
          </h3>
          <p className='bash-text'>
            <span className='date'>{ getDate(date) }</span>
            <span className='venue'>{ venue }</span>
            <span className='address'>{ address }</span>
          </p>
        </div>
      </article>
      <style jsx>{`
        .bash {
          margin-bottom: 180px;
          letter-spacing: -.02em;
        }

        .bash-title,
        .bash-text {
          display: flex;
          flex-wrap: wrap;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.2;
        }

        .bash-title {
          margin-top: 10px;
        }

        .bash-text span {
          font-size: 12px;
          font-weight: 400;
          margin-right: 8px;
          margin-bottom: 0;
          color: #868e96;
        }

        .bash-text span:first-child {
          width: 100%;
          margin-top: 10px;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .date {
          text-transform: uppercase;
        }

        .bash-assets {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }
      `}</style>
    </li>
  )
}

export default BashItem