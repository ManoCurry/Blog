import React from 'react'
import RemarkReact from 'remark-react'

const RemarkedComponent = () => {
  return (
    <article class='remarked'>
      <RemarkReact source={`$source`}/>
    </article>
  )
}

export default RemarkedComponent