import React from 'react'

class BashVideo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  componentDidMount () {
    this.setState({
      show: true
    })
  }

  renderIframe = (video) => (
      `<iframe
        src=${video}
        class='video'
        frameBorder='0'
        width='320'
        height='200'
        style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen='true'>
      </iframe>
    `
  )

  render (props) {
    const {
      video
    } = this.props

    return (
      <div className='media'
        ref={video => this.video = video}>
        {
          this.state.show
            ? <div className='video-container'
              dangerouslySetInnerHTML={
                {__html: this.renderIframe(video)}} />
            : null
        }
        <style jsx>{`
          .media {
            width: 100%;
          }
          .video-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 62.3%;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
}

export default BashVideo