import React from 'react'
import axios from 'axios'
import AppLayout from '../components/layouts/AppLayout'
import ListItem from '../components/layouts/ListItem'
import devnotes from '../static/generated/devnotes'

const OWNER = 'ManoCurry'
const REPO = 'Blog'

class Index extends React.Component {
  constructor(props) {
    super(props)

  }

  extractListData = () => {

  }

  render () {
    return (
      (
        <AppLayout>
          <h2>
          </h2>
          <ul>
            {
              devnotes
                .map((item, index) => {
                  return <ListItem key={index} {...item} />
                })
            }
          </ul>
          <style jsx>{`
            ul {
              width: 100%;
              padding: 0;
              margin: 0 auto;
              list-style-type: none;
            }
          `}</style>
        </AppLayout>
      )
    )
  }
}



export default Index