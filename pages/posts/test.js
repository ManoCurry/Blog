import React from 'react'
import RemarkReact from 'remark-react'

const RemarkedComponent = () => {
  return (
    <article class='remarked'>
      <RemarkReact source={`# this is a test file`}/>
    </article>
  )
}

export default RemarkedComponent