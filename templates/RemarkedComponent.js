import React from 'react'
import ReactRemark from 'react-remark'

class RemarkedComponent extends React.Component {
  render() {
    return <ReactRemark source={`$source`} />
  }
}

export default RemarkedComponent