import React from 'react'

const BashVideo = ({
  video
}) => (
  <div className='video-container'>
    <iframe
      src={video}
      className='video'
      frameBorder='0'
      width='640'
      height='400'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen='true'>
    </iframe>
    <style jsx>{`
      .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 62.3%;
        margin-bottom: 10px;
      }
      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default BashVideo