import React from 'react'
import MarkdownRenderer from '../../components/markdown/MarkdownRenderer'
import AppLayout from '../../components/layouts/AppLayout'
import path from 'path'
import fetch from 'isomorphic-unfetch'

class DevNotesShow extends React.Component {
  static async getInitialProps ({query}) {
    const id = query.id
    const hostname = typeof window === 'undefined'
      ? 'http://localhost:8080'
      : location.origin

    const res = await fetch(`${hostname}/static/posts/` + id + '.md')
    const content = await res.text()

    return {
      content
    }
  }

  render () {
    return <AppLayout>
      <MarkdownRenderer source={this.props.content} />
    </AppLayout>
  }
}

export default DevNotesShow